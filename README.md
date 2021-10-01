# Hjemmeoppgave

Vi forventer ikke at du skal bruke mer enn totalt ca. 2-4 timer på å lage en løsning.
Følgende API-kall lister informasjon om Bitcoin de siste 100 dagene: https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=USD&limit=100&api_key=8ae55d463e1bf8d38b4a502ca47512f9b1dec21533ad9af7acb993e8ba952bc2 (N.B. Vi ønsker ikke at du endrer på limit parameteren. La den stå på limit=100)

Lag en nettside som presenterer informasjonen i en stylet tabell med minst 4 kolonner med informasjon om bitcoin. Tabellen skal kun vise 20 dager om gangen, men det skal være mulig å bla gjennom alle dagene API-kallet returnerer ved hjelp av paginering.

## Noen krav:
•	Selve logikken til paginering ønsker vi at du skriver uten bruk av et paginerings bibliotek/plugin.
•	Vi forventer at tabellen og resten av innholdet på siden skal være stylet.
•	Løsningen trenger kun å støtte moderne nettlesere (Chrome, Edge, Firefox, etc).
•	Kjente feil/mangler/tolkninger bør redegjøres ved levering.
 
## Noen tips:
•	Det er lov å bruke biblioteker til utvikling av siden (f.eks. React, Vue, Angular, etc).
•	Bruk heller tid på å gjøre koden lesbar og modulær framfor å bruke tid på "fancy" funksjonalitet/styling
•	Siden løsningen kun skal støtte moderne nettlesere, burde det ikke være behov for biblioteker som jQuery.
•	Time er oppgitt i Unix timestamp
![image](https://user-images.githubusercontent.com/36158300/135627430-d9e3381d-82a5-4dae-b2b9-e8e027155a66.png)
