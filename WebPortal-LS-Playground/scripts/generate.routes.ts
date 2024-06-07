import {
  Project,
  VariableDeclaration,
  VariableDeclarationKind,
  Writers,
  ts,
} from 'ts-morph';

async function generateRoutes() {
  var { sourceFile, project } = setupCodeGen();

  let routes = sourceFile?.getVariableDeclaration('routes');

  if (!routes) routes = await createRoutesVariable(sourceFile);
  const routesArr = routes!.getInitializerIfKindOrThrow(
    ts.SyntaxKind.ArrayLiteralExpression
  );

  clearRoutesArray(routesArr);

  if (!routesArr) return;

  const folder = project.getDirectory('projects');

  folder
    ?.getDirectories()
    .map((dir) => dir.getBaseName())
    .filter((dirName) => dirName !== 'shared')
    .forEach((dirName) => {
      routesArr.addElement(createRouteObject(dirName));
    });

  project.save();
}

function setupCodeGen() {
  const sourceFilePath = 'src/app/app.routes.generated.ts';

  const project = new Project();
  project.addDirectoryAtPath('projects', { recursive: true });

  let sourceFile = project.getSourceFile(sourceFilePath);
  if (!sourceFile)
    sourceFile = project.createSourceFile(sourceFilePath, '', {
      overwrite: true,
    });

  addImportDeclarationIfNeeded(sourceFile);

  return { sourceFile, project };
}

async function createRoutesVariable(
  sourceFile: any
): Promise<VariableDeclaration> {
  const tmp = sourceFile.addVariableStatement({
    declarations: [{ name: 'routes', initializer: '[]' }],
  });

  tmp.setDeclarationKind(VariableDeclarationKind.Const);
  tmp.setIsExported(true);

  return sourceFile?.getVariableDeclaration('routes');
}

function clearRoutesArray(routesArr: any) {
  while (routesArr.getElements().length > 0) routesArr.removeElement(0);
}

function addImportDeclarationIfNeeded(sourceFile: any) {
  const importExists = sourceFile.getImportDeclaration(
    '@app/guards/feature-flag.guard'
  );
  if (!importExists)
    sourceFile.addImportDeclaration({
      namedImports: ['featureFlagGuard'],
      moduleSpecifier: '@app/guards/feature-flag.guard',
    });
}

function createRouteObject(baseName: string) {
  return Writers.object({
    path: `'${baseName}'`,
    loadChildren: `() => import('../../projects/${baseName}/src/routes').then((m) => m.ROUTES)`,
    canActivate: '[featureFlagGuard]',
    data: Writers.object({
      featureFlagRedirect: "'featureNotEnabled'",
      requiredFeatureFlag: `'${baseName[0].toUpperCase()}${baseName.slice(1)}'`,
      module: `'${baseName}'`,
    }),
  });
}

generateRoutes();
