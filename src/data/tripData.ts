// src/data/tripData.ts

export interface TimelineItem {
  time: string;
  activity: string;
  icon: 'car' | 'bus' | 'hike' | 'picnic' | 'camp' | 'food' | 'info';
}

export interface DayPOI {
  id: string;
  name: string;
  shortName: string;
  subtitle: string;
  badge: number;
  color: string;
  coords: [number, number];
  duration: string;
  distance: string;
  elevation: string;
  description: string;
  image: string;
}

export interface DayItinerary {
  id: string;
  dayNumber: number;
  dateTitle: string;
  dateTitleShort: string;
  routeTitle: string;
  color: string;
  thumbnail: string;
  campsite: string;
  refugio: string;
  routeSummary: {
    depart: string;
    startHike: string;
    endHike: string;
    sleep: string;
  };
  timeline: TimelineItem[];
  poi: DayPOI;
  routePath: [number, number][];
  drivePath: [number, number][];
}

export const TRIP_META = {
  title: "Travesía Pirineos 2026",
  subtitle: "Gran Ruta de los Refugios · 4 Amigos",
  dates: "8 - 12 Oct 2026",
  travelers: 4,
  vehicle: "Coche propio desde Valencia (~1.150 km)",
  budgetPerPerson: "~65 € (gasolina + logística)"
};

// Coordenadas geográficas clave
const BENASQUE_ERISTE: [number, number] = [42.5930, 0.4900];
const REFUGIO_ORUS: [number, number] = [42.6280, 0.4480];
const PANTICOSA_BANOS: [number, number] = [42.7600, -0.2350];
const REFUGIO_BACHIMANA: [number, number] = [42.7820, -0.2180];
const BUJARUELO_REFUGIO: [number, number] = [42.6935, -0.1065];
const ORDESA_PRADERA: [number, number] = [42.6535, -0.0575];
const REFUGIO_GORIZ: [number, number] = [42.6640, -0.0160];
const ANISCLO_SAN_URBEZ: [number, number] = [42.5535, 0.0520];
const FUEN_BLANCA: [number, number] = [42.6180, 0.0350];

export const TRIP_DAYS: DayItinerary[] = [
  {
    id: "dia-1",
    dayNumber: 1,
    dateTitle: "Jueves, 8 de octubre",
    dateTitleShort: "Jue 8",
    routeTitle: "Benasque / Posets (Ángel Orús)",
    color: "#f59e0b", // warm amber
    thumbnail: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&auto=format&fit=crop&q=80",
    campsite: "Refugio Ángel Orús (2.148 m)",
    refugio: "Refugio Ángel Orús",
    routeSummary: {
      depart: "06:00 · Coche Valencia → Benasque (6h 10m / ~500 km)",
      startHike: "13:30 · Espigantosa ➔ Ascenso a Refugio Ángel Orús",
      endHike: "17:30 · Llegada al Refugio Ángel Orús",
      sleep: "Refugio Ángel Orús (Valle de Benasque)"
    },
    timeline: [
      { time: "06:00", activity: "Salida en coche desde Valencia hacia Benasque (la zona más lejana, 6h 10m).", icon: "car" },
      { time: "12:30", activity: "Llegada al Valle de Benasque (Eriste) y comida rápida previa a la subida.", icon: "food" },
      { time: "13:30", activity: "Subida por pista al parking de la Cascada de Espigantosa e inicio a pie.", icon: "hike" },
      { time: "14:30", activity: "Sendero GR-11.2 remontando el barranco de Grist por bosques y cascadas.", icon: "hike" },
      { time: "16:00", activity: "Paso de la Forqueta y vistas a las cumbres del Macizo del Posets.", icon: "hike" },
      { time: "17:30", activity: "Llegada al Refugio Ángel Orús (2.148 m). Check-in y reparto de literas.", icon: "camp" },
      { time: "19:30", activity: "Cena montañera en el refugio y descanso en altura.", icon: "food" }
    ],
    poi: {
      id: "benasque-orus",
      name: "Benasque / Posets",
      shortName: "1 · Benasque / Orús",
      subtitle: "Macizo del Posets · Refugio Ángel Orús (2.148 m)",
      badge: 1,
      color: "#f59e0b",
      coords: REFUGIO_ORUS,
      duration: "3.5-4 h",
      distance: "8 km",
      elevation: "+650 m",
      description: "La etapa más oriental y lejana desde Valencia. Ascensión salvaje por el Valle de Eriste bajo las murallas del Posets (3.375 m) hasta el refugio de alta montaña Ángel Orús.",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop&q=80"
    },
    // Carretera Valencia -> Barbastro -> Graus -> Benasque -> Eriste
    drivePath: [
      [39.4699, -0.3763], // Valencia
      [40.3456, -1.1072], // Teruel
      [41.6488, -0.8891], // Zaragoza
      [42.0080, 0.1260],  // Barbastro
      [42.1900, 0.3370],  // Graus
      BENASQUE_ERISTE
    ],
    // Sendero a pie: Espigantosa -> Refugio Ángel Orús -> Ibón de Llardaneta
    routePath: [
      [42.6075, 0.4500], // Parking Espigantosa
      [42.6130, 0.4490],
      [42.6190, 0.4470],
      [42.6250, 0.4465],
      REFUGIO_ORUS,
      [42.6350, 0.4420], // Hacia Ibón de Llardaneta / Posets
      REFUGIO_ORUS
    ]
  },
  {
    id: "dia-2",
    dayNumber: 2,
    dateTitle: "Viernes, 9 de octubre",
    dateTitleShort: "Vie 9",
    routeTitle: "Panticosa / Picos del Infierno",
    color: "#10b981", // emerald green
    thumbnail: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop&q=80",
    campsite: "Refugio Bachimaña (o Casa de Piedra)",
    refugio: "Refugio de Bachimaña",
    routeSummary: {
      depart: "08:00 · Benasque ➔ Baños de Panticosa (Valle de Tena, 2h)",
      startHike: "11:00 · Casa de Piedra ➔ Garganta del Caldarés ➔ Ibones",
      endHike: "17:00 · Llegada al Refugio de Bachimaña",
      sleep: "Refugio de Bachimaña (2.200 m)"
    },
    timeline: [
      { time: "07:00", activity: "Desayuno en Ángel Orús y bajada al coche en Espigantosa (1h30).", icon: "hike" },
      { time: "08:45", activity: "Coche hacia el oeste: Campo ➔ Aínsa ➔ Fiscal ➔ Biescas ➔ Panticosa.", icon: "car" },
      { time: "11:00", activity: "Llegada al Balneario de Panticosa (Casa de Piedra) e inicio de la ruta.", icon: "hike" },
      { time: "12:30", activity: "Ascenso por el desfiladero y cascadas estruendosas del Caldarés.", icon: "hike" },
      { time: "14:00", activity: "Llegada a los Ibones de Bachimaña y picnic con vistas al Pano.", icon: "picnic" },
      { time: "15:30", activity: "Subida hacia los Ibones Azules bajo la gran veta de mármol del Infierno.", icon: "hike" },
      { time: "17:30", activity: "Alojamiento en el moderno Refugio de Bachimaña (o Casa de Piedra).", icon: "camp" },
      { time: "20:00", activity: "Cena en el refugio y descanso en el corazón del Valle de Tena.", icon: "food" }
    ],
    poi: {
      id: "panticosa-bachimana",
      name: "Panticosa / Picos del Infierno",
      shortName: "2 · Panticosa / Bachimaña",
      subtitle: "Valle de Tena · Ibones de Bachimaña (2.200 m)",
      badge: 2,
      color: "#10b981",
      coords: REFUGIO_BACHIMANA,
      duration: "5-6 h",
      distance: "12 km",
      elevation: "+680 m",
      description: "Desde Benasque nos desplazamos hacia el oeste al Valle de Tena. Ascenso por las cascadas del Caldarés hasta el circo glaciar de Bachimaña y los pies de los míticos Picos del Infierno (3.082 m).",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop&q=80"
    },
    // Carretera Benasque -> Campo -> Aínsa -> Biescas -> Baños de Panticosa
    drivePath: [
      BENASQUE_ERISTE,
      [42.4100, 0.3950], // Campo
      [42.4170, 0.1380], // Aínsa
      [42.5000, -0.1200], // Fiscal
      [42.6300, -0.3200], // Biescas
      PANTICOSA_BANOS
    ],
    // Sendero a pie: Baños de Panticosa -> Cascadas Caldarés -> Ibones de Bachimaña -> Refugio
    routePath: [
      PANTICOSA_BANOS,
      [42.7680, -0.2290],
      [42.7750, -0.2220],
      REFUGIO_BACHIMANA,
      [42.7900, -0.2300], // Ibones Azules
      REFUGIO_BACHIMANA
    ]
  },
  {
    id: "dia-3",
    dayNumber: 3,
    dateTitle: "Sábado, 10 de octubre",
    dateTitleShort: "Sáb 10",
    routeTitle: "Bujaruelo / Valle de Otal",
    color: "#14b8a6", // teal
    thumbnail: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&auto=format&fit=crop&q=80",
    campsite: "Refugio de Bujaruelo (acceso en coche)",
    refugio: "Refugio de Bujaruelo",
    routeSummary: {
      depart: "08:30 · Panticosa ➔ San Nicolás de Bujaruelo (50 min)",
      startHike: "10:00 · Puente románico ➔ Valle de Otal circular",
      endHike: "16:00 · Vuelta al Refugio de Bujaruelo",
      sleep: "Refugio de Bujaruelo (pista accesible en coche)"
    },
    timeline: [
      { time: "07:30", activity: "Desayuno en Bachimaña y descenso al Balneario de Panticosa.", icon: "hike" },
      { time: "09:00", activity: "Coche hacia Torla por el Cotefablo y desvío al Valle de Bujaruelo.", icon: "car" },
      { time: "09:45", activity: "Pista forestal de 6,3 km desde Puente de los Navarros hasta el refugio.", icon: "car" },
      { time: "10:15", activity: "Inicio ruta: puente medieval de piedra sobre el río Ara.", icon: "hike" },
      { time: "11:15", activity: "Zetas de subida y cancela ganadera del Collado de Otal.", icon: "hike" },
      { time: "12:30", activity: "Travesía por el fondo del inmenso valle glaciar colgado de Otal.", icon: "hike" },
      { time: "13:30", activity: "Picnic en el fondo del circo rodeado de impresionantes murallones.", icon: "picnic" },
      { time: "16:00", activity: "Regreso al Refugio de Bujaruelo: descanso en pradera junto al río.", icon: "food" },
      { time: "19:30", activity: "Cena montañera en el restaurante del refugio y alojamiento.", icon: "camp" }
    ],
    poi: {
      id: "bujaruelo-otal",
      name: "Bujaruelo / Valle de Otal",
      shortName: "3 · Bujaruelo / Otal",
      subtitle: "Valle de Bujaruelo & Otal · Refugio de Bujaruelo",
      badge: 3,
      color: "#14b8a6",
      coords: BUJARUELO_REFUGIO,
      duration: "5-6 h",
      distance: "19 km",
      elevation: "+500 m",
      description: "Entorno comodísimo al que se llega en coche directamente por pista. Cruzando el puente medieval del Ara se abre uno de los valles glaciares en U más perfectos del Pirineo.",
      image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&auto=format&fit=crop&q=80"
    },
    // Carretera Panticosa -> Biescas -> Torla -> Pista Puente Navarros -> Bujaruelo
    drivePath: [
      PANTICOSA_BANOS,
      [42.6300, -0.3200], // Biescas
      [42.6020, -0.1180], // Broto
      [42.6280, -0.1110], // Torla
      [42.6530, -0.1030], // Puente de los Navarros
      BUJARUELO_REFUGIO
    ],
    // Sendero a pie: Bujaruelo -> zetas -> cancela -> fondo Otal -> vuelta
    routePath: [
      BUJARUELO_REFUGIO,
      [42.6930, -0.1075],
      [42.6915, -0.1120],
      [42.6895, -0.1160],
      [42.6910, -0.1200],
      [42.6900, -0.1240],
      [42.6925, -0.1290], // Cancela Otal
      [42.6940, -0.1360],
      [42.6955, -0.1440],
      [42.6970, -0.1580], // Fondo Circo Otal
      [42.6955, -0.1440],
      [42.6925, -0.1290],
      BUJARUELO_REFUGIO
    ]
  },
  {
    id: "dia-4",
    dayNumber: 4,
    dateTitle: "Domingo, 11 de octubre",
    dateTitleShort: "Dom 11",
    routeTitle: "Ordesa — Cola de Caballo (Góriz)",
    color: "#3b82f6", // vibrant blue
    thumbnail: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=600&auto=format&fit=crop&q=80",
    campsite: "Refugio de Góriz (2.200 m)",
    refugio: "Refugio de Góriz",
    routeSummary: {
      depart: "08:00 · Bujaruelo ➔ Pradera de Ordesa (25 min)",
      startHike: "08:45 · Senda Cazadores ➔ Faja de Pelay ➔ Cola de Caballo",
      endHike: "16:30 · Llegada al Refugio de Góriz",
      sleep: "Refugio de Góriz (Monte Perdido)"
    },
    timeline: [
      { time: "07:30", activity: "Desayuno en Bujaruelo y preparación de mochilas de alta montaña.", icon: "food" },
      { time: "08:15", activity: "Desplazamiento a la Pradera de Ordesa por Puente de los Navarros.", icon: "car" },
      { time: "08:45", activity: "Inicio por la vertiginosa Senda de los Cazadores hacia Calcilarruego.", icon: "hike" },
      { time: "11:30", activity: "Travesía panorámica por la Faja de Pelay colgados sobre el cañón.", icon: "hike" },
      { time: "13:30", activity: "Llegada al Circo de Soaso, Cascada Cola de Caballo y comida picnic.", icon: "picnic" },
      { time: "14:45", activity: "Subida por las Clavijas de Soaso o Senda de los Mulos hacia Góriz.", icon: "hike" },
      { time: "16:30", activity: "Llegada al emblemático Refugio de Góriz (2.200 m).", icon: "camp" },
      { time: "19:30", activity: "Cena comunitaria con vistas a las murallas de Monte Perdido.", icon: "food" }
    ],
    poi: {
      id: "ordesa-goriz",
      name: "Ordesa — Cazadores & Góriz",
      shortName: "4 · Ordesa / Góriz",
      subtitle: "Valle de Ordesa · Faja de Pelay · Refugio de Góriz",
      badge: 4,
      color: "#3b82f6",
      coords: REFUGIO_GORIZ,
      duration: "6.5-7 h",
      distance: "18 km",
      elevation: "+950 m",
      description: "El día rey del Parque Nacional. Senda de los Cazadores, balcón aéreo de la Faja de Pelay, Cola de Caballo y ascensión final al mítico Refugio de Góriz, a los pies de Monte Perdido (3.355 m).",
      image: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&auto=format&fit=crop&q=80"
    },
    // Carretera Bujaruelo -> Puente de los Navarros -> Pradera de Ordesa
    drivePath: [
      BUJARUELO_REFUGIO,
      [42.6530, -0.1030], // Puente Navarros
      ORDESA_PRADERA
    ],
    // Sendero a pie: Pradera -> Cazadores -> Faja Pelay -> Cola Caballo -> Góriz
    routePath: [
      ORDESA_PRADERA,
      [42.6515, -0.0535],
      [42.6450, -0.0460],
      [42.6415, -0.0400], // Calcilarruego
      [42.6400, -0.0210], // Faja de Pelay
      [42.6375, -0.0050], // Cola de Caballo
      [42.6450, -0.0080], // Clavijas de Soaso
      [42.6550, -0.0120],
      REFUGIO_GORIZ
    ]
  },
  {
    id: "dia-5",
    dayNumber: 5,
    dateTitle: "Lunes, 12 de octubre",
    dateTitleShort: "Lun 12",
    routeTitle: "Cañón de Añisclo & Fuen Blanca",
    color: "#a855f7", // purple
    thumbnail: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&auto=format&fit=crop&q=80",
    campsite: "Refugio libre Fuen Blanca / Vuelta a Valencia",
    refugio: "Refugio Fuen Blanca",
    routeSummary: {
      depart: "08:30 · Conexión Añisclo / San Úrbez (la más cercana a Valencia)",
      startHike: "09:30 · San Úrbez ➔ La Ripareta ➔ Fuen Blanca",
      endHike: "15:00 · Fin ruta y salida en coche a Valencia",
      sleep: "Llegada a Valencia ~19:30"
    },
    timeline: [
      { time: "07:30", activity: "Despertar en Góriz y descenso hacia la carretera / San Úrbez.", icon: "hike" },
      { time: "09:00", activity: "Desplazamiento al Parking de San Úrbez (Cañón de Añisclo).", icon: "car" },
      { time: "09:30", activity: "Inicio ruta: Ermita de San Úrbez y puente sobre el encañonado río Bellós.", icon: "hike" },
      { time: "11:30", activity: "Llegada a La Ripareta entre pozas cristalinas y frondosos bosques.", icon: "hike" },
      { time: "13:00", activity: "Ascenso hacia el Refugio libre de Fuen Blanca y sus cascadas.", icon: "hike" },
      { time: "13:45", activity: "Picnic de despedida junto al agua esmeralda en Fuen Blanca.", icon: "picnic" },
      { time: "15:00", activity: "Regreso a los coches en San Úrbez para iniciar el viaje de vuelta.", icon: "car" },
      { time: "15:30", activity: "Salida directa hacia Valencia por Escalona, Aínsa, Barbastro y Teruel.", icon: "car" },
      { time: "19:30", activity: "Llegada prevista a Valencia (ahorrando 1h al salir desde Añisclo).", icon: "car" }
    ],
    poi: {
      id: "anisclo-fuen-blanca",
      name: "Cañón de Añisclo / Fuen Blanca",
      shortName: "5 · Añisclo / Fuen Blanca",
      subtitle: "Garganta del Bellós · Refugio libre de Fuen Blanca",
      badge: 5,
      color: "#a855f7",
      coords: FUEN_BLANCA,
      duration: "5 h",
      distance: "16 km",
      elevation: "+450 m",
      description: "La zona más cercana a Valencia para el retorno. El Cañón de Añisclo es una de las gargantas calizas más sobrecogedoras de Europa, culminando en las cascadas y refugio libre de Fuen Blanca.",
      image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop&q=80"
    },
    // Carretera Ordesa/Torla -> Fanlo -> San Úrbez -> y retorno directo a Valencia
    drivePath: [
      ORDESA_PRADERA,
      [42.6020, -0.1180], // Broto
      [42.5800, -0.0800], // Fanlo
      ANISCLO_SAN_URBEZ,
      [42.4170, 0.1380], // Aínsa hacia el sur
      [42.0080, 0.1260], // Barbastro
      [41.6488, -0.8891], // Zaragoza/Teruel
      [39.4699, -0.3763]  // Valencia
    ],
    // Sendero a pie: San Úrbez -> Molino Aso -> Garganta Bellós -> La Ripareta -> Fuen Blanca
    routePath: [
      ANISCLO_SAN_URBEZ,
      [42.5560, 0.0510],
      [42.5640, 0.0480],
      [42.5740, 0.0450],
      [42.5840, 0.0415], // La Ripareta
      [42.6000, 0.0380],
      FUEN_BLANCA,
      [42.6000, 0.0380],
      [42.5840, 0.0415],
      ANISCLO_SAN_URBEZ
    ]
  }
];

export const MAP_PINS = [
  { id: "dia-1", badge: "1", name: "Benasque / Orús", color: "#f59e0b", coords: REFUGIO_ORUS },
  { id: "dia-2", badge: "2", name: "Panticosa / Bachimaña", color: "#10b981", coords: REFUGIO_BACHIMANA },
  { id: "dia-3", badge: "3", name: "Bujaruelo / Otal", color: "#14b8a6", coords: BUJARUELO_REFUGIO },
  { id: "dia-4", badge: "4", name: "Ordesa / Góriz", color: "#3b82f6", coords: REFUGIO_GORIZ },
  { id: "dia-5", badge: "5", name: "Añisclo / Fuen Blanca", color: "#a855f7", coords: FUEN_BLANCA }
];

export const DAYS = TRIP_DAYS;
