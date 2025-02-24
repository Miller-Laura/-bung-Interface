# Signals

Ein Signal ist ein Wrapper um einen Wert (sei es primitiv oder komplex), der sogenannte Consumer benachrichtigt sobald sich dieser Wert ändert.

### Writable Signals

```typescript
import { signal } from "@angular/core";

count = signal(0);
```

Ein Signal wird durch die Funktion **signal()** und dem initialen Wert, der an diese übergeben wird erstellt.

In diesem Beispiel wird aus der Variable **count** quasi eine Getter-Funktion mit der man den Wert des Signals auslesen kann. Um also auf den Wert zuzugreifen, muss die Variable wie eine Funktion mit '()' aufgerufen werden:

```typescript
console.log("The count is:", count());
```

In diesem Beispiel ist von sogenannten WritableSignals die Rede. Das heißt es sind Signals, die beschrieben und dementsprechend auch überschrieben werden können. Um den Wert eines WritableSignals zu überschreiben wird die **set()**-Funktion des Signals aufgerufen:

```typescript
count.set(5);
```

Es ist zu beachten, dass in diesem Fall ohne die Klammern '()' auf das Signal zugegriffen wird, um die Funktion aufrufen zu können.

Es gibt auch die Möglichkeit auf den bestehenden Wert zuzugreifen, um darauf basierend einen neuen Wert zu setzen. Dafür wird die **update()**-Funktion verwendet:

```typescript
// Erhöhe den bestehenden Wert um 1.
count.update((value) => value + 1);

// Schreibweise mit Codeblock, wenn die Logik für das Setzen des neuen Wertes komplexer sein sollte.
// WICHTIG: Das Schlüsselwort 'return' muss benutzt werden, damit der Wert auch wirklich überschrieben wird!
count.update((value) => {
  return value + 1;
});
```

### Computed Signals

Computed Signals sind read-only Signals, deren Werte aus anderen Signals berechnet werden. Computed Signals werden mit der **computed()**-Funktion defieniert:

```typescript
const count: WritableSignal<number> = signal(0);
const doubleCount: Signal<number> = computed(() => count() * 2);
```

Der Wert der Konstante **doubleCount** ist abhängig vom Wert der Konstante **count**. Angular weiß, dass die Konstante **doubleCount** aktualisiert werden muss, sobald sich der Wert von **count** verändert.

Computed Signals können **NICHT** über die **set()**-Funktion verändert werden, da sie nicht vom Type WritableSignal, sondern vom Typ Signal sind.

### Abhängige Computed Signals

Im folgenden Beispiel wird dargestellt, dass nicht alle Signals in einem Computed Code-Block evaluiert werden.

```typescript
count = signal(0);

conditionalCount = computed(() => {
  if (this.showCount()) {
    return `Count is ${this.count()}.`;
  } else {
    console.log("This line will only be logged when showCount is changed to false.");
    return "Nothing to see here!";
  }
});
```

Wenn **showCount()** auf false gesetzt ist und danach der **count()** mehrere Male verändert wird, werden die Codezeilen im Else-Block nur einmalig ausgeführt. Erst wenn **showCount()** von true auf false springt werden die Zeilen im Else-Block ausgeführt.

Wenn aber der **showCount()** auf true gesetzt ist und dann der **count()** verändert wird, wird die Zeile im If-Block bei **jeder** Veränderung ausgeführt. Angular entscheidet anhand des gegangenen Pfades welche Signals zu berücksichtigen sind und welche nicht und ob es zu einer Benachrichtigung des Consumers kommen soll.

### Effects

**Effects** sind Funktionen die automatisch ausgeführt werden, sobald sich ein oder mehrere Signals verändern.

```typescript
effect(() => {
  console.log("DoubleCount has changed to:", this.doubleCount());
  console.log("ShowCount has changed to:", this.showCount());
});
```

Die definition von **Effects** findet im constructor einer Kompenente statt und werden immer mindestens einmal ausgeführt. In dem oben aufgeführten Beispiel wird der **effect()** immer dann ausgeführt wenn sich entweder **doubleCount()** oder **showCount()** ändert. Das heißt es werden bei jeder Änderung **beide** console.log() ausgeführt.

Es ist ebenfalls möglich eine function innerhalb eines effects zu triggern indem man ein Signal in die Parameterliste der function übergibt:

```typescript
count = signal(0);

constructor() {
  effect(() => this.logChangedCount(this.count()));
}

logChangedCount(count: number) {
  console.log('Count has changed to:', count);
}
```
