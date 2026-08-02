/* Lisbon walking tour — Chiado, the Baixa, Alfama and the castle.
 * Stop coordinates: Wikipedia geo-tags (Rua Augusta Arch, Lisbon Cathedral, São Jorge
 * Castle, Rossio, Santa Justa Lift) and OpenStreetMap (Praça Luís de Camões, Largo do
 * Carmo, Praça do Comércio, Miradouro de Santa Luzia).
 * NOTE: the English Wikipedia geo-tag for "Praça Luís de Camões" points at Cape Verde,
 * not Lisbon — the OSM position is used here. Largo do Carmo is used for the Carmo stop
 * rather than the convent's own tag, which sits 49 m from the Santa Justa lift and would
 * collide with the 40 m arrival trigger; from the square it is 126 m. Closest pair on
 * this tour is the arch and Praça do Comércio at 71 m, which is clear.
 * Historical content follows the verified Lisbon history page on this site (July 2026).
 */
window.TOUR = {
  slug: 'lisboa',
  // No recorded narration yet — the player speaks the text with the browser
  // voice instead. This flag makes it do so inside the user's tap; see speakStop().
  hasAudio: false,
  tileCache: 'lisboa-tiles-v1',
  center: [38.71084, -9.13682],
  bounds: { north: 38.7159, south: 38.7058, west: -9.1454, east: -9.1282 },
  intro: 'About two and a half kilometres, downhill then decidedly uphill, from Chiado through the Baixa to Alfama and the castle — which is also a walk from the eighteenth century into the twelfth. Almost everything in the flat lower town was built after the morning of 1 November 1755; almost everything on the hill above it was there before. Tap a numbered stop, or turn on GPS and let the stories find you. Two warnings: the last three stops climb hard in the heat, and the Santa Justa lift has a queue you can usually walk around. It starts in Chiado, a few minutes from where we are staying.',
  stops: [
    {
      id: 'camoes',
      name: 'Praça Luís de Camões',
      era: 'the literary quarter · Chiado',
      coords: [38.71057, -9.14343],
      story: [
        'The man on the column is Luís de Camões, who wrote Os Lusíadas in 1572 — the epic that takes Vasco da Gama’s voyage to India and makes a national myth out of it. He is to Portuguese what Shakespeare is to English, and the comparison is closer than usual: he effectively set the shape of the literary language. His own life was a disaster. He lost an eye soldiering in North Africa, was jailed for brawling, spent seventeen years in the East, was shipwrecked in the Mekong — the story is that he swam ashore holding the manuscript above the water — and died poor in 1580, the year Portugal lost its independence to Spain. Portugal’s national day is the date of his death.',
        'This square is the hinge of Chiado, the theatre-and-bookshop quarter, and it has been the city’s literary neighbourhood for two centuries. Downhill on Rua Garrett is A Brasileira, with Fernando Pessoa cast in bronze at a pavement table — Pessoa being the other pole of Portuguese literature, a man who wrote as more than seventy invented authors with their own biographies and quarrelled with each other in print.',
        'One thing that is not obvious as you look around: a great deal of what you see is younger than it appears. In August 1988 a fire started in a department store and burned through the heart of Chiado for most of a day, gutting whole blocks. The rebuilding was led by the architect Álvaro Siza, who chose to restore the eighteenth-century facades and street plan rather than modernise — so the quarter looks continuous, and is in places barely thirty years old behind the stone.'
      ],
      next: 'Downhill and east about 270 metres to Largo do Carmo, the square in front of the roofless church.',
      walk: []
    },
    {
      id: 'carmo',
      name: 'Convento do Carmo — the ruin',
      era: '1389, ruined 1755 · Gothic',
      coords: [38.71193, -9.14084],
      story: [
        'The church in front of you has no roof, and that is not neglect. It is the great visible scar of the Lisbon earthquake, deliberately left as it fell.',
        'On the morning of Saturday 1 November 1755 — All Saints’ Day, with the churches full and candles lit on every altar — three shocks hit the city over several minutes. The Gothic vaults of this church came down onto the congregation. Fires started in the wreckage from the fallen candles and burned for days, and perhaps forty minutes after the shaking a series of waves came up the Tagus and took the crowds who had run to the open ground by the river to escape the falling masonry. Estimates of the dead vary enormously and no honest account settles on a figure; the older confident numbers are guesses. What is certain is that the lower city ceased to exist.',
        'The king’s minister, the future Marquis of Pombal, is supposed to have answered the question of what to do with the line “bury the dead and feed the living.” The attribution may be tidier than the truth, but the policy was real: he had the dead buried at sea against the objections of the church, the looters hanged in public, the ruins surveyed, and within a month a plan drawn for rebuilding the whole lower town on a grid. He also had questionnaires sent to every parish asking how long the shaking lasted and which way animals ran — which is why 1755 is often called the first scientifically studied earthquake.',
        'The argument this church started did not stay in Portugal. If God is just, why Lisbon, and why on All Saints’ Day with the faithful at Mass? Voltaire, in Geneva, wrote a poem on the disaster within weeks of the news and published it the following year — an attack on the comfortable doctrine that all is for the best in the best of all possible worlds. Rousseau wrote back to argue that the dead were killed by the decision to stack a city into six-storey buildings, not by Providence. Three years later Voltaire returned to it in Candide, where Pangloss stands in exactly this rubble explaining to the dying that it could not have been otherwise, and the survivors are marched to an auto-da-fé to prevent further earthquakes — which is a joke about the Rossio, a few hundred metres north, where the real ones were held.',
        'And then, two centuries later, this quiet square was where the dictatorship ended. On 25 April 1974 the officers of the Carnation Revolution surrounded the National Republican Guard barracks here, where Marcelo Caetano had taken refuge, and he surrendered the government to them that evening. Almost nobody was killed. The soldiers put carnations in their gun barrels, which is where the name comes from.'
      ],
      next: 'A short walk east, 126 metres, to the top of the Santa Justa lift.',
      walk: [],
      // The direct .pdf address at Gallica bounces to a bot check, so this points at
      // the reader; the PDF is one click away on its Download button.
      links: [
        {
          label: 'Voltaire’s poem on the disaster (1756)',
          url: 'https://gallica.bnf.fr/ark:/12148/bpt6k5727289v',
          note: 'the Bibliothèque nationale de France’s digitised copy of the Cramer edition; the Download button in its toolbar gives the PDF'
        }
      ]
    },
    {
      id: 'santa-justa',
      name: 'Elevador de Santa Justa',
      era: '1902 · iron',
      coords: [38.71222, -9.13944],
      story: [
        'Forty-five metres of wrought-iron neo-Gothic dropped between the buildings to connect the flat Baixa below with the Chiado terrace above. It opened in 1902, and it is the only true vertical lift left in the city — the Glória and the Bica, which people also call elevators, are funiculars running up slopes on rails.',
        'You will be told, repeatedly and confidently, that Gustave Eiffel built it. He did not. The engineer was Raoul Mesnier du Ponsard, a Portuguese engineer of French descent who built lifts and funiculars all over Portugal — including, as it happens, the original 1891 Guindais funicular beside the medieval wall in Porto. The Eiffel story attaches itself to almost every piece of decorative ironwork in Iberia and is almost always wrong. Mesnier’s own work is good enough not to need the borrowed name.',
        'A practical note worth more than the history: the queue at the bottom is frequently forty minutes long, and it is for a ride of about thirty seconds. You do not need it. The upper walkway can be reached on foot from Largo do Carmo — which is where you are standing — and if you only want the viewing platform at the top, there is a separate and much shorter queue up here.'
      ],
      next: 'North about 190 metres into the Rossio, the big square with the wave-patterned pavement.',
      walk: []
    },
    {
      id: 'rossio',
      name: 'Rossio — Praça de D. Pedro IV',
      era: 'medieval square, rebuilt after 1755',
      coords: [38.71389, -9.13944],
      story: [
        'Lisbon’s living room, and its principal square since the Middle Ages. Everything public has happened here: markets, bullfights, carnivals, popular revolts, celebrations — and executions, including the autos-da-fé of the Inquisition, which were staged in this square for well over two centuries. The Palace of the Inquisition stood on the north side, where the national theatre now is. It is the same uncomfortable double life as the main square in Évora, and again nothing marks it.',
        'The column carries Pedro IV, king of Portugal, who is also — and more consequentially — Pedro I, first emperor of independent Brazil. He declared Brazilian independence in 1822 while heir to the Portuguese throne, ruled Brazil, abdicated it to his five-year-old son, came back across the Atlantic and fought a civil war against his own brother to put his daughter on the Portuguese throne. There is a persistent local joke that the bronze figure is actually a statue of Maximilian of Mexico, bought cheap and re-labelled when news came that Maximilian had been shot. It is a good story and there is no evidence for it.',
        'Look down. The black-and-white wave pattern underfoot is calçada portuguesa, hand-laid limestone and basalt cubes, and this square is where the technique became a Lisbon signature in the 1840s. The pattern was copied to Copacabana in Rio, which is why the most famous beach promenade in Brazil is paved in a design from this square.'
      ],
      next: 'Straight down the grid, about 650 metres south, to the triumphal arch at the bottom of Rua Augusta.',
      walk: [
        'You are now walking through the Baixa Pombalina, and it is worth knowing what you are in. After 1755 the whole lower town was rebuilt from nothing on a rectangular grid of wide straight streets — a radical thing to do to a medieval city. The buildings sit on a hidden timber cage called the gaiola, a braced wooden frame designed to flex and hold together in a quake, and troops were reportedly marched on the ground to test the foundations. It is generally counted as the first systematically earthquake-engineered architecture in Europe, and one of the first pieces of large-scale prefabricated construction anywhere: the parts were made to standard sizes off-site and assembled here.'
      ]
    },
    {
      id: 'arco',
      name: 'Arco da Rua Augusta',
      era: 'begun 1759, finished 1873',
      coords: [38.70840, -9.13680],
      story: [
        'A triumphal arch to commemorate a city surviving itself. It closes the vista down Rua Augusta and opens into the great riverside square beyond.',
        'It took an absurdly long time. The structure was begun as part of Pombal’s reconstruction and was originally designed as a bell tower; the design was changed, money ran out, priorities shifted, and it was only completed in 1873 — more than a century after the earthquake it commemorates. The allegorical group on top, Glory rewarding Valour and Genius, is by the French sculptor Célestin Anatole Calmels. The figures ranged below include Vasco da Gama and the Marquis of Pombal himself, which is a fairly direct piece of self-commemoration for a man who ran the country.',
        'You can go up it. There is a lift and then a short stair to the top of the arch, and the view straight back up the ruled line of Rua Augusta to the Rossio — with the castle on the hill to your left — is the clearest possible illustration of what Pombal did to this city.'
      ],
      next: 'Through the arch, 70 metres, into Praça do Comércio.',
      walk: []
    },
    {
      id: 'comercio',
      name: 'Praça do Comércio',
      era: 'rebuilt after 1755 · the front door',
      coords: [38.70779, -9.13655],
      story: [
        'A hundred and seventy-five metres on each side, open to the river on the fourth. Lisboans still call it the Terreiro do Paço — the Palace Yard — because until 1755 the Ribeira Palace stood here and this was the king’s front garden. The palace, and the royal library of some seventy thousand volumes inside it, were destroyed in a morning.',
        'Pombal rebuilt it as the ceremonial front door of the new city and left the river side deliberately open. That was not an aesthetic choice. Everything that made Portugal rich arrived by water — the spices, the gold, the ships from Brazil and India — and the square was designed so that an arriving visitor came off the Tagus, up the marble steps, and straight into the arcaded offices of the state. The ministries around you gave the square its second meaning: for two centuries “Terreiro do Paço” was Portuguese shorthand for the government itself, the way “Whitehall” is in Britain.',
        'The bronze horseman is José I, the king who reigned through the earthquake and then handed the country to Pombal and went to live in a wooden complex in the hills, having developed a terror of masonry walls that never left him.',
        'One more thing happened here. On 1 February 1908, in this square, King Carlos I and his heir Luís Filipe were shot dead in their carriage by republican assassins. The monarchy lasted two more years. Keep Carlos in mind — the big wooded park in Caldas da Rainha at the end of this trip is named after him, from the years when he was the patron of the spa rather than a man in a carriage.'
      ],
      next: 'East and slightly uphill, about 370 metres, to the cathedral.',
      walk: []
    },
    {
      id: 'se',
      name: 'Sé de Lisboa — the Cathedral',
      era: 'begun 1147 · Romanesque',
      coords: [38.70972, -9.13306],
      story: [
        'Two blunt towers, a rose window, and arrow slits. This does not look like a cathedral so much as a keep with a nave attached, and that is exactly what it was meant to be. It was begun in 1147, in the year the city was taken, on or beside the site of the main mosque — a statement of ownership in stone, in a city whose population had just been conquered.',
        'The siege that produced it was an accident of scheduling. In the summer of 1147 a fleet of perhaps a hundred and sixty ships carrying English, Flemish, Norman and German crusaders bound for the Holy Land put in on the Portuguese coast. Afonso Henriques, who had spent a generation prising Portugal loose from León and calling himself king, offered them the plunder of Lisbon and the goods of its inhabitants if they would stay and help. Most of them stayed. The siege ran seventeen weeks, from late June to 25 October, with starvation inside the walls and mining beneath them. When the city surrendered the terms were broken almost at once and the sack was ugly; an eyewitness account by an Anglo-Norman priest, De expugnatione Lyxbonensi, is unsparing about what his own side did.',
        'An English priest, Gilbert of Hastings, became Lisbon’s first bishop and began this building. Which means the cathedral of the Portuguese capital was founded by an Englishman with an army of foreign crusaders — the same alliance, in embryo, that was formalised at Windsor in 1386 and is still technically in force.',
        'The earthquake took the roof, the chancel and the bell towers; what stands is heavily restored, with a deliberate stripping-back in the twentieth century to make it look more austerely Romanesque than it ever was. Underneath the cloister, excavations have turned up the Roman street, Islamic houses and their pottery, layer on layer — the whole history of the site in a trench.',
        'The small church just downhill is Santo António, built where tradition places the birthplace of the man the rest of the world calls Anthony of Padua. He was born here in Lisbon around 1195, and Lisbon has never entirely forgiven Padua for the branding.'
      ],
      next: 'Uphill into Alfama, about 330 metres, to the terrace at Santa Luzia.',
      walk: [
        'If a small yellow tram grinds past you on this stretch, that is the 28 — the one on all the postcards, running an ordinary service route through streets it barely fits in. It is also, in high season, the most reliably pickpocketed vehicle in Portugal. Ride it early in the morning or not at all.'
      ]
    },
    {
      id: 'santa-luzia',
      name: 'Miradouro de Santa Luzia',
      era: 'the view over Alfama',
      coords: [38.71174, -9.13022],
      story: [
        'A terrace with bougainvillea, tiled panels and one of the best views in the city: the roofs of Alfama tumbling down to the Tagus, the two white domes of São Vicente and Santa Engrácia off to the left, and the river filling the whole background.',
        'The name of the quarter below you is Arabic. Alfama is al-hamma — the springs, the baths — from the hot springs on this hillside that the geographers of Islamic Lisbon praised. For more than four centuries, from 711, this was al-Ushbuna, a prosperous walled port of al-Andalus with Muslim, Christian and Jewish quarters, and its street plan is what you are looking at.',
        'That is the real point of this view. Alfama’s tangle of stairs, blind alleys, and lanes too narrow for a cart and angled to break the wind is not picturesque medieval chaos — it is a functioning Islamic city plan, and it survives because Alfama sits on hard bedrock and largely rode out the 1755 earthquake that flattened the districts below. When you walk down into it you are walking a medieval Arab street map that has simply never stopped being lived in.',
        'It is also the birthplace of fado, which took shape in these streets and the taverns of the docks in the early nineteenth century — sailors’ music, poor people’s music, sung to a Portuguese guitar and disreputable for a long time before it became the national art. There is a good deal of fado for tourists in Lisbon, and some of it is very good; the honest version tends to start late and cost more than you expect.'
      ],
      next: 'Uphill again, the last 380 metres and the steepest of them, to the castle gate.',
      walk: []
    },
    {
      id: 'castelo',
      name: 'Castelo de São Jorge',
      era: 'fortified since the 2nd century BC',
      coords: [38.71389, -9.13361],
      story: [
        'The top of the hill, and the reason there is a city here at all. People have been on this ground since at least the eighth century BC, and the oldest fortifications found on it date from the second century BC. Phoenicians, Carthaginians, Romans and Moors all held it in turn before Afonso Henriques took it in 1147, and it has since been a royal palace, an army barracks, and the home of the national archive.',
        'The Romans, who liked a good origin story, credited the founding of Olisipo to Ulysses himself. It is a charming fiction and nothing more, but it stuck hard enough to shape place names in the city. What is solid is that Julius Caesar raised Olisipo to a municipality around 48 BC, giving its people Roman citizenship and the honorific Felicitas Julia, and that it was a working port shipping garum — fermented fish sauce, the ketchup of the ancient Mediterranean — along with wine, salt and horses.',
        'Be a little sceptical of the battlements. The castle was extensively rebuilt in the late 1930s under the Estado Novo, which cleared away centuries of later buildings that had grown over the ruins and reconstructed the walls and towers to look properly, satisfyingly medieval. It was as much a nationalist stage set as a restoration. The archaeology under your feet is real; a good deal of the crenellation you are photographing is an idea about the Middle Ages from the decade of Salazar.',
        'None of which spoils the view, which is the whole of Lisbon at once — the Baixa grid laid out below, the bridge, the river, and on a clear evening the far bank going gold. This is the end of the walk. The way down through Alfama is more pleasant than the way up, and there is no wrong route: everything eventually reaches the river.'
      ],
      next: 'That completes the tour. Downhill in any direction gets you back to the Baixa in twenty minutes — or stay up here for sunset, which is the single best hour on this hill.',
      walk: []
    }
  ]
};
