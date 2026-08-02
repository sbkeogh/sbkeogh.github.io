/* Évora walled-centre walking tour.
 * Stop coordinates: Wikipedia geo-tags where they exist (Roman temple cross-checked
 * against OpenStreetMap and the OSM position used; cathedral, aqueduct, university),
 * OpenStreetMap for the rest (Praça do Giraldo, São Francisco, Porta de Alconchel).
 * Closest pair is 112 m — comfortably clear of the 40 m arrival trigger.
 * Historical content follows the verified Évora history page on this site (July 2026).
 */
window.TOUR = {
  slug: 'evora',
  // No recorded narration yet — the player speaks the text with the browser
  // voice instead. This flag makes it do so inside the user's tap; see speakStop().
  hasAudio: false,
  tileCache: 'evora-tiles-v1',
  center: [38.57241, -7.90951],
  bounds: { north: 38.5780, south: 38.5668, west: -7.9166, east: -7.9024 },
  intro: 'About two and a half kilometres through the walled centre of Évora — a Roman temple that survived by being a butcher’s shop, a chapel lined with the bones of several thousand people, a cathedral built like a fortress, and an aqueduct with houses living inside its arches. Évora spent several centuries being far more important than its size suggests, and then history moved on and left the whole thing standing, which is why UNESCO listed the centre in 1986. Tap a numbered stop, or turn on GPS and let the stories find you. It is flat by Portuguese standards, but the last two stops are a real stretch out to the aqueduct and back down the walls — and in August, do this early or late, not at two in the afternoon.',
  stops: [
    {
      id: 'giraldo',
      name: 'Praça do Giraldo',
      era: '1165 onward · the main square',
      coords: [38.57105, -7.90968],
      story: [
        'The square is named after the man who took the city, and the chronicles tell it like this. In 1165 a freelance frontier warlord called Geraldo — Geraldo Sem Pavor, Gerald the Fearless — scaled the walls at night with a small party, killed the sentry and his daughter in the watchtower, opened the gates, and presented Évora to Afonso Henriques as a fait accompli, thereby getting himself pardoned for whatever had made him an outlaw in the first place. Whether it happened quite that cleanly is anyone’s guess, but the city committed to the story: the arms of Évora show a mounted knight with a sword in one hand and two severed heads in the other. It is not a subtle municipal logo.',
        'Stand in the middle and look at the arcades and the marble fountain, because this pleasant square has a much darker second life. Évora was a seat of the Inquisition, and its autos-da-fé — the public sentencing ceremonies — were staged right here. The city had one of medieval Portugal’s larger Jewish communities, in the quarter near what is now Rua do Raimundo; after the forced conversions of 1497 their descendants lived as “New Christians,” permanently suspect and periodically prosecuted, and a tribunal of the Holy Office sat here from the middle of the sixteenth century.',
        'This is also where, in 1483, King João II had the Duke of Bragança tried and beheaded for conspiring against him — the most powerful nobleman in the kingdom, executed in the town square. And it has been a market, a bus stop, and the site of an anti-Spanish riot. Portuguese public space carries its history lightly and does not label much of it. Now everyone drinks coffee in the shade, which is the correct use of it, and worth a moment’s thought while you do.'
      ],
      next: 'Head south and downhill, about 270 metres, to the church of São Francisco and the chapel behind it.',
      walk: [
        'The streets running southwest off the square, around Rua do Raimundo, are roughly where the Jewish quarter stood before 1497. There is very little to see and no plaque worth photographing — which is rather the point. Whole communities can be erased from a townscape and leave the street plan behind as the only evidence.'
      ]
    },
    {
      id: 'sao-francisco',
      name: 'Igreja de São Francisco &amp; the Capela dos Ossos',
      era: '15th–17th century · Gothic-Manueline',
      coords: [38.56879, -7.90842],
      story: [
        'The church came first — a big late-Gothic and Manueline building from the turn of the sixteenth century, put up while the court was spending long stretches in Évora and money was plentiful. The porch and the sea-rope and armillary-sphere motifs are the standard vocabulary of the age of discoveries, carved by people who had never seen the sea.',
        'The reason there is a queue outside is behind it. In the seventeenth century Franciscan friars built a small chapel and lined it, floor to ceiling, with the bones of something like five thousand exhumed dead. The practical motive was ordinary municipal housekeeping: the city had dozens of crowded monastic cemeteries eating up land inside the walls, and the friars consolidated them. But they were Baroque friars, and they saw a teaching opportunity in the raw material.',
        'The inscription over the door is the whole argument in eleven words: “Nós ossos que aqui estamos pelos vossos esperamos.” We bones that are here await yours. It is not built to frighten you, and it is not a horror attraction — it is an argument that contemplating death clarifies how to spend a life. Whether that lands or simply unsettles you is a personal matter, but it repays going in with the intention rather than the camera.',
        'Practically: entry is around seven euros, less for over-65s, and the same ticket covers the nativity-figure collection and the religious art upstairs, both of which almost everyone skips. The chapel is small and gets genuinely crowded — the coach parties land between about half past ten and noon, and again from one to three.'
      ],
      next: 'Back up past the square and east, about 350 metres, climbing steadily to the cathedral at the top of the town.',
      walk: [
        'You are walking up the spine of the old town. Notice the townhouses with arcaded galleries and Moorish-Gothic paired windows — that is fifteenth- and sixteenth-century noble housing, built when the House of Avis kept coming here and the aristocracy had to keep up.'
      ]
    },
    {
      id: 'se',
      name: 'Sé de Évora — the Cathedral',
      era: 'begun c. 1186 · Romanesque-Gothic',
      coords: [38.57167, -7.90694],
      story: [
        'The largest medieval cathedral in Portugal, on the highest ground in the city, and built like something expecting to be attacked — because it was. Work began in the late twelfth century, a generation after Geraldo took the town, when this was still frontier country and a cathedral was also a strongpoint. The granite is local, the walls are thick, and the two west towers are deliberately unmatched.',
        'Inside, the building shifts from Romanesque solidity to Gothic height as the decades pass, and the fourteenth-century cloister off the south side is worth the detour for the quiet alone. There is a treasury with a celebrated ivory Virgin that opens into a triptych, and a set of medieval carved apostles on the west door that are among the best sculpture of their period in the country.',
        'The thing to actually do here is climb to the roof terrace. You come out on top of the vaults, level with the towers, and the whole Alentejo opens up — the tiled roofs of the walled town below, then the plain running flat to the horizon in every direction, cork oaks and wheat and heat haze. It explains the geography of the place better than any amount of reading: this town is a rock in an ocean of farmland, and everything about it follows from that.'
      ],
      next: 'Just north, barely 110 metres — the Roman temple stands in the open at the top of the town.',
      walk: []
    },
    {
      id: 'templo',
      name: 'Templo Romano',
      era: '1st century AD · Roman',
      coords: [38.57263, -7.90734],
      story: [
        'Fourteen granite columns with marble capitals and bases, raised in the first century, standing in the open air at the top of the town. This is the best-preserved Roman temple in Portugal and the postcard image of Évora.',
        'It is universally called the Temple of Diana, and that name is worth nothing at all: it is a piece of seventeenth-century guesswork with no evidence behind it. Nobody knows the dedication. The likeliest answer, given the date and the setting on the forum of a proud Roman municipality, is the imperial cult — a temple to the emperor rather than to a goddess of the hunt. Use the name if you like; just know it was invented sixteen hundred years after the fact.',
        'How it survived is the better story. In the Middle Ages the temple was walled up solid and absorbed into a fortified tower, and for centuries the resulting building served as the municipal slaughterhouse and butcher’s shop. That is precisely why it is still here: a building in daily use is a building nobody quarries for stone. It was only stripped of its later masonry in the 1870s, when a restorer cleared away the walls and found the colonnade intact inside. The Alentejo’s most photographed ruin survived because it was full of meat hooks.',
        'The Roman city was Ebora, and under Julius Caesar it collected the honorific Liberalitas Julia — “Julian generosity” — a mark of imperial favour that came with real legal privileges. It had walls, a forum, an aqueduct and this.'
      ],
      next: 'East about 260 metres to the university.',
      walk: [
        'The low white building with the arcaded loggia beside the temple is the Pousada dos Lóios, a fifteenth-century monastery turned state hotel, and next to it the church of São João Evangelista, whose interior is sheeted in eighteenth-century blue azulejos by António de Oliveira Bernardes. It is privately owned by the Cadaval family and charges admission, and it is one of the finest tiled interiors in the country.'
      ]
    },
    {
      id: 'universidade',
      name: 'Universidade de Évora',
      era: '1559 · Jesuit',
      coords: [38.57310, -7.90440],
      story: [
        'Portugal’s second-oldest university, founded in 1559 by Cardinal Henrique — the king’s brother — and granted university status the same year by Pope Paul IV. Henrique handed it to the Jesuits, and for two hundred years it made this small walled town one of the intellectual centres of the Portuguese world, teaching philosophy and theology to students who then scattered across an empire that reached Brazil, Goa and Japan.',
        'Walk into the courtyard if it is open, which it usually is — this is a working university, not a monument. The marble colonnade runs around a quiet square, and the classrooms off it are lined with eighteenth-century azulejos whose scenes advertise the subject taught inside each room: the physics room has physics, the philosophy room has philosophy. It is the most charming piece of signage in Portugal.',
        'The ending is abrupt. In 1759 the Marquis of Pombal expelled the Jesuits from Portugal and its empire, and in 1779 this university was closed permanently, its masters imprisoned or exiled. The buildings sat in other uses for nearly two centuries. It reopened only in 1973, a year before the revolution, and took back its old name in 1979.',
        'One footnote about the founder, because it connects to everything else here. Cardinal Henrique became king himself in 1578, at sixty-six, after his great-nephew Sebastião got himself killed invading Morocco. Henrique was a cardinal and had no heir. When he died two years later the succession collapsed, Philip II of Spain took the Portuguese crown, and the court stopped coming to Évora — which is the moment this city’s greatness ends.'
      ],
      next: 'A longer stretch now — about 750 metres northwest, out to where the aqueduct comes into the city.',
      walk: [
        'You are crossing the whole width of the walled town, which takes about ten minutes and tells you how small it is. Fifty-odd thousand people live in Évora today, and most of them live outside these walls.'
      ]
    },
    {
      id: 'aqueduto',
      name: 'Aqueduto da Água de Prata',
      era: '1530s · Renaissance',
      coords: [38.57604, -7.91221],
      story: [
        'The “aqueduct of silver water,” built in the 1530s under King João III to a design by Francisco de Arruda, running roughly eighteen kilometres from springs northeast of the city. It has been a protected national monument since 1910.',
        'The arches out in the countryside are handsome enough, but the remarkable part is here, at this end, inside the walls. As the aqueduct comes down into the city its arches shrink towards street level — and at some point residents simply started building into them. Houses and shops were constructed directly under and inside the arcade, using the Renaissance masonry as a party wall, and people still live in them today. Look along Rua do Cano and you will see front doors, windows, washing lines and satellite dishes fitted into a sixteenth-century water main.',
        'That is worth pausing on, because it is the opposite of how we usually treat monuments. Nobody fenced this off or cleared the houses away to present the aqueduct properly. The city absorbed the infrastructure into itself and kept using both. It is a living building rather than a preserved one.',
        'Francisco de Arruda, incidentally, is the same architect credited with the Torre de Belém in Lisbon — so if you get to Belém later in the trip, you will have seen two very different sides of one man’s work.'
      ],
      next: 'South along the line of the walls, about 660 metres, down to the Alconchel gate.',
      walk: []
    },
    {
      id: 'alconchel',
      name: 'Porta de Alconchel &amp; the walls',
      era: 'Roman, medieval &amp; 17th century · the defences',
      coords: [38.57037, -7.91463],
      story: [
        'Évora’s walls are three cities of fortification stacked on each other. There is a Roman core, a much larger medieval circuit thrown out around the growing town in the fourteenth century, and then a ring of angular seventeenth-century bastions built when artillery made everything earlier obsolete. Porta de Alconchel is the main surviving medieval gate, and the towers flanking it are the best place to read the layering.',
        'Those seventeenth-century bastions have a specific cause. In 1637 Évora rose against Spanish taxation in a revolt remembered as the Manuelinho, after the town simpleton whose name was signed to the anonymous pamphlets stuck up around the city — a nice piece of deniability. The revolt was put down, but it was one of the first tremors of the rebellion that in 1640 restored the Portuguese crown and started twenty-eight years of war with Spain. This is border country, and these walls were rebuilt to fight in that war.',
        'Which brings the walk full circle. Évora’s decline began when Philip II took the crown in 1580 and the travelling court stopped arriving; the city lost its reason to be grand, and never really got it back. That is exactly why you have spent the afternoon walking through an intact sixteenth-century town. Nobody here ever had the money to knock it down and build something better. Poverty is the great preservative, and UNESCO listed the results in 1986.'
      ],
      next: 'That closes the loop. The Praça do Giraldo is about 500 metres back east if you want the shade and a coffee — and if you have a car and an evening, the Almendres Cromlech is fifteen kilometres west: a great oval of standing stones begun in the sixth millennium BC, older than Stonehenge by a wide margin and older than the pyramids, with nobody to tell you what it was for.',
      walk: []
    }
  ]
};
