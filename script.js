const questions = {

    Elektrotechnik: [
        { question: "Wie ist das Elektron geladen ?", answers: ["positiv", "gar nicht", "neutral", "negativ"], correct: 3 },
        { question: "Welche Ladungen sind für den Stromfluss in einem metallischen Leiter verantwortlich ?", answers: ["Neutronen", "Elektronen", "Protonen", "Positronen"], correct: 1 }, 
        { question: "Welche Aussage verdeutlicht den elektrischem Strom sinngemäß ?", answers: ["Eine Flüssigkeit im Leiter", "Eine Kraft im Leiter", "Eine gerichtete Bewegung von Ladungsträgern", "Eine Bremswirkung der Ladungsträger"], correct: 2 },
        { question: "Was ist die treibende Kraft in einem Stromkreis ?", answers: ["Die Leistung P", "Die Ladung Q", "Der Widerstand R", "Die Spannung U"], correct: 3 },
        { question: "Welche Aussagen sind richtig ?", answers: ["Eine Spannung liegt an einem Widerstand an", "Ein Strom liegt an einem Widerstand an", "Ein Strom ließt an einem Widerstand an", "Ein Strom fließt durch einen Widerstand durch"], correct: [0, 3] },
        { question: "Aus welchen drei grundlegenden Elementen besteht ein Stromkreis ?", answers: ["Spannungsquelle", "Leiter", "Leuchte", "Verbraucher"], correct: [0, 1, 3] },  
        { question: "Für welche Spannungsart gilt die Abkürzung AC ?", answers: ["Wechselspannung", "Dreieckspannung", "Gleichspannung", "Rechteckspannung"], correct: 0 },
        { question: "Für welche Spannungsart gilt die Abkürzung DC ?", answers: ["Wechselspannung", "Dreieckspannung", "Gleichspannung", "Rechteckspannung"], correct: 2 },
        { question: "Welchen Formelbuchstaben hat der elektrische Strom ?", answers: ["R", "U", "A", "I"], correct: 3 },
        { question: "Welchen Formelbuchstaben hat die elektrische Spannung ?", answers: ["I", "U", "Ws", "Nm"], correct: 1 },
        { question: "Welchen Formelbuchstaben hat der elektrische Widerstand ?", answers: ["P", "A", "R", "VA"], correct: 2 },
        { question: "Wie bezeichnet man den Widerstand R im Gleichstromkreis ?", answers: ["Gleichstromwiderstand", "Blindwiderstand", "Kaltwiderstand", "Heißwiderstand"], correct: 0 },
        { question: "Wie nennt man den Widerstand R im Wechselstromkreis ?", answers: ["Scheinwiderstand", "Blindwiderstand", "Wirkwiderstand", "Hellwiderstand"], correct: 2 },
        { question: "Welchen Formelbuchstaben hat die elektrische Leistung im Gleichstromkreis ?", answers: ["P", "C", "L", "W"], correct: 0 },
        { question: "Mit welchen Formeln lässt sich die Leistung berechnen ?", answers: ["P = U * I", "P = R / I", "U = R * I", "I = U / R"], correct: [0] },
        { question: "Wie bezeichnet man die Leistung P im Gleichstromkreis ?", answers: ["Widerstandsleistung", "Momentanleistung", "Gleichstromleistung", "Spitzenleistung"], correct: 2 },
        { question: "Welchen Formelbuchstaben hat die elektrische Arbeit ?", answers: ["Nm", "Ws", "W", "F"], correct: 1 },
        { question: "Welche Einheit hat die elektrische Spannung ?", answers: ["I", "U", "Ws", "V"], correct: 3 },
        { question: "Welche Einheit hat der elektrische Strom ?", answers: ["A", "U", "W", "I"], correct: 0 },
        { question: "Wieviel Ampere entsprechen 500 mA ?", answers: ["5", "0,5", "0,05", "50"], correct: 1 },
        { question: "Welche Einheit hat der elektrische Widerstand R ?", answers: ["W", "VA", "J", "Ohm"], correct: 3 },
        { question: "Ein Widerstand hat den Wert 1 kOhm. Wie viel Ohm sind das ?", answers: ["0,001", "100", "1000", "0,1"], correct: 2 },
        { question: "Welche Formeln geben das Ohmsche Gesetz wieder ?", answers: ["R = I / U", "U = R / I", "U = R * I", "I = U / R"], correct: [2, 3] },
        { question: "Ein Widerstand von 100 Ohm liegt an 60 V. Wie groß ist der Strom ?", answers: ["6,0 A", "0,6 A", "600 mA", "6 mA"], correct: [1, 2] },
        { question: "Duch einen Widerstand von 150 Ohm fließen 70 mA. Wie groß ist die angelegte Spannung ?", answers: ["1,5 V", "100,5 V", "10,5 V", "10500 mV"], correct: [2, 3] },
        { question: "Wie groß ist R bei 230 V und 5,75 A ?", answers: ["4 Ohm", "40 mOhm", "4 kOhm", "40 Ohm"], correct: 3 },
        { question: "Welche Einheit hat die elektrische Leistung P ?", answers: ["W", "A", "Nm", "J"], correct: 0 },
        { question: "Wie nennt man das Verhältnis zwischen mechanischer zur elektrischen Leistung ?", answers: ["Wirkungsgrad", "Wirtschaftsgrad", "Windungsgrad", "Wellengrad"], correct: 0 },
        { question: "Welche zwei Widerstandsarten gibt es neben dem Wirkwiderstand im Wechselstromkreis noch ?", answers: ["Warmwiderstand", "Blindwiderstand", "Scheinwiderstand", "Reibwiderstand"], correct: [1, 2] },
        { question: "Welche zwei Leistungsarten gibt es neben der Wirkleistung im Wechselstromkreis noch ?", answers: ["Blindleistung", "Nulleistung", "Scheinleistung", "Kaltleistung"], correct: [0, 2] },
        { question: "Welche zwei Bauteile verursachen eine Verschiebung zwischen Strom und Spannung im Wechselstromkreis ?", answers: ["Widerstand R", "Kondensator C", "Potentiometer R", "Spule L"], correct: [1, 3] },
        { question: "Wie wird eine Spule/Wicklung allgemein noch bezeichnet ?", answers: ["Kapazität C", "Ladung Q", "Induktivität L", "Permitivität µ"], correct: 2 },
        { question: "Wie wird ein Kondensator/Ladungsspeicher allgemein noch bezeichnet ?", answers: ["Kapazität C", "Ladung Q", "Induktivität L", "Permitivität µ"], correct: 0 },
        { question: "In welcher Einheit wird die Kapazität C angegeben ?", answers: ["H", "Vs", "F", "As"], correct: 2 },
        { question: "In welcher Einheit wird die Induktivität L angegeben ?", answers: ["H", "Vs", "F", "As"], correct: 0 },
        { question: "Wie muß ein Strommessgerät im Stromkreis eingebaut werden ?", answers: ["In Reihe zum Messobjekt", "Parallel zum Messobjekt", "Egal", "Sowohl in Reihe, als auch parallel zum Messobjekt"], correct: 0 },
        { question: "Wie muß ein Spannungsmessgerät im Stromkreis eingebaut werden ?", answers: ["In Reihe zum Messobjekt", "Parallel zum Messobjekt", "Egal", "Sowohl in Reihe, als auch parallel zum Messobjekt"], correct: 1 },
        { question: "Wie können Widerstände/Verbraucher verschaltet werden ?", answers: ["In Reihenschaltung", "In Parallelschaltung", "In Kombination einer Reihen- und Parallelschaltung", "Nur in Reihen- oder Parallelschaltung"], correct: [0, 1, 2] },
        { question: "Wie wird die Reihenschaltung noch bezeichnet ?", answers: ["Stromteiler", "Spannungsteiler", "Stromreduzierschaltung", "Spannungsreduzierschaltung"], correct: 1 },
        { question: "Welche Größe ist die gemeinsame Größe in einer Reihenschaltung ?", answers: ["Arbeit W", "Spannung U", "Leistung P", "Strom I"], correct: 3 },
        { question: "Was passiert, wenn mehrere Widerstände in Reihe geschaltet werden ?", answers: ["Der Gesamtwiderstand sinkt", "Bei konstanter Spannung U sinkt der Strom", "Der Gesamtwiderstand ändert sich nicht", "Bei konstanter Spannung steigt der Strom"], correct: 1 },
        { question: "Welche Größe ist die gemeinsame Größe in einer Parallelschaltung ?", answers: ["Spannung U", "Strom I", "Arbeit W", "Leistung P"], correct: 0 },
        { question: "Wie wird die Parallelschaltung noch bezeichnet ?", answers: ["Spannungsreduzierschaltung", "Spannungsteiler", "Stromreduzierschaltung", "Stromteiler"], correct: 3 },
        { question: "Was passiert, wenn mehrere Widerstände parallel geschaltet werden ?", answers: ["Der Gesamtwiderstand R steigt", "Bei konstanter Spannung U sinkt der Strom I", "Der Gesamtwiderstand ändert sich nicht", "Bei konstanter Spannung U steigt der Strom I"], correct: 3 },
        { question: "Welche Aussage ist richtig ?", answers: ["In einer Reihenschaltung ist der Gesamtwiderstand stets kleiner, als der größte Teilwiderstand", "In einer Reihenschaltung fließt durch den kleinsten Teilwiderstand der größte Teilstrom", "In einer Reihenschaltung ist der Gesamtwiderstand stets größer, als der größte Teilwiderstand", "Durch alle Teilwiderstände fließt der gleiche Strom I"], correct: [2, 3] },
        { question: "Welche Aussage ist richtig ?", answers: ["In einer Parallelschaltung steigt der Gesamtwiderstand mit steigender Anzahl an Teilwiderständen", "In einer Parallelschaltung sinkt der Gesamtwiderstand mit kleiner werdenden Anzahl an Teilwiderständen", "In einer Parallelschaltung sinkt der Gesamtwiderstand mit steigender Anzahl an Teilwiderständen", "In einer Parallelschaltung steigt  der Gesamtwiderstand mit kleiner werdenden Anzahl an Teilwiderständen"], correct: 2 },
        { question: "Welche Aussage ist falsch ?", answers: ["In einer Parallelschaltung ist der Gesamtwiderstand stets kleiner, als der kleinste Teilwiderstand", "In einer Parallelschaltung fließt durch den größten Teilwiderstand der kleinste Teilstrom", "In einer Parallelschaltung ist der Gesamtwiderstand stets größer, als der kleinste Teilwiderstand", "Alle Teilwiderstände liegen an der  selben Gesamtspannung U"], correct: 2 },
        { question: "Steigt der Widerstandswert eines Leiters, wenn der Querschnitt größer gewählt wird ?", answers: ["Nein, der  Leiterwiderstand wird kleiner", "Ja, der Widerstandswert wird größer", "Wenn der Querschnitt sich nur um eine Stufe vergrößert, ändert sich der Wert nicht", "Wenn der Querschnitt sich nur um eine Stufe verringert, ändert sich der Wert nicht"], correct: 0 },
        { question: "Was passiert mit dem Leiterwiderstand, wenn die Umgebungstemperatur steigt ?", answers: ["Die Umgebungstemperatur hat keinen Einfluss auf den Leiterwiderstand", "Der Leiterwiderstand wird größer", "Die Umgebungstemperatur hat einen Einfluss auf den Leiterwiderstand", "Der Leiterwiderstand wird kleiner"], correct: [2, 1] },
        { question: "Welches Material leitet den Strom am besten ?", answers: ["Aluminium", "Silber", "Kupfer", "Gold"], correct: 1 },
        { question: "Welche Gefahr besteht bei fehlerhaften Verbindungen ?", answers: ["Der Übergangswiderstand als auch die Temperatur sinken - Brandgefahr!", "Der Übergangswiderstand sinkt und die Temperatur steigt - Brandgefahr!", "Der Übergangswiderstand steigt  und die Temperatur sinkt - Brandgefahr!", "Der Übergangswiderstand als auch die Temperatur steigt - Brandgefahr!"], correct: 3 },
        { question: "Welche Aussage ist richtig?", answers: ["Der Innenwiderstand eines Multimeters ist im V-Bereich kleiner, als im A-Bereich.", "Der Innenwiderstand eines Multimeters ist im V- und A-Bereich unterschiedlich.", "Der Innenwiderstand eines Multimeters ist im V-Bereich größer, als im A-Bereich.", "Der Innenwiderstand eines Multimeters ist im V- und A-Bereich gleich."], correct: [1, 2] },
        { question: "Wie groß ist der Unterschied zwischen Spitzen- und Effektivwert einer sinusförmigen Wechselspannung ?", answers: ["√3", "√2", "√4", "√5"], correct: 1 },
        { question: "Welche Geräte werden verwendet, um Spannungen zu messen ?", answers: ["Voltmeter", "Strommesser", "Amperemeter", "Spannungsmesser"], correct: 0 },
        { question: "Welche der folgenden Komponenten können als Gleichspannungsquelle dienen ?", answers: ["Batterie", "Solarmodul", "Wechselrichter", "Transformator"], correct: [0, 1] },
        { question: "Welche Eigenschaften beschreiben eine Gleichspannung ?", answers: ["Konstante Polarität", "Variable Frequenz", "Gleichbleibende Höhe", "Wechselnde Stromrichtung"], correct: [0, 2] },
        { question: "Der Spannungsteiler kann verwendet werden, um eine geringere Spannung aus einer höheren Spannung zur Verfügung zu stellen.", answers: ["Richtig", "Falsch"], correct: 0 },
        { question: "Was ändert sich periodisch bei einer Wechselspannung ?", answers: ["Amplitude", "Phase", "Frequenz", "Polarität"], correct: 3 },
        { question: "Welche Einheit gilt für die Frequenz f z.B. bei Wechselspannungen ?", answers: ["Hertz", "Volt", "Ampere", "Ohm"], correct: 0 },
        { question: "Welche Eigenschaften beschreiben Wechselspannungen ?", answers: ["Konstante Polarität", "Periodische Polaritätsänderung", "Konstante Amplitude", "Feste Phase"], correct: [1, 2] },
        { question: "Welche Aussagen treffen auf einen Wechselstromgenerator zu ?", answers: ["Wandelt mechanische Energie in elektrische Energie um", "Hat eine feste Frequenz", "Erzeugt Wechselspannung", "Erzeugt Gleichspannung"], correct: [0, 2] },
        { question: "Wie viele Phasen hat ein typisches Drehstromsystem?", answers: ["Eine", "Zwei", "Drei", "Vier"], correct: 2 },
        { question: "Welche maximalen Spannungswerte gelten für Niederspannung im AC-Bereich ?", answers: ["230 V", "400 V", "600 V", "1000 V"], correct: 3 },
        { question: "Welche Spannungen werden im Drehstromsystemen typischerweise im Niederspannungsbereich verwendet?", answers: ["230 V", "400 V", "600 V", "1000 V"], correct: 1 },
        { question: "Welche maximalen Spannungswerte gelten für Niederspannung im DC-Bereich ?", answers: ["800 V", "400 V", "600 V", "1,5 kV"], correct: 3 },
        { question: "Drehstrom wird zur Versorgung von leistungsstarken Maschinen verwendet.", answers: ["Richtig", "Falsch"], correct: 0 },
        { question: "Eine weitere Bezeichnung von Drehstrom ist umgangssprachlich Kraftstrom.", answers: ["Richtig", "Falsch"], correct: 0 },
        { question: "Welche Symbole deuten normalerweise auf ein Drehstromsystem hin ?", answers: ["3~", "Δ und Y", "||", "="], correct: [0, 1] },
        { question: "Welche Größen sind im Ohmschen Gesetz enthalten ?", answers: ["Spannung", "Stromstärke", "Widerstand", "Leistung"], correct: [0, 1, 2] },
        { question: "Was passiert mit dem Strom, wenn die Spannung bei konstantem Widerstand verdoppelt wird ?", answers: ["Er verdoppelt sich", "Er halbiert sich", "Er bleibt gleich", "Er verringert sich auf ein Viertel"], correct: 0 },
        { question: "Was beschreibt der Widerstand in einem elektrischen Stromkreis ?", answers: ["Die Hemmung des Stromflusses", "Die Erhöhung der Spannung", "Die Erhöhung des Stroms", "Die Reduktion der Spannung"], correct: 0 },
        { question: "Welche Formel beschreibt die elektrische Leistung im Gleichstromkreis ?", answers: ["P = I * U", "P = U / I", "P = I² * R", "P = U² / R"], correct: [0, 2, 3] },
        { question: "Was passiert mit der Leistung, wenn die Spannung bei konstantem Strom verdoppelt wird?", answers: ["Sie verdoppelt sich", "Sie halbiert sich", "Sie bleibt gleich", "Sie vervierfacht sich"], correct: 0 },
        { question: "Welche Auswirkungen hat eine Erhöhung des Widerstands bei konstanter Spannung auf die Leistung ?", answers: ["Die Leistung erhöht sich", "Die Leistung verringert sich", "Die Leistung bleibt gleich", "Die Leistung sinkt auf null"], correct: 1 },
        { question: "Was passiert in einer Reihenschaltung, wenn ein Widerstand unterbrochen wird ?", answers: ["Der gesamte Stromkreis wird unterbrochen", "Der Stromkreis bleibt geschlossen", "Der Strom erhöht sich", "Der Widerstand reduziert sich"], correct: 0 },
        { question: "Was passiert in einer Parallelschaltung, wenn ein Widerstand unterbrochen wird ?", answers: ["Der gesamte Stromkreis wird unterbrochen", "Die anderen Stromkreise laufen weiter", "Der Gesamtstrom des Netzwerkes erhöht sich", "Der Widerstand reduziert sich"], correct: 1 },
        { question: "Welche Zehnerpotenz entspricht dem Präfix \"Milli\"?", answers: ["10^-3", "10^-6", "10^3", "10^6"], correct: 0 },
        { question: "Welche Zehnerpotenz entspricht dem Präfix \"Kilo\"?", answers: ["10^3", "10^6", "10^-3", "10^-6"], correct: 0 },
        { question: "Wähle die korrekte Umrechnung für 5000 Ω:", answers: ["5 kΩ", "0,5 kΩ", "50 kΩ", "0,005 MΩ"], correct: [0, 3] },
        { question: "Welche der folgenden sind korrekt umgerechnet ?", answers: ["2 kΩ = 2000 Ω", "3 MΩ = 3000 kΩ", "4 kΩ = 4.000.000 mΩ", "0,5 MΩ = 500 kΩ"], correct: [0, 1, 3] },
        { question: "0,02 kΩ sind dasselbe wie 20 Ω.", answers: ["Richtig", "Falsch"], correct: 0 },
        { question: "Wie werden mehrere Steckdosen eines Stromkreises in Haushalten in der Regel verschaltet ?", answers: ["In Reihenschaltung", "In Parallelschaltung", "In Serienschaltung", "In Einzelschaltung"], correct: 1 },
        { question: "In einer Reihenschaltung führt der Ausfall eines Geräts zum Ausfall aller anderen Geräte in der Schaltung.", answers: ["Richtig", "Falsch"], correct: 0 },
        { question: "Welche Schaltungsart verbindet den Hausanschlusskasten mit dem Zählerplatz in einem Mehrfamilienhaus ?", answers: ["Reihenschaltung", "Parallelschaltung", "Kombination aus Reihen- und Parallelschaltung", "Keine der genannten"], correct: 2 },
        { question: "Warum ist eine Kombination aus Reihen- und Parallelschaltung im Hausanschlusskasten und Zählerplatz notwendig ?", answers: ["Um eine zuverlässige Stromversorgung zu gewährleisten", "Um den Gesamtstrom zu reduzieren", "Um die Spannung zu erhöhen", "Um den Gesamtstrom zu reduzieren"], correct: 0 }
    ],

    Stromgefahr: [

{ question: "Ab welcher Stromhöhe im AC-Bereich gilt Lebensgefahr ?", answers: ["500 mA", "0,5 A", "0,3 A", "0,03 A"], correct: 3 },

{ question: "Ab welcher Stromhöhe im DC-Bereich gilt Lebensgefahr ?", answers: ["120 mA", "0,12 A", "102 mA", "0,012 A"], correct: [0, 1] },

{ question: "Welche Stromhöhe im DC-Bereich gilt als tödlich ?", answers: ["120 mA", "0,12 A", "102 mA", "0,012 A"], correct: [1, 2] },

{ question: "Welche Stromhöhe im AC-Bereich gilt als tödlich ?", answers: ["500 mA", "0,5 A", "0,3 A", "0,03 A"], correct: 2 },

{ question: "Ab welcher Spannungshöhe im AC-Bereich gilt Lebensgefahr ?", answers: ["50 V", "0,5 V", "500 mV", "50 mV"], correct: 0 },

{ question: "Ab welcher Spannungshöhe im DC-Bereich gilt Lebensgefahr ?", answers: ["80 V", "120 V", "120 mV", "80 mV"], correct: 1 },

{ question: "Wie viele Schutzklassen (SK) gibt es ?", answers: ["2", "4", "3", "5"], correct: 2 },

{ question: "Was ist das Besondere an SK 2 ?", answers: ["Bei SK 2 muss ein PE angeschlossen werden", "Für SK 2 gilt eine maximale Betriebsspannung von 120 V DC", "Für SK 2 gilt eine maximale Betriebsspannung von 50 V AC", "SK 2 besitzt eine doppelte und verstärkte Isolierung"], correct: 3 },

{ question: "Was ist das Besondere an SK 1 ?", answers: ["Bei SK 1 muss ein PE angeschlossen werden", "SK 1 besitzt eine doppelte und verstärkte Isolierung", "Für SK 1 gilt eine maximale Betriebsspannung von 50 V AC", "Für SK 1 gilt eine maximale Betriebsspannung von 120 V DC"], correct: 0 },

{ question: "Was ist das Besondere an SK 3 ?", answers: ["Bei SK 3 muss ein PE angeschlossen werden", "SK 3 besitzt eine doppelte und verstärkte Isolierung", "Für SK 3 gilt eine maximale Betriebsspannung von 50 V AC", "Für SK 3 gilt eine maximale Betriebsspannung von 120 V DC"], correct: [2, 3] },

{ question: "Was versteht man unter dem Begriff SELV ?", answers: ["Maximale Betriebsspannung von 120 V DC", "Security Extra Low Voltage", "Betriebskleinspannung", "Maximale Betriebsspannung von 50 V AC"], correct: [0, 3] },

{ question: "Welche Größe gilt grundsätzlich für den Körperwiderstand ?", answers: ["50 Ohm", "1 kOhm", "120 Ohm", "80 Ohm"], 
  correct: 1 },

{ question: "Wie groß ist die Körperdurchströmung bei 230 V und 1 kOhm ?", answers: ["230 mA", "0,23 mA", "0,23 A", "30 mA"], 
  correct: [0, 2] },

{ question: "Welche Gefahr besteht, wenn die Loslassgrenze überschritten wird ?", answers: ["Man löst sich reflexartig von der Stromquelle", "Keine Gefahr, da Ströme oberhalb der Grenze kaum spürbar sind", "Ein Loslassen ist in der Regel nicht mehr möglich", "Ein Loslassen ist in der Regel noch möglich"], correct: 2 },

{ question: "Wie groß ist die Körperdurchströmung bei 230 V und 1 kOhm ?", answers: ["230 mA", "0,23 mA", "0,23 A", "30 mA"], 
  correct: [0, 2] },

{ question: "Welche Schutzeinrichtung gilt für den Personenschutz ?", answers: ["RCD", "Schmelzsicherung", "LS-Schalter", "FI"], 
  correct: [0, 3] },

{ question: "Wie groß darf der Differenzfehlerstrom  für FI's für Personenschutz höchstens sein ?", answers: ["0,3 mA", "0,03 A", "300 mA", "30 mA"], correct: [1, 3] },

{ question: "Welcher FI kommt für den Brandschutz zum Einsatz ?", answers: ["0,3 mA", "0,03 A", "300 mA", "0,30 A"], correct: [2, 3] },

{ question: "Spätestens wann muss eine Schutzeinrichtung im TN-S-Netz bei 230 V abschalten ?", answers: ["innerhalb von 400 ms", "innerhalb von 0,4 s", "nach von 30 ms", "innerhalb von 0,2s"], correct: [0, 1] },

{ question: "Spätestens wann muss eine Schutzeinrichtung im TT-Netz bei 230 V abschalten ?", answers: ["innerhalb von 0,2 s", "nach 200 ms", "spätestens nach 0,02 s", "nach 0,2 s"], correct: [0, 3] },

            {
                question: "Ein Wechselstrom von 5 mA durch den menschlichen Körper ist tödlich.",
                answers: ["Richtig", "Falsch"],
                correct: 1
            },
            {
                question: "Der Widerstand des menschlichen Körpers variiert abhängig von Faktoren wie Hautfeuchtigkeit und -dicke.",
                answers: ["Richtig", "Falsch"],
                correct: 0
            },

    ],

    Schutzmaßnahmen: [

        {
        question: "Vor was schützt ein Leitungsschutzschalter (LS-Schalter)?",
        answers: [
            "Vor Überspannung",
            "Vor Überlast und Kurzschluss",
            "Vor elektromagnetischen Feldern",
            "Vor elektrostatischen Entladungen"
        ],
        correct: 1
    },
    {
        question: "Wie lautet eine andere Bezeichnung für einen Leitungsschutzschalter?",
        answers: [
            "Leitungssicherung",
            "Hauptschalter",
            "Sicherungsautomat",
            "Trennschalter"
        ],
        correct: 2
    },
    {
        question: "Was bedeutet die Abkürzung 'LS' im Begriff LS-Schalter?",
        answers: [
            "Leitungssicherung",
            "Leistungsschalter",
            "Leitungsschutz",
            "Lasersicherung"
        ],
        correct: 2
    },
    {
        question: "Wann löst ein Leitungsschutzschalter mit Charakteristik B bei einem Kurzschluss aus?",
        answers: [
            "Beim 3-fachen Nennstrom der Sicherung",
            "Beim 5-fachen Nennstrom der Sicherung",
            "Beim 7-fachen Nennstrom der Sicherung",
            "Beim 10-fachen Nennstrom der Sicherung"
        ],
        correct: 1
    },
    {
        question: "Welches der folgenden Geräte wird auch als Sicherungsautomat bezeichnet?",
        answers: [
            "Leitungsschutzschalter",
            "Motorschutzschalter",
            "Schütz",
            "Differenzstromschutzschalter"
        ],
        correct: 0
    },

    // Multiple-Choice-Fragen
    {
        question: "Welche Funktionen hat ein Leitungsschutzschalter (LS-Schalter)?",
        answers: [
            "Schutz vor Überlast",
            "Schutz vor Überspannung",
            "Schutz vor Kurzschluss",
            "Schutz vor Stromausfall"
        ],
        correct: [0, 2]
    },
    {
        question: "Welche Auslöseeigenschaften können Leitungsschutzschalter haben?",
        answers: [
            "Auslösung bei Überlast",
            "Auslösung bei Kurzschluss",
            "Auslösung bei Erdschluss",
            "Auslösung bei Spannungsschwankungen"
        ],
        correct: [0, 1]
    },

    // Ja-/Nein-Fragen
    {
        question: "Schützt ein Leitungsschutzschalter vor Überlast und Kurzschluss?",
        answers: [
            "Ja",
            "Nein"
        ],
        correct: 0
    },
    {
        question: "Löst ein Leitungsschutzschalter mit der Charakteristik B bei einem Kurzschluss beim 10-fachen Nennstrom aus?",
        answers: [
            "Ja",
            "Nein"
        ],
        correct: 1
    },

    // Richtig-/Falsch-Fragen
    {
        question: "Ein Leitungsschutzschalter ist auch als Sicherungsautomat bekannt.",
        answers: [
            "Richtig",
            "Falsch"
        ],
        correct: 0
    },

        {
            question: "Was ist die Abkürzung für einen Fehlerstrom-Schutzschalter?",
            answers: [
                "LCB",
                "RCD",
                "MLB",
                "TSD"
            ],
            correct: 1
        },
        {
            question: "Wofür bietet ein Fehlerstrom-Schutzschalter (RCD) Schutz?",
            answers: [
                "Vor Überspannung",
                "Vor Kurzschluss",
                "Vor Brand und personenschäden bei Fehlernennströmen bis 30mA",
                "Vor Stromschwankungen"
            ],
            correct: 2
        },
        {
            question: "Was erkennt ein Fehlerstrom-Schutzschalter (RCD)?",
            answers: [
                "Differenzen zwischen eingehenden und ausgehenden Strömen",
                "Kurzschlüsse",
                "Überspannungen",
                "Unterspannungen"
            ],
            correct: 0
        },
        {
            question: "Ist ein Fehlerstrom-Schutzschalter (RCD) in Neuinstallationen Pflicht?",
            answers: [
                "Ja",
                "Nein",
                "",
                ""
            ],
            correct: 0
        },
        {
            question: "Bis zu welchem Fehlernennstrom bietet ein Fehlerstrom-Schutzschalter (RCD) Personenschutz?",
            answers: [
                "10 mA",
                "30 mA",
                "50 mA",
                "100 mA"
            ],
            correct: 1
        },

        // Multiple-Choice-Fragen
        {
            question: "Welche Funktionen hat ein Fehlerstrom-Schutzschalter (RCD)?",
            answers: [
                "Brandschutz",
                "Personenschutz bis zu einem Fehlernennstrom von 30 mA",
                "Erkennung von Kurzschlüssen",
                "Erkennung von Überlastungen"
            ],
            correct: [0, 1]
        },
        {
            question: "Was sind die Eigenschaften eines Fehlerstrom-Schutzschalters (RCD)?",
            answers: [
                "Erkennt Erdschlüsse",
                "Erkennt Kurzschlüsse",
                "Erkennt Differenzen zwischen ein- und ausgehenden Strömen",
                "Ist in Neuinstallationen Pflicht"
            ],
            correct: [0, 2, 3]
        },

        // Ja-/Nein-Fragen
        {
            question: "Ein Fehlerstrom-Schutzschalter (RCD) erkennt Kurzschlüsse.",
            answers: [
                "Ja",
                "Nein"
            ],
            correct: 1
        },
        {
            question: "Ein Fehlerstrom-Schutzschalter (RCD) ist in Neuinstallationen Pflicht.",
            answers: [
                "Ja",
                "Nein"
            ],
            correct: 0
        },

        // Richtig-/Falsch-Fragen
        {
            question: "Ein Fehlerstrom-Schutzschalter (RCD) bietet Schutz vor Überlast.",
            answers: [
                "Richtig",
                "Falsch"
            ],
            correct: 1
        },

        // Single-Choice-Fragen
        {
            question: "Wie hoch ist die maximale Abschaltzeit für Schutzeinrichtungen im TN-Netz bei 230 V?",
            answers: [
                "200 ms",
                "300 ms",
                "400 ms",
                "500 ms"
            ],
            correct: 2
        },
        {
            question: "Wie hoch ist die maximale Abschaltzeit für Schutzeinrichtungen im TT-Netz?",
            answers: [
                "100 ms",
                "200 ms",
                "300 ms",
                "400 ms"
            ],
            correct: 1
        },
        {
            question: "Wie hoch ist die maximale Berührungsspannung bei Wechselstrom (AC)?",
            answers: [
                "22 V",
                "50 V",
                "100 V",
                "120 V"
            ],
            correct: 1
        },
        {
            question: "Welche maximale Berührungsspannung bei Gleichstrom (DC) ist zulässig?",
            answers: [
                "50 V",
                "75 V",
                "100 V",
                "120 V"
            ],
            correct: 3
        },
        {
            question: "Was ist für die Schutzklasse 1 erforderlich?",
            answers: [
                "Verwendung von Kunststoffgehäusen",
                "Anschluss des Schutzleiters (PE)",
                "Verwendung von spannungsisolierten Werkzeugen",
                "Verstärkte Isolierung"
            ],
            correct: 1
        },
        {
            question: "Welche Eigenschaft trifft auf die Schutzklasse 2 zu?",
            answers: [
                "Anschluss des Schutzleiters (PE)",
                "Gehäuse aus Metall",
                "Doppelte oder verstärkte Isolierung",
                "Einsatz bis maximal 50 V AC"
            ],
            correct: 2
        },
        {
            question: "Was charakterisiert die Schutzklasse 3?",
            answers: [
                "Verwendung von Metallschirmen",
                "Maximal 50 V AC oder 120 V DC",
                "Gehäuse aus Kunststoff",
                "Verstärkte Isolierung"
            ],
            correct: 1
        },
        {
            question: "Welches Gerät ist ein typisches Beispiel für Schutzklasse 1?",
            answers: [
                "Gehäuse einer Handbohrmaschine",
                "Kunststoffabdeckung einer Steckdose",
                "Metallschirm einer Lampe",
                "Spannungsversorgung von Kinderspielzeug"
            ],
            correct: 2
        },
        {
            question: "Welche Schutzklasse hat eine Handbohrmaschine mit Kunststoffgehäuse?",
            answers: [
                "Schutzklasse 1",
                "Schutzklasse 2",
                "Schutzklasse 3",
                "Keine Schutzklasse"
            ],
            correct: 1
        },
        {
            question: "Welche Schutzklasse gilt für medizinisch genutzte Geräte?",
            answers: [
                "Schutzklasse 1",
                "Schutzklasse 2",
                "Schutzklasse 3",
                "Schutzklasse 4"
            ],
            correct: 2
        },

        // Multiple-Choice-Fragen
        {
            question: "Welche maximalen Berührungsspannungen sind zulässig?",
            answers: [
                "50 V AC",
                "120 V DC",
                "75 V AC",
                "100 V DC"
            ],
            correct: [0, 1]
        },
        {
            question: "Was charakterisiert die Schutzklasse 2?",
            answers: [
                "Doppelte oder verstärkte Isolierung",
                "Gehäuse aus Metall",
                "Schutzleiter darf nicht angeschlossen werden",
                "Maximal 50 V AC"
            ],
            correct: [0, 2]
        },
        {
            question: "Welche Beispiele gehören zur Schutzklasse 1?",
            answers: [
                "Metallschirm einer Lampe",
                "Gehäuse eines Drehstrommotors",
                "Spannungsversorgung von Kinderspielzeug",
                "Schutzkontaktsteckdose"
            ],
            correct: [0, 1, 3]
        },
        {
            question: "Welche Geräte gehören zur Schutzklasse 2?",
            answers: [
                "Gehäuse einer Handbohrmaschine",
                "Kunststoffabdeckung einer Steckdose",
                "Medizinisch genutzte Geräte",
                "Spannungsversorgung von Kinderspielzeug"
            ],
            correct: [0, 1]
        },
        {
            question: "Welche Geräte fallen in die Schutzklasse 3?",
            answers: [
                "Medizinisch genutzte Geräte",
                "Spannungsversorgung von Kinderspielzeug",
                "Messeinrichtung im Ex-Bereich",
                "Metallschirm einer Lampe"
            ],
            correct: [0, 1, 2]
        },

        // Ja-/Nein-Fragen
        {
            question: "Im TN-Netz beträgt die maximale Abschaltzeit bei 230 V 400 ms?",
            answers: [
                "Ja",
                "Nein"
            ],
            correct: 0
        },
        {
            question: "In Schutzklasse 1 muss der Schutzleiter (PE) angeschlossen werden?",
            answers: [
                "Ja",
                "Nein"
            ],
            correct: 0
        },
        {
            question: "Die Schutzklasse 3 umfasst Geräte mit doppelter oder verstärkter Isolierung?",
            answers: [
                "Ja",
                "Nein"
            ],
            correct: 1
        },

        // Richtig-/Falsch-Fragen
        {
            question: "Die maximale Abschaltzeit im TT-Netz beträgt 200 ms.",
            answers: [
                "Richtig",
                "Falsch"
            ],
            correct: 0
        },
        {
            question: "Ein Gehäuse aus Metall gehört zur Schutzklasse 2.",
            answers: [
                "Richtig",
                "Falsch"
            ],
            correct: 1
        },
        {
            question: "Beispiele für Schutzklasse 3 sind medizinisch genutzte Geräte und Spannungsversorgungen für Kinderspielzeug.",
            answers: [
                "Richtig",
                "Falsch"
            ],
            correct: 0
        },

        // Single-Choice-Fragen
        {
            question: "Was bedeutet Basisschutz?",
            answers: [
                "Schutz gegen Überlast",
                "Schutz gegen Spannungsschwankungen",
                "Schutz gegen direktes Berühren",
                "Schutz gegen elektromagnetische Felder"
            ],
            correct: 2
        },
        {
            question: "Was wird als Fehlerschutz bezeichnet?",
            answers: [
                "Schutz gegen Überspannung",
                "Schutz gegen indirektes Berühren",
                "Schutz gegen Kurzschluss",
                "Schutz gegen Überlast"
            ],
            correct: 1
        },
        {
            question: "Welche Maßnahme gehört zum Basisschutz?",
            answers: [
                "Kunststoffmantel von Leitungen und Kabeln",
                "Fehlerstromschutzschalter",
                "Sicherungen",
                "Verstärkte Isolierung"
            ],
            correct: 0
        },
        {
            question: "Welches Beispiel gehört zum Fehlerschutz?",
            answers: [
                "Nichtleitende Umhüllungen",
                "Kunststoffmantel von Leitungen und Kabeln",
                "Verstärkte Isolierung",
                "Schutz durch Absperrung"
            ],
            correct: 2
        },
        {
            question: "Was zählt zum Basisschutz?",
            answers: [
                "Schutz durch Absperrung",
                "Sicherungen",
                "Fehlerstromschutzschalter",
                "Verstärkte Isolierung"
            ],
            correct: 0
        },

        // Multiple-Choice-Fragen
        {
            question: "Welche der folgenden Maßnahmen sind Beispiele für den Basisschutz?",
            answers: [
                "Nichtleitende Umhüllungen",
                "Kunststoffmantel von Leitungen und Kabeln",
                "Schutz durch Absperrung",
                "Fehlerstromschutzschalter"
            ],
            correct: [0, 1, 2]
        },
        {
            question: "Welche der folgenden Maßnahmen gehören zum Fehlerschutz?",
            answers: [
                "Sicherungen",
                "Nichtleitende Umhüllungen",
                "Verstärkte Isolierung",
                "Schutz durch Abstand"
            ],
            correct: [0, 2]
        },

        // Ja-/Nein-Fragen
        {
            question: "Basisschutz ist der Schutz gegen direktes Berühren.",
            answers: [
                "Ja",
                "Nein"
            ],
            correct: 0
        },
        {
            question: "Fehlerschutz ist der Schutz gegen indirektes Berühren.",
            answers: [
                "Ja",
                "Nein"
            ],
            correct: 0
        },

        // Richtig-/Falsch-Fragen
        {
            question: "Nichtleitende Umhüllungen sind ein Beispiel für Basisschutz.",
            answers: [
                "Richtig",
                "Falsch"
            ],
            correct: 0
        },
        {
            question: "Sicherungen gehören zum Basisschutz.",
            answers: [
                "Richtig",
                "Falsch"
            ],
            correct: 1
        },
        {
            question: "Verstärkte Isolierung ist ein Beispiel für Fehlerschutz.",
            answers: [
                "Richtig",
                "Falsch"
            ],
            correct: 0
        },
        {
            question: "Fehlerstromschutzschalter bieten Fehlerschutz.",
            answers: [
                "Richtig",
                "Falsch"
            ],
            correct: 0
        },
        {
            question: "Schutz durch Absperrung ist eine Maßnahme des Fehlerschutzes.",
            answers: [
                "Richtig",
                "Falsch"
            ],
            correct: 1
        },
        {
            question: "Der Kunststoffmantel von Kabeln ist eine Maßnahme des Basisschutzes.",
            answers: [
                "Richtig",
                "Falsch"
            ],
            correct: 0
        },

        {
            question: "Welches Netz hat keinen direkten Bezug zur Erde am Neutralleiter?",
            answers: [
                "TN-C-Netz",
                "IT-Netz",
                "TN-S-Netz",
                "TT-Netz"
            ],
            correct: 1 // IT-Netz
        },
        {
            question: "In welchem Netz wird der PEN-Leiter sowohl als Neutralleiter als auch Schutzleiter verwendet?",
            answers: [
                "TN-S-Netz",
                "IT-Netz",
                "TN-C-Netz",
                "TT-Netz"
            ],
            correct: 2 // TN-C-Netz
        },
        {
            question: "Welches Netz ist in Haushalten am häufigsten zu finden?",
            answers: [
                "IT-Netz",
                "TT-Netz",
                "TN-S-Netz",
                "TN-C-Netz"
            ],
            correct: 2 // TN-S-Netz
        },
        
        // Multiple-Choice Fragen
        {
            question: "Welche der folgenden Netzformen verwendet einen PEN-Leiter?",
            answers: [
                "TN-C-Netz",
                "TT-Netz",
                "TN-C-S-Netz",
                "IT-Netz"
            ],
            correct: [0, 2] // TN-C-Netz, TN-C-S-Netz
        },
        {
            question: "Welche der folgenden Netzformen können einen RCD (FI-Schalter) nutzen?",
            answers: [
                "TN-S-Netz",
                "TT-Netz",
                "TN-C-Netz",
                "IT-Netz"
            ],
            correct: [0, 1, 3] // TN-S-Netz, TT-Netz, IT-Netz
        },
        
        // Ja- und Nein-Fragen
        {
            question: "Muss im TT-Netz ein separater Erder installiert werden?",
            answers: [
                "Ja",
                "Nein"
            ],
            correct: 0 // Ja
        },
        {
            question: "Kann im TN-C-Netz ein FI-Schutzschalter (RCD) problemlos verwendet werden?",
            answers: [
                "Ja",
                "Nein"
            ],
            correct: 1 // Nein
        },
        
        // Richtig- oder Falsch-Fragen
        {
            question: "Die Trennung des PEN-Leiters in PE und N wird durchgeführt, um den Einsatz von RCDs (FI-Schaltern) zu ermöglichen.",
            answers: [
                "Richtig",
                "Falsch"
            ],
            correct: 0 // Richtig
        },
        {
            question: "Im TN-S-Netz gibt es keinen gemeinsamen PEN-Leiter; stattdessen gibt es getrennte PE- und N-Leiter.",
            answers: [
                "Richtig",
                "Falsch"
            ],
            correct: 0 // Richtig
        },
        {
            question: "IT-Netze sind besonders anfällig für Erdschlüsse und benötigen daher besondere Schutzmaßnahmen.",
            answers: [
                "Richtig",
                "Falsch"
            ],
            correct: 0 // Richtig
        },
        
        // Erklärung der Abkürzungen
        {
            question: "Wofür steht die Abkürzung TN-S-Netz?",
            answers: [
                "Terra Neutral Separate Netz",
                "Transformer Neutral Separate Netz",
                "Terre-Neutral-Séparé Netz",
                "Tensiometer Network Separate"
            ],
            correct: 2 // Terre-Neutral-Séparé Netz
        },
        {
            question: "Wofür steht die Abkürzung TT-Netz?",
            answers: [
                "Terre-Terre Netz",
                "Tension-Tension Netz",
                "Transformer-Transformer Netz",
                "Telecommunication-Television Netz"
            ],
            correct: 0 // Terre-Terre Netz
        },
        {
            question: "Wofür steht die Abkürzung IT-Netz?",
            answers: [
                "Insulated-Terre Netz",
                "Isolé-Terre Netz",
                "Independent-Terre Netz",
                "Internal-Tension Netz"
            ],
            correct: 1 // Isolé-Terre Netz
        },
        
        // Fragen zu spezifischen Begriffen
        {
            question: "Was ist ein PEN-Leiter?",
            answers: [
                "Ein Leiter, der die Funktion von Schutzleiter (PE) und Neutralleiter (N) kombiniert.",
                "Ein Leiter, der ausschließlich als Erdleiter verwendet wird.",
                "Ein Leiter, der ausschließlich im IT-Netz verwendet wird.",
                "Ein Leiter, der die Funktion von Phase (L) und Neutralleiter (N) kombiniert."
            ],
            correct: 0 // Ein Leiter, der die Funktion von Schutzleiter (PE) und Neutralleiter (N) kombiniert.
        },
        {
            question: "Warum wird der PEN-Leiter in PE und N getrennt?",
            answers: [
                "Um die Verwendung von FI-Schutzschaltern (RCDs) zu ermöglichen.",
                "Um den Stromfluss zu erhöhen.",
                "Um Platz in der Verteilerdose zu sparen.",
                "Um die Leitungskosten zu reduzieren."
            ],
            correct: 0 // Um die Verwendung von FI-Schutzschaltern (RCDs) zu ermöglichen.
        },
  

    ],

    Prüfung: [

            {
                question: "Welche Prüfungen sind gemäß DGUV-Information 203-070 vorgeschrieben?",
                answers: ["Sichtprüfung", "Messungen", "Funktionsprüfung", "Alle genannten"],
                correct: 3
            },
            {
                question: "Welche Messungen müssen bei der Prüfung ortsveränderlicher elektrischer Arbeitsmittel durchgeführt werden?",
                answers: ["Schutzleiterwiderstand", "Isolationswiderstand", "Schutzleiterstrom", "Berührungsstrom"],
                correct: [0, 1, 2, 3]
            },
            {
                question: "Eine Sichtprüfung kann mögliche Schäden an einem Kabelmantel aufdecken.",
                answers: ["Richtig", "Falsch"],
                correct: 0
            },
            {
                question: "Ein Isolationswiderstand von weniger als 1 MΩ ist bei elektrischen Arbeitsmitteln unbedingt zulässig.",
                answers: ["Richtig", "Falsch"],
                correct: 1
            },
            {
                question: "Darf eine elektrotechnisch unterwiesene Person (EUP) die Prüfungen gemäß DGUV-Information 203-070 eigenständig durchführen?",
                answers: ["Ja", "Nein"],
                correct: 1
            },
            {
                question: "Welche Prüfschritte müssen bei der Sichtprüfung beachtet werden?",
                answers: ["Verfärbungen and Steckverbindungen", "Beschädigungen am Kabelmantel", "Lockere oder beschädigte Kontakte", "Funktionsprüfung"],
                correct: [0, 1, 2]
            },
            {
                question: "Welche Anforderungen werden an die Prüfperson gestellt?",
                answers: ["Fachwissen über die Vorschriften", "Kenntnisse der Prüfvorgehensweise", "Fähigkeit zur Dokumentation der Prüfungen", "Erfahrungen im Umgang mit elektrischen Arbeitsmitteln"],
                correct: [0, 1, 2, 3]
            },
    {
        question: "Was versteht man unter 'ortsveränderlichen elektrischen Arbeitsmitteln'?",
        answers: [
            "Geräte, die ständig an einen festen Ort gebunden sind",
            "Geräte, die nicht an einen festen Ort gebunden sind und bewegt werden können",
            "Geräte, die für den Einsatz in Explosion gefährdeten Bereichen zugelassen sind"
        ],
        correct: 1
    },
    {
        question: "Welche Prüfungen sind bei ortsveränderlichen elektrischen Arbeitsmitteln durchzuführen?",
        answers: [
            "Sichtprüfung",
            "Isolationswiderstandsprüfung",
            "Funktionsprüfung",
            "Prüfung des Kabels und der Stecker"
        ],
        correct: [0, 1, 2, 3]
    },
            {
                question: "Welche Prüfungen müssen bei Betriebsmitteln der Schutzklasse 2 durchgeführt werden?",
                answers: ["Sichtprüfung", "Isolationswiderstandsmessung", "Schutzleiterwiderstandsmessung", "Funktionsprüfung"],
                correct: [0, 1, 3]
            },
            {
                question: "Welche Merkmale zeichnen Geräte der Schutzklasse 3 aus?",
                answers: ["Betrieb mit Sicherheitskleinspannung (SELV)", "Benötigung eines Schutzleiters", "Doppelte Isolierung", "Nutzung in feuchten Umgebungen ohne Gefahr"],
                correct: [0, 2, 3]
            },
            {
                question: "Betriebsmittel der Schutzklasse 3 dürfen nur mit Sicherheitskleinspannung betrieben werden.",
                answers: ["Richtig", "Falsch"],
                correct: 0
            },
            {
                question: "Ist eine Funktionsprüfung bei allen Schutzklassen notwendig?",
                answers: ["Ja", "Nein"],
                correct: 0
            },
            {
                question: "In welchem Umfeld werden SELV-Systeme häufig verwendet?",
                answers: ["Feuchträume", "Kinderspielzeug", "Industriekontrollen", "Medizinische Geräte"],
                correct: [0, 1, 3]
            },
            {
                question: "SELV sorgt dafür, dass auch bei vorhersehbaren Fehlerzuständen keine gefährliche Berührungsspannung auftreten kann.",
                answers: ["Richtig", "Falsch"],
                correct: 0
            },


    ],

    Unfallverhütung: [

            {
                question: "Was ist der Hauptzweck der DGUV Vorschrift 3 ?",
                answers: ["Schutz vor elektrischen Gefahren", "Kosteneinsparung bei der Energieversorgung", "Effizienzsteigerung elektrischer Anlagen", "Verkürzung der Prüfintervalle"],
                correct: 0
            },
            {
                question: "Wer darf Arbeiten unter Spannung (AuS) gemäß DGUV Vorschrift 3 durchführen ?",
                answers: ["Jeder Mitarbeiter", "Nur elektrotechnisch unterwiesene Personen", "Nur Elektrofachkräfte mit spezieller AuS-Unterweisung", "Nur der Arbeitgeber"],
                correct: 2
            },
            {
                question: "Welche persönliche Schutzausrüstung (PSA) ist bei Arbeiten unter Spannung unerlässlich ?",
                answers: ["Sicherheitsschuhe", "Helm", "Schutzhandschuhe", "Alle genannten Schutzmittel"],
                correct: 3
            },
            {
                question: "Welche Mindestanforderungen müssen erfüllt sein, bevor Arbeiten unter Spannung durchgeführt werden dürfen ?",
                answers: ["Gefährdungsbeurteilung", "Arbeitsfreigabe durch den Vorgesetzten", "AuS-Unterweisung", "Verfügbarkeit der notwendigen PSA"],
                correct: [0, 1, 2, 3]
            },
            {
                question: "Arbeiten unter Spannung dürfen nur durchgeführt werden, wenn keine andere Arbeitsmethode möglich ist.",
                answers: ["Richtig", "Falsch"],
                correct: 0
            },
            {
                question: "Die DGUV Vorschrift 3 erlaubt es, Arbeiten unter Spannung ohne schriftliche Arbeitsfreigabe durchzuführen.",
                answers: ["Richtig", "Falsch"],
                correct: 1
            },
            {
                question: "Welche Schritte sind gemäß DIN VDE 0105-100 vor der Durchführung von Arbeiten unter Spannung notwendig ?",
                answers: ["Erstellen einer Gefährdungsbeurteilung", "Überprüfen der PSA", "Informieren der zuständigen Aufsichtsbehörde", "Prüfung des Arbeitsbereichs und Geräte auf Sicherheit"],
                correct: [0, 1, 3]
            },
            {
                question: "Ab welcher Spannung gilt eine Arbeit als \"Arbeiten unter Spannung\"?",
                answers: ["12 Volt", "24 Volt", "50 Volt AC oder 120 Volt DC", "230 Volt"],
                correct: 2
            },
            {
                question: "\"Arbeiten unter Spannung\" sind nur bei Hochspannungsanlagen erforderlich.",
                answers: ["Richtig", "Falsch"],
                correct: 1
            },
            {
                question: "Eine Gefährdungsbeurteilung ist vor Beginn der Arbeiten unter Spannung notwendig.",
                answers: ["Richtig", "Falsch"],
                correct: 0
            },
            {
                question: "Ist es notwendig, spezielle Schutzausrüstung (PSA) bei Arbeiten unter Spannung zu tragen ?",
                answers: ["Ja", "Nein"],
                correct: 0
            },
            {
                question: "Darf jede Elektrofachkraft Arbeiten unter Spannung ausführen ?",
                answers: ["Ja", "Nein"],
                correct: 1
            },
{
                question: "Unter welchen Bedingungen darf gemäß elektrotechnischen Regeln unter Spannung gearbeitet werden, wenn keine Grenzwerte festgelegt sind ?",
                answers: [
                    "Wenn der Kurzschlussstrom an der Arbeitsstelle höchstens 3 mA AC oder 12 mA DC beträgt, oder",
                    "Wenn die Energie an der Arbeitsstelle nicht mehr als 350 mJ beträgt, oder",
                    "Wenn durch Isolierung des Standortes oder der aktiven Teile oder durch Potentialausgleich eine Potentialüberbrückung verhindert ist, oder",
                    "Wenn die Berührungsspannung weniger als AC 50 V oder DC 120 V beträgt."
                ],
                correct: [0, 1, 2, 3]
            },
            {
                question: "Wie lautet die erste der fünf Sicherheitsregeln, um im spannungsfreien Zustand zu arbeiten ?",
                answers: ["Gegen Wiedereinschalten sichern", "Spannungsfreiheit feststellen", "Freischalten", "Erden und kurzschließen"],
                correct: 2
            },
            {
                question: "<em>Spannungsfreiheit feststellen</em> ist eine unnötige Maßnahme, wenn die Anlage bereits abgeschaltet wurde.",
                answers: ["Richtig", "Falsch"],
                correct: 1
            },

],


    Erste_Hilfe: [

        
{
    question: "Welche der folgenden Maßnahmen ist die erste und wichtigste bei einem Stromunfall ?",
    answers: ["Den Notruf 112 wählen", "Die verletzte Person ansprechen", "Die Stromquelle deaktivieren", "Erste-Hilfe leisten"],
    correct: 2
},

{
    question: "Welche der folgenden Schutzausrüstungen ist unbedingt notwendig beim Versuch, eine Person von einer Stromquelle zu trennen ?",
    answers: ["Helm", "Gummihandschuhe", "Goggles", "Atemmaske"],
    correct: 1
},

{
    question: "Welche Symptome können bei einem Stromschlag auftreten ?",
    answers: ["Muskelkrämpfe", "Herzrhythmusstörungen", "Verbrennungen", "Schwindel"],
    correct: [0, 1, 2, 3]
},

{
    question: "Welche Verletzungsarten sind typisch bei einem Stromunfall ?",
    answers: ["Verbrennungen", "Knochenbrüche", "Muskelkrämpfe", "Herzstillstand"],
    correct: [0, 1, 2, 3]
},


{
    question: "Welche der folgenden fünf Sicherheitsregel wurde nach Auswertung der Unfall-Statistik am häufigsten nicht beachtet ?",
    answers: ["Freischalten", "Gegen Wiedereinschalten sichern", "Spannungsfreiheit feststellen", "Erden und Kurzschließen", "...abdecken oder abschranken"],
    correct: 2
},


{
    question: "Welches Ereignis stellt einen <em>primären</em> Stromunfall dar ?",
    answers: ["Verblitzung der Augen", "Körperdurchströmung", "Knochenbruch durch Sturz von der Leiter", "Verbrennung durch Lichtbogeneinwirkung"],
    correct: [1, 3]
},


{
    question: "Welche Ereignisse stellen einen <em>sekundären</em> Stromunfall dar ?",
    answers: ["Verblitzung der Augen", "Körperdurchströmung", "Knochenbruch durch Sturz von der Leiter", "Verbrennung durch Lichtbogeneinwirkung"],
    correct: [0, 2]
},


{
    question: "Welche Aussagen sind richtig ?",
    answers: ["Ungeübte Laien können auf Beatmung bei Reanimation verzichten", "Beatmung hat Vorrang zur Herzdruckmassage", "Notruf absetzen und auf Rettungsdienst warten", "Ist man allein und die verunglückte Person bewusstlos, Wiederbelebung starten und nach einer Minute NOTRUF setzen"],
    correct: [0, 3]
},


{
    question: "Welche Aussage ist richtig ?",
    answers: ["Bei Unfällen besteht trotzdem der Eigenschutz bei Rettungsversuchen", "Helfe ich nicht, handelt es sich definitiv um <em>unterlassene</em>Hilfeleistung", "Die Reanimation darf nach drei Minuten abgebrochen werden", "Der Defibrillator darf nur von Ersthelfern bedient werden"],
    correct: 0
},


{
    question: "Welche Aussagen sind falsch ?",
    answers: ["Defibrillatoren sind auch durch Laien bedienbar", "Während Körperdurchströmung Person nicht mit bloßen Händen anfassen", "Bei Niederspannung ist anfassen mit bloßen Händen möglich", "Herzdruckmassage dürfen nur Ersthelfer durchführen"],
    correct: [2, 3]
},

],

    Verantwortung: [


        // Single-Choice Fragen
        {
            question: "Wer ist in einem Unternehmen für die Sicherheit der elektrotechnischen Arbeiten verantwortlich?",
            answers: ["Der Arbeitgeber", "Die Elektrofachkraft", "Die Mitarbeiter", "Die Sicherheitsfachkraft"],
            correct: 0
        },
        {
            question: "Welche Pflicht hat eine verantwortliche Elektrofachkraft (VEFK)?",
            answers: ["Regelmäßige Unterweisungen durchführen", "Alle Arbeiten selbst ausführen", "Nur große Projekte überwachen", "Keine spezielle Pflicht"],
            correct: 0
        },
        {
            question: "Wann muss eine Sicherheitsunterweisung mindestens erfolgen?",
            answers: ["Jährlich", "Alle zwei Jahre", "Monatlich", "Nach Bedarf"],
            correct: 0
        },

        // Multiple-Choice Fragen
        {
            question: "Welche Aufgaben hat eine verantwortliche Elektrofachkraft (VEFK)?",
            answers: [
                "Sicherstellen der Einhaltung von Sicherheitsvorschriften",
                "Schulung von Mitarbeitern",
                "Durchführung aller Prüfungen",
                "Mitwirkung bei Erstellung von Gefährdungsbeurteilungen"
            ],
            correct: [0, 1, 3]
        },
        {
            question: "Welche Dokumente sind für die Sicherheitsverantwortung einer VEFK wichtig?",
            answers: ["Gefährdungsbeurteilungen", "Arbeitsanweisungen", "Mitarbeiterlisten", "Schulungsnachweise"],
            correct: [0, 1, 3]
        },
        {
            question: "Welche Personen müssen regelmäßig zur Arbeitssicherheit unterwiesen werden?",
            answers: ["Alle elektrotechnisch unterwiesenen Personen", "Nur neue Mitarbeiter", "Nur Führungskräfte", "Alle Mitarbeiter mit Zugang zu elektrischen Anlagen"],
            correct: [0, 3]
        },

        // Richtig-Falsch Fragen
        {
            question: "Eine VEFK haftet auch, wenn sie ihre Aufgaben nicht ordnungsgemäß wahrnimmt.",
            answers: ["Richtig", "Falsch"],
            correct: 0
        },
        {
            question: "Jede Elektrofachkraft darf eigenständig Sicherheitsanweisungen ändern.",
            answers: ["Richtig", "Falsch"],
            correct: 1
        },
        {
            question: "Eine Gefährdungsbeurteilung ist nur bei neuen Arbeitsmethoden notwendig.",
            answers: ["Richtig", "Falsch"],
            correct: 1
        },

        // Ja-Nein Fragen
        {
            question: "Muss eine Elektrofachkraft immer eine Arbeitsfreigabe einholen, bevor sie an einer elektrischen Anlage arbeitet?",
            answers: ["Ja", "Nein"],
            correct: 0
        },
        {
            question: "Sind regelmäßige Sicherheitskontrollen in einem Betrieb Pflicht?",
            answers: ["Ja", "Nein"],
            correct: 0
        },
        {
            question: "Müssen alle Elektrofachkräfte jährlich eine Unterweisung erhalten?",
            answers: ["Ja", "Nein"],
            correct: 0
        },

        // Weitere Fragen
        {
            question: "Was gehört zu den Grundpflichten einer verantwortlichen Elektrofachkraft?",
            answers: ["Überwachung der Einhaltung von Vorschriften", "Durchführung aller elektrischen Arbeiten", "Planung von Neubauten", "Erstellung von Rechnungen"],
            correct: 0
        },
        {
            question: "Welche Maßnahmen müssen bei einer Gefährdungsbeurteilung getroffen werden?",
            answers: ["Ermittlung der Gefahren", "Festlegung von Schutzmaßnahmen", "Erstellung eines Arbeitsplans", "Regelmäßige Überprüfung"],
            correct: [0, 1, 3]
        },
        {
            question: "Welche Vorschrift legt die Verantwortung für die elektrische Sicherheit fest?",
            answers: ["DIN VDE 1000-10", "Arbeitsschutzgesetz", "DGUV Vorschrift 3", "BGB"],
            correct: [0, 2]
        },
        {
            question: "Ein Sicherheitsbeauftragter kann die Pflichten der verantwortlichen Elektrofachkraft übernehmen.",
            answers: ["Richtig", "Falsch"],
            correct: 1
        },
        {
            question: "Eine Elektrofachkraft ist immer für die gesamte elektrische Sicherheit im Unternehmen verantwortlich.",
            answers: ["Richtig", "Falsch"],
            correct: 1
        },
        {
            question: "Welche Behörde kann bei Verstößen gegen Sicherheitsvorschriften Sanktionen verhängen?",
            answers: ["BG ETEM", "Arbeitsschutzbehörde", "Elektroinnung", "IHK"],
            correct: [0, 1]
        },
        {
            question: "Wie oft sollten Arbeitsmittel nach DGUV Vorschrift 3 geprüft werden?",
            answers: ["Jährlich", "Alle zwei Jahre", "Nur nach Bedarf", "Alle fünf Jahre"],
            correct: 0
        },
        {
            question: "Welche Konsequenzen drohen bei Missachtung von Sicherheitsvorschriften?",
            answers: ["Bußgelder", "Haftung des Arbeitgebers", "Entzug der Betriebserlaubnis", "Keine Konsequenzen"],
            correct: [0, 1, 2]
        },
        {
            question: "Darf eine elektrotechnisch unterwiesene Person (EUP) eigenständig an elektrischen Anlagen arbeiten?",
            answers: ["Ja", "Nein"],
            correct: 1
        },
        {
            question: "Welche Rolle spielt die Arbeitsfreigabe bei elektrotechnischen Arbeiten?",
            answers: ["Sicherstellung eines gefahrlosen Arbeitsumfelds", "Dokumentation der Arbeitsschritte", "Automatische Genehmigung für Arbeiten", "Unnötige Bürokratie"],
            correct: [0, 1]
        },
        {
            question: "Muss die verantwortliche Elektrofachkraft Schulungen für Mitarbeiter dokumentieren?",
            answers: ["Ja", "Nein"],
            correct: 0
        },
        {
            question: "Welche Schutzmaßnahmen sind bei Arbeiten unter Spannung erforderlich?",
            answers: ["PSA", "Isoliermatten", "Schutzhelme", "Gummihandschuhe"],
            correct: [0, 1, 3]
        }

],


    Sonstiges: [

        { question: "Wer ist für die Umsetzung des Arbeitsschutzes verantwortlich ?", answers: ["Der/Die Unternehmer*in", "Die Angestellten", "Der Staat", "Die Kommunen"], correct: [0, 1] },
        { question: "Was bedeutet PSA im arbeitsschutzrechtlichen Sinne ?", answers: ["Plötzliche-Selbst-Auslösung", "Persönliche Schutzausrüstung", "Public Service Announcement", "Professional Services Automation"], correct: [1] },
        { question: "Wer muss die PSA zur Verfügung stellen ?", answers: ["Der/Die Unternehmer*in", "Die Angestellten selbst", "Je zur Hälfte beide Seiten", "Nur der Staat"], correct: [0] },
        { question: "Wann muss das Personal unterwiesen werden ?", answers: ["Alle 4 Jahre", "Nach Ermessen des Unternehmers/der Unternehmerin", "Mindestens einmal jährlich", "Nach einem Unfall"], correct: [2] },
        { question: "Soll grundsätzlich unter Spannung (AuS) gearbeitet werden ?", answers: ["Ja, wenn der Vorgesetze das erlaubt", "Ja, wenn die Arbeit dadurch schneller beendet werden kann", "Ja, aber nur Ingenieure", "Nein, grundsätzlich nicht"], correct: [3] },
        { question: "Wann gilt eine Anlage als spannungsfrei ?", answers: ["Wenn das Messgerät 0 V anzeigt", "Wenn die Schutzeinrichtung abgeschaltet ist und das Messgerät 0 V anzeigt", "Wenn Anlage freigeschaltet und gegen Wiedereinschalten gesichert ist", "Wenn Anlage freigeschaltet, gegen Wiedereinschalten gesichert und messtechnisch geprüft ist"], correct: [3] },
        { question: "Was bedeutet EFK ?", answers: ["Elektrische Führungskraft", "Elektriker für Kraftstrom", "Elektrofachkraft", "Elektrotechnisch unterwiesene Person"], correct: [2] },
        { question: "Was ist eine VEFK ?", answers: ["Vorstehende Elektrische Führungskraft", "Verantwortliche Elektrotechnisch unterwiesene Person", "Verantwortliche Elektrofachkraft", "Verantwortlicher Elektriker für Kraftstrom"], correct: [2] },
        { question: "Worum handelt es sich um einen Qualifikationsstatus ?", answers: ["EFK", "Ingenieur", "EffT", "Elektroniker"], correct: [0, 2] },
        { question: "Bis zu welchem Wert gilt der Niederspannungsbereich im DC-Bereich ?", answers: ["Bis 50 V", "Bis 120 V", "Bis 1000 V", "Bis 1500 V"], correct: [3] },
        { question: "Bis zu welchem Wert gilt der Niederspannungsbereich im AC-Bereich ?", answers: ["Bis 1 kV", "Bis 60 V", "Bis 1000 V", "Bis 1,5 kV"], correct: [2] },
        { question: "Wer ernennt später nach Theorie und Praxis die Person zur EffT ?", answers: ["Der Eigentümer des Unternehmens", "Der Standortleiter des Unternehmens", "Eine VEFK (interne oder externe)", "Die disziplinarisch verantwortliche Person im Unternehmen"], correct: [2] },
        { question: "In welcher Form hat die Ernennung zu erfolgen ?", answers: ["nur schriftlich, ohne Unterschrift", "nur mündlich", "nur schriftlich mit beiden Unterschriften und Datum", "nur schriftlich mit Datum"], correct: [2] },
        { question: "Muss vor Ernennung zur EffT eine Arbeitsanweisung vorliegen ?", answers: ["Nein, das ist auf freiwilliger Basis", "Ja, diese ergibt sich schließlich aus einer vorgelagerten Gefährdungsbeurteilung", "Ja, eine Gefährdungsbeurteilung ist dagegen nicht notwendig", "Ja, aber nur im Hochspannungsbereich"], correct: [1] },
        { question: "Welche Qualifikation muss eine verantwortliche Elektrofachkraft (VEFK) haben ?", answers: ["Eine Berufsausbildung reicht", "Meister im ET-Bereich", "Techniker*in oder Ingenieur*in im ET-Bereich", "Eigentümernachweis des Unternehmens reicht"], correct: [1, 2] },
        { question: "Wofür steht die engl. Abkürzung AC ?", answers: ["Wechselspannung", "Gleichspannung", "Dreieckspannung", "Rechteckspannung"], correct: [0] },
        { question: "Wofür steht die engl. Abkürzung DC ?", answers: ["Rechteckspannung", "Wechselspannung", "Dreieckspannung", "Gleichspannung"], correct: [3] },
        { question: "Was bedeuten die zwei übereinander stehenden Dreiecke auf Elektrowerkzeug und Schutzausrüstung ?", answers: ["Werkzeug oder Hilfsmittel nicht stapeln", "Doppelte Vorsicht geboten", "Nur für private Zwecke einsetzbar", "Doppeldreieck-Symbol weist Eignung für das Arbeiten an unter Spannung stehenden Teilen aus"], correct: [3] },
        { question: "Wie heißt der Titel des Verbotszeichen P10 ?", answers: ["Schalten verboten", "Einschalten verboten", "Nicht betätigen", "Nicht schalten"], correct: [3] },
        { question: "Wie heißt der Titel des Verbotszeichen P031 ?", answers: ["Schalten verboten", "Einschalten verboten", "Nicht betätigen", "Nicht schalten"], correct: [0] },
        { question: "Darf zur Umsetzung der Regel 'Gegen Wiedereinschalten sichern' auch Isolierband genutzt werden ?", answers: ["Ja, durchaus üblich", "Wenn nichts weiter da ist", "Keinesfalls. Es handelt sich um eine fahrlässige Handlung", "Wenn, dann nur rotes Isolierband"], correct: [2] },

    ],

    Sonstiges: [

        { question: "Wer ist für die Umsetzung des Arbeitsschutzes verantwortlich ?", answers: ["Der/Die Unternehmer*in", "Die Angestellten", "Der Staat", "Die Kommunen"], correct: [0, 1] },
        { question: "Was bedeutet PSA im arbeitsschutzrechtlichen Sinne ?", answers: ["Plötzliche-Selbst-Auslösung", "Persönliche Schutzausrüstung", "Public Service Announcement", "Professional Services Automation"], correct: [1] },
        { question: "Wer muss die PSA zur Verfügung stellen ?", answers: ["Der/Die Unternehmer*in", "Die Angestellten selbst", "Je zur Hälfte beide Seiten", "Nur der Staat"], correct: [0] },
        { question: "Wann muss das Personal unterwiesen werden ?", answers: ["Alle 4 Jahre", "Nach Ermessen des Unternehmers/der Unternehmerin", "Mindestens einmal jährlich", "Nach einem Unfall"], correct: [2] },
        { question: "Soll grundsätzlich unter Spannung (AuS) gearbeitet werden ?", answers: ["Ja, wenn der Vorgesetze das erlaubt", "Ja, wenn die Arbeit dadurch schneller beendet werden kann", "Ja, aber nur Ingenieure", "Nein, grundsätzlich nicht"], correct: [3] },
        { question: "Wann gilt eine Anlage als spannungsfrei ?", answers: ["Wenn das Messgerät 0 V anzeigt", "Wenn die Schutzeinrichtung abgeschaltet ist und das Messgerät 0 V anzeigt", "Wenn Anlage freigeschaltet und gegen Wiedereinschalten gesichert ist", "Wenn Anlage freigeschaltet, gegen Wiedereinschalten gesichert und messtechnisch geprüft ist"], correct: [3] },
        { question: "Was bedeutet EFK ?", answers: ["Elektrische Führungskraft", "Elektriker für Kraftstrom", "Elektrofachkraft", "Elektrotechnisch unterwiesene Person"], correct: [2] },
        { question: "Was ist eine VEFK ?", answers: ["Vorstehende Elektrische Führungskraft", "Verantwortliche Elektrotechnisch unterwiesene Person", "Verantwortliche Elektrofachkraft", "Verantwortlicher Elektriker für Kraftstrom"], correct: [2] },
        { question: "Worum handelt es sich um einen Qualifikationsstatus ?", answers: ["EFK", "Ingenieur", "EffT", "Elektroniker"], correct: [0, 2] },
        { question: "Bis zu welchem Wert gilt der Niederspannungsbereich im DC-Bereich ?", answers: ["Bis 50 V", "Bis 120 V", "Bis 1000 V", "Bis 1500 V"], correct: [3] },
        { question: "Bis zu welchem Wert gilt der Niederspannungsbereich im AC-Bereich ?", answers: ["Bis 1 kV", "Bis 60 V", "Bis 1000 V", "Bis 1,5 kV"], correct: [2] },
        { question: "Wer ernennt später nach Theorie und Praxis die Person zur EffT ?", answers: ["Der Eigentümer des Unternehmens", "Der Standortleiter des Unternehmens", "Eine VEFK (interne oder externe)", "Die disziplinarisch verantwortliche Person im Unternehmen"], correct: [2] },
        { question: "In welcher Form hat die Ernennung zu erfolgen ?", answers: ["nur schriftlich, ohne Unterschrift", "nur mündlich", "nur schriftlich mit beiden Unterschriften und Datum", "nur schriftlich mit Datum"], correct: [2] },
        { question: "Muss vor Ernennung zur EffT eine Arbeitsanweisung vorliegen ?", answers: ["Nein, das ist auf freiwilliger Basis", "Ja, diese ergibt sich schließlich aus einer vorgelagerten Gefährdungsbeurteilung", "Ja, eine Gefährdungsbeurteilung ist dagegen nicht notwendig", "Ja, aber nur im Hochspannungsbereich"], correct: [1] },
        { question: "Welche Qualifikation muss eine verantwortliche Elektrofachkraft (VEFK) haben ?", answers: ["Eine Berufsausbildung reicht", "Meister im ET-Bereich", "Techniker*in oder Ingenieur*in im ET-Bereich", "Eigentümernachweis des Unternehmens reicht"], correct: [1, 2] },
        { question: "Wofür steht die engl. Abkürzung AC ?", answers: ["Wechselspannung", "Gleichspannung", "Dreieckspannung", "Rechteckspannung"], correct: [0] },
        { question: "Wofür steht die engl. Abkürzung DC ?", answers: ["Rechteckspannung", "Wechselspannung", "Dreieckspannung", "Gleichspannung"], correct: [3] },
        { question: "Was bedeuten die zwei übereinander stehenden Dreiecke auf Elektrowerkzeug und Schutzausrüstung ?", answers: ["Werkzeug oder Hilfsmittel nicht stapeln", "Doppelte Vorsicht geboten", "Nur für private Zwecke einsetzbar", "Doppeldreieck-Symbol weist Eignung für das Arbeiten an unter Spannung stehenden Teilen aus"], correct: [3] },
        { question: "Wie heißt der Titel des Verbotszeichen P10 ?", answers: ["Schalten verboten", "Einschalten verboten", "Nicht betätigen", "Nicht schalten"], correct: [3] },
        { question: "Wie heißt der Titel des Verbotszeichen P031 ?", answers: ["Schalten verboten", "Einschalten verboten", "Nicht betätigen", "Nicht schalten"], correct: [0] },
        { question: "Darf zur Umsetzung der Regel 'Gegen Wiedereinschalten sichern' auch Isolierband genutzt werden ?", answers: ["Ja, durchaus üblich", "Wenn nichts weiter da ist", "Keinesfalls. Es handelt sich um eine fahrlässige Handlung", "Wenn, dann nur rotes Isolierband"], correct: [2] },

    ],

    Messtechnik: [


        { question: "Was passiert, wenn ich beim Multimeter DC statt AC einstelle und an einer Steckdose messe ?", answers: ["Das Gerät zeigt 0 V an", "Das Gerät schwankt zwischen - 230 V und + 230 V", "Es zeigt einen Wert um 50 V an", "Das Messgerät gibt einen Piepton aus"], correct: [0] },


        { question: "Das Multmeter zeigt 0 V zwischen beiden Buchsen der Schuko-Steckdose an. Alles Okay ?", answers: ["Nein, es müssen beide Buchsen noch gegen PE gemessen werden", "Ja, immerhin werden 0 V angezeigt", "Nein, es kann auch ein Verdrahtungsfehler vorliegen", "Ja, im schlimmsten Fall rettet mich noch der FI"], correct: [0, 2] },


        { question: "Was passiert, wenn man in den Strommesserbeich schaltet und an 230 V misst ?", answers: ["Nix, Messgerät ist hochohmig genug", "Außer eine Anzeige von 0 V, passiert nicht viel", "Die Gerätesicherung knallt durch", "Ich erschrecke mich und könnte von der Leiter stürzen"], correct: [2, 3] },


        { question: "Mit welchem Messgerät misst man am sichersten die Spannungsfreiheit z.B. in der Haustechnik ?", answers: ["Mit einem zweipoligen Spannungsprüfer", "Mit einem einpoligen Spannungsprüfer", "Mit berührungslosen Spannungsprüfern", "Mit einem Multimeter"], correct: [0] },


        { question: "Was muss getan werden, um Ströme messen zu können ?", answers: ["Das Messgerät in Reihe schalten", "Strommessgerät paralle am Messobjekt halten", "Eine Stromzange einsetzen, wenn möglich", "Über Stromzähler Strom ausrechnen"], correct: [0, 2] },


        { question: "Was sagt die CAT-Kategorie von Messgeräten aus ?", answers: ["Die Kategorien geben Aufschluss, in welchen Bereichen ein Messgerät gefahrlos eingesetzt werden kann", "Diese geben Aufschluss, wer in welchen Bereichen ein Messgerät gefahrlos einsetzen darf", "Sie gibt die maximale Spannungshöhe an, die man damit messen darf", "Sie gibt den maximalen Strom an, den man damit messen darf"], correct: [1] },


        { question: "Was muss vor jeder Verwendung des Messgerätes getan werden ?", answers: ["Überprüfung auf Schäden", "Überprüfung auf Schäden, Eignung und Funktion", "Überprüfung auf Schäden und Eignung", "Überprüfung auf Funktion und Eignung", "Überprüfung auf Eignung"], correct: [1] },


        { question: "Was passiert, bei einer aktiven Anlage mit FI (0,3 A), wenn Sie L gegen Erde (PE) messen und den Druckknopf/die Druckknöpfe betätigen ?", answers: ["Das Messgerät zeigt 0 V an", "Der FI fliegt raus", "Das Messgerät vibriert", "Das Messgerät vibriert und zeigt 230 V an"], correct: [3] },


        { question: "Was passiert, bei einer aktiven Anlage mit FI (0,5 A), wenn Sie L gegen Erde (PE) messen und den Druckknopf/die Druckknöpfe betätigen ?", answers: ["Der FI fliegt raus", "Das Messgerät vibriert und zeigt 230 V an", "Das Messgerät zeigt 0 V an", "Das Messgerät vibriert"], correct: [1] },


        { question: "Was passiert, bei einer aktiven Anlage mit FI (0,03 A), wenn Sie L gegen Erde (PE) messen und den Druckknopf/die Druckknöpfe betätigen ?", answers: ["Der FI fliegt raus", "Das Messgerät vibriert und zeigt 230 V an", "Das Messgerät zeigt 0 V an", "Das Messgerät vibriert"], correct: [0] },


        { question: "Welcher möglicher Fehler liegt vor, wenn Sie zwischen N und PE z.B. um die 50 V messen ?", answers: ["Die Phase L ist nicht da", "Das Messgerät ist defekt", "Eine N-Leiterunterbrechung", "Die Einspeisung des Netzbetreibers funktioniert nicht"], correct: [2] },


        { question: "Welche Drehfeldrichtung muss netzseitig zur Verfügung gestellt werden ?", answers: ["mindestens ein 4-poliges Netz mit Rechtsdrehfeld", "mindestens ein 5-poliges Netz mit Linksdrehfeld", "mindestens ein 4-poliges Netz mit Linksdrehfeld", "mindestens ein 5-poliges Netz mit Rechtsdrehfeld"], correct: [0] },


        { question: "Wie messe ich das Rechtsdrehfeld mit einem 2-poligen Spannungsprüfer ?", answers: ["Eine Messpitze in L1, die andere in L2", "Die Messpitze mit der Kennzeichnung 'L1' in L1, die andere in L2", "Die Messpitze mit der Kennzeichnung 'L1' in L3, die andere mit 'L2' in L1", "Eine Messpitze in L1, die andere in L3"], correct: [1, 2] },


        { question: "Welche Phasenfolge ergibt ein Rechtsdrehfeld ?", answers: ["L1  L2  L3", "L2  L1  L3", "L3  L2  L1", "L3  L1  L2"], correct: [0, 3] },


        { question: "Welche Farbe hatte früher der Schutzleiter PE ?", answers: ["grün", "gelb", "rot", "grau"], correct: [2] },


        { question: "Welche Leiterfarben gelten für L1  L2 und L3 ?", answers: ["braun-schwarz-grau", "schwarz-braun-grau", "Normativ gibt es dafür keine explizite Zuordnung", "grau-schwarz-braun"], correct: [0] },


        { question: "Welche Leiterfarbe galt früher für den N-Leiter ?", answers: ["grau", "blau", "rot", "schwarz"], correct: [0] },


        { question: "Welcher Leiter wurde früher Nulleiter genannt ?", answers: ["Die Phase L", "Der Schutzleiter PE", "Der N Leiter", "Der kombinierte Leiter aus N und PE"], correct: [3] },


        { question: "Spätestens wann muss eine Schutzeinrichtung im TN-S-Netz bei 230 V abschalten ?", answers: ["innerhalb von 400 ms", "innerhalb von 0,4 s", "nach von 30 ms", "innerhalb von 0,2s"], correct: [0, 1] },


        { question: "Spätestens wann muss eine Schutzeinrichtung im TT-Netz bei 230 V abschalten ?", answers: ["innerhalb von 0,2 s", "nach 200 ms", "spätestens nach 0,02 s", "nach 0,2 s"], correct: [0, 3] },


        { question: "Wie groß darf der maximale Differenzfehlerstrom für Personenschutz höchstens sein ?", answers: ["0,3 mA", "0,03 A", "300 mA", "30 mA"], correct: [1, 3] },


        { question: "Was ist das besondere an einen RCD Typ B ?", answers: ["Er kann auch glatte Gleichfehlerströme erfassen", "Ist träger als Typ A", "Gilt nicht für den Personenschutz", "Ist billiger als Typ A"], correct: [0] },

    ],

    Betriebsmittel: [

        { question: "Was bedeutet die Abkürzung FI?", answers: ["Fehlerstromschutzschalter", "Stromschutzschalter", "Fuse-Ampere-Device", "Fehlerspannungsschutzschalter"], correct: [0] },
        { question: "Was ist ein RCD?", answers: ["Ein Fehlerspannungsschutzschalter", "Ein Überspannungsfehlerschutzschalter", "Ein Fehlerstromschutzschalter", "Ein Widerstandsschutzschalter"], correct: [2] },
        { question: "Welche Schutzeinrichtung ist für den Kurzschlussschutz zuständig?", answers: ["Ein LS-Schalter", "Ein Sicherungsautomat", "Ein Fehlerspannungsschutzschalter", "Ein Fehlerstromschutzschalter"], correct: [0] },
        { question: "Löst eine Überstromschutzeinrichtung (ÜSE) auch bei Erdschluss aus?", answers: ["Ja, immer", "Nein, nie", "Bedingt ja, wenn der Erdschlusstrom die Höhe eines Überlast- bzw. Kurzschlusstromes hat", "Bedingt ja, wenn der Erdschlusstrom kleiner ist als der Überlast- bzw. Kurzschlusstrom"], correct: [2] },
        { question: "Welche Aussage trifft auf LS-Schalter der Kategorie B zu?", answers: ["Es ist mindestens der 5-fache Sicherungsnennstrom notwendig, um den Kurzschlussfall sicher abzuschalten", "Ein B-Automat für 16 A benötigt somit maximal 80 A im Kurzschlussfall", "Es ist maximal der 5-fache Sicherungsnennstrom notwendig, um den Kurzschlussfall sicher abzuschalten", "Ein B-Automat für 16 A benötigt somit mindestens 80 A im Kurzschlussfall"], correct: [0, 1] },
        { question: "Wie lauten die produktneutralen Bezeichnung für Neozed und Diazed?", answers: ["D0 und D", "D und D0", "NH", "HH"], correct: [0] },
        { question: "Was bezeichnet die Abkürzung NH bei einer Sicherung?", answers: ["Niederspannungs-Hochleistungssicherung", "Niederstrom-Hochleistungssicherung", "Hochspannungssicherung", "Hochvoltsicherung"], correct: [0] },
        { question: "Welche Gemeinsamkeiten haben LS-Schalter und Motorschutzschalter?", answers: ["Beide schützen vor Kurzschluss und Überlast", "Beide schützen vor Unterspannung und Überlast", "Beide schützen vor Überspannung und Kurzschluss", "Beide schützen vor Überlast und minimalem Kurzschluss"], correct: [0] },
        { question: "Was ist der wesentliche Unterschied zwischen Motorschutzrelais und Motorschutzschalter ?", answers: ["Der Motorschutzschalter schützt gegen Überlast und Nennstrom", "Das Motorschutzrelais schützt nur gegen Überlast", "Das Motorschutzrelais schützt nur gegen Kurzschluss", "Beide sind ein und dasselbe, nur eine andere Bezeichnung"], correct: [1] },
        { question: "Was ist der wesentliche Unterschied zwischen Kabel und Leitung?", answers: ["Leitungen dürfen nur unterirdisch verlegt werden", "Kabel dürfen nur oberirdisch verlegt werden", "Leitungen dürfen grundsätzlich nicht in Erde verlegt werden", "Kabel dürfen grundsätzlich nicht in Erde verlegt werden"], correct: [2] },
        { question: "Müssen feinst- und feindrähtige Leiter immer verzinnt werden?", answers: ["Ja, damit eine feste Verbindung entsteht", "Diese Leiterarten dürfen nicht (mehr) verzinnt werden", "Nur im Außenbereich ist diese Methode zulässig", "Im Innenbereich braucht nicht verzinnt werden"], correct: [1] },
        { question: "Dürfen fein- und feinstdrähtige Leiter auch ohne Aderendhülse verschraubt werden?", answers: ["Ja, wenn das Drehmoment nicht zu groß ist", "Ja, diese Methode ist immer noch zulässig", "Nein, definitiv nicht", "Wenn sie den gleichen Querschnitt besitzen, ja"], correct: [2] },
        { question: "Welche Schutzklassennummern gelten aktuell für elektrische Betriebsmittel?", answers: ["Schutzklassen 0, 1 und 2", "Schutzklassen A, B und C", "Schutzklassen 1, 2 und 3", "Schutzklassen 1, 2 und 4"], correct: [2] },
        { question: "Bei welcher Schutzklasse muss ein PE angeschlossen werden?", answers: ["Bei Schutzklasse 3", "Bei Schutzklasse 1", "Bei Schutzklasse 2", "Bei jeder Schutzklasse"], correct: [1] },
        { question: "Welche Schutzklasse liegt bei Betriebsmittel mit Schukosteckern vor?", answers: ["Schutzklasse 2", "Schutzklasse 0", "Schutzklasse 3", "Schutzklasse 1"], correct: [3] },
        { question: "Was bedeutet das 'J' in der Bezeichnung: NYM-J 3x1,5<sup>2</sup> ?", answers: ["Es liegt ein Schutzleiter vor", "Es liegt kein PE vor", "Es liegt kein Schutzleiter vor", "Es liegt ein PE vor"], correct: [0, 3] },
        { question: "Ist das NYM ein Kabel oder eine Leitung?", answers: ["Eine Leitung", "Ein Kabel", "weder noch", "Wenn es im Außenbereich liegt, ein Kabel, sonst eine Leitung"], correct: [0] },
        { question: "Ist das NYY eine Leitung oder ein Kabel?", answers: ["Eine Leitung", "Ein Kabel", "weder noch", "Wenn es im Innenbereich liegt, ein Kabel, sonst eine Leitung"], correct: [1] },

    ],

};

const categoryNames = Object.keys(questions);

let currentCategory = '';
let score = 0;
let questionIndex = 0;
let categoryQuestions = [];
let selectedAnswers = [];
let multiChoiceTimer = null;
let startTime;

function disableCompletedCategories() {
    const allCategoryButtons = document.querySelectorAll('.category-btn');
    allCategoryButtons.forEach(button => {
        const category = button.getAttribute('data-category');
        const savedData = localStorage.getItem(`progress_${category}`);
        if (savedData) {
            const progressData = JSON.parse(savedData);
            if (progressData.questionIndex >= questions[category].length) {
                button.disabled = true;
                button.classList.add('completed'); // Klasse für Styling hinzufügen
            }
        }
    });
}

// Fortschritt speichern
function saveProgress() {
    const progressData = {
        questionIndex: questionIndex,
        score: score
    };
    localStorage.setItem(`progress_${currentCategory}`, JSON.stringify(progressData));
}

// Fortschritt laden
function loadProgress(category) {
    const savedData = localStorage.getItem(`progress_${category}`);
    if (savedData) {
        const progressData = JSON.parse(savedData);
        return progressData;
    }
    return { questionIndex: 0, score: 0 }; // Falls kein Fortschritt existiert, von vorne starten
}

// Anpassung von loadCategory, um Fortschritt zu laden
function loadCategory(category) {
    saveProgress(); // Vor dem Wechsel den aktuellen Fortschritt speichern
    
    const allCategoryButtons = document.querySelectorAll('.category-btn');
    allCategoryButtons.forEach(btn => btn.classList.remove('selected'));

    const selectedButton = document.querySelector(`.category-btn[data-category="${category}"]`);
    if (selectedButton) {
        selectedButton.classList.add('selected');
    }
    currentCategory = category;
    const progress = loadProgress(category); // Fortschritt laden
    score = progress.score;
    questionIndex = progress.questionIndex;
    categoryQuestions = questions[category];

    document.getElementById('score-container').style.display = 'none';

    selectedAnswers = [];
    multiChoiceTimer = null;
    startTime = new Date();

    displayQuestion();
}

function calculateMedal(percentage) {
    if (percentage >= 92) return "Goldmedaille";
    if (percentage >= 81) return "Silbermedaille";
    if (percentage >= 67) return "Bronzemedaille";
    return null;
}

function getMedalImage(medal) {
    if (medal === "Goldmedaille") {
        return "Goldmedailie.jpg";
    } else if (medal === "Silbermedaille") {
        return "Silbermedailie.jpg";
    } else if (medal === "Bronzemedaille") {
        return "Bronzemedailie.jpg";
    }
    return null;
}

function pointsNeededForNextMedal(percentage) {
    if (percentage < 67) return 67 - percentage;
    if (percentage < 81) return 81 - percentage;
    if (percentage < 92) return 92 - percentage;
    return 0;
}

function calculateGrade(percentage) {
    if (percentage >= 100) return 1.0;
    if (percentage >= 98) return 1.1;
    if (percentage >= 96) return 1.2;
    if (percentage >= 94) return 1.3;
    if (percentage >= 92) return 1.4;
    if (percentage === 91) return 1.5;
    if (percentage === 90) return 1.6;
    if (percentage === 89) return 1.7;
    if (percentage === 88) return 1.8;
    if (percentage === 87) return 1.9;
    if (percentage >= 85) return 2.0;
    if (percentage === 84) return 2.1;
    if (percentage === 83) return 2.2;
    if (percentage === 82) return 2.3;
    if (percentage === 81) return 2.4;
    if (percentage >= 79) return 2.5;
    if (percentage === 78) return 2.6;
    if (percentage === 77) return 2.7;
    if (percentage >= 75) return 2.8;
    if (percentage === 74) return 2.9;
    if (percentage >= 72) return 3.0;
    if (percentage === 71) return 3.1;
    if (percentage === 70) return 3.2;
    if (percentage >= 68) return 3.3;
    if (percentage === 67) return 3.4;
    if (percentage >= 65) return 3.5;
    if (percentage >= 63) return 3.6;
    if (percentage === 62) return 3.7;
    if (percentage >= 60) return 3.8;
    if (percentage >= 58) return 3.9;
    if (percentage >= 56) return 4.0;
    if (percentage >= 54) return 4.1;
    if (percentage >= 53) return 4.2;
    if (percentage === 51) return 4.3;
    if (percentage === 50) return 4.4;
    if (percentage >= 48) return 4.5;
    if (percentage >= 46) return 4.6;
    if (percentage >= 44) return 4.7;
    if (percentage >= 42) return 4.8;
    if (percentage >= 40) return 4.9;
    if (percentage >= 38) return 5.0;
    if (percentage >= 36) return 5.1;
    if (percentage >= 34) return 5.2;
    if (percentage >= 32) return 5.3;
    if (percentage === 30) return 5.4;
    if (percentage >= 25) return 5.5;
    if (percentage >= 20) return 5.6;
    if (percentage >= 15) return 5.7;
    if (percentage >= 10) return 5.8;
    if (percentage >= 5) return 5.9;
    return 6.0;
}

function displayQuestion() {
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = '';

    if (questionIndex >= categoryQuestions.length) {
        displayScore();
        disableCompletedCategories();
        if (allCategoriesCompleted()) {
            showOverallResultButton();
        }
        return;
    }

    const questionData = categoryQuestions[questionIndex];

    const questionElement = document.createElement('div');
    questionElement.classList.add('question');

    const questionNumber = document.createElement('div');
    questionNumber.classList.add('question-number');
    questionNumber.innerHTML = `Frage ${questionIndex + 1} von ${categoryQuestions.length}`;
    questionElement.appendChild(questionNumber);

    const questionTitle = document.createElement('h3');
    questionTitle.innerHTML = questionData.question;
    questionElement.appendChild(questionTitle);

    const answersContainer = document.createElement('div');
    answersContainer.classList.add('answers-container');

    questionData.answers.forEach((answer, answerIndex) => {
        const answerButton = document.createElement('button');
        answerButton.innerHTML = answer;
        answerButton.classList.add('answer-btn');
        answerButton.onclick = function() {
            handleAnswerClick(answerIndex, answerButton);
        };
        answersContainer.appendChild(answerButton);
    });

    questionElement.appendChild(answersContainer);
    questionContainer.appendChild(questionElement);
}

function handleAnswerClick(answerIndex, answerButton) {
    const questionData = categoryQuestions[questionIndex];
    if (Array.isArray(questionData.correct)) {
        if (selectedAnswers.includes(answerIndex)) {
            return;
        }
        selectedAnswers.push(answerIndex);

        if (questionData.correct.includes(answerIndex)) {
            answerButton.classList.add('selected');
        } else {
            answerButton.classList.add('wrong');
        }

        if (selectedAnswers.length < questionData.correct.length) {
            updateTempFeedback("Da fehlt noch was!");
        } else if (selectedAnswers.length === questionData.correct.length) {
            removeTempFeedback();
            const allAnswerButtons = answerButton.parentElement.querySelectorAll('button');
            allAnswerButtons.forEach(btn => btn.disabled = true);

            const isCorrect = arraysEqualIgnoreOrder(selectedAnswers, questionData.correct);
            if (isCorrect) {
                score++;
            }
            showFeedback(isCorrect);
            selectedAnswers = [];
        }
    } else {
        const answersContainer = answerButton.parentElement;
        const allAnswerButtons = answersContainer.querySelectorAll('button');
        allAnswerButtons.forEach(btn => btn.disabled = true);

        const isCorrect = (answerIndex === questionData.correct);
        if (isCorrect) {
            answerButton.classList.add('selected');
            score++;
        } else {
            answerButton.classList.add('wrong');
        }
        showFeedback(isCorrect);

        if (questionIndex >= categoryQuestions.length - 1) {
            saveProgress();
            disableCompletedCategories();
        }
    }
}

function arraysEqualIgnoreOrder(a, b) {
    if (a.length !== b.length) return false;
    let sortedA = a.slice().sort();
    let sortedB = b.slice().sort();
    for (let i = 0; i < sortedA.length; i++) {
        if (sortedA[i] !== sortedB[i]) return false;
    }
    return true;
}

function updateTempFeedback(message) {
    let questionContainer = document.getElementById('question-container');
    let tempFeedback = document.getElementById('temp-feedback');
    if (!tempFeedback) {
        tempFeedback = document.createElement('div');
        tempFeedback.id = 'temp-feedback';
        tempFeedback.classList.add('feedback');
        questionContainer.appendChild(tempFeedback);
    }
    tempFeedback.textContent = message;
}

function removeTempFeedback() {
    let tempFeedback = document.getElementById('temp-feedback');
    if (tempFeedback) {
        tempFeedback.remove();
    }
}

function showFeedback(isCorrect) {
    const feedbackElement = document.createElement('div');
    feedbackElement.classList.add('feedback');
    feedbackElement.classList.add(isCorrect ? 'correct' : 'wrong');
    
    const questionContainer = document.querySelector('.answers-container');
    questionContainer.appendChild(feedbackElement);

    const nextButton = document.createElement('button');
    nextButton.textContent = questionIndex >= categoryQuestions.length - 1 ? "Auswertung" : "Weiter";
    nextButton.classList.add('next-btn');
    nextButton.onclick = function() {
        questionIndex++;
        selectedAnswers = [];
        questionContainer.innerHTML = '';

        if (questionIndex >= categoryQuestions.length) {
            displayScore();
            saveProgress();
            disableCompletedCategories();
            if (allCategoriesCompleted()) {
                showOverallResultButton();
            }
        } else {
            displayQuestion();
        }
    };

    questionContainer.appendChild(nextButton);
}

function displayScore() {
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = "";

    const scoreContainer = document.createElement('div');
    scoreContainer.id = 'score-container';
    scoreContainer.style.display = 'block';
    scoreContainer.style.position = 'relative';
    scoreContainer.style.top = '20px';
    scoreContainer.style.textAlign = 'center';
    
    const correctAnswers = score;
    const wrongAnswers = categoryQuestions.length - score;
    const percentage = Math.round((correctAnswers / categoryQuestions.length) * 100);
    const grade = calculateGrade(percentage);

    const scoreTitle = document.createElement('h3');
    scoreTitle.textContent = `Dein Ergebnis aus Kategorie ${currentCategory}:`;
    scoreContainer.appendChild(scoreTitle);

    const chartContainer = document.createElement('div');
    chartContainer.style.width = '100%';
    chartContainer.style.maxWidth = '400px';
    chartContainer.style.margin = 'auto';

    if (correctAnswers > 0) {
        const correctBar = document.createElement('div');
        correctBar.style.height = '30px';
        correctBar.style.width = percentage + '%';
        correctBar.style.backgroundColor = '#4caf50';
        correctBar.style.color = 'white';
        correctBar.style.lineHeight = '30px';
        correctBar.textContent = `Richtig: ${correctAnswers}`;
        chartContainer.appendChild(correctBar);
    }

    if (wrongAnswers > 0) {
        const wrongBar = document.createElement('div');
        wrongBar.style.height = '30px';
        wrongBar.style.width = (100 - percentage) + '%';
        wrongBar.style.backgroundColor = '#f44336';
        wrongBar.style.color = 'white';
        wrongBar.style.lineHeight = '30px';
        wrongBar.textContent = `Falsch: ${wrongAnswers}`;
        chartContainer.appendChild(wrongBar);
    }

    const percentageText = document.createElement('p');
    percentageText.textContent = `Erfolgsquote: ${percentage}%`;
    scoreContainer.appendChild(chartContainer);
    scoreContainer.appendChild(percentageText);

    const gradeText = document.createElement('p');
    gradeText.textContent = `Note: ${grade}`;
    scoreContainer.appendChild(gradeText);

    const medal = calculateMedal(percentage);
    let medalText = '';
    if (medal) {
        if (medal === 'Goldmedaille') {
            medalText = 'Glückwunsch :-) Gold für Sie !!!';
        } else if (medal === 'Silbermedaille') {
            medalText = 'Glückwunsch :-) Silber für Sie !!!';
        } else if (medal === 'Bronzemedaille') {
            medalText = 'Glückwunsch :-) Bronze für Sie !!!';
        }

        const medalElement = document.createElement('p');
        medalElement.textContent = medalText;
        medalElement.style.fontSize = '18px';
        medalElement.style.fontWeight = 'bold';
        medalElement.style.color = medal === "Bronzemedaille" ? '#cd7f32' : 
                                     (medal === "Silbermedaille" ? '#c0c0c0' : '#ffd700');

        const medalImage = document.createElement('img');
        medalImage.src = getMedalImage(medal);
        medalImage.style.width = '100px';
        medalImage.style.display = 'block';
        medalImage.style.margin = '10px auto';

        scoreContainer.appendChild(medalElement);
        scoreContainer.appendChild(medalImage);
    }

    questionContainer.appendChild(scoreContainer);

    if (allCategoriesCompleted()) {
        showOverallResultButton();
    }
}

function displayOverallScore() {
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = "";

    const resultsContainer = document.createElement('div');
    resultsContainer.classList.add('results-container');

    let totalCorrectAnswers = 0;
    let totalQuestions = 0;

    categoryNames.forEach(category => {
        const savedData = localStorage.getItem(`progress_${category}`);
        if (savedData) {
            const progressData = JSON.parse(savedData);
            totalCorrectAnswers += progressData.score;
            totalQuestions += questions[category].length;

            const correctAnswers = progressData.score;
            const wrongAnswers = questions[category].length - correctAnswers;
            const percentage = Math.round((correctAnswers / questions[category].length) * 100);
            const grade = calculateGrade(percentage);

            const categoryResult = document.createElement('div');
            categoryResult.classList.add('category-result');

            const scoreTitle = document.createElement('h3');
            scoreTitle.classList.add('result-title');
            scoreTitle.textContent = `Ergebnis aus Kategorie ${category}:`;
            categoryResult.appendChild(scoreTitle);

            const chartContainer = document.createElement('div');
            chartContainer.style.width = '100%';
            chartContainer.style.maxWidth = '400px';
            chartContainer.style.margin = 'auto';

            if (correctAnswers > 0) {
                const correctBar = document.createElement('div');
                correctBar.style.height = '30px';
                correctBar.style.width = percentage + '%';
                correctBar.style.backgroundColor = '#4caf50';
                correctBar.style.color = 'white';
                correctBar.style.lineHeight = '30px';
                correctBar.textContent = `Richtig: ${correctAnswers}`;
                chartContainer.appendChild(correctBar);
            }

            if (wrongAnswers > 0) {
                const wrongBar = document.createElement('div');
                wrongBar.style.height = '30px';
                wrongBar.style.width = (100 - percentage) + '%';
                wrongBar.style.backgroundColor = '#f44336';
                wrongBar.style.color = 'white';
                wrongBar.style.lineHeight = '30px';
                wrongBar.textContent = `Falsch: ${wrongAnswers}`;
                chartContainer.appendChild(wrongBar);
            }

            const percentageText = document.createElement('p');
            percentageText.textContent = `Erfolgsquote: ${percentage}%`;
            categoryResult.appendChild(chartContainer);
            categoryResult.appendChild(percentageText);

            const gradeText = document.createElement('p');
            gradeText.textContent = `Note: ${calculateGrade(percentage)}`;
            categoryResult.appendChild(gradeText);

            const medal = calculateMedal(percentage);
            let medalText = '';
            if (medal) {
                if (medal === 'Goldmedaille') {
                    medalText = 'Glückwunsch :-) Gold für Sie !!!';
                } else if (medal === 'Silbermedaille') {
                    medalText = 'Glückwunsch :-) Silber für Sie !!!';
                } else if (medal === 'Bronzemedaille') {
                    medalText = 'Glückwunsch :-) Bronze für Sie !!!';
                }

                const medalElement = document.createElement('p');
                medalElement.textContent = medalText;
                medalElement.style.fontSize = '18px';
                medalElement.style.fontWeight = 'bold';
                medalElement.style.color = medal === 'Bronzemedaille' ? '#cd7f32' :
                                             (medal === 'Silbermedaille' ? '#c0c0c0' : '#ffd700');

                const medalImage = document.createElement('img');
                medalImage.src = getMedalImage(medal);
                medalImage.style.width = '100px';
                medalImage.style.display = 'block';
                medalImage.style.margin = '10px auto';

                categoryResult.appendChild(medalElement);
                categoryResult.appendChild(medalImage);
            }

            resultsContainer.appendChild(categoryResult);
        }
    });

    const totalPercentage = Math.round((totalCorrectAnswers / totalQuestions) * 100);
    const overallMedal = calculateMedal(totalPercentage);
    const overallGrade = calculateGrade(totalPercentage);

    const totalResult = document.createElement('div');
    totalResult.classList.add('category-result');
    
    const totalScoreTitle = document.createElement('h3');
    totalScoreTitle.classList.add('result-title');
    totalScoreTitle.textContent = 'Gesamtergebnis';
    totalResult.appendChild(totalScoreTitle);
    
    const totalScoreText = document.createElement('p');
    totalScoreText.textContent = `Gesamtergebnis: ${totalCorrectAnswers} von ${totalQuestions} Fragen richtig beantwortet. (${totalPercentage}%)`;
    totalResult.appendChild(totalScoreText);

    const totalGradeText = document.createElement('p');
    totalGradeText.textContent = `Gesamtnote: ${overallGrade}`;
    totalResult.appendChild(totalGradeText);

    if (overallMedal) {
        let overallMedalText = '';
        if (overallMedal === 'Goldmedaille') {
            overallMedalText = 'Glückwunsch :-) Gold für Sie !!!';
        } else if (overallMedal === 'Silbermedaille') {
            overallMedalText = 'Glückwunsch :-) Silber für Sie !!!';
        } else if (overallMedal === 'Bronzemedaille') {
            overallMedalText = 'Glückwunsch :-) Bronze für Sie !!!';
        }

        const overallMedalElement = document.createElement('p');
        overallMedalElement.textContent = overallMedalText;
        overallMedalElement.style.fontSize = '18px';
        overallMedalElement.style.fontWeight = 'bold';
        overallMedalElement.style.color = overallMedal === 'Bronzemedaille' ? '#cd7f32' :
                                         (overallMedal === 'Silbermedaille' ? '#c0c0c0' : '#ffd700');

        const overallMedalImage = document.createElement('img');
        overallMedalImage.src = getMedalImage(overallMedal);
        overallMedalImage.style.width = '100px';
        overallMedalImage.style.display = 'block';
        overallMedalImage.style.margin = '10px auto';

        totalResult.appendChild(overallMedalElement);
        totalResult.appendChild(overallMedalImage);
    } else {
        const missingPoints = pointsNeededForNextMedal(totalPercentage);
        const missingPointsText = document.createElement('p');
        missingPointsText.textContent = `Du hast keine Medaille erhalten. Dir fehlen noch ${Math.ceil(missingPoints)}%, um eine Medaille zu erhalten.`;
        totalResult.appendChild(missingPointsText);
    }

    resultsContainer.appendChild(totalResult);
    questionContainer.appendChild(resultsContainer);

    // Sicherstellen, dass der Reset-Button hinzugefügt wird
    // Kommentieren oder entfernen Sie folgende Zeilen:
    /*
    const resetButton = document.createElement('button');
    resetButton.id = "reset-btn";
    resetButton.classList.add('reset-btn');
    resetButton.style.display = 'block';
    resetButton.style.margin = '20px auto';
    resetButton.style.padding = '10px 20px';
    resetButton.style.fontSize = '16px';
    resetButton.style.cursor = 'pointer';
    resetButton.style.width = '200px';
    resetButton.onclick = resetAllProgress;
    questionContainer.appendChild(resetButton);
    */

}

function showOverallResultButton() {
    const questionContainer = document.getElementById('question-container');
    if (!document.getElementById('overall-result-btn')) {
        const overallResultButton = document.createElement('button');
        overallResultButton.textContent = "Gesamtergebnis";
        overallResultButton.id = "overall-result-btn";
        overallResultButton.classList.add('overall-result-btn');
        overallResultButton.style.display = 'block';
        overallResultButton.style.margin = '20px auto';
        overallResultButton.style.padding = '10px 20px';
        overallResultButton.style.fontSize = '16px';
        overallResultButton.style.cursor = 'pointer';
        overallResultButton.style.width = '200px';
        overallResultButton.onclick = displayOverallScore;
        questionContainer.appendChild(overallResultButton);
    }
}

function allCategoriesCompleted() {
    return categoryNames.every(category => {
        const savedData = localStorage.getItem(`progress_${category}`);
        if (savedData) {
            const progressData = JSON.parse(savedData);
            return progressData.questionIndex >= questions[category].length;
        }
        return false;
    });
}

// Reset-Funktion für ein neues Quiz (setzt nur das aktuelle Quiz zurück)
function resetQuiz() {
    document.getElementById("score-container").style.display = "none";
    document.getElementById("question-container").innerHTML = "";
    document.getElementById("category-container").style.display = "flex";
}

// Funktion zum Zufälligen Mischen der Kategorie-Reihenfolge
function shuffleCategories() {
    for (let i = categoryNames.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [categoryNames[i], categoryNames[j]] = [categoryNames[j], categoryNames[i]];
    }
}

// Sicherstellen, dass der Reset-Button funktioniert
document.addEventListener("DOMContentLoaded", () => {
    const resetButton = document.querySelector(".reset-btn");
    if (resetButton) {
        resetButton.addEventListener("click", resetApp);
    }
});

 function checkAllCategoriesCompleted() {
    let allCompleted = allCategoriesCompleted();

    if (allCompleted) {
       /* showResetButton(); */
    }

    disableCompletedCategories();
} 

// Entfernen oder kommentieren Sie diese komplette Funktion
/* 
function showResetButton() {
    const scoreContainer = document.getElementById('score-container');
    if (!document.getElementById('reset-btn')) {
        const resetButton = document.createElement('button');
        resetButton.textContent = "Quiz zurücksetzen";
        resetButton.id = "reset-btn";
        resetButton.classList.add('reset-btn');
        resetButton.style.display = 'block';
        resetButton.style.margin = '20px auto';
        resetButton.style.padding = '10px 20px';
        resetButton.style.fontSize = '16px';
        resetButton.style.cursor = 'pointer';
        resetButton.style.width = '200px';
        resetButton.onclick = resetAllProgress;
        scoreContainer.appendChild(resetButton);
    }
}
*/

function resetAllProgress() {
    categoryNames.forEach(category => {
        localStorage.removeItem(`progress_${category}`);
    });
    shuffleCategories(); // Kategorien mischen
    location.reload();
}

function confirmCategorySwitch(newCategory) {
    if (questionIndex === 0 || questionIndex >= categoryQuestions.length) {
        loadCategory(newCategory);
        return;
    }
    
    const progressPercentage = Math.round((questionIndex / categoryQuestions.length) * 100);
    const scorePercentage = questionIndex > 0 ? Math.round((score / questionIndex) * 100) : 0;
    
    const confirmationMessage = `Du hast ${progressPercentage}% der Aufgaben bearbeitet und bis jetzt ein Ergebnis von ${scorePercentage}% erreicht.\n\nMöchtest du wirklich die Kategorie wechseln?`;
    
    if (confirm(confirmationMessage)) {
        loadCategory(newCategory);
    }
}

// Funktion zum Zurücksetzen des gesamten Fortschritts und Neustart der App
function resetApp() {
    localStorage.clear(); // Löscht alle gespeicherten Daten
    document.getElementById("category-container").style.display = "flex";
    document.getElementById("subcategory-container").style.display = "none";
    document.getElementById("question-container").style.display = "none";
    document.getElementById("score-container").style.display = "none";
    document.getElementById("question-container").innerHTML = "";
    
    // Seite neu laden, um den ursprünglichen Zustand herzustellen
    location.reload();
}

// Funktion zum Zurücksetzen nur des aktuellen Quiz
function resetQuiz() {
    document.getElementById("score-container").style.display = "none";
    document.getElementById("question-container").innerHTML = "";
    document.getElementById("category-container").style.display = "flex";
}


// Anpassung der loadCategories Funktion, um die Bestätigung vor dem Wechsel anzuzeigen
function loadCategories() {
    const categoryContainer = document.getElementById('category-container');
    categoryContainer.innerHTML = '';
    categoryNames.forEach(category => {
        const categoryButton = document.createElement('button');
        categoryButton.classList.add('category-btn');
        categoryButton.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        categoryButton.setAttribute('data-category', category);
        categoryButton.onclick = () => confirmCategorySwitch(category);
        categoryContainer.appendChild(categoryButton);
    });
}

window.onload = function() {
    loadCategories();
};
