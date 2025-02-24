# Reactive Extensions for JavaScript (RxJS)

## Resourcen

- https://rxjs.dev/api?type=function
- https://rxmarbles.com/

## Einführung

Aus dem englischen: https://rxjs.dev/guide/overview

RxJS ist eine Library, die es ermöglicht asynchrone und eventbasierte Programme zu schreiben indem sie beobachtbare Sequenzen (Observables) nutzt.

_Benötigtes Vorwissen:_

- Observer pattern
- Iterator pattern
- Arrow-Key-Functions (Beispiel: Array-Methoden wie _map_, _filter_, _reduce_, _every_)

Folgende Konzepte sind essentiell in RxJS für das asynchrone Eventmanagement:

- **Observable:** eine aufrufbare Sammlung (Collection), die zukünftige Werte und Events beinhaltet.
- **Observer:** ist eine Collection von Callbacks, die auf die Werte, die vom Observable geliefert werden, _hört_.
- **Subscription:** repräsentiert die Ausführung des Observables.
- **Operators:** sind reine Funktionen, die funktionale Programmierung ermöglicht, um mit Operationen auf Collections wie _map_, _filter_, _concat_, _reduce_ umgehen zu können.
- **Subject:** ist equivalent zu einem EventEmitter und die einzige Möglichkeit, um einen Wert an mehrere Observables gleichzeitig bereitzustellen.

## Beispiele
Normalerweise werden EventListener folgendermaßen erstellt.

```typescript
document.addEventListener('click', () => console.log('Clicked!'));
```

Mit RxJS wird stattdessen ein Observable erstellt.

```typescript
import { fromEvent } from 'rxjs';

fromEvent(document, 'click').subscribe(() => console.log('Clicked!'));
```

**HINWEIS:** Ein Observable ohne die _Subscribe_-Funktion aufzurufen ist unbrauchbar!

## Reinheit
Ein Alleinstellungsmerkmal von RxJS ist es Werte mit Hilfe von sogenannten _Pure_-Functions, also _reinen_ Funktionen zu produzieren. Das macht den Quellcode weniger fehleranfällig.

Normalerweise würde man eine unreine Funktion erzeugen, bei dem andere Stellen des Codes mit deinem State interferieren können.
```typescript
let count = 0;
document.addEventListener('click', () => console.log(`Clicked ${++count} times`));
```
Mit RxJS wird der State isoliert.
```typescript
import { fromEvent, scan } from 'rxjs';

fromEvent(document, 'click')
  .pipe(scan((count) => count + 1, 0))
  .subscribe((count) => console.log(`Clicked ${count} times`));
```

Im ersten Beispiel kann die Variable _count_ auch von anderen Stellen im Quellcode verändert werden, was zu Fehlern führen könnte. In dem RxJS-Beispiel ist diese Variable innerhalb der _scan_ und der _subscribe_-Funktion gekapselt und ist somit vom restlichen Code isoliert.

## Datenfluss
RxJS besitzt eine große Menge an Operatoren, die einem Helfen den Datenfluss innerhalb der Observables zu steuern.

Hier ist ein Beispiel in JavaScript wie man nur einen Click pro Sekunde erlauben würde:

```javascript
let count = 0;
let rate = 1000;
let lastClick = Date.now() - rate;
document.addEventListener('click', () => {
  if (Date.now() - lastClick >= rate) {
    console.log(`Clicked ${++count} times`);
    lastClick = Date.now();
  }
});
```
Mit RxJS:
```typescript
import { fromEvent, throttleTime, scan } from 'rxjs';

fromEvent(document, 'click')
  .pipe(
    throttleTime(1000),
    scan((count) => count + 1, 0)
  )
  .subscribe((count) => console.log(`Clicked ${count} times`));
```

Andere Operatoren zum Steuern des Datenflusses sind _filter_, _delay_, _debounceTime_, _take_, _takeUntil_, _distinct_, _distinctUntilChanged_ etc.

## Werte
Es ist ebenfalls möglich die Werte, die durch den Datenfluss fließen zu verändern.
Hier ist ein Beispiel in JavaScript in dem die aktuelle X-Position der Maus nach jeden Click hinzugefügt wird:
```javascript
let count = 0;
const rate = 1000;
let lastClick = Date.now() - rate;
document.addEventListener('click', (event) => {
  if (Date.now() - lastClick >= rate) {
    count += event.clientX;
    console.log(count);
    lastClick = Date.now();
  }
});
```
Mit RxJS:
```typescript
import { fromEvent, throttleTime, map, scan } from 'rxjs';

fromEvent(document, 'click')
  .pipe(
    throttleTime(1000),
    map((event) => event.clientX),
    scan((count, clientX) => count + clientX, 0)
  )
  .subscribe((count) => console.log(count));
```

Andere Operatoren die Werte produzieren sind _pluck_, _pairwise_, _sample_ etc.
