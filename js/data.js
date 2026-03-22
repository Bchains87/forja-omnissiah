/**
 * FORJA DEL OMNISSIAH — data.js
 * Catálogo completo de facciones, subfacciones y unidades
 */

const FACTIONS = {
  'space-marines': {
    name: 'Blood Angels',
    icon: '⚔️',
    lore: 'Hijos del Ángel Sanguinius, portadores de la Rabia Negra.',
    loreFull: `Los Blood Angels son uno de los capítulos originales del Adeptus Astartes, fundados tras la Herejía de Horus. Descendientes directos del Primarca Sanguinius —el Ángel, el más hermoso y feroz de los hijos del Emperador— llevan en su sangre tanto la gloria como la maldición de su padre.

Su mayor tormento es la <strong>Rabia Negra</strong>: una psicosis hereditaria que arroja a sus guerreros a un frenesí de combate, reviviendo los últimos momentos de Sanguinius en manos de Horus. Aquellos que caen ante ella son enviados al frente como la temida <em>Death Company</em>, guerreros sin retorno que se lanzan al combate con una última oración en los labios.

Pese a su maldición, los Blood Angels son artistas, poetas y maestros del combate aéreo. Sus fortalezas son catedrales, sus armaduras reliquias de arte, y su nombre es sinónimo de sacrificio glorioso en nombre del Dios-Emperador.`,
    subfactions: {
      'Infantería': [
        { name: 'Librarian', type: 'hero', price: 15000, img: 'librarian.png', imgPainted: 'librarian_painted.png' },
        { name: 'Death Company Squad', type: 'elite', price: 25000, img: 'death_company.png', imgPainted: 'death_company_painted.png' },
        { name: 'Aerial Knights Squad', type: 'elite', price: 25000, img: 'aerial_knight.png', imgPainted: 'aerial_knight_painted.png' },
      ],
      'Personajes Especiales': [
        { name: 'Captain Kenneth — El Ángel de Sangre', type: 'hero', price: 20000, img: 'capitan_kenneth_sin_fondo.png', imgPainted: 'capitan_kenneth_sin_fondo_painted.png' },
        { name: 'Mephiston — Señor de la Muerte', type: 'hero', price: 22000, img: 'mephiston.png', imgPainted: 'mephiston_painted.png' },
      ],
    }
  },
  'dark-angels': {
    name: 'Dark Angels',
    icon: '⚔️',
    lore: 'Los primeros en la legión. Portadores de secretos oscuros e impenetrables.',
    loreFull: `Los Dark Angels ostentan el honor —y el peso— de ser el <strong>Primer Capítulo</strong> del Adeptus Astartes. Nacidos de Caliban, un mundo de caballeros y bestias monstruosas, su Primarca Lion El'Jonson los forjó como la élite más letal del Imperium.

Pero Caliban ya no existe. Destruido en el cataclismo de la Herejía de Horus, su ruina flota como un cinturón de escombros en el espacio. Y con él, el secreto que los Dark Angels juran ocultar con sus vidas: la <strong>Caída</strong>, la traición de una parte de su propia legión que nunca fue reconocida públicamente.

Los <em>Fallen</em> —traidores que escaparon al Warp— son cazados en silencio por los <strong>Deathwing</strong> y los <strong>Ravenwing</strong>, las órdenes más secretas del capítulo. Ningún Dark Angel morirá en paz hasta que el último Caído sea capturado y absuelto. Su lealtad al Emperador es total... pero sus secretos los hacen peligrosos incluso para sus hermanos.`,
    subfactions: {
      'Personajes': [
        { name: 'Chaplain Mordekai', type: 'hero', price: 18000, img: 'mordekai.png', imgPainted: 'mordekai_painted.png' },
        { name: "Lion El'Jonson (Primarca)", type: 'hero', price: 30000, img: 'lion.png', imgPainted: 'lion_painted.png' },
        { name: 'Paladin Lion El Johnson', type: 'hero', price: 28000, img: 'lion_paladin.png', imgPainted: 'lion_paladin_painted.png' },
      ],
      'Escuadras': [
        { name: 'Inceptors Squad', type: 'elite', price: 28000, img: 'inceptor.png', imgPainted: 'inceptor_painted.png' },
        { name: 'Intercessor Squad', type: 'infantry', price: 22000, img: 'intercessor.png', imgPainted: 'intercessor_painted.png'},
      ],
      'Vehículos': [
        { name: 'Redemptor Dreadnought', type: 'vehicle', price: 45000, img: 'dreadnought.png' , imgPainted: 'dreadnought_painted.png' },
      ],
    }
  },
  'space-wolves': {
    name: 'Space Wolves',
    icon: '⚔️',
    lore: 'Los hijos de Fenris, guerreros bárbaros del lobo espacial.',
    loreFull: `De las tormentas eternas de <strong>Fenris</strong>, el mundo de hielo y océanos furiosos, surgieron los Space Wolves. Guerreros salvajes y fieros, modelados a imagen de su Primarca Leman Russ —el Rey-Lobo, el Carnicero del Emperador— son la antítesis del Space Marine metódico y codificado.

No siguen el Codex Astartes. Sus compañías son <em>Grandes Empresas</em>, lideradas por Señores de la Guerra con nombres como el Colmillo de Tormenta o el Hacha de Hierro. Sus Dreadnoughts son enterrados bajo la nieve entre batallas, y sus guerreros más viejos se transforman en <strong>Wulfen</strong>, seres a medio camino entre hombre y bestia.

El don de Fenris es también su maldición: la <em>Maldición del Wulfen</em> acecha en cada sangre lobo. Y cuando Leman Russ desapareció en el Eye of Terror prometiendo regresar al final de los tiempos, los Space Wolves juraron esperarlo. Porque los lobos siempre vuelven a casa.`,
    subfactions: {
      'Escuadras': [
        { name: 'Sons of Fenrir Exterminator Tactical Squad', type: 'infantry', price: 22000, img: 'fenrir_exterminator.png', imgPainted: 'fenrir_exterminator_painted.png' },
        { name: 'Wolf Guard Terminators (2e)', type: 'elite', price: 25000, img: null },
        { name: 'Selene Hunters (HL177)', type: 'elite', price: 22000, img: null },
      ],
      'Personajes / Bestias': [
        { name: 'Wolffang Wolf (Ciberlobo)', type: 'hero', price: 15000, img: null },
        { name: 'Canis Lupus Cybernetic Canine', type: 'hero', price: 18000, img: null },
      ],
    }
  },
  'ultramarines': {
    name: 'Ultramarines',
    icon: '⚔️',
    lore: 'El capítulo más noble del Imperium. Hijos de Roboute Guilliman.',
    loreFull: `Los Ultramarines son el <strong>capítulo modelo</strong> del Adeptus Astartes, el estándar contra el que todos los demás son medidos. Su Primarca, Roboute Guilliman, no solo fue uno de los guerreros más poderosos de la galaxia, sino también su mayor administrador y legislador.

Fue Guilliman quien escribió el <em>Codex Astartes</em>, la biblia táctica de los Space Marines, tras la devastación de la Herejía de Horus. Fue él quien organizó las Legiones en capítulos independientes para evitar otra traición de escala apocalíptica. Y fue él quien, milagrosamente resucitado en el siglo 41, asumió el título de <strong>Lord de la Ultramar</strong> y Regente del Imperium.

Macragge, su mundo natal, es un joya civilizada en un universo brutal. Los Ultramarines son diplomáticos tanto como guerreros, y su honor es tan inquebrantable como el acero de sus armaduras azules. Para el Ciudadano común del Imperium, un Ultramarine es la imagen misma del salvador divino.`,
    subfactions: {
      'Primarcas': [
        { name: 'Roboute Guilliman (Primarca)', type: 'hero', price: 35000, img: null },
        { name: "Vulkan He'Stan", type: 'hero', price: 25000, img: null },
      ],
      'Personajes': [
        { name: 'Marneus Calgar + Victrix Guard', type: 'hero', price: 35000, img: null },
        { name: 'Grimaldus', type: 'hero', price: 18000, img: null },
        { name: 'Titus (Space Marine 2)', type: 'hero', price: 20000, img: null },
        { name: 'Quintus Aexius — Conditor', type: 'hero', price: 18000, img: null },
        { name: 'Marshal Gift #17 (Red Pilgrim)', type: 'hero', price: 18000, img: null },
      ],
      'Escuadras': [
        { name: 'Malum Caedo Squad (Boltgun/Melta/Plasma)', type: 'infantry', price: 25000, img: null },
        { name: 'Hijos del Emperador 30K', type: 'infantry', price: 22000, img: null },
      ],
    }
  },
  'sm-general': {
    name: 'Space Marines — Vehículos y Generales',
    icon: '🔧',
    lore: 'Unidades de apoyo pesado y vehículos de asalto del Adeptus Astartes.',
    loreFull: `El <strong>Adeptus Astartes</strong> es la punta de lanza del Imperium de la Humanidad: veinte capítulos originales —y cientos de descendientes— de supersoldados diseñados para ser la respuesta definitiva a las amenazas que ningún ejército normal podría enfrentar.

Cada Space Marine es el resultado de décadas de modificación genética, entrenamiento brutal y cirugía extrema. Se les implantan hasta <strong>19 órganos especiales</strong> que los transforman en algo más que humano: desde el Osmodula que refuerza sus huesos hasta el Betcher's Gland que les permite escupir ácido corrosivo.

Sus vehículos son reliquias sagradas mantenidas por los <em>Tecnomarines</em>, sacerdotes del Omnissiah en armadura de batalla. Un Rhino puede llevar siglos en servicio activo; un Dreadnought puede encerrar la mente de un héroe caído por mil años. La armería de un capítulo es un museo vivo de diez mil años de guerra.`,
    subfactions: {
      'Vehículos': [
        { name: 'Rhino (Transporte modular)', type: 'vehicle', price: 35000, img: null },
        { name: 'Razorback (Rhino modificado)', type: 'vehicle', price: 38000, img: null },
        { name: 'Invader ATV (Gatling/Multi-melta)', type: 'vehicle', price: 28000, img: null },
        { name: 'Primaris Invictor Tactical Warsuit', type: 'vehicle', price: 45000, img: null },
        { name: 'Aximus Dreadnought (Laserforge)', type: 'vehicle', price: 40000, img: null },
        { name: 'Redemptor Dreadnought SW', type: 'vehicle', price: 45000, img: null },
        { name: 'Imperial Warrior Overhaul v1.3', type: 'vehicle', price: 50000, img: null },
      ],
      'Personajes / Escuadras Generales': [
        { name: 'Librarian in Terminator Armour', type: 'hero', price: 18000, img: null },
        { name: 'Terminator Squad', type: 'elite', price: 28000, img: null },
        { name: 'MK4 Marines (Presupported)', type: 'infantry', price: 20000, img: null },
        { name: 'PF MK6 Librarian (kit completo)', type: 'hero', price: 22000, img: null },
        { name: 'V10 Leviathan Space Marine Set', type: 'elite', price: 30000, img: null },
      ],
    }
  },
  'chaos-general': {
    name: 'Caos — Legión del Despoiler',
    icon: '☠',
    lore: 'Los traidores del Imperium. Sirven al Caos y a los Dioses Oscuros.',
    loreFull: `Diez mil años atrás, ocho Legiones del Adeptus Astartes se volvieron contra el Dios-Emperador siguiendo a <strong>Horus Lupercal</strong>, el más amado de los Primarcas. La Herejía de Horus casi destruyó el Imperium. Horus fue derrotado, pero sus legiones sobrevivieron, corruptas e inmortales, en las profundidades del <em>Eye of Terror</em>.

Ahora sirven a los <strong>Cuatro Dioses del Caos</strong>: Khorne el Señor de la Sangre, Tzeentch el Tejedor de Destinos, Nurgle el Padre de las Plagas, y Slaanesh el Príncipe del Exceso. Sus Señores del Caos son casi inmortales, forjados por siglos de guerra y magia oscura.

Al frente de las Legiones del Caos marcha <strong>Ezekyle Abaddon el Despoiler</strong>, portador de la Talon of Horus y el Drach'nyen, líder de trece Cruzadas Negras que han sacudido el Imperium hasta sus cimientos. Donde él va, la realidad misma se corrompe.`,
    subfactions: {
      'Personajes Especiales': [
        { name: 'Abaddon el Despoiler (Guerreador)', type: 'hero', price: 35000, img: null },
        { name: "Be'lakor — El Primer Príncipe del Caos", type: 'hero', price: 45000, img: null },
        { name: 'Chaos Terminator Lord', type: 'hero', price: 22000, img: null },
        { name: 'Chaos Terminator (1x Hombros enormes)', type: 'elite', price: 12000, img: null },
        { name: 'Abbadon Despoiler Warmaster', type: 'hero', price: 35000, img: null },
      ],
    }
  },
  'chaos-khorne': {
    name: 'World Eaters — Khorne',
    icon: '🩸',
    lore: 'Berserkers al servicio del Dios de la Guerra. Solo sangre. Solo muerte.',
    loreFull: `<em>«¡Sangre para el Dios de la Sangre! ¡Cráneos para el Trono de Cráneos!»</em>

Los World Eaters fueron una vez la Legión XII, los <strong>Warhounds</strong>, los perros de caza más feroces del Imperium. Su Primarca, Angron el Ángel Rojo, fue el único que llegó al universo ya marcado por el sufrimiento: implantado con los <em>Butcher's Nails</em>, unos dispositivos neurológicos que hacían del combate lo único que calmaba su dolor.

Angron implanó los Nails en toda su Legión. El resultado fue una fuerza de combate incomparable... y completamente incontrolable. Tras abrazar a Khorne en la Herejía de Horus, los World Eaters se convirtieron en los berserkers más temidos de la galaxia.

No hacen prisioneros. No toman fortines. No asedian. Solo cargan, solo destrozan, solo matan. <strong>Khorne no acepta otra ofrenda que el combate.</strong>`,
    subfactions: {
      'Escuadras y Personajes': [
        { name: 'World Eaters Lord Invocatus', type: 'hero', price: 25000, img: null },
        { name: 'Angry Rhino Chieftain', type: 'vehicle', price: 38000, img: null },
      ],
    }
  },
  'chaos-nurgle': {
    name: 'Death Guard — Nurgle',
    icon: '☣',
    lore: 'Los bendecidos por la Plaga. Indestructibles, corruptos y eternos.',
    loreFull: `Los Death Guard fueron una vez los guerreros más resistentes del Imperium: la Legión XIV, el ejército que nunca se rendía, que aguantaba cualquier veneno, cualquier radiación, cualquier asedio. Su Primarca, <strong>Mortarion</strong>, creció en un mundo de venenos y aprendió a sobrevivir donde otros morían.

La ironía es perfecta: los guerreros que se enorgullecían de su resistencia a la enfermedad fueron los primeros en caer ante la <em>Plaga Indeseable</em> de Nurgle, el Padre de la Podredumbre. Atrapados en el Warp durante la Herejía de Horus, suplicaron sin saberlo al Dios de la Plaga. Él respondió.

Ahora son <strong>eternamente putrefactos y eternamente vivos</strong>. Sus cuerpos revientan de Nurglings, sus armaduras están fundidas con su carne, y sus armas rezuman la Plaga de los Siete Dolores. Son lentos, imparables e imposibles de matar. Y cuando sonríen, huelen a flores podridas.`,
    subfactions: {
      'Escuadras y Personajes': [
        { name: 'Death Guard Kill Team', type: 'infantry', price: 22000, img: null },
        { name: 'Commander Thalpior (Mezgike)', type: 'hero', price: 20000, img: null },
        { name: 'Death Tide Drones V2 (Mezgike)', type: 'elite', price: 25000, img: null },
        { name: 'Addicted Dredger B (Mezgike)', type: 'hero', price: 18000, img: null },
        { name: 'Chaos Space Marine Death Guard (Kill Team)', type: 'infantry', price: 25000, img: null },
      ],
    }
  },
  'skaven': {
    name: 'Skaven',
    icon: '🐀',
    lore: 'Las ratas del Caos Gris, esclavos de la Rueda del Destino.',
    loreFull: `Bajo las ciudades de los Reinos Mortales, bajo las montañas y las ruinas, se extiende el <strong>Gran Hormiguero</strong>: un imperio subterráneo de dimensiones inconcebibles, habitado por los Skaven, la raza de las ratas parlantes que el mundo oficial prefiere ignorar porque admitir su existencia implicaría admitir que la civilización está construida sobre un nido de serpientes.

Los Skaven adoran al <strong>Gran Cornudo</strong>, dios del Caos Gris, y sirven sin saberlo como instrumentos de su voluntad. Sus clanes se dividen en castas especializadas: los Clans Verminus de guerreros, los <em>Clans Moulder</em> de bestias mutantes, los <em>Clans Skryre</em> de tecnología warp imposible, y los <em>Clans Pestilens</em> de sacerdotes de la plaga.

Son cobardes, traidores, brillantes y completamente impredecibles. Su mayor debilidad es su mayor fortaleza: <strong>nunca pararán de intentar destruirse entre sí</strong>... pero cuando se unen, pueden derrumbar reinos enteros en una noche.`,
    subfactions: {
      'Escuadras y Personajes': [
        { name: 'Doomwheels (Kit)', type: 'vehicle', price: 40000, img: null },
        { name: 'Stormvermins 6th Edition (Escuadra)', type: 'elite', price: 22000, img: null },
        { name: 'Vizzik Skour — Profeta de la Rata Cornuda', type: 'hero', price: 25000, img: null },
        { name: 'Vizzik Skour (Soportado - Alt)', type: 'hero', price: 25000, img: null },
      ],
    }
  },
  'stormcast': {
    name: 'Stormcast Eternals & Vampiros',
    icon: '⚡',
    lore: 'Los guerreros forjados en el rayo de Sigmar. Campeones eternos.',
    loreFull: `Cuando los Reinos Mortales caían ante las mareas del Caos, el Dios-Rey <strong>Sigmar Heldenhammer</strong> no envió ejércitos ni ángeles. Envió almas.

Los Stormcast Eternals son mortales que murieron como héroes y fueron arrancados de las garras de la Muerte por Sigmar, remoldeados en algo más que humano en las forjas celestes del <em>Sigmaron</em>. Son más altos, más fuertes, más duros que cualquier hombre. Sus armaduras doradas son sagradas. Sus armas son el rayo y el trueno.

Pero cada vez que mueren y son <strong>Reforjados</strong>, pierden algo de sí mismos. Un recuerdo. Un nombre. Un rostro amado. Los veteranos de cien batallas apenas recuerdan quiénes fueron. Son inmortales, pero la inmortalidad tiene un precio: convertirse poco a poco en la herramienta perfecta de un dios, olvidando que alguna vez fueron simplemente humanos.`,
    subfactions: {
      'Personajes': [
        { name: 'Lord Commander Bastian Carthalos', type: 'hero', price: 25000, img: null },
        { name: 'Ionus Cryptborn con Dragón', type: 'hero', price: 65000, img: null },
        { name: 'Ushoran Mortarch of Delusion', type: 'hero', price: 50000, img: null },
      ],
    }
  },
  'sororitas': {
    name: 'Adepta Sororitas',
    icon: '✝',
    lore: 'Las guerreras de la Fe. Incorruptibles ante la herejía y el Caos.',
    loreFull: `Las Adepta Sororitas —las <strong>Hermanas de Batalla</strong>— son el ejército armado de la Ecclesiarquía, la iglesia del Dios-Emperador del Hombre. Nacieron de una paradoja legal: tras la Edad de Apostasía, se prohibió a la Iglesia tener "hombres en armas". La respuesta fue obvia: un ejército de mujeres.

Su fe es su armadura más poderosa. Los <em>Milagros de Fe</em> son reales y documentados: hermanas que absorben golpes mortales sin una marca, que resucitan brevemente para matar a su asesino, que convierten su propio fuego en un muro de voluntad divina. La Inquisición los llama psíquicos. Las Hermanas los llaman la gracia del Emperador.

Marchan al combate con <strong>Bolters y Santos Rezos</strong>, quemando la herejía con los mismos Flamers que portan como símbolos de purificación. Su grito de batalla es una oración. Su muerte es un martirio. Y los Santos Inquisitoriales afirman en voz baja que quizás, solo quizás, el Emperador realmente las escucha.`,
    subfactions: {
      'Escuadras': [
        { name: 'Sisters of Battle Squad (Wesley Pontes)', type: 'infantry', price: 22000, img: null },
        { name: 'Widows of Heaven Squad', type: 'elite', price: 25000, img: null },
        { name: 'Sororitas Supported Kit', type: 'infantry', price: 25000, img: null },
      ],
    }
  },
  'custodes': {
    name: 'Adeptus Custodes',
    icon: '🛡',
    lore: 'Los guardias de oro del Emperador. Insuperables en combate singular.',
    loreFull: `Si los Space Marines son los caballeros del Imperium, los Adeptus Custodes son algo diferente: son la <strong>obra maestra personal del Emperador</strong>. Cada uno fue creado individualmente, con una atención y un nivel de modificación genética que hace que el proceso de creación de un Space Marine parezca tosco por comparación.

No hay Capítulos, no hay Legiones. Solo diez mil guardianes —la <em>Guardia de los Diez Mil</em>— cuya única misión durante milenios fue proteger el Palacio Imperial y al Dios-Dios en su Trono de Oro. Nunca olvidaron. Nunca durmieron. Nunca abandonaron su vigilia.

Ahora, bajo el mandato de Guilliman, los Custodes han salido al universo por primera vez en miles de años. Un único Custodio es capaz de enfrentarse a un pelotón de Space Marines y ganar. Son más lentos en número pero incomparablemente más letales. Sus <strong>Lanzas Guardianas</strong> han matado a dioses menores. Y cada uno de ellos conoce el nombre del Emperador.`,
    subfactions: {
      'Escuadras y Personajes': [
        { name: 'Custodian Guard (Escuadra)', type: 'elite', price: 28000, img: null },
        { name: 'Custodian Warden / Vexilus Praetor', type: 'elite', price: 30000, img: null },
        { name: 'Trajan Valoris (Capitán-General)', type: 'hero', price: 25000, img: null },
        { name: 'Trajan Valoris (Alt Pose)', type: 'hero', price: 25000, img: null },
      ],
    }
  },
  'astra': {
    name: 'Astra Militarum — Inquisición',
    icon: '🪖',
    lore: 'Los millones de guardias del Imperium. Humanos en la línea del frente.',
    loreFull: `El Astra Militarum es el <strong>ejército más grande que el universo ha conocido jamás</strong>. Billones de hombres y mujeres comunes, equipados con un lasgun y una plegaria, enviados a defender planetas que nunca volverán a ver contra enemigos que desafían la cordura.

No tienen la modificación genética de los Space Marines. No tienen la fe blindada de las Sororitas. Tienen números, artillería pesada, tanques Leman Russ, y la voluntad irracional del ser humano de seguir luchando cuando todo lo demás ha fallado. Y milagrosamente, a menudo es suficiente.

La <strong>Inquisición</strong> opera en las sombras de este ejército: los agentes del Santo Ordos no tienen lealtad a nadie excepto al Emperador y a su propio juicio. Un Inquisidor puede ordenar la exterminación de un planeta entero si cree que la corrupción del Caos ha echado raíces. No piden permiso. No ofrecen disculpas. <em>El fin siempre justifica los medios</em>, y el fin es la supervivencia de la Humanidad.`,
    subfactions: {
      'Escuadras y Personajes': [
        { name: 'Krieg Horse Company Commander', type: 'hero', price: 18000, img: null },
        { name: 'Grey Knight Terminators (Agentes Imperiales)', type: 'elite', price: 28000, img: null },
        { name: 'Inquisitrice Kyria Draxus', type: 'hero', price: 18000, img: null },
        { name: 'Krieg Renegade (Escuadra)', type: 'infantry', price: 20000, img: null },
        { name: 'Death Korps Pose 1 (Unidad)', type: 'infantry', price: 5000, img: null },
      ],
    }
  },
  'imperial-knights': {
    name: 'Imperial Knights',
    icon: '🤖',
    lore: 'Titanes del Feudalismo Imperial. Lealtad y Honor en acero y fuego.',
    loreFull: `En los mundos nobles del Imperium, el poder se mide en <strong>Knights</strong>: monstruosas máquinas de guerra de veinte metros de altura, heredadas de generación en generación como los castillos de un sistema feudal galáctico. El piloto —el <em>Caballero</em>— se fusiona psíquicamente con su trono al subir por primera vez, y desde ese momento la historia de todos los anteriores pilotos vive también en él.

Los Knight no pertenecen al Adeptus Mechanicus ni al ejército regular. Son casas nobles con sus propios códigos de honor, sus propias guerras de linaje, sus propias alianzas y traiciones. Cuando marcha un Knight, la tierra tiembla. Cuando cae, su muerte es un lamento que los supervivientes recordarán por generaciones.

Algunos Knights se han corrompido al Caos —los <strong>Caballeros Renegados</strong>— y se convierten en pesadillas andantes cuyo trono-mecánico llora sangre. Pero los que permanecen leales son quizás la imagen más poderosa que el Imperium puede proyectar: <em>una sola máquina que vale por un ejército entero</em>.`,
    subfactions: {
      'Knights': [
        { name: 'Knight Valerius — Release Completo', type: 'vehicle', price: 75000, img: null },
        { name: 'Imperial Knight Crusader Kit', type: 'vehicle', price: 70000, img: null },
        { name: 'Warhammer Titan Builder Warlord Set', type: 'vehicle', price: 95000, img: null },
        { name: 'Imperial Legate Walking Tank', type: 'vehicle', price: 65000, img: null },
      ],
    }
  },
  'tau': {
    name: "T'au & Kroot",
    icon: '👽',
    lore: 'El Gran Bien. Tecnología avanzada y diplomacia al servicio del progreso.',
    loreFull: `Los T'au son una civilización joven en términos galácticos —apenas seis mil años desde que descubrieron el fuego— pero han alcanzado un nivel tecnológico que rivaliza con razas milenarias. Su secreto: <strong>la filosofía del Gran Bien</strong>, la creencia de que el bien colectivo de todas las razas supera al bien individual.

A diferencia del Imperium, los T'au <em>diplomatizan</em>. Invitan a otras razas a unirse a su Esfera de Expansión. Los <strong>Kroot</strong>, mercenarios ávidos que literalmente absorben los rasgos de lo que comen, son sus aliados más fieles. Los Vespids. Los Nicassar. Incluso algunos humanos que han visto más futuro en el Gran Bien que en el Aquila Imperial.

Sus <strong>Battlesuits XV8 Crisis</strong> son el símbolo de esta filosofía en acción: tecnología de precisión quirúrgica manejada por pilotos Ethereal-entrenados, que prefieren el disparo a distancia y la maniobra táctica al combate cuerpo a cuerpo. En un universo que ama el caos, los T'au son desconcertantemente racionales.`,
    subfactions: {
      "Battlesuits y T'au": [
        { name: "Koi Battlesuit (XV8 Crisis)", type: 'vehicle', price: 40000, img: null },
        { name: "FT SLA XV8 Battlesuit", type: 'vehicle', price: 42000, img: null },
        { name: "Executioner Kit Neoteric", type: 'elite', price: 25000, img: null },
        { name: "Kroot Lone-Spear (Skirmisher)", type: 'hero', price: 22000, img: null },
      ],
      'Kroot': [
        { name: "Kroot Cadre Mercenaries Kill Team", type: 'infantry', price: 22000, img: null },
        { name: "Kroot Support (Multi-pose escuadra)", type: 'infantry', price: 20000, img: null },
      ],
    }
  },
  'necrons': {
    name: 'Necrons',
    icon: '💀',
    lore: 'Los Dioses de la Muerte metálica. Duermen y despiertan para conquistar.',
    loreFull: `Sesenta millones de años antes de que el primer humano existiera, los <strong>Necrontyr</strong> dominaban la galaxia. Una raza de carne mortal y vidas cortas que envidiaban la inmortalidad de los C'tan —dioses estelares que se alimentaban de energía solar— y que cometieron el error definitivo: pedirles que los transformaran.

Los C'tan cumplieron su promesa. Transfirieron las almas Necrontyr a cuerpos de <strong>metal viviente</strong>, el necrodermis. Inmortales. Invulnerables. Y completamente esclavizados, porque el proceso destruyó casi todo lo que los hacía Necrontyr. Solo quedó la rabia, el vacío, y eventualmente la rebelión.

Ahora duermen en sus <em>Tumbas Mundiales</em> por toda la galaxia, esperando el momento de despertar y reclamar lo que una vez fue suyo. Cuando un Necron cae en combate, su cuerpo se repara a sí mismo o se teletransporta de vuelta a la Tumba para ser reconstruido. Son <strong>la muerte que no puede morir</strong>, y llevan sesenta millones de años practicando la paciencia.`,
    subfactions: {
      'Unidades': [
        { name: 'Necron Warriors Kit', type: 'infantry', price: 20000, img: null },
        { name: 'Necron Tomb Stalker', type: 'vehicle', price: 50000, img: null },
        { name: 'Necron Lord/Cryptek', type: 'hero', price: 18000, img: null },
        { name: 'Abyss Predator (Supported)', type: 'vehicle', price: 45000, img: null },
      ],
    }
  },
  'tyranids': {
    name: 'Tyranids',
    icon: '🦟',
    lore: 'El Enjambre devora estrellas. No hay piedad, no hay memoria, solo hambre.',
    loreFull: `Los Tyranids no son un ejército. Son un <strong>fenómeno natural</strong>, tan inevitable como la gravedad o la entropía. Vienen del espacio intergaláctico, de más allá del borde de la Vía Láctea, y han estado viajando hacia aquí por más tiempo del que la humanidad ha existido.

La <em>Colmena Mente</em> es una única voluntad que dirige incontables billones de organismos especializados: los Genestealers que se infiltran primero, los Hormagaunts que se lanzan en oleadas, los Carnifexes que destrozan fortalezas, los Hive Tyrants que dirigen la batalla con inteligencia táctica sobrehumana. Cada criatura es una herramienta diseñada para un propósito específico.

Pero su objetivo final no es la conquista ni la esclavitud. Es la <strong>biomasa</strong>. Cuando una flota Tyranid termina con un planeta, no queda nada: ni edificios, ni bacterias, ni agua en los océanos. Todo es absorbido, procesado, convertido en material para crear más organismos. En algún punto de su viaje, se encontraron con la galaxia más rica en vida que habían visto jamás. <em>Y tienen hambre.</em>`,
    subfactions: {
      'Unidades': [
        { name: 'Barbgaunts (Escuadra)', type: 'infantry', price: 22000, img: null },
        { name: 'Tyranid Carnifex', type: 'vehicle', price: 45000, img: null },
        { name: 'Tyranid Warriors (Escuadra)', type: 'elite', price: 25000, img: null },
        { name: 'Hive Tyrant', type: 'hero', price: 40000, img: null },
      ],
    }
  },
  'proxies': {
    name: 'Proxies Temáticos',
    icon: '🐻',
    lore: 'Figuras alternativas con temática especial. Únicas y coleccionables.',
    loreFull: `Más allá de los universos canónicos de Games Workshop, existe un universo paralelo de creadores independientes que reimaginan los arquetipos de la ciencia ficción y la fantasía épica con una visión propia.

Los <strong>Proxies Temáticos</strong> son figuras de terceros diseñadores —artistas de Patreon, estudios indie, escultores digitales independientes— que capturan la <em>esencia</em> de un tipo de unidad sin pertenecer a ningún IP oficial. Legalmente utilizables en partidas casuales, y estéticamente únicos en cualquier colección.

La <strong>Colección Asgardian</strong>, por ejemplo, reimagina a los Space Marines como guerreros nórdicos de la edad espacial: osos cibernéticos, forjadores de runas con exoesqueletos, y Dreadnoughts que llevan en su chasis la cabeza de un oso ártico. Son piezas de colección que generan conversación en cualquier mesa de juego.`,
    subfactions: {
      'Colección Asgardian': [
        { name: 'Asgardian Bear Riders (Ursa Riders)', type: 'elite', price: 35000, img: null },
        { name: 'Asgardian Arktos Dreadnought (Atlan Forge)', type: 'vehicle', price: 55000, img: null },
        { name: 'Asgardian Artificer (Atlan Forge)', type: 'hero', price: 22000, img: null },
      ],
      'Otros Proxies': [
        { name: 'Battle Griffin (Supported)', type: 'vehicle', price: 45000, img: null },
        { name: 'Scavanger Droitex Mk2 (x4 robots)', type: 'elite', price: 30000, img: null },
      ],
    }
  },
  'otros': {
    name: 'Otros Universos',
    icon: '🎮',
    lore: 'Figuras de universos alternativos: Doom, fantasía oscura y más.',
    loreFull: `No todo héroe vive en el universo de Warhammer. Algunos vienen de galaxias propias, con mitologías igual de ricas y guerras igual de épicas.

El <strong>Doom Marine</strong> —el Slayer, el Doom Slayer, el Flagelo del Infierno— no necesita presentación. Antes de que hubiera Space Marines, antes de que hubiera Caos organizado, había un hombre tan furioso con los demonios que el propio Infierno aprendió a temerle. Sus hazañas están escritas en las paredes del Infierno como advertencias. Su nombre es tabú entre los demonios. Y sigue en pie.

Estas figuras son <strong>piezas de crossover</strong> para fans que quieren llevar sus héroes favoritos de otros universos a la mesa de juego, sea como proxies de personajes de 40K o simplemente como piezas de colección. Son conversación garantizada en cualquier partida.`,
    subfactions: {
      'Doom Marine': [
        { name: 'Doom Marine Terminator 01', type: 'hero', price: 20000, img: null },
        { name: 'Doom Marine Terminator 02', type: 'hero', price: 20000, img: null },
        { name: 'Doom Marine Terminator 03', type: 'hero', price: 20000, img: null },
      ],
    }
  },
};

const TYPE_CONFIG = {
  infantry: { label: 'Infantería', color: '#4a9e4a', class: 'dot-infantry' },
  elite:    { label: 'Élite',      color: '#4a7fce', class: 'dot-elite' },
  hero:     { label: 'Personaje',  color: '#c9a84c', class: 'dot-hero' },
  vehicle:  { label: 'Vehículo',   color: '#cc2222', class: 'dot-vehicle' },
};

// Sidebar groups
const SIDEBAR_GROUPS = {
  'IMPERIUM': ['space-marines', 'dark-angels', 'space-wolves', 'ultramarines', 'sm-general', 'sororitas', 'custodes', 'astra', 'imperial-knights'],
  'CAOS': ['chaos-general', 'chaos-khorne', 'chaos-nurgle'],
  'AGE OF SIGMAR': ['skaven', 'stormcast'],
  'XENOS': ['tau', 'necrons', 'tyranids'],
  'ESPECIALES': ['proxies', 'otros'],
};
