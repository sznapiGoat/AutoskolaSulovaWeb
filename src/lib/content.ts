// Single source of truth — all strings from scraped-content.json
// Zero invented content. Source: https://autoskolasulova9.webnode.cz/

export const siteContent = {
  business: {
    name: 'Autoškola Barbora Šůlová',
    shortName: 'Autoškola Šůlová',
    tagline: 'Řidičák skupiny B s osobním přístupem a klidem za volantem',
    description: 'Vítáme Vás na stránkách autoškoly Barbory Šůlové. Naším cílem je Vás připravit k úspěšnému složení závěrečné zkoušky tak, aby Váš vstup do silničního provozu byl co nejvíce bezpečný.',
  },

  contact: {
    phone: '+420 721 619 870',
    phoneRaw: '+420721619870',
    email: 'bara.su@seznam.cz',
    address: 'Pod Kostelem 117, Rokycany, 337 01',
    addressNote: 'Učebna, 2. patro',
    hours: 'Po–Pá 08:00–18:00',
    hoursNote: 'Výuku i výcvik lze naplánovat také na víkend a svátky',
    mapsEmbed: 'https://maps.google.com/maps?q=Auto%C5%A1kola+Barbora+%C5%A0%C5%AFlov%C3%A1+Rokycany&output=embed&t=m&z=15&iwloc=near',
    facebook: 'https://www.facebook.com/Autoškola-Barbora-Šůlová-312471922534607/',
  },

  nav: [
    { label: 'O nás',        href: '#o-nas' },
    { label: 'Kurz',         href: '#kurz' },
    { label: 'Instruktorka', href: '#instruktorka' },
    { label: 'Reference',    href: '#reference' },
    { label: 'Přihláška',    href: '#prihlaska' },
    { label: 'Kontakt',      href: '#kontakt' },
  ],

  hero: {
    headline: ['Řidičák skupiny B', 'v bezpečných rukou'],
    subheadline: 'Osobní přístup, dvě cvičná vozidla a výuka v pohodové atmosféře. Přímo v Rokycanech.',
    ctaPrimary: { label: 'Chci se přihlásit', href: '#prihlaska' },
    ctaSecondary: { label: 'Zobrazit ceník', href: '#kurz' },
    bgImage: '/images/zakyne-s-instruktorkou.jpg',
    stats: [
      { value: '44+', label: 'absolventů' },
      { value: '4,4★', label: 'na Google (42 recenzí)' },
      { value: '2017', label: 'rok vzniku' },
    ],
  },

  whyUs: [
    {
      icon: 'UserCheck',
      title: 'Jediná instruktorka',
      body: 'Celý kurz jedete s Barborou. Žádné střídání, žádná cizí tvář. Poznáte se a jezdíte v klidu.',
    },
    {
      icon: 'Car',
      title: 'Dvě výcviková vozidla',
      body: 'Škoda Fabia diesel combi (asistent rozjezdu, senzory, kamera) a Suzuki Swift Natural 95. Zvládnete oba typy.',
    },
    {
      icon: 'Calendar',
      title: 'Flexibilní termíny',
      body: 'Výuka i výcvik o víkendech a svátcích. Možnost svozu z vašeho bydliště v okolí Rokycan.',
    },
    {
      icon: 'Gift',
      title: 'Dárkové poukazy',
      body: 'Darujte řidičák svým blízkým. Poukaz přizpůsobíme příležitosti: narozeninám, Vánocům a dalším.',
    },
  ],

  course: {
    category: 'Skupina B',
    categoryFull: 'Skupina B (osobní automobil)',
    price: 19000,
    priceFormatted: '19 000 Kč',
    priceNote: 'Platnost od 1. 4. 2026',
    installments: 'Možnost rozdělení na 3 splátky',
    storno: 'Storno při neomlouvené absenci méně než 24 h před jízdou: 500 Kč',
    vehicles: [
      {
        name: 'Škoda Fabia',
        detail: 'diesel combi',
        highlights: ['kamera', 'parkovací senzory', 'asistent rozjezdu do kopce'],
        image: '/images/vycvikove-vozidlo.jpg',
        objectPosition: 'center center',
      },
      {
        name: 'Suzuki Swift',
        detail: 'Natural 95',
        highlights: ['benzín', 'kompaktní', 'ideální pro město'],
        image: '/images/vycvikove-vozidlo-suzuki-swift.jpg',
        objectPosition: 'center center',
      },
    ],
    description: 'Provádíme výuku a výcvik na skupinu B (osobní automobil). Výcvik probíhá ve vozidle Škoda Fabia (diesel) combi a dále v Suzuki Swift (natural 95). To znamená, že se vyzkoušíte oba druhy vozidel.',
    classroom: 'Učebna: Pod Kostelem 117, Rokycany 337 01, 2. patro',
    condJizdy: 'Nabízíme také kondiční jízdy skupiny B.',
  },

  instructor: {
    name: 'Barbora Šůlová',
    title: 'Instruktorka a majitelka',
    bio: 'Barbora vás provede celým kurzem od první teorie až po závěrečné zkoušky. Vytváří pohodovou atmosféru, kde se nebojíte chyb. Vše klidně vysvětlí, opraví a vtipně okomentuje. Jak říkají žáci: „není to jen učitelka, je i taxikář a přítel."',
    photo: '/images/zakyne-s-instruktorkou.jpg',
    highlights: [
      'Pohodová atmosféra bez stresu',
      'Přesné a jasné vysvětlení pravidel',
      'Svoz žáků v okolí Rokycan',
      'Výuka i o víkendech a svátcích',
    ],
  },

  application: {
    intro: 'Žádost nutno vytisknout oboustranně na stránku A4.',
    steps: [
      { number: '01', title: 'Stáhněte formuláře', body: 'Vytiskněte žádost oboustranně na A4 a vyplňte. Přiložte lékařský posudek od praktického lékaře.' },
      { number: '02', title: 'Kontaktujte Barboru', body: 'Zavolejte nebo napište. Domluvíme termín první jízdy a předání podkladů.' },
      { number: '03', title: 'Zahajte výcvik', body: 'Platba a splátkový plán se domluví individuálně. A je to, jedeme!' },
    ],
    documents: [
      {
        name: 'Žádost o řidičský průkaz',
        note: 'Vytisknout oboustranně na A4',
        file: 'Zadost.pdf',
        href: 'https://autoskolasulova9.webnode.cz/prihlaska/',
      },
      {
        name: 'Lékařský posudek',
        note: 'Vydat u praktického lékaře',
        file: 'lékař.pdf',
        href: 'https://autoskolasulova9.webnode.cz/prihlaska/',
      },
    ],
  },

  testimonials: [
    { author: 'Daniel Vokáč',       stars: 5, date: 'před 4 měsíci',   text: 'Stručně řečeno, během celého výcviku jsem nepocítil nervozitu, neuvěřitelně pohodlná atmosféra a přístup. Paní Šůlová je naprostý zlatíčko, ale zároveň je velice poctivá a dbá na pravidla. Není to jen učitelka, je i taxikář a přítel, zaveze vás kamkoliv v okolí a během jízdy vypráví vtipné historky. Jezdíte plně vybaveným autem s kamerou, senzory a asistentem rozjezdu.' },
    { author: 'Natálie Roučková',   stars: 5, date: 'před 6 měsíci',   text: 'S autoškolou jsem byla maximálně spokojená. Lekce probíhaly v pohodové atmosféře, instruktorka měla skvělý přístup a vždycky měla pochopení i pro chyby. Skvělá příprava na zkoušky. Mohu jen doporučit všem, kdo hledají kvalitní a lidský přístup. Moc děkuji!!' },
    { author: 'Bárbra Sommerová',   stars: 5, date: 'před rokem',       text: 'Baruško, ještě jednou děkuji za tvůj přístup. Na zkoušky jsem byla připravena parádně, vyzkoušeli jsme si všechny záludnosti silnic, díky Tobě budu jezdit s jistotou.' },
    { author: 'Daniela Hánělová',   stars: 5, date: 'před 3 lety',      text: 'Paní Šůlová je úžasná. Když něco pokazíte, nebude na Vás křičet. V klidu Vám vysvětlí co máte udělat. Je s ní sranda, je velmi milá, můžete si s ní povídat o čemkoliv.' },
    { author: 'Alla Firsova',       stars: 5, date: 'před 2 lety',      text: 'Za mě nejlepší autoškola! Nemohu si vynachválit přátelský a milý přístup. Bára má obrovský smysl pro humor a určitě řídit naučí. Ještě jednou děkuji!' },
    { author: 'Karolina Šlajsová',  stars: 5, date: 'před 3 lety',      text: 'Jen a jen doporučuji! ÚŽASNÁ učitelka, která vás opravdu připraví a skvěle naučí a i se u toho zasmějete.' },
    { author: 'Adéla Zábranská',    stars: 5, date: 'před 2 lety',      text: 'Moc doporučuji. V této autoškole je velmi přátelský přístup a hodně toho naučí. Především je tam kopec srandy. Ještě jednou moc děkuji.' },
    { author: 'Adam Marien Hrdina', stars: 5, date: 'před 4 lety',      text: 'Velice příjemná slečna se kterou se rozhodně nebudete nudit. Nejen, že vás perfektně připraví a pomůže vám se vším s čím si nebudete vědět rady, zároveň vás určitě rozesměje.' },
    { author: 'Pavlína Pham',       stars: 5, date: 'před 2 lety',      text: 'Je to skvělá učitelka. Pomohla mi překonat stres z řízení. Řízení s ní vždy bylo sranda. Na jízdy s ní jsem se vždycky těšila.' },
    { author: 'Vítek Císař',        stars: 5, date: 'před 8 měsíci',    text: 'Výborná autoškola, dobrá komunikace, dovedla mě k úspěšnému splnění závěrečných zkoušek!' },
    { author: 'František Hanzlík',  stars: 5, date: 'před 2 lety',      text: 'Doporučuji, za mne nejlepší autoškola v Rokycanech. Slečna Šůlová je velmi milá a ochotná a připraví vás na všechny záludnosti při závěrečné jízdě, vše vysvětlí a poradí.' },
    { author: 'Lydie Pusina',       stars: 5, date: 'před 2 lety',      text: 'Za mě jen doporučuji, hned na poprvé jsem udělala řidičské oprávnění.' },
    { author: 'Patrik Patasek',     stars: 5, date: 'před 2 lety',      text: 'Barča je skvělá učitelka. Naučí a připraví vás na vše, jak na jízdy tak i na testy. Vřele doporučuji.' },
    { author: 'Roman Gregor',       stars: 5, date: 'před 3 lety',      text: 'Přístup naprosto skvělý, hrozně moc děkuji! Autoškolu jsem si hrozně užil.' },
    { author: 'Jan Opatrný',        stars: 5, date: 'před 3 lety',      text: 'Chtěl bych poděkovat a zároveň doporučit skvělou autoškolu, která vás připraví na většinu situací.' },
  ],
};
