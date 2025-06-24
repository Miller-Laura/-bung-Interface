//1. Typen und Interface definieren
enum Priority {
  low = "low",
  medium = "medium",
  high = "high",
}

interface ToDo {
  id: number;
  task: string;
  completed: boolean;
  priority: Priority;
}

//2. Initialisierung
let todos: ToDo[];
let nextId = 1;

//3. Todo hinzufügen (Spread Operator & Arrow Function)
const addTodo = (task: string, priority: Priority): void => {
  todos = [...todos, { id: nextId++, task, completed: false, priority }];
};
addTodo("Todo hinzufügen", Priority.medium);

//4. Todo als erledigt makieren(map, spread, ternary)
const completTodo = (id: number): void => {
  todos = todos.map((todo) =>
    todo.id === id ? { ...todo, completed: true } : todo
  );
};
const doneTodo = (id: number) => (id = id);

//5. Todo löschen (filter & Arrow Function)
const deleteTodo = (id: number): ToDo[] => {
  return todos.filter((todo) => todo.id === id);
};

//6. Todos anzeigen (forEach, Ternary, Template Strings) //1. leere liste, todo in liste eintragen, danach liste abhacken oder löschen, neue todo eintragen
const showTodos = (): void => {
  todos.forEach((currentTodo: ToDo) => {
    if (currentTodo.completed) {
      console.log("[x] Todo ist erledigt");
    } else console.log("[ ] Todo ist nicht erledigt");
  }); //(method) Array<ToDo>.forEach(callbackfn: (value: ToDo, index: number, array: ToDo[]) => void, thisArg?: any): void
};

//7. Testdaten und Funktionsaufrufe
type myToDo = ToDo;
[
  {
    task: "Typescript lernen",
    completed: false,
    priority: "high",
  },
  {
    task: "Kaffee trinken",
    completed: true,
    priority: "high",
  },
  {
    task: "Pflanzen gießen",
    completed: false,
    priority: "medium",
  },
];
//const showTodos: void = completTodo(myToDo );
console.log(completTodo);
