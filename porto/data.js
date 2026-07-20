/* Porto historic-center walking tour.
 * All historical facts verified against sources (Wikipedia, UNESCO, official
 * monument pages) 2026-07-19, two research rounds. Stop coordinates are
 * Wikipedia geo-tags except Rua das Flores, the Fernandine Walls viewpoint
 * (Guindais funicular geo-tag), and Igreja do Carmo (approximate street
 * positions). "walk" = en-route sights toward the NEXT stop.
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
        'Step into the entrance hall and look up. Around twenty thousand blue-and-white azulejo tiles — about five hundred fifty square meters of them — cover these walls with scenes from Portugal’s past. They are the signature work of Jorge Colaço, the foremost tile painter of his generation: born in Tangier in 1868, the son of a Portuguese diplomat, trained as a painter in Lisbon, Madrid, and Paris, he made his name turning whole walls into late-Romantic history paintings. He laid the first tile here on August 13th, 1905, and the panels — produced at the famous Sacavém factory — took him roughly a decade. The station building itself, by architect José Marques da Silva, opened in 1916.',
        'Trains, though, are only the latest occupants of this ground. For almost four centuries this was the Benedictine convent of São Bento da Avé Maria, founded by order of King Manuel I in 1518. The convent burned in 1783, was rebuilt, and then slowly emptied; when its last nun died in 1892, the building was demolished — and the city put its grand new station on the site, keeping the old convent’s name. So when locals say “São Bento,” they are still, in a way, naming the nuns.'
      ],
      next: 'Walk uphill toward the cathedral — about 350 meters to the Sé, the granite fortress-church crowning the old town.',
      walk: [
        'As you reach the cathedral terrace, you’ll pass a bronze horseman with spear and shield: Vímara Peres, unveiled in 1968, by the sculptor Salvador Barata Feyo. In the ninth century, King Alfonso the Third of Asturias sent this nobleman to take the land between the Minho and Douro rivers back from the Moors — and in 868 he became the first Count of Portugal. Portuguese historians count that moment as the first milestone on the road to nationhood, though the kingdom itself was still nearly three centuries away.',
        'Nearby stands a twisted stone column on a stepped base — the pillory, once the symbol of municipal justice and authority. Honest disclosure: it looks medieval, but it’s a 1945 reconstruction, modeled on an engraving from 1797, placed here after the terrace was cleared of old buildings in the 1930s.'
      ]
    },
    {
      id: 'se',
      name: 'Sé do Porto — the Cathedral',
      era: '12th century · Romanesque',
      coords: [41.14280, -8.61130],
      story: [
        'This hilltop has been holy ground since at least 1108, when Henry of Burgundy founded a chapel here. Henry is worth a moment: a Burgundian noble born in Dijon, he married Teresa of León, daughter of the King of León and Castile, and through her became Count of Portugal in 1096 — and his son, Afonso Henriques, would go on to make himself the first King of Portugal in 1139. So the man who founded this chapel was, quite literally, the father of the country.',
        'Work on the cathedral itself began around 1110, and its oldest parts are pure Romanesque — thick granite walls and battlement-like parapets that make it look as much fortress as church, which on this frontier hilltop it effectively was. The Gothic cloister came in the fourteenth and fifteenth centuries, and in 1736 the Italian architect Nicolau Nasoni — you will meet him properly at the Clérigos Tower — attached the elegant covered loggia on the north side.',
        'Now for the drama this building witnessed. In 1387, King João I married Philippa of Lancaster right here. João had come to the throne two years earlier out of pure crisis: when King Fernando died without a male heir, João — Grand Master of the military Order of Aviz — was declared king by the Portuguese parliament in April 1385, then secured his crown that August by crushing a Castilian invasion at the Battle of Aljubarrota. His bride Philippa was the eldest child of John of Gaunt, Duke of Lancaster, and the wedding sealed the Anglo-Portuguese Alliance of the 1386 Treaty of Windsor — the oldest alliance in the world still in force today.',
        'Their children were so remarkable the Portuguese call them the “Illustrious Generation”: a king, a philosopher-duke, and a prince born down by the river in Porto seven years after the wedding — history remembers him as Henry the Navigator. Philippa herself died of plague in July 1415, days before the fleet she had helped inspire sailed for Ceuta.'
      ],
      next: 'From the cathedral terrace, head east and downhill toward the river gorge — the medieval wall runs along the Guindais cliffs, beside the funicular.',
      walk: [
        'The steep tangle of alleys dropping toward the river below the cathedral is the Barredo — the oldest quarter of Porto. Its tall, narrow houses were in many cases built leaning directly against the medieval walls, with laundry strung between them, and some street names still carry the old trades: Rua da Bainharia was the street of the scabbard-makers. Hidden in the maze is a thirteenth-century tower-house, one of the oldest civil buildings in the city.'
      ]
    },
    {
      id: 'muralha',
      name: 'Muralha Fernandina — the Fernandine Walls',
      era: '1336–1376 · Medieval',
      coords: [41.14100, -8.60950],
      story: [
        'The granite rampart running along these cliffs is what remains of medieval Porto’s armor. King Afonso the Fourth — called “the Brave” — began the circuit in 1336. He earned the nickname: his troops helped win the great victory over the Moors at Río Salado in 1340, and he funded Portugal’s first commercial fleet. His reign carries a darker stain too — it was Afonso who ordered the 1355 murder of Inês de Castro, his son’s lover, in one of the most retold tragedies in Portuguese history.',
        'The walls were completed forty years later, in 1376, under his grandson King Fernando the First — which is why they carry Fernando’s name. Fernando needed them: he spent much of his reign fighting Castile in the so-called Fernandine Wars over the Castilian succession. When he died in 1383 without a male heir, the kingdom plunged into the two-year crisis that ended with João of Aviz — the king married at the cathedral above you — taking the throne.',
        'For centuries nearly everything that was Porto lived inside this ring. As the city burst its bounds, the walls were quarried, built against, and mostly swallowed; this stretch above the Guindais cliffs is the best-preserved section left, partly restored between 1959 and 1962. Read the geography the wall was built for: the river as highway and moat, the cliff as free fortification, the city stacked up the slope behind you.'
      ],
      next: 'The great iron bridge is just ahead — walk out onto it for the most famous view in Porto.',
      walk: [
        'The funicular climbing beside the wall has a story of its own. The original opened on June 4th, 1891 — a steam-driven cable railway by the engineer Raul Mesnier, hauling passengers up an eighty-meter rise. Two years and a day later, a runaway car smashed into the lower platform; no one died, but the line closed — and stayed closed for over a century, until a modern funicular reopened on the same alignment in February 2004. It still runs right alongside the medieval wall.'
      ]
    },
    {
      id: 'ponte-luis',
      name: 'Ponte Dom Luís I',
      era: '1886 · Iron arch',
      coords: [41.13986, -8.60934],
      story: [
        'You are standing on a world record. When this double-deck iron bridge was completed in October 1886, its arch — 172 meters — was the longest of its kind anywhere, a title it held until 1898.',
        'Everyone wants it to be an Eiffel bridge, and it very nearly was. Gustave Eiffel did build the graceful railway bridge you can see upstream — the Maria Pia, finished in 1877 — and he submitted a proposal for this one too. But the commission rejected it, and the winning design came from Théophile Seyrig, Eiffel’s own former partner, built by the Belgian Société de Willebroek. A family resemblance, then, but a different signature.',
        'Look across to the far bank: Vila Nova de Gaia, lined with port wine lodges. That trade was supercharged by the Methuen Treaty of 1703, which gave Portuguese wines a steep duty discount in England. And in 1756 the Douro Valley behind those hills was marked out with granite pillars as the world’s oldest demarcated and regulated wine region — the work of the Marquês de Pombal, Portugal’s formidable chief minister. Pombal is best remembered for commanding the response to the catastrophic Lisbon earthquake of 1755 — his reported words were “What now? We bury the dead and heal the living” — and for rebuilding Lisbon on a modern grid with pioneering earthquake-resistant construction. The same iron will that rebuilt a capital also regulated your glass of port.'
      ],
      next: 'Return to the Porto bank and follow the riverside west to Praça da Ribeira, the old waterfront square.',
      walk: [
        'You’ll walk along the Cais da Ribeira, the arcaded medieval quay that has always been the social heart of the waterfront. Watch the quay wall for a bronze relief with candles and flowers often left beneath it: the Alminhas da Ponte, cast in 1897 by the sculptor Teixeira Lopes. It marks the site of the city’s darkest day — the bridge disaster of 1809, whose story is told at the next stop.'
      ]
    },
    {
      id: 'ribeira',
      name: 'Ribeira — Praça da Ribeira',
      era: 'Medieval · UNESCO 1996',
      coords: [41.14070, -8.61300],
      story: [
        'This waterfront square is Porto’s oldest front door. Royal charters mention it as early as 1389; after a fire in 1491 destroyed the surrounding buildings, they rose again over stone arcades, and in the 1780s the three-story fountain bearing Portugal’s coat of arms was added. In 1996, UNESCO inscribed the historic center — together with the Luís I Bridge and the Serra do Pilar monastery across the river — as a World Heritage Site.',
        'But this cheerful square also holds Porto’s greatest tragedy. On March 29th, 1809, Napoleon’s troops under Marshal Soult stormed the city during the second French invasion of Portugal. Thousands of residents fled toward the Ponte das Barcas — a pontoon bridge of twenty boats that then crossed the Douro here. Under the crush, the bridge’s center gave way, and an estimated four thousand people drowned in the river. The bronze memorial you passed on the quay still receives their candles.',
        'The story has a second act. Just six weeks later, on May 12th, 1809, Arthur Wellesley — the future Duke of Wellington — retook Porto with one of the boldest strokes of the Peninsular War: his troops crossed the Douro in captured wine barges, helped by Porto residents who freed the boats, seized a seminary on the north bank, and sent Soult’s army into a retreat that cost the French some four and a half thousand men and every one of their guns.',
        'One lighter legend before you move on: Porto’s people call themselves tripeiros — tripe-eaters. The story goes back to 1415, when the city gave its best meat to provision the fleet sailing for Ceuta and kept only the tripe for itself, turning sacrifice into its signature dish.'
      ],
      next: 'Walk west along the river one block inland — the medieval customs house, Casa do Infante, is just behind the waterfront.',
      walk: [
        'On Rua da Fonte Taurina, pause at a modest stone archway: the Postigo do Carvão, the “coal gate” — the only gate of the fourteenth-century Fernandine Walls still standing. Through this opening, coal and cargo moved between the quay and the warehouses of the walled city; an inscription over the gate carries the date 1348. Every other gate in the medieval circuit is gone.'
      ]
    },
    {
      id: 'casa-infante',
      name: 'Casa do Infante',
      era: '1325 · Medieval customs house',
      coords: [41.14081, -8.61450],
      story: [
        'By tradition, this is where Henry the Navigator was born. The royal chronicler Fernão Lopes recorded the prince’s birth in Porto on March 4th, 1394, and this old customs house — the only royal building in town with living quarters — has carried the claim ever since. Historians will tell you the exact house is unproven; the city will tell you it happened right here. Both are being honest.',
        'And who was Henry, really? Not quite the figure of legend. He fought bravely at the conquest of Ceuta in 1415 — knighted at twenty-one — but his true role in the Age of Discovery was as patron and organizer, directing and financing the voyages that reached Madeira, the Azores, and down the West African coast, and taking a fifth of the profits. He almost certainly never sailed on a voyage of discovery himself, and even the name “the Navigator” was invented for him by German historians four hundred years after his death. The real Henry ran the enterprise from dry land — which, standing in a customs house, feels fitting.',
        'The building itself is certain enough. A royal decree established the customs house in 1325, and it was rebuilt under King Afonso IV from 1354. For roughly two centuries it also housed the Casa da Moeda — the royal mint — and it went on handling the port’s customs until 1860. And the site is older still: excavations here since 1995 have uncovered a Roman building with a polychrome mosaic pavement. Portus Cale itself, under your feet.'
      ],
      next: 'Two minutes further west stands a plain Gothic church hiding one of the most extravagant interiors in Europe.',
      walk: [
        'You’ll cross Praça do Infante Dom Henrique, where a bronze monument to Henry — by the sculptor Tomás Costa, unveiled around 1900 — shows the prince beside a globe. Facing the square is the Mercado Ferreira Borges, the striking red cast-iron-and-glass market hall of 1885, named for a liberal politician. Porto built it to replace the old riverside market, but it never really caught on as one — today it’s an events venue, and one of the city’s finest pieces of iron-age architecture.'
      ]
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
      next: 'The grand Neoclassical palace next door is your next stop — Porto’s stock exchange, born from a fire.',
      walk: [
        'The two buildings share more than a wall line: the Palácio da Bolsa rose directly on the ruins of this convent’s cloisters, destroyed by fire in 1832 — a story the palace tells best itself.'
      ]
    },
    {
      id: 'bolsa',
      name: 'Palácio da Bolsa',
      era: '1842 · Neoclassical',
      coords: [41.14137, -8.61543],
      story: [
        'This palace exists because of a civil war. In the early 1830s Portugal tore itself apart between two royal brothers: Miguel the First, who ruled as an absolutist, and Pedro the Fourth — a man with the rare distinction of having been Emperor of Brazil as Pedro the First, a throne he gave up in 1831 to sail home and fight for his young daughter Maria’s constitutional crown.',
        'Porto declared for Pedro and the liberals — and paid for it. Miguel’s armies besieged the city for nearly a year, from July 1832 into 1833, and Porto held. That resistance earned the city its proud title, Cidade Invicta — the Unvanquished City — and when the liberals won the war in 1834, Miguel went into exile and Maria the Second was restored. During the siege, in 1832, fire destroyed the cloisters of the Franciscan convent that stood on this spot.',
        'The ruins were granted to Porto’s Commercial Association, and in 1842 the merchants began building themselves a stock exchange worthy of a trading city, to Neoclassical plans by Joaquim da Costa Lima Júnior. The shell was largely done by 1850, but the interiors became a decades-long showpiece, finished only around 1910. Its crown jewel is the Salão Árabe — the Arab Room — built between 1862 and 1880 by Gonçalves e Sousa in glittering Moorish Revival style. It still hosts Porto’s state receptions: a ballroom built by merchants to impress the world.'
      ],
      next: 'Climb back into the old town along Rua das Flores — the Renaissance street of goldsmiths.',
      walk: [
        'You’ll pass through the Largo de São Domingos, the small historic square where the riverside city funneled uphill toward its merchant streets — the natural gateway to Rua das Flores.',
        'Partway up the street on your left, don’t miss the Igreja da Misericórdia: a sixteenth-century church, consecrated around 1590, whose flamboyant Baroque facade was rebuilt in 1748 by Nicolau Nasoni. It belongs to the Misericórdia, the great charitable brotherhood founded in 1499 in the reign of Manuel I; the museum attached next door keeps its Renaissance treasure, the painting known as Fons Vitae.'
      ]
    },
    {
      id: 'rua-flores',
      name: 'Rua das Flores',
      era: '1521 · Renaissance street',
      coords: [41.14457, -8.61284],
      story: [
        'This graceful street was planned, not grown — and the king who ordered it could afford to think big. Manuel the First, called “the Fortunate,” had sponsored Vasco da Gama’s 1498 sea route to India, and the spice trade that followed made him, by many accounts, the wealthiest monarch in Europe. An entire ornamental style of Portuguese architecture — the Manueline — carries his name. In 1521 he had this street cut through the bishop’s gardens to give the city a proper link toward the convent of São Bento da Avé Maria, whose site you visited at the start of the walk.',
        'Its original name was Rua de Santa Catarina das Flores — Saint Catherine of the Flowers — and the flowers of those vanished gardens still linger in the name. For centuries this was the street of goldsmiths and silversmiths, where Porto’s famous filigree — fine threads of gold and silver twisted into hearts and crosses — was made and sold. A few of the old houses survive: Ourivesaria Coutinho, for one, has been trading here since 1879.',
        'Walk it slowly. The facades above the shopfronts — tiled, crested, wrought-iron balconied — are one of the best free galleries in Porto.'
      ],
      next: 'At the top of the old town rises Nasoni’s granite rocket — the Clérigos Tower.',
      walk: [
        'Your route brushes Praça da Liberdade, the city’s grand central square. The bronze horseman on the tall stone column is Pedro the Fourth — the same emperor-turned-liberator from the Bolsa story — shown holding out the constitutional charter to the city that bled for it. The statue, by the French sculptor Anatole Calmels, was inaugurated in 1866; Pedro’s heart, by his own wish, is kept in Porto, entombed in the Lapa church.',
        'And a sight of a different kind at number 126: quite possibly the world’s most beautiful McDonald’s, installed in 1995 inside the former Café Imperial, an Art Deco landmark of 1936 — the original stained glass, chandeliers, and the great bronze eagle over the door all survive.'
      ]
    },
    {
      id: 'clerigos',
      name: 'Torre e Igreja dos Clérigos',
      era: '1732–1763 · Baroque',
      coords: [41.14567, -8.61458],
      story: [
        'For two and a half centuries, this was the exclamation point on Porto’s skyline — and it is the masterwork of the man who gave Baroque Porto its face. Nicolau Nasoni was born in 1691 in San Giovanni Valdarno, in Tuscany, and came to Porto in the 1720s at the invitation of the cathedral’s dean — hired, at first, simply to paint frescoes in the Sé. He never left. Over five decades the Italian painter became northern Portugal’s defining architect.',
        'He built the Clérigos church between 1732 and 1750 for the Brotherhood of the Clergy — on an unusual oval plan, one of the first in Portugal — then crowned it with this bell tower between 1754 and 1763: seventy-five and a half meters of carved granite, and worth every step if you fancy the climb. You have already seen his loggia at the cathedral and his Misericórdia facade on Rua das Flores.',
        'He is also still here. Nasoni joined the very brotherhood that commissioned this church, and at his own request was buried in its crypt when he died in 1773 — though no one knows exactly where. Somewhere beneath his own masterpiece lies its architect, in an unmarked grave of his choosing.'
      ],
      next: 'A short walk north stands a bookshop people cross oceans to see.',
      walk: [
        'The stepped modern terrace beside the tower is the Passeio dos Clérigos, and its roof carries a full olive grove — around fifty olive trees planted over the shops in 2013, Porto’s largest green roof. The grove is a deliberate pun on history: this was the site of the Porta do Olival, the “olive-grove gate” of the medieval wall.'
      ]
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
      next: 'Finish two minutes away, where two churches stand separated by the narrowest house in Porto.',
      walk: [
        'You’ll cross Praça de Gomes Teixeira — named for the mathematician who became the University of Porto’s first rector, whose neoclassical Rectory building fronts the square. Its centerpiece is the Fonte dos Leões, the Fountain of the Lions: cast at the Val d’Osne foundry in France and switched on in December 1886 as a showpiece of Porto’s new piped water supply, with four winged lions guarding its basin.'
      ]
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
