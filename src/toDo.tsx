import './App.css'

export const beachPackList = [
  'Bikini/Badehose',
  'Strandtuch',
  'Sonnencreme (hoher Lichtschutzfaktor)',
  'Sonnenbrille',
  'Hut/Kappe',
  'Flip-Flops/Sandalen',
  'Leichte Sommerkleidung',
  'Handtuch',
  'Wasserflasche',
  'Schnorchelmaske (optional)',
  'Buch/Tablet für Entspannung',
  'Reiseset (Shampoo, Duschgel)',
  'Erste-Hilfe-Set',
  'Insektenschutzmittel'
]

export const mountainPackList = [
  'Wanderstiefel',
  'Wandersocken',
  'Wetterfeste Jacke',
  'Thermounterwäsche',
  'Wandershorts/Hose',
  'Funktionelle Oberteile',
  'Wanderrucksack',
  'Regenschirm oder Regenjacke',
  'Sonnenhut',
  'Wanderstöcke (optional)',
  'Trinkflasche',
  'Energieriegel/Snacks',
  'Karte/Kompass oder GPS',
  'Erste-Hilfe-Set',
  'Taschenlampe',
  'Powerbank'
]

export const cityPackList = [
  'Bequeme Schuhe zum Laufen',
  'Stadtplan oder Offline-Karten-App',
  'Tagestasche/Rucksack',
  'Styling-Produkte (klein verpackt)',
  'Abendgarderobe',
  'Kamera/Smartphone mit guter Kamera',
  'Adapter für Steckdosen',
  'Reisepass/Visum',
  'Kreditkarte und Bargeld',
  'Regenschirm (faltbar)',
  'Bequeme Kleidung für Sightseeing',
  'Kopfhörer für Audio-Guides',
  'Wasserflasche (wiederverwendbar)',
  'Hygieneartikel',
  'Medikamente (persönliche)'
]

export const packLists = {
  beach: {
    title: 'Strandferien Packliste',
    items: beachPackList
  },
  mountain: {
    title: 'Bergferien Packliste',
    items: mountainPackList
  },
  city: {
    title: 'Stadtferien Packliste',
    items: cityPackList
  }
}

function ToDo() {
  return (
    <>
    </>
  )
}

export default ToDo

