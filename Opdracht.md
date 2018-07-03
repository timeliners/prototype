# Automated Software Validation

## Project

Als programmeur kan je tegenwoordig veel betekenen in de open source wereld. 
Er zijn enorm veel projecten op platformen zoals GitHub waar ze staan te springen om hulp van deze developers. 
Nou kan het leuk zijn voor zo een developer op deze informatie weer te geven van zichzelf, zodat hij of zij een zelf genererende website krijgt. 
Zo kan de developer focussen op wat deze het liefst doet, namelijk bijdragen aan de open source community, en daar tegelijk een mooie samenvatting mee kan genereren.

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
Bij User Stories wordt direct gekeken naar wat een gebruiker nodig heeft, terwijl bij brainstormen dat met mindere mate voorkomt.
	
Wij hebben gekozen voor de directe vorm User Stories, zodat we direct aan de slag kunnen en niet teveel bijzaken meenemen. 
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

### Gherkin/BDD testing

Onze eerste ervaring met BDD/Gherkin zijn over het algemeen “interessant” te noemen. 
Wij beiden hebben weinig tot geen ervaring met deze vorm van testen. 
Het duurde dan ook even voordat alles opgezet was en volledig werkte.

```
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
```

> Dit bestand is [hier te zien](https://github.com/timeliners/prototype/blob/master/src/components/github-card/index.feature)

We merkte vrijwel meteen op dat het relatief makkelijk was om een (nieuwe) feature test aan te maken. 
Er kan makkelijk een context gecreëerd worden, de actie gedefinieerd worden en de uiteindelijke asserties. 
Ook kan er snel opgeschaald worden naar meerdere tests met een subset en andere combinaties van de bestaande regels.

Helaas merkte we ook een negatief punt op. 
Deze vorm van testing, BDD, werkt eigenlijk alleen goed wanneer de “spelregels” van het systeem weinig tot niet veranderd. 
Denk bijvoorbeeld aan het verwerken van transacties bij een bank, hier zal hoogstens de wijze hoe het afgehandeld word veranderen. 
Ook zou dit zeer waarschijnlijk goed werken bij een Game Engine, aangezien hier veel interacties/behaviours voorkomen tussen de game entiteiten.

Voor de wat jongere projecten lijkt het daarom dan ook verstandiger om in ieder geval met TDD te starten. 
Wij zijn daarom dan ook van mening dat wanneer een project zijn afrondende fase zit of voor een lange tijd onderhouden wordt kan BDD een echte meerwaarde bieden.
