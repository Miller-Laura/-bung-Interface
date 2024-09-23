# Try-It-Yourself: Timer

In dieser Komponent findest du ein Grundgerüst für einen Timer. Deine Aufgabe ist es alle
Buttons, die in dieser Komponente zu finden sind, sinnvoll zu implementieren.

## Aufgabe 1

Deine erste Aufgabe besteht darin, die Richtung zu verändern in die der Timer zählt. Verwende dafür die bereits angelegte Variable **countUp**.

- Wenn der Count-Up-Button gedrückt wird, setze den Wert der Variable auf **true**
- Wenn der Count-Down-Button gedrückt wird, setze den Wert der Variable auf **false**
- Passe die Berechnung der Variable **count** an, so dass die Variable **countUp** berücksichtigt wird

## Aufgabe 2

Die Anzeige für den aktuellen Count braucht eine Überarbeitung! Anstatt, dass die gesamte Zahl in einem Button angezeigt wird, soll jede Ziffer in einem eigenen Button angezeigt werden. Nutze für die Darstellung im HTML die bereits angelegte Variable **digits**.

- Fülle nach der Berechnung des aktuellen Counts das _digits_-Array mit den Ziffern der Variable **count**; (Tipp: nutze dafür die _toString()_- und _split()_-Funktionen auf der Variable **count**)
- Passe das HTML-Template so an, dass nicht mehr direkt die Variable **count**, sondern jedes Element im _digits_-Array in einem eigenen Button angezeigt wird; Nutze hierfür eine For-Schleife

## Aufgabe 3

Jetzt wo der Timer eleganter aussieht, wird es Zeit auch das Aktualisieren des _digits_-Array eleganter zu gestalten. Dafür soll ein _effect_ benutzt werden.

- Ändere die Variable **count** zu einem Signal und passe die Berechnung mit Hilfe der _update_-Funktion an
- Nutze die Funktion _effect_, um bei jeder Aktualisierung der **count**-Variable das _digits_-Array anzupassen

Bei richtiger Implementierung, sollte das setzen der Zählrichtung weiterhin funktionieren.

## Aufgabe 4

Deine nächste Aufgabe besteht darin, den Timer pausieren und wieder starten zu können. Nutze dafür die bereits angelegte Variable **runTimer**.

- Ändere die **runTimer**-Variable zu einem Signal
- Wenn der Start-Button gedrückt wird, soll **runTimer** auf **true** gesetzt werden
- Wenn der Pause-Button gedrückt wird, soll **runTimer** auf **false** gesetzt werden
- Passe die Funktion _prepareInterval_ so an, dass das Signal **runTimer** berücksichtigt wird
- Nutze erneut die _effect_-Funktion, um die Funktion _prepareInterval_ nur aufzurufen, wenn sich der Wert von **runTimer** ändert; (Tipp: Ein _effect_ wird auch ausgelöst, wenn sich das auslösende Signal in der Parameterliste der aufzurufenden Funktion befindet)

## Aufgabe 5

Zum Abschluss sollen die letzten zwei Buttons _Set To_ und _Reset_ ausimplementiert werden. Außerdem sollen die Felder _Tick Speed_ und _Count Diff_ beim Counter berücksichtigt werden, sobald sich die Werte dieser Felder verändert.

- Wenn der Set-To-Button gedrückt wird, soll der Count mit dem Wert starten, der sich in dem entsprechenden Input-Feld befindet
- Wenn der Reset-Button gedrückt wird, sollen die Werte für die Zählrichtung, Start/Pause, Tick Speed, Count Diff, Set To und der Counter an sich auf die Standardwerte zurückgesetzt werden
- Ändere die Variable **tickSpeed** zu einem Signal; Stelle sicher, dass die Funktion _prepareInterval_ aufgerufen wird, sobald sich der Wert von **tickSpeed** ändert
- Berücksichtige abschließend bei der Berechnung des neuen Counts den Wert der Variable **countDiff**
