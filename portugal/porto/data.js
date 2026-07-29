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
  intro: 'A two-to-three-hour loop through the historic center of Porto — from the azulejo hall of São Bento station, up to the Romanesque cathedral, out across the great iron bridge, down to the riverside Ribeira, and back up through the Baroque city of Nicolau Nasoni. Porto began as Portus Cale, the Roman-era port widely regarded as the origin of the name “Portugal” itself. Tap a numbered stop, or turn on GPS and let the stories find you. Stops 13 to 16 are a separate shorter leg across the river in Vila Nova de Gaia — the port lodges, the cable car, and the monastery on the hill — about an hour and a half, and worth its own afternoon. Note that Serra do Pilar is closed on Mondays.',
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
      next: 'That completes the historic-centre loop. Stops 13 to 16 are a separate, shorter leg across the river in Vila Nova de Gaia — the port lodges and the monastery on the hill — best saved for another afternoon.'
    },

    /* ---- The Gaia leg (stops 13–16) ----
     * A separate second walk on the south bank, not a continuation of the loop
     * above: cross the bridge from Ribeira, work east along the quay, then climb
     * to Serra do Pilar and come back over the upper deck. Facts verified
     * 2026-07-29; coordinates are OpenStreetMap/Nominatim lookups except Serra
     * do Pilar, which agrees with its Wikipedia geo-tag to within ~40 m.
     */
    {
      id: 'cais-gaia',
      name: 'Cais de Gaia — the Quay & the Rabelos',
      era: 'Gaia leg · the river trade',
      coords: [41.13764, -8.61351],
      story: [
        'You have crossed the river, and you are no longer in Porto. This is Vila Nova de Gaia, a separate city with its own council — a distinction the people here will make for you if you get it wrong. Porto keeps the cathedral and the name; Gaia keeps the wine.',
        'Look at the boats moored along the quay: flat-bottomed, square-sailed, with an absurdly long timber oar projecting from the stern. These are barcos rabelos, and the name means roughly “little tail” — for that steering oar, worked by a man standing on a raised platform at the back. The flat bottom and shallow draught were not a style choice. Before the dams, the upper Douro was a river of rapids and shifting shallows, and this was the only hull that could carry a cargo down it. A working rabelo took between forty and a hundred barrels of port, with a crew of up to twelve, from the terraced vineyards eighty miles upstream down to these lodges.',
        'It was dangerous, seasonal work, and it ended within a single generation. The dams and locks built along the Douro from the 1950s onward drowned the rapids and made the river placid; by 1961 only six rabelos were still working, and the last commercial run is usually dated to 1964. Every boat you can see from here is now a floating advertisement — look along the sails and you are reading the names of the port houses whose lodges are behind you. The same engineering that killed the rabelo is what lets the river cruise boats come down today.'
      ],
      next: 'Walk east along the Avenida de Diogo Leite, water on your left, toward the lodges clustered under the bridge.'
    },
    {
      id: 'lodges',
      name: 'The Port Lodges',
      era: 'Gaia leg · 1703 onward',
      coords: [41.13759, -8.61248],
      story: [
        'Read the names painted above these doors: Sandeman, Taylor’s, Graham’s, Cockburn’s. They are British and Scottish, with Dutch and German among them, and that is the whole history of this bank in a single glance. Port is a Portuguese wine invented largely for an English thirst.',
        'The reason goes back to a treaty. On the twenty-seventh of December, 1703, England and Portugal signed the agreement negotiated by John Methuen: English woollen cloth would enter Portugal duty-free, and in return Portuguese wines would pay a third less duty in England than French wines did. England was at war with France and short of claret. Portuguese wine — fortified with brandy so it survived the sea voyage — filled the gap, and a trade was born that made fortunes on both banks of this river.',
        'So why is all of it stored on this side, and not in the grander city across the water? Partly law and partly weather. In 1777, under the reforms of the Douro Wine Company — the regulating monopoly the Marquês de Pombal had created two decades earlier — Vila Nova de Gaia was made the official storage place for the exporters. And the climate here suited the wine: cool, damp air coming off the Atlantic and up the river mouth, holding these cellars at a steady temperature while the Douro valley upstream baked. The wine was grown in the heat and aged in the cool.',
        'That requirement held for two centuries. It was only in the mid-1980s, around the time Portugal joined the European Community, that producers were finally allowed to age and ship port from the Douro itself — sources disagree over whether the change took effect in 1986 or 1987. Either way, the rule is gone and the buildings stayed: most of the great houses still age their wine exactly where you are standing, out of habit, inertia, and the fact that it works.',
        'Nearly all of these lodges run tours and tastings, and in August you should book ahead rather than turn up. If you take only one, take one with a cellar you can walk into — the smell of a room holding thousands of barrels is the part you will remember.'
      ],
      next: 'Head for the Gaia end of the bridge’s upper deck — either up through the streets, or on the cable car from the quay.'
    },
    {
      id: 'jardim-morro',
      name: 'Jardim do Morro',
      era: 'Gaia leg · the view',
      coords: [41.13761, -8.60873],
      story: [
        'This little hillside garden at the Gaia end of the upper deck is, for the price of nothing at all, one of the two best views in the city — the other being the terrace you are about to climb to.',
        'From here the whole thing composes itself. Porto is stacked on the far bank like seating in a theatre: the Ribeira houses at the waterline, the cathedral and the medieval wall above them, the Clérigos tower breaking the skyline behind. The bridge runs out at your feet on two levels — the metro and pedestrians up here, cars and pedestrians on the deck far below, down at the level of the quays. If you walked the lower deck an hour ago, you have now crossed Seyrig’s bridge twice, at both heights, which is the proper way to meet it.',
        'If you came up the easy way, you came on the Teleférico de Gaia, which opened in April 2011 and runs five hundred and sixty-two meters from the quay to this ridge — lifting you from about five meters above sea level to about sixty-three. It is a short ride and a one-way ticket is the sensible purchase, since the walk down through the lodges is pleasant and the walk up is not.',
        'This is also the place to be at sunset, when the light comes up the river from the Atlantic and hits the whole west-facing city at once. If your day allows only one moment for a photograph, spend it here.'
      ],
      next: 'Walk east, away from the bridge and uphill, about two hundred meters to the round white monastery on the summit.'
    },
    {
      id: 'serra-pilar',
      name: 'Mosteiro da Serra do Pilar',
      era: '1538–1672 · circular church',
      coords: [41.13827, -8.60797],
      story: [
        'Walk around this building before you look at the view, because its shape is the point. The church is a perfect circle. So is the cloister beside it — a ring of columns of the same diameter as the church itself. There is almost nothing else like it in Portugal. The Augustinians began building here in 1538, and the round church was finally inaugurated on the seventeenth of July, 1672.',
        'Whoever chose this hill was not thinking only about God. This summit commands the mouth of the gorge, the bridge, and both banks — and armies noticed. On the twelfth of May, 1809, Arthur Wellesley, not yet the Duke of Wellington, made his headquarters right here. The French under Marshal Soult held Porto across the water and had destroyed the bridge, confident the river could not be crossed. A scout found wine barges hidden on the far side. Wellesley ferried men over a few dozen at a time into an unoccupied seminary on the north bank, and when Soult threw his troops at it, the British guns firing from this monastery garden broke the counterattacks. Porto was retaken in a single day.',
        'A generation later the hill mattered again, and worse. From July 1832 to August 1833, during the Liberal Wars between the brothers Pedro and Miguel, Porto was besieged for over a year — and Serra do Pilar was the one position the Liberals held on this southern bank, the bridgehead that kept the city’s link to its fleet open. Miguelite guns shelled the city from the heights of Candal, just along this ridge. The monks had gone; the monastery had become a fortress, and it has never entirely stopped being one. It belongs to the Portuguese army to this day, and the artillery regiment named after this hill still keeps it.',
        'Which is why, when you look at the terrace in front of the church, you are being shown the view by soldiers. It is open to the public, Tuesday through Sunday — and closed on Mondays, which is worth planning around. From the wall, Porto lies opposite in one piece: the river, the double-decked bridge, the Ribeira, the cathedral hill, the tower. In 1996 UNESCO inscribed the historic centre of Porto as a World Heritage site, and the listing names three things — the historic centre, the Luiz the First bridge, and this monastery. You are standing inside the third of them, looking at the first two.',
        'That is the far bank finished. Cross back over the upper deck, and the city you have been reading all day is in front of you the whole way over. Obrigado — and saúde.'
      ],
      next: null
    }
  ]
};
