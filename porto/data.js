/* Porto historic-center walking tour.
 * All historical facts verified against sources (Wikipedia, UNESCO, official
 * monument pages) on 2026-07-19. Coordinates are Wikipedia geo-tags except
 * Rua das Flores, the Fernandine Walls viewpoint, and Igreja do Carmo
 * (approximate street positions).
 */
window.TOUR = {
  center: [41.1435, -8.6125],
  bounds: { north: 41.1520, south: 41.1360, west: -8.6230, east: -8.6030 },
  intro: 'A two-to-three-hour loop through the historic center of Porto — from the azulejo hall of São Bento station, up to the Romanesque cathedral, out across the great iron bridge, down to the riverside Ribeira, and back up through the Baroque city of Nicolau Nasoni. Porto began as Portus Cale, the Roman-era port widely regarded as the origin of the name “Portugal” itself. Tap a numbered stop, or turn on GPS and let the stories find you.',
  stops: [
    {
      id: 'sao-bento',
      name: 'São Bento Station',
      era: '1916 · Beaux-Arts / azulejo',
      coords: [41.14556, -8.61033],
      story: [
        'Step into the entrance hall and look up. Around twenty thousand blue-and-white azulejo tiles — about five hundred fifty square meters of them — cover these walls with scenes from Portugal’s past. The painter Jorge Colaço laid the first tile on August 13th, 1905, and the panels were produced at the famous Sacavém tile factory. The station building itself, by architect José Marques da Silva, opened in 1916.',
        'Trains, though, are only the latest occupants of this ground. For almost four centuries this was the Benedictine convent of São Bento da Avé Maria, founded by order of King Manuel I in 1518. The convent burned in 1783, was rebuilt, and then slowly emptied; when its last nun died in 1892, the building was demolished — and the city put its grand new station on the site, keeping the old convent’s name. So when locals say “São Bento,” they are still, in a way, naming the nuns.'
      ],
      next: 'Walk uphill toward the cathedral — about 350 meters to the Sé, the granite fortress-church crowning the old town.'
    },
    {
      id: 'se',
      name: 'Sé do Porto — the Cathedral',
      era: '12th century · Romanesque',
      coords: [41.14280, -8.61130],
      story: [
        'This hilltop has been holy ground since at least 1108, when Henry of Burgundy, father of Portugal’s first king, founded a chapel here. Work on the cathedral itself began around 1110, and its oldest parts are pure Romanesque — thick granite walls and battlement-like parapets that make it look as much fortress as church, which on this frontier hilltop it effectively was.',
        'The building kept growing with the country. The Gothic cloister was added in the fourteenth and fifteenth centuries under King João I, and in 1736 the Italian architect Nicolau Nasoni — whose Baroque fingerprints you will find all over this city — attached the elegant covered loggia on the north side.',
        'And one moment of high drama: in February 1387, King João I married Philippa of Lancaster, the English princess, right here. Seven years later their son was born down by the river in Porto — a prince history remembers as Henry the Navigator.'
      ],
      next: 'From the cathedral terrace, head east and downhill toward the river gorge — the medieval wall runs along the Guindais cliffs, beside the funicular.'
    },
    {
      id: 'muralha',
      name: 'Muralha Fernandina — the Fernandine Walls',
      era: '1336–1376 · Medieval',
      coords: [41.14100, -8.60950],
      story: [
        'The granite rampart running along these cliffs is what remains of medieval Porto’s armor. King Afonso IV began the circuit in 1336, and it was completed forty years later, in 1376, under King Ferdinand the First — Dom Fernando — which is why it carries his name: the Fernandine Wall.',
        'For centuries nearly everything that was Porto lived inside this ring — the cathedral, the riverside, the merchant streets you will walk today. As the city burst its bounds, the walls were quarried, built against, and mostly swallowed. This stretch above the Guindais cliffs is the best-preserved section left, partly restored between 1959 and 1962.',
        'Stand here a moment and read the geography the wall was built for: the river below as highway and moat, the cliff as free fortification, and the city stacked up the slope behind you.'
      ],
      next: 'The great iron bridge is just ahead — walk out onto it for the most famous view in Porto.'
    },
    {
      id: 'ponte-luis',
      name: 'Ponte Dom Luís I',
      era: '1886 · Iron arch',
      coords: [41.13986, -8.60934],
      story: [
        'You are standing on a world record. When this double-deck iron bridge was completed in October 1886, its arch — 172 meters — was the longest of its kind anywhere, a title it held until 1898.',
        'Everyone wants it to be an Eiffel bridge, and it very nearly was. Gustave Eiffel did build the graceful railway bridge you can see upstream — the Maria Pia, finished in 1877 — and he submitted a proposal for this one too. But the commission rejected it, and the winning design came from Théophile Seyrig, Eiffel’s own former partner, built by the Belgian Société de Willebroek. A family resemblance, then, but a different signature.',
        'Look across to the far bank: Vila Nova de Gaia, lined with port wine lodges. That trade was supercharged by the Methuen Treaty of 1703, which gave Portuguese wines a steep duty discount in England — and in 1756 the Marquês de Pombal marked out the Douro Valley with granite pillars, creating the oldest demarcated and regulated wine region in the world.'
      ],
      next: 'Return to the Porto bank and follow the riverside west to Praça da Ribeira, the old waterfront square.'
    },
    {
      id: 'ribeira',
      name: 'Ribeira — Praça da Ribeira',
      era: 'Medieval · UNESCO 1996',
      coords: [41.14070, -8.61300],
      story: [
        'This waterfront square is Porto’s oldest front door. Royal charters mention it as early as 1389; after a fire in 1491 destroyed the surrounding buildings, they rose again over stone arcades, and in the 1780s the three-story fountain bearing Portugal’s coat of arms was added. In 1996, UNESCO inscribed the historic center — together with the Luís I Bridge and the Serra do Pilar monastery across the river — as a World Heritage Site.',
        'But this cheerful square also holds Porto’s darkest day. On March 29th, 1809, Napoleon’s troops under Marshal Soult stormed the city. Thousands of residents fled toward the Ponte das Barcas — a pontoon bridge of twenty boats that then crossed the Douro here. Under the crush, the bridge’s center gave way, and an estimated four thousand people drowned in the river. A small bronze memorial nearby, the Alminhas da Ponte, still receives candles for them.',
        'One lighter legend before you move on: Porto’s people call themselves tripeiros — tripe-eaters. The story goes back to 1415, when the city gave its best meat to provision the fleet sailing for Ceuta and kept only the tripe for itself, turning sacrifice into its signature dish.'
      ],
      next: 'Walk west along the river one block inland — the medieval customs house, Casa do Infante, is just behind the waterfront.'
    },
    {
      id: 'casa-infante',
      name: 'Casa do Infante',
      era: '1325 · Medieval customs house',
      coords: [41.14081, -8.61450],
      story: [
        'By tradition, this is where Henry the Navigator was born. The royal chronicler Fernão Lopes recorded the prince’s birth in Porto on March 4th, 1394, and this old customs house — the only royal building in town with living quarters — has carried the claim ever since. Historians will tell you the exact house is unproven; the city will tell you it happened right here. Both are being honest.',
        'The building itself is certain enough. A royal decree established the customs house in 1325, and it was rebuilt under King Afonso IV from 1354. For roughly two centuries from the late 1300s it also housed the Casa da Moeda — the royal mint — and it went on handling the port’s customs until 1860. Everything entering or leaving medieval Porto by water passed through these doors.',
        'And the site is older still: excavations here since 1995 have uncovered a Roman building with a polychrome mosaic pavement — Portus Cale itself, under your feet.'
      ],
      next: 'Two minutes further west stands a plain Gothic church hiding one of the most extravagant interiors in Europe.'
    },
    {
      id: 'sao-francisco',
      name: 'Igreja de São Francisco',
      era: 'Gothic shell · Baroque gold',
      coords: [41.14102, -8.61574],
      story: [
        'From outside, this is a sober Gothic church — the Franciscans first built here around 1244, and the building you see went up between 1383 and about 1425. Nothing on the facade prepares you for what is inside.',
        'In the first half of the eighteenth century, Porto’s woodcarvers buried nearly every Gothic surface under talha dourada — carved, gilded woodwork — until columns, arches, and ceilings seemed to be made of gold. How much gold? Popular estimates say three to four hundred kilograms, though no official figure has ever been documented — so enjoy the legend with one eyebrow raised.',
        'Seek out the church’s masterpiece on the north wall: the Tree of Jesse, a carved genealogy of Christ rising through the branches of a golden tree, commissioned in 1718 from the sculptors Filipe da Silva and António Gomes. It is often called one of the finest carvings of its kind anywhere.'
      ],
      next: 'The grand Neoclassical palace next door is your next stop — Porto’s stock exchange, born from a fire.'
    },
    {
      id: 'bolsa',
      name: 'Palácio da Bolsa',
      era: '1842 · Neoclassical',
      coords: [41.14137, -8.61543],
      story: [
        'This palace exists because of a siege. In 1832 and 1833, Porto endured some eighteen months of encirclement in Portugal’s civil war, holding out for the liberal cause against the absolutist forces of Miguel I — resistance that earned the city its proud title, Cidade Invicta: the unvanquished city. During that siege, in 1832, fire destroyed the cloisters of the Franciscan convent that stood here.',
        'The ruins were granted to Porto’s Commercial Association, and in 1842 the merchants began building themselves a stock exchange worthy of a trading city, to Neoclassical plans by Joaquim da Costa Lima Júnior. The shell was largely done by 1850, but the interiors became a decades-long showpiece, finished only around 1910.',
        'Its crown jewel is the Salão Árabe — the Arab Room — built between 1862 and 1880 by Gonçalves e Sousa in glittering Moorish Revival style. It still hosts Porto’s state receptions, a ballroom built by merchants to impress the world.'
      ],
      next: 'Climb back into the old town along Rua das Flores — the Renaissance street of goldsmiths.'
    },
    {
      id: 'rua-flores',
      name: 'Rua das Flores',
      era: '1521 · Renaissance street',
      coords: [41.14457, -8.61284],
      story: [
        'This graceful street was planned, not grown. King Manuel I ordered it cut through the bishop’s gardens in 1521 — the works ran to 1525 — to give the city a proper link toward the convent of São Bento da Avé Maria, whose site you visited at the start of the walk. Its original name was Rua de Santa Catarina das Flores — Saint Catherine of the Flowers — and the flowers of those vanished gardens still linger in the name.',
        'For centuries this was the street of goldsmiths and silversmiths, where Porto’s famous filigree — fine threads of gold and silver twisted into hearts and crosses — was made and sold. A few of the old houses survive: Ourivesaria Coutinho, for one, has been trading here since 1879.',
        'Walk it slowly. The facades above the shopfronts — tiled, crested, wrought-iron balconied — are one of the best free galleries in Porto.'
      ],
      next: 'At the top of the old town rises Nasoni’s granite rocket — the Clérigos Tower.'
    },
    {
      id: 'clerigos',
      name: 'Torre e Igreja dos Clérigos',
      era: '1732–1763 · Baroque',
      coords: [41.14567, -8.61458],
      story: [
        'For two and a half centuries, this was the exclamation point on Porto’s skyline. The Italian architect Nicolau Nasoni built the Clérigos church between 1732 and 1750 for the Brotherhood of the Clergy, then crowned it with this bell tower between 1754 and 1763 — seventy-five and a half meters of carved granite, and worth every step if you fancy the climb.',
        'Nasoni is the man to thank for Baroque Porto — you have already seen his loggia at the cathedral. He came from Tuscany as a young painter, made this city his life’s work, and joined the very brotherhood that commissioned this church.',
        'He is also still here. At his own request, Nasoni was buried in the crypt of the Clérigos church — though no one knows exactly where. Somewhere beneath his own masterpiece lies its architect, in an unmarked grave of his choosing.'
      ],
      next: 'A short walk north stands a bookshop people cross oceans to see.'
    },
    {
      id: 'lello',
      name: 'Livraria Lello',
      era: '1906 · Neo-Gothic',
      coords: [41.14694, -8.61472],
      story: [
        'The Lello brothers’ bookselling business dates to 1869, but this jewel-box shop opened in 1906, designed by the engineer-architect Francisco Xavier Esteves. Behind the neo-Gothic facade you’ll find the famous forked crimson staircase, carved ceilings, and a great stained-glass skylight — reason enough for it to be routinely ranked among the most beautiful bookshops in the world.',
        'Now, the legend you have probably heard: that J.K. Rowling wrote Harry Potter here, or modeled Hogwarts on that staircase. Here is what is actually true. Rowling did live in Porto from 1991 to 1993, teaching English, and is said to have written at the Majestic Café. But she has flatly and publicly denied the Lello story — in her words, she never visited this bookshop and never even knew it existed. The myth grew anyway, and the shop has cheerfully leaned into it, charging an entry fee you can credit against a book.',
        'Buy the book. The building deserves it on its own merits.'
      ],
      next: 'Finish two minutes away, where two churches stand separated by the narrowest house in Porto.'
    },
    {
      id: 'carmo',
      name: 'Carmo, Carmelitas & the Hidden House',
      era: '17th–18th century · Rococo',
      coords: [41.14735, -8.61622],
      story: [
        'Look carefully: what reads as one great church here is actually two — with a house squeezed between them. On the left, the seventeenth-century Igreja das Carmelitas, church of a Carmelite convent. On the right, the Igreja do Carmo, built 1756 to 1768 by José de Figueiredo Seixas, a follower of Nasoni, in exuberant Baroque-Rococo.',
        'Between them stands the Casa Escondida — the Hidden House — barely a meter wide, one of the narrowest houses anywhere. The crowd-pleasing story is that the two churches were forbidden to share a wall, keeping a discreet gap between the monks of Carmo and the nuns of Carmelitas. The documented, more practical reason: the sliver filled an awkward gap and housed the churches’ chaplains, artists, and hospital doctors. Tell both versions; Porto does.',
        'Before you go, walk around to the Carmo’s side wall: the monumental blue-and-white azulejo panel there, depicting the founding of the Carmelite Order, was added in 1912, designed by Silvestro Silvestri with tiles made across the river in Vila Nova de Gaia. It is the perfect closing image — a city that keeps writing its history in blue and white. Obrigado for walking Porto.'
      ],
      next: null
    }
  ]
};
