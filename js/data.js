/**
 * FORJA DEL OMNISSIAH — data.js
 * Catálogo completo de facciones, subfacciones y unidades
 */

const FACTIONS = {
  'space-marines': {
    name: 'Blood Angels',
    icon: '⚔️',
    lore: 'Hijos del Ángel Sanguinius, portadores de la Rabia Negra.',
    subfactions: {
      'Infantería': [
        { name: 'Librarian', type: 'hero', price: 15000, img: 'librarian.png', imgPainted: 'librarian_painted.png' },
        { name: 'Death Company Squad', type: 'elite', price: 25000, img: 'death_company.png', imgPainted: 'death_company_painted.png' },
        { name: 'Aerial Knights Squad', type: 'elite', price: 25000, img: 'aerial_knight.png', imgPainted: 'aerial_knight_painted.png' },
      ],
      'Personajes Especiales': [
        { name: 'Captain Kenneth — El Ángel de Sangre', type: 'hero', price: 20000, img: null },
        { name: 'Mephiston — Señor de la Muerte', type: 'hero', price: 22000, img: null },
      ],
    }
  },
  'dark-angels': {
    name: 'Dark Angels',
    icon: '⚔️',
    lore: 'Los primeros en la legión. Portadores de secretos oscuros e impenetrables.',
    subfactions: {
      'Personajes': [
        { name: 'Chaplain Mordekai', type: 'hero', price: 18000, img: null },
        { name: "Lion El'Jonson (Primarca)", type: 'hero', price: 30000, img: null },
        { name: 'Paladin Lion El Johnson', type: 'hero', price: 28000, img: null },
      ],
      'Escuadras': [
        { name: 'Inceptors Squad (con Jump Packs)', type: 'elite', price: 28000, img: null },
        { name: 'Intercessor Squad', type: 'infantry', price: 22000, img: null },
      ],
      'Vehículos': [
        { name: 'Redemptor Dreadnought', type: 'vehicle', price: 45000, img: null },
      ],
    }
  },
  'space-wolves': {
    name: 'Space Wolves',
    icon: '⚔️',
    lore: 'Los hijos de Fenris, guerreros bárbaros del lobo espacial.',
    subfactions: {
      'Escuadras': [
        { name: 'Sons of Fenrir Exterminator Tactical Squad', type: 'infantry', price: 22000, img: null },
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
