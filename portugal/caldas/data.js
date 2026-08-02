/* Caldas da Rainha walking tour — the thermal hospital, the market and the potteries.
 * Stop coordinates: pt.wikipedia geo-tags for the Hospital Termal and the church of
 * Nossa Senhora do Pópulo, en.wikipedia for the José Malhoa museum, OpenStreetMap for
 * Praça da República, Parque Dom Carlos I and the faience factory.
 * The hospital and its church are only 36 m apart — inside the 40 m arrival trigger —
 * so they are deliberately a SINGLE stop here. Leonor built them as one foundation
 * anyway. Closest remaining pair is the park and the museum at 64 m, which is clear.
 * Historical content follows the verified Caldas history page on this site (July 2026).
 */
window.TOUR = {
  slug: 'caldas',
  // No recorded narration yet — the player speaks the text with the browser
  // voice instead. This flag makes it do so inside the user's tap; see speakStop().
  hasAudio: false,
  tileCache: 'caldas-tiles-v1',
  center: [39.40122, -9.13191],
  bounds: { north: 39.4060, south: 39.3964, west: -9.1360, east: -9.1278 },
  intro: 'A short one — about a kilometre, an easy hour, and the whole town in five stops. Most Portuguese towns grew around a castle, a river crossing or a church. Caldas da Rainha grew around a hospital, built by a queen on a smelly sulfur spring in 1485, and still treating patients five centuries later. The name means, literally, the Queen’s hot springs. Tap a numbered stop, or turn on GPS and let the stories find you. Do this in the morning, when the market is on and the patients are crossing the park in their dressing gowns.',
  stops: [
    {
      id: 'republica',
      name: 'Praça da República — the market',
      era: 'the daily fruit market',
      coords: [39.40404, -9.13364],
      story: [
        'A long cobbled triangle of a square with arcades down the sides, and every morning it fills with a fruit and vegetable market. The town will tell you it has run here daily since the fifteenth century, since the hospital was founded and people needed feeding — the claim is impossible to verify to the year, but the continuity is real and the market is emphatically not a tourist production. It is where the town buys its lunch.',
        'What to look for: the Alentejo and Oeste produce is superb and absurdly cheap in August — figs, melon, tomatoes that taste of something, the local pears. There are cheese and bread stalls, and around the edges of the square the shops that have served the market for generations.',
        'It is also the best place in Caldas to understand the shape of the town. Everything here accreted around the hospital a hundred and fifty metres east of you: first lodging for the patients, then shops for the lodgers, then a market for the shops. The square you are standing in exists because a queen put a clinic on a spring.'
      ],
      next: 'East about 150 metres to the thermal hospital and the church beside it — the reason the town exists.',
      walk: []
    },
    {
      id: 'termas',
      name: 'Hospital Termal Rainha D. Leonor &amp; Nossa Senhora do Pópulo',
      era: '1485 · Queen Leonor’s foundation',
      coords: [39.40330, -9.13217],
      story: [
        'The story every account of this town repeats, and which nobody can fully verify, goes like this. In 1484 Queen Leonor of Viseu, wife of João II, was travelling north towards the monastery at Batalha when she saw peasants bathing in a stinking pool beside the road. She stopped the carriage and asked why anyone would willingly get into that. They told her the water eased their aches. She suffered from some chronic complaint herself — the sources describe it differently — tried the water, and found that it helped.',
        'What happens next is documented. Leonor bought the land, and in 1485 began building a hospital on the spot, purpose-made to deliver thermal treatment; she is said to have sold or pawned her jewels to fund it. It is generally reckoned the first hospital in the world built specifically for that purpose, and it has operated more or less continuously ever since — through five dynasties, an earthquake, three invasions, a republic and a dictatorship. It is now part of the public health service, and the Portuguese health system still refers patients into it.',
        'The church beside it, Nossa Senhora do Pópulo, with the Manueline bell tower, is hers too — she endowed the whole complex properly rather than leaving a clinic without a chapel. Look for a carved shrimp net on the buildings she founded. It was her personal emblem, it turns up all over her foundations, and no one has ever satisfactorily explained what it meant to her.',
        'Leonor deserves more than a footnote. She outlived her husband and her only legitimate son, and spent her widowhood endowing hospitals, convents and orphanages. In 1498 she founded the first Misericórdia — the lay charitable brotherhood that spread to every town in Portugal and across its empire, and which still runs hospitals, hostels and care homes throughout the country today. If you want one figure who shaped Portuguese social welfare, it is her, and this town is her surviving showpiece. She died in 1525 and is buried in Lisbon, in the Madre de Deus convent she founded — the building that now houses the national tile museum.',
        'As for the water: it rises sulfurous and mineralised at around body temperature, from a fault in the local geology, and it smells unmistakably and permanently of rotten eggs. The sulfur is the point. Treatment here is a prescribed course over days — baths, mud packs, inhalations — for rheumatic and respiratory complaints, not an afternoon with scented candles. Whether Leonor’s relief in 1484 was pharmacological or just the ordinary effect of hot water on an aching body is a question the town has never felt the slightest need to settle.'
      ],
      next: 'South about 250 metres into the big wooded park.',
      walk: [
        'If you are here in the morning you will pass patients in dressing gowns and slippers walking between the hospital buildings and their lodgings. Five hundred years on, the town’s core business is still people coming to take the cure, and it is a very particular sight.'
      ]
    },
    {
      id: 'parque',
      name: 'Parque Dom Carlos I',
      era: '19th century · the spa town’s park',
      coords: [39.40128, -9.13359],
      story: [
        'For three centuries Caldas was a modest place with an outsized institution in the middle of it. Its great expansion came in the nineteenth century, when spa-going swept Europe and the railway made it easy — the Linha do Oeste reached Caldas in the 1880s and put Lisbon a couple of hours away. The town filled up with hotels, bandstands, villas and this: a large wooded park laid out beside the hospital for patients to walk in, with a lake, boats and enormous old trees.',
        'It is named for King Carlos I, who patronised the place in the years when the waters were fashionable. If you did the Lisbon walk, you have already met him — he is the king who was shot dead in his carriage in the Praça do Comércio on 1 February 1908, along with his heir. The park kept the name.',
        'Caldas was raised to city status in 1927 and has never been large. It has also never stopped being a town where people come to take the cure, which gives it an atmosphere quite unlike anywhere else on this trip: not a resort, not a museum town, just a small working city that happens to have been organised around a spring since the fifteenth century.'
      ],
      next: 'A very short walk, about 60 metres, to the museum building inside the park.',
      walk: []
    },
    {
      id: 'malhoa',
      name: 'Museu José Malhoa',
      era: '1940 · Portuguese naturalism',
      coords: [39.40080, -9.13400],
      story: [
        'A quiet, well-proportioned building in the middle of the park, and a genuine first: constructed in 1940, it was the first building in Portugal ever designed and built from scratch to be a museum. Everything before it was a palace or a convent with pictures hung in it. It was enlarged in 1950 and again in 1957.',
        'It holds the largest gathered body of work by José Malhoa, who was born in this town in 1855 and became the central figure of Portuguese naturalist painting before dying in 1933. His best-known picture is O Fado of 1910 — a guitarist and a woman in a cramped Lisbon room, painted with a directness that was faintly scandalous at the time because of who it depicted and how plainly.',
        'Beyond Malhoa the collection is nineteenth- and twentieth-century Portuguese painting and sculpture generally, with ceramics as you would expect in this town. It is small, it is rarely crowded, and it is air-conditioned, which in the Estremadura in August is not a trivial argument.'
      ],
      next: 'The last stop is about 350 metres east — the faience factory that made this town’s name.',
      walk: []
    },
    {
      id: 'fabrica',
      name: 'The Bordalo Pinheiro faience factory',
      era: '1884 · ceramics',
      coords: [39.40045, -9.12983],
      story: [
        'The other thing Caldas is famous for is pottery, and that is essentially one man’s doing. Rafael Bordalo Pinheiro, born in 1846, was Portugal’s greatest caricaturist — a satirical journalist and illustrator, and by common reckoning the country’s first comics creator. In 1875 he drew a stubby, ill-shaven peasant called Zé Povinho, “Little Joe Public,” a figure of put-upon common sense making a rude gesture at whoever happened to be governing that week. Zé Povinho became, and remains, the national everyman — the Portuguese Uncle Sam, if Uncle Sam were deeply sceptical of you.',
        'In 1884 Bordalo Pinheiro founded a ceramics factory here in Caldas and turned the same sensibility into three dimensions. The house style is vivid, glazed, high-relief majolica that takes nature much too far: cabbage-leaf bowls and tureens, plates crawling with lizards, lobsters, frogs and snakes, swallows to hang on a wall. Some of it is beautiful, some of it is deliberately grotesque, and the joke is usually somewhere in the piece. The factory is still working, and the cabbage-leaf ware is still in production more than a century later — you will have eaten off it somewhere in Portugal without noticing.',
        'A warning that is entirely practical. This is the town that sells heavy ceramics, and nobody on this trip has a checked bag — ten kilos of carry-on each, and a cabbage tureen is not going in it. Anything substantial bought here has to be shipped. Fall in love accordingly.',
        'And one disappointment to know in advance: the Museu da Cerâmica, the town’s dedicated ceramics museum, has been closed since March 2025 for building works with no announced reopening, and its collection has moved to the Centro de Artes. In the Portuguese town most associated with pottery, the pottery museum is the one thing you cannot see.'
      ],
      next: 'That is the whole town. The market square is about 500 metres back northwest, and the walk between the two is the entire history of the place: a spring, a queen’s hospital, a park, and a kiln.',
      walk: []
    }
  ]
};
