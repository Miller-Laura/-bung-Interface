namespace Interface___Übung;

class Dienstleistung : IZahlbar
{
    //Attribute
    string Beschreibung { get; set; }
    int Stunden { get; set; }
    int Stundensatz { get; set; }
    
    
    public Dienstleistung(string beschreibung, int stunden, int stundensatz) //Konstruktor
    {
        Beschreibung = beschreibung;
        Stunden = stunden;
        Stundensatz = stundensatz;
    }

    public decimal BerechnePreis() //Methode
    {
        return Stunden * Stundensatz;
    }

 
}

/*
🛍️ Teil 2 – Implementierende Klassen
Erstelle zwei Klassen, die das Interface IZahlbar implementieren:
Produkt
Attribute: Name, Einzelpreis, Anzahl
Methode BerechnePreis() gibt den Gesamtpreis (Einzelpreis * Anzahl) zurück.
Dienstleistung
Attribute: Beschreibung, Stunden, Stundensatz
Methode BerechnePreis() gibt Stunden * Stundensatz zurück
*/