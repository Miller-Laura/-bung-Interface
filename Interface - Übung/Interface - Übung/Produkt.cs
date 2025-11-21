namespace Interface___Übung;

public class Produkt
{
    public string Name { get; set; }
    public decimal Einzelpreis { get; set; }
    public int Anzahl { get; set; }
    
    public Produkt(string name, decimal einzelpreis, int anzahl)
    {
        Name = name;
        Einzelpreis = einzelpreis;
        Anzahl = anzahl;
    }
    
    public Produkt()
    {
        return;
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
Methode BerechnePreis() gibt Stunden * Stundensatz zurück.
*/