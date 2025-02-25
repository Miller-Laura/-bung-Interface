# Step 1

Erstelle eine Komponente "heroes" in der du ein Array mit Hero-Objekten erstellst:

```typescript
export let heroes: Hero[] = [
  { id: 12, name: "Dr. Nice" },
  { id: 13, name: "Bombasto" },
  { id: 14, name: "Celeritas" },
  { id: 15, name: "Magneta" },
  { id: 16, name: "RubberMan" },
  { id: 17, name: "Dynama" },
  { id: 18, name: "Dr. IQ" },
  { id: 19, name: "Magma" },
  { id: 20, name: "Tornado" },
];
```

Erstelle ein interface "Hero" mit den Attributen "id" und "name".

Zeige das Heroes-Array im HTML-Template an:

```html
<ul class="heroes">
  @for (hero of heroes; track $index) {
  <li>
    <button [class.selected]="hero === selectedHero" type="button" (click)="onSelect(hero)">
      <span class="badge">{{ hero.id }}</span>
      <span class="name">{{ hero.name }}</span>
    </button>
  </li>
  }
</ul>
```

Ergänze die TS-Datei um folgende Zeilen:

```typescript
selectedHero?: Hero;

onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
```

# Step 2

Ergänze das HTML-Template um die folgenden Zeilen, um die Details eines Heroes anzuzeigen:

```html
@if (selectedHero !== undefined) {
<div>
  <h2>{{ selectedHero.name | uppercase }} Details</h2>
  <div>id: {{ selectedHero.id }}</div>
  <div>
    <label for="hero-name">Hero name: </label>
    <input id="hero-name" [(ngModel)]="selectedHero.name" placeholder="name" />
  </div>
</div>
}
```

# Step 3

Erstelle einen Hero-Service und füge das Hero-Array aus der Heroes-Komponente über der Service-Klasse hinzu:

```typescript
export let heroes: Hero[] = [
  { id: 12, name: 'Dr. Nice' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr. IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' },
];

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  ...
}
```

Ergänze folgende methode:

```typescript
getHeroes(): Hero[] {
  return heroes;
}
```

Binde den HeroService per Dependency Injection als Klassenvariable in der Heroes-Komponente ein und lade die Daten aus dem Service während des ngOnInit Lifecycle-Hooks:

```typescript
export class MyHeroesComponent implements OnInit {
  selectedHero?: Hero;
  heroes: Hero[] = [];
  heroService = inject(HeroService);

  ngOnInit(): void {
    this.heroes = this.heroService.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
```

# Step 4

Lagere die Details des ausgewählten Heroes in eine eigene Komponente aus. Erstelle hierfür die Komponente "HeroDetails".

Verschiebe den HTML-Code für die Details aus der Heroes-Komoponente in das HTML-Template von der HeroesDetails-Komponente.

In der Heroes-Komponente wird jetzt die HeroDetails-Komponente eingebunden. Das HTML-Template sollte nun wie folgt aussehen:

```html
<ul class="heroes">
  @for (hero of heroes; track $index) {
  <li>
    <button [class.selected]="hero === selectedHero" type="button" (click)="onSelect(hero)">
      <span class="badge">{{ hero.id }}</span>
      <span class="name">{{ hero.name }}</span>
    </button>
  </li>
  }
</ul>
<lib-hero-details [hero]="selectedHero"></lib-hero-details>
```

Hier das HTML-Template der HeroDetails-Komponente:

```html
@if (hero !== undefined) {
<div>
  <h2>{{ hero.name | uppercase }} Details</h2>
  <div>id: {{ hero.id }}</div>
  <div>
    <label for="hero-name">Hero name: </label>
    <input id="hero-name" [(ngModel)]="hero.name" placeholder="name" />
  </div>
</div>
}
```

Ergänze nun die TS-Datei der HeroDetails-Komponente um folgende Input-Variable:

```typescript
  @Input() hero?: Hero;
```
