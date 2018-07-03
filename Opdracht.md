# Automated Software Validation
# Cedric van Putten, Joyce Lam

## Project

Als programmeur kan je tegenwoordig veel betekenen in de open source wereld. 
Er zijn enorm veel projecten op platformen zoals GitHub waar ze staan te springen om hulp van deze developers. 
Nou kan het leuk zijn voor zo een developer op deze informatie weer te geven van zichzelf zodat hij of zij  een zelf genererende website krijgt. 
Zo kan de developer focussen op wat deze het liefst doet, bijdragen aan de open source community, en daar tegelijk een mooie samenvatting mee kan genereren.

> Een dashboard speciaal gemaakt voor developers die een eigen site willen hebben zonder deze te hoeven onderhouden.

## Techniek

> Keuze: Brainstormen

We hebben brainstormen als techniek gekozen, zodat we zoveel mogelijk ideeën kunnen opdoen. 
Aangezien het een nieuw project is, is brainstormen een van de makkelijkste dingen om te doen, omdat het project ook nog niet voorgedefinieerd is.

Een van ons is de stakeholder, die graag zijn wensen laat horen, de ander is een requirement engineer en zorgt er voor dat de requirements genoteerd zijn en uitvoerbaar kunnen zijn, indien nodig. 

## Vergelijking 

> User Stories en Brainstormen

Het verschil tussen de brainstorm-sessie en het maken van de User Stories, is dat bij Brainstormen veel meer ideeën naar voren komen. 
Bij Brainstormen komen ook niet-relevante zaken aan bod. 
Bij User Stories wordt direct gekeken naar wat een gebruiker nodig heeft, terwijl bij brainstormen dat in mindere mate voorkomt.
	
Wij hebben gekozen voor de directe vorm User Stories, zodat we direct aan de slag kunnen, en niet teveel bijzaken meenemen. 
Ook omdat ons project niet heel groot gaat worden, is het handig om te focussen op de stories die het belangrijkst zijn voor het project en de unit tests.

## Requirements

- Als gebruiker wil ik een infinite scroll kunnen gebruiken zodat ik verder terug in de tijd kan kijken
- Als gebruiker wil ik een github gebruikersnaam kunnen invoeren zodat ik een tijdlijn van deze persoon kan zien
- Als systeem wil ik een github gebruikersnaam kunnen valideren zodat de gebruiker geen gebroken pagina ziet
- Als gebruiker wil ik de kaarten, gesorteerd op meest recente, zien van een github gebruiker zodat ik een overzicht heb wat hij/zij heeft gedaan 
- Als gebruiker wil ik op een kaart kunnen klikken, zodat ik gedetailleerde informatie kan zien over de kaart
- Als gebruiker wil ik een pullrequest-kaart zien zodat ik weet dat de github gebruiker heeft bijgedragen aan de inhoudelijke code van een project.
- Als gebruiker wil ik een issue-kaart zien, zodat ik weet dat een github gebruiker heeft bijgedragen aan een discussie van een project.
- Als gebruiker wil ik een commit-kaart zien zodat ik weet dat de github gebruiker werkt aan een project

## Testing

### "Normal" testing

#### Generic Card component

- Het bestand zelf is [hier te vinden](https://github.com/timeliners/prototype/blob/master/src/components/card/card.tsx). 
- De tests kan je [hier vinden](https://github.com/timeliners/prototype/blob/master/src/components/card/card.test.tsx).

Dit component is relatief simpel, eentje die zich alleen richt op het correct weergeven van de data.
Soms worden deze componenten ook wel "[dumb components](https://medium.com/@thejasonfile/dumb-components-and-smart-components-e7b33a698d43)" of [presentational components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0).

De primaire doel van dit component is het weergeven van de data en daarom wordt dit getest.
Er zijn 3 tests geschreven met meerdere asserties:

1. renders title, subtitle and timestamp
2. renders title, subtitle and timestamp with proper class names
3. renders formatted timestamp with iso timestmaps

Bij test 1 wordt de textuele weergave vergeleken met de verwachtte inhoud.
Aangezien dit onderdeel is van "het weergeven" van de data moet dit onderdeel blijven werken.

In test 2 wordt er gekeken of de elementen de juiste (style) class names bevatten.
Met dit wordt het andere deel van "het weergeven" van de data gevalideerd.
Deze test, samen met test 1, zorgt ervoor dat de primaire taak getest is.

Voor timestamps die volgens de [ISO norm](https://www.ietf.org/rfc/rfc3339.txt) geformat zijn, wordt dit automatisch naar een mooie datum omgezet.
Alhoewel dit niet zijn primaire doel heeft, is het handig om dit getest te hebben.


#### Github "Search" module

- Het bestand zelf is [hier te vinden](https://github.com/timeliners/prototype/blob/master/src/modules/github-search/container.tsx). 
- De tests kan je [hier vinden](https://github.com/timeliners/prototype/blob/master/src/modules/github-search/container.test.tsx).

In de Github Search module, een van de twee modules, moet de gebruikersnaam worden opgegeven.
Hiermee wordt vervolgens de publieke events opgehaald en weergegeven met hulp van kaarten.
We hebben deze module getest, omdat hij relatief makkelijk, maar absoluut nodig is in de normale gebruikers-flow.

Dit zijn de stappen die moeten worden genomen:

1. Gebruiker laadt het scherm.
2. Gebruiker voert de username in.
3. Gebruiker drukt op het linkje en gaat naar de events van de ingevulde username.

Wanneer de gebruiker stopt na stap 1 mag hij niet op het linkje drukken, omdat de gebruikersnaam dan nog niet bekend is.
Daarom wordt dit expliciet getest in de test `renders link as disabled when no input is provided`.

Wanneer er een gebruikersnaam is ingevoerd, moet het linkje ook weer actief worden.
Ook moet het naar de juiste URL gericht staan zodat de gebruiker de juiste events ziet.
Omdat de stappen 2 en 3 behoorlijk met elkaar te maken hebben wordt dit binnen een test gevalideerd.
Het zou niet duidelijker worden wanneer deze asserties gesplitst worden, sterker nog, het zorgt voor aanzienlijk duplicate code.
De test die dit uitvoert heet `renders link as enabled when input is provided`.


### Gherkin/BDD testing

Onze eerste ervaring met BDD/Gherkin zijn over het algemeen “interessant” te noemen. 
Wij beiden hebben weinig tot geen ervaring met deze vorm van testen. 
Het duurde dan ook even voordat alles opgezet was en volledig werkte.


Feature: Github Cards

Scenario: Render issue openend
  Given An event of type IssuesEvent
  Given A repository named awesome/work
  When I render the card
  Then The card title should be Opened issue
  And The card subtitle should be awesome/work

Scenario: Render issue comment created
  Given An event of type IssueCommentEvent
  Given A repository named cool/stuff
  When I render the card
  Then The card title should be Created comment
  And The card subtitle should be cool/stuff

Scenario: Render pull request opened
  Given An event of type PullRequestEvent
  Given A repository named code/rocks
  When I render the card
  Then The card title should be Opened pull request
  And The card subtitle should be code/rocks


> Dit bestand is [hier te zien](https://github.com/timeliners/prototype/blob/master/src/components/github-card/index.feature)

We merkte vrijwel meteen op dat het relatief makkelijk was om een (nieuwe) feature test aan te maken. 
Er kan makkelijk een context gecreëerd worden, de actie gedefinieerd worden en de uiteindelijke asserties. 
Ook kan er snel opgeschaald worden naar meerdere tests met een subset en andere combinaties van de bestaande regels.

Helaas merkte we ook een negatief punt op. 
Deze vorm van testing, BDD, werkt eigenlijk alleen goed wanneer de “spelregels” van het systeem weinig tot niet veranderd. 
Denk bijvoorbeeld aan het verwerken van transacties bij een bank, hier zal hoogstens de wijze hoe het afgehandeld wordt veranderen. 
Ook zou dit zeer waarschijnlijk goed werken bij een Game Engine, aangezien hier veel interacties/behaviours voorkomen tussen de game entiteiten.

Voor de wat jongere projecten lijkt het daarom dan ook verstandiger om in ieder geval met TDD te starten. 
Wij zijn daarom dan ook van mening dat wanneer een project zijn afrondende fase zit of voor een lange tijd onderhouden wordt kan BDD een echte meerwaarde bieden.
