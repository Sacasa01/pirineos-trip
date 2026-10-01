// src/data/tripData.ts

export interface TimelineItem {
  time: string;
  activity: string;
  icon: 'car' | 'bus' | 'hike' | 'picnic' | 'camp' | 'food' | 'info';
}

export interface DayPOI {
  id: string;
  name: string;
  shortName: string; // Abreviación para el mapa
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
  dateTitleShort: string; // "Jue 8 Oct"
  routeTitle: string;
  color: string;
  thumbnail: string;
  campsite: string;
  // Resumen simplificado para el panel "Ruta"
  routeSummary: {
    depart: string;   // "09:30 · Coche a Bujaruelo"
    startHike: string; // "09:30 · Inicio ruta"
    endHike: string;   // "15:30 · Fin ruta"
    sleep: string;     // "Camping Río Ara"
  };
  timeline: TimelineItem[];
  poi: DayPOI;
  routePath: [number, number][];
  // Ruta de acceso en coche desde Torla/Camping al inicio de la ruta
  drivePath: [number, number][];
}

export const TRIP_META = {
  title: "Pirineos 2026",
  subtitle: "Ordesa · 4 Amigos · Base Torla",
  dates: "8 - 12 Oct 2026",
  travelers: 4,
  campsite: "Camping Río Ara (Torla)",
  budgetPerPerson: "58,75 €"
};

// Coordenadas clave reutilizables
const TORLA: [number, number] = [42.6280, -0.1110];
const CAMPING: [number, number] = [42.6240, -0.1120];
const PRADERA: [number, number] = [42.6535, -0.0575];
const BROTO: [number, number] = [42.6020, -0.1180];

export const TRIP_DAYS: DayItinerary[] = [
  {
    id: "dia-1",
    dayNumber: 1,
    dateTitle: "Jueves, 8 de octubre",
    dateTitleShort: "Jue 8",
    routeTitle: "Senda de los Cazadores",
    color: "#f59e0b",
    thumbnail: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop&q=80",
    campsite: "Camping Río Ara",
    routeSummary: {
      depart: "11:45 · Bus lanzadera a Pradera de Ordesa",
      startHike: "12:15 · Inicio Senda de los Cazadores",
      endHike: "18:45 · Fin ruta en la Pradera",
      sleep: "Camping Río Ara (Torla)"
    },
    timeline: [
      { time: "06:00", activity: "Salida en coche desde Valencia hacia Torla-Ordesa (5h30 con parada).", icon: "car" },
      { time: "11:30", activity: "Llegada a Torla. Parking principal gratuito del pueblo.", icon: "car" },
      { time: "11:45", activity: "Autobús lanzadera a la Pradera de Ordesa.", icon: "bus" },
      { time: "12:15", activity: "Inicio ruta: Senda de los Cazadores → Mirador de Calcilarruego → Faja de Pelay.", icon: "hike" },
      { time: "14:30", activity: "Picnic en la Faja de Pelay con vistas al cañón.", icon: "picnic" },
      { time: "16:00", activity: "Cascada Cola de Caballo y Circo de Soaso.", icon: "hike" },
      { time: "18:45", activity: "Descenso por Gradas de Soaso, Estrecho y Arripas a la Pradera.", icon: "hike" },
      { time: "19:00", activity: "Autobús lanzadera de vuelta a Torla.", icon: "bus" },
      { time: "19:30", activity: "Check-in en Camping Río Ara.", icon: "camp" },
      { time: "20:00", activity: "Montar tienda de campaña y ducha caliente.", icon: "camp" },
      { time: "20:45", activity: "Compra de víveres en el supermercado de Torla.", icon: "food" },
      { time: "21:30", activity: "Cena y descanso.", icon: "food" }
    ],
    poi: {
      id: "senda-cazadores",
      name: "Senda de los Cazadores",
      shortName: "Cazadores",
      subtitle: "Valle de Ordesa · Cola de Caballo",
      badge: 1,
      color: "#f59e0b",
      coords: [42.6420, -0.0400],
      duration: "6-7 h",
      distance: "20 km",
      elevation: "+750 m",
      description: "Subida al Mirador de Calcilarruego (1.950 m), travesía aérea por la Faja de Pelay y bajada por las cascadas del fondo del Valle de Ordesa hasta la Cola de Caballo.",
      image: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&auto=format&fit=crop&q=80"
    },
    // Ruta de acceso: Torla → Pradera (en bus, la carretera sube por el valle)
    drivePath: [
      CAMPING,
      TORLA,
      [42.6350, -0.0950],
      [42.6400, -0.0820],
      [42.6450, -0.0720],
      [42.6500, -0.0650],
      PRADERA
    ],
    // Ruta senderismo: circuito Pradera → Cazadores → Faja Pelay → Cola Caballo → fondo valle → Pradera
    routePath: [
      PRADERA,
      [42.6515, -0.0535],
      [42.6480, -0.0500],
      [42.6450, -0.0460],
      [42.6430, -0.0430],
      [42.6415, -0.0400], // Calcilarruego
      [42.6410, -0.0350],
      [42.6405, -0.0280],
      [42.6400, -0.0210], // Faja de Pelay
      [42.6390, -0.0140],
      [42.6375, -0.0050], // Cola de Caballo
      [42.6400, -0.0120],
      [42.6425, -0.0240], // Gradas de Soaso
      [42.6455, -0.0340],
      [42.6485, -0.0425], // Estrecho
      [42.6505, -0.0485],
      PRADERA
    ]
  },
  {
    id: "dia-2",
    dayNumber: 2,
    dateTitle: "Viernes, 9 de octubre",
    dateTitleShort: "Vie 9",
    routeTitle: "Valle de Otal",
    color: "#10b981",
    thumbnail: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&auto=format&fit=crop&q=80",
    campsite: "Camping Río Ara",
    routeSummary: {
      depart: "09:00 · Coche a San Nicolás de Bujaruelo (20 min)",
      startHike: "09:30 · Inicio ruta en puente medieval",
      endHike: "15:30 · Llegada al Refugio de Bujaruelo",
      sleep: "Camping Río Ara (Torla)"
    },
    timeline: [
      { time: "07:30", activity: "Despertar y desayuno en el camping.", icon: "food" },
      { time: "08:30", activity: "Preparar mochilas con picnic y cantimploras.", icon: "info" },
      { time: "09:00", activity: "Coche hacia San Nicolás de Bujaruelo por pista forestal (20 min).", icon: "car" },
      { time: "09:30", activity: "Inicio ruta: puente medieval sobre el río Ara.", icon: "hike" },
      { time: "10:30", activity: "Ascenso por pista en zigzag hasta la cancela ganadera.", icon: "hike" },
      { time: "11:30", activity: "Travesía llana por el circo glaciar del Valle de Otal.", icon: "hike" },
      { time: "12:30", activity: "Picnic en el fondo del valle rodeado de murallones.", icon: "picnic" },
      { time: "13:30", activity: "Regreso a pie hacia Bujaruelo.", icon: "hike" },
      { time: "15:30", activity: "Refugio de Bujaruelo: descanso junto al río.", icon: "food" },
      { time: "16:30", activity: "Coche de regreso al camping en Torla.", icon: "car" },
      { time: "17:00", activity: "Paseo tranquilo por el pueblo de Torla.", icon: "info" },
      { time: "20:00", activity: "Ducha, cena de hornillo y descanso.", icon: "camp" }
    ],
    poi: {
      id: "valle-otal",
      name: "Valle de Otal",
      shortName: "Otal",
      subtitle: "Bujaruelo · Valle glaciar colgado",
      badge: 2,
      color: "#10b981",
      coords: [42.6940, -0.1350],
      duration: "4.5-5 h",
      distance: "14 km",
      elevation: "+450 m",
      description: "Valle glaciar en U perfecto. Puente románico del s.XIII sobre el río Ara, ascenso suave y pradera alpina solitaria rodeada de paredes verticales.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop&q=80"
    },
    // Ruta de acceso: Camping → Torla → carretera N-260 norte → Puente Navarros → pista Bujaruelo
    drivePath: [
      CAMPING,
      TORLA,
      [42.6380, -0.1100],
      [42.6500, -0.1080],
      [42.6600, -0.1060],
      [42.6700, -0.1050],
      [42.6800, -0.1055],
      [42.6935, -0.1065] // Refugio Bujaruelo
    ],
    // Ruta senderismo: Bujaruelo → zigzag → cancela → fondo Valle Otal → vuelta
    routePath: [
      [42.6935, -0.1065],
      [42.6930, -0.1075],
      [42.6915, -0.1120],
      [42.6895, -0.1160],
      [42.6910, -0.1200],
      [42.6900, -0.1240],
      [42.6925, -0.1290],
      [42.6940, -0.1360],
      [42.6955, -0.1440],
      [42.6965, -0.1520],
      [42.6970, -0.1580], // Fondo valle
      [42.6965, -0.1520],
      [42.6940, -0.1360],
      [42.6925, -0.1290],
      [42.6900, -0.1240],
      [42.6935, -0.1065]
    ]
  },
  {
    id: "dia-3",
    dayNumber: 3,
    dateTitle: "Sábado, 10 de octubre",
    dateTitleShort: "Sáb 10",
    routeTitle: "Cañón de Añisclo",
    color: "#0ea5e9",
    thumbnail: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&auto=format&fit=crop&q=80",
    campsite: "Camping Río Ara",
    routeSummary: {
      depart: "08:30 · Coche a San Úrbez vía Broto y Fanlo (35 min)",
      startHike: "09:15 · Inicio en la ermita de San Úrbez",
      endHike: "15:30 · Fin ruta en parking San Úrbez",
      sleep: "Camping Río Ara (Torla)"
    },
    timeline: [
      { time: "07:30", activity: "Despertar y desayuno en el camping.", icon: "food" },
      { time: "08:30", activity: "Coche hacia Añisclo / San Úrbez vía Broto y Fanlo (30-35 min).", icon: "car" },
      { time: "09:15", activity: "Parking de San Úrbez: visita a la ermita rupestre y puente.", icon: "hike" },
      { time: "10:00", activity: "Ascenso por el desfiladero del río Bellós entre cascadas y pozas.", icon: "hike" },
      { time: "12:00", activity: "Llegada a La Ripareta: fotos y picnic junto al agua esmeralda.", icon: "picnic" },
      { time: "13:00", activity: "Descenso de regreso por el sendero.", icon: "hike" },
      { time: "15:30", activity: "Fin de ruta. Coche de vuelta con parada en Broto.", icon: "car" },
      { time: "16:30", activity: "Parada en panadería tradicional de Broto.", icon: "food" },
      { time: "17:30", activity: "Regreso al camping: ducha y descanso.", icon: "camp" },
      { time: "20:00", activity: "Cena en el camping.", icon: "food" }
    ],
    poi: {
      id: "canon-anisclo",
      name: "Cañón de Añisclo",
      shortName: "Añisclo",
      subtitle: "San Úrbez · Garganta del río Bellós",
      badge: 3,
      color: "#0ea5e9",
      coords: [42.5680, 0.0480],
      duration: "4 h",
      distance: "11 km",
      elevation: "+400 m",
      description: "Profunda garganta tallada por el río Bellós con cascadas, pozas esmeralda y murallas verticales de caliza de cientos de metros.",
      image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop&q=80"
    },
    // Ruta de acceso: Camping → Torla → Broto → carretera a Fanlo → pista a San Úrbez
    drivePath: [
      CAMPING,
      TORLA,
      [42.6180, -0.1150],
      BROTO,
      [42.5900, -0.1050],
      [42.5780, -0.0800],
      [42.5650, -0.0400],
      [42.5580, 0.0100],
      [42.5535, 0.0520] // Parking San Úrbez
    ],
    // Ruta senderismo: San Úrbez → desfiladero → La Ripareta → vuelta
    routePath: [
      [42.5535, 0.0520],
      [42.5560, 0.0510],
      [42.5590, 0.0495],
      [42.5640, 0.0480],
      [42.5690, 0.0465],
      [42.5740, 0.0450],
      [42.5790, 0.0435],
      [42.5840, 0.0415], // La Ripareta
      [42.5790, 0.0435],
      [42.5690, 0.0465],
      [42.5560, 0.0510],
      [42.5535, 0.0520]
    ]
  },
  {
    id: "dia-4",
    dayNumber: 4,
    dateTitle: "Domingo, 11 de octubre",
    dateTitleShort: "Dom 11",
    routeTitle: "Cascada del Sorrosal",
    color: "#a855f7",
    thumbnail: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=600&auto=format&fit=crop&q=80",
    campsite: "Camping Río Ara",
    routeSummary: {
      depart: "09:30 · Coche a Broto (5 min)",
      startHike: "09:45 · Cascada del Sorrosal + sendero Broto-Oto",
      endHike: "13:30 · Fin ruta en Broto",
      sleep: "Camping Río Ara (Torla)"
    },
    timeline: [
      { time: "08:30", activity: "Despertar y desayuno relajado en el camping.", icon: "food" },
      { time: "09:30", activity: "Coche hacia Broto (5 min).", icon: "car" },
      { time: "09:45", activity: "Visita al anfiteatro de la Cascada del Sorrosal.", icon: "hike" },
      { time: "10:30", activity: "Sendero circular: Broto → Oto → riberas del Ara.", icon: "hike" },
      { time: "13:30", activity: "Comida en Broto (picnic o menú de montaña).", icon: "food" },
      { time: "15:30", activity: "Vuelta a Torla. Organizar maletero.", icon: "camp" },
      { time: "17:30", activity: "Último paseo por Torla al atardecer.", icon: "info" },
      { time: "20:00", activity: "Cena en el camping.", icon: "food" }
    ],
    poi: {
      id: "cascada-sorrosal",
      name: "Cascada del Sorrosal",
      shortName: "Sorrosal",
      subtitle: "Broto · Ruta circular entre pueblos",
      badge: 4,
      color: "#a855f7",
      coords: [42.6045, -0.1220],
      duration: "2.5-3 h",
      distance: "7.5 km",
      elevation: "+250 m",
      description: "Gran cascada doble sobre un anfiteatro de pliegues geológicos. Sendero circular conectando Broto, Oto y las riberas del río Ara.",
      image: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&auto=format&fit=crop&q=80"
    },
    // Ruta de acceso: Camping → Torla → carretera sur → Broto
    drivePath: [
      CAMPING,
      TORLA,
      [42.6180, -0.1150],
      BROTO
    ],
    // Ruta senderismo: Sorrosal → Broto → Oto → vuelta
    routePath: [
      [42.6045, -0.1220],
      [42.6025, -0.1180],
      [42.5980, -0.1240],
      [42.5940, -0.1260],
      [42.5980, -0.1210],
      [42.6025, -0.1180],
      [42.6110, -0.1150],
      [42.6045, -0.1220]
    ]
  },
  {
    id: "dia-5",
    dayNumber: 5,
    dateTitle: "Lunes, 12 de octubre",
    dateTitleShort: "Lun 12",
    routeTitle: "Vuelta a Valencia",
    color: "#64748b",
    thumbnail: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&auto=format&fit=crop&q=80",
    campsite: "Fin del viaje",
    routeSummary: {
      depart: "09:30 · Salida en coche a Valencia",
      startHike: "",
      endHike: "",
      sleep: "Llegada a Valencia ~15:00"
    },
    timeline: [
      { time: "07:30", activity: "Despertar y desayuno rápido.", icon: "food" },
      { time: "08:15", activity: "Desmontar tienda y cargar el maletero.", icon: "camp" },
      { time: "09:15", activity: "Check-out en recepción del camping.", icon: "info" },
      { time: "09:30", activity: "Salida hacia Valencia (evitar atascos del puente).", icon: "car" },
      { time: "15:00", activity: "Llegada prevista a Valencia.", icon: "car" }
    ],
    poi: {
      id: "torla-base",
      name: "Vuelta a Valencia",
      shortName: "Vuelta",
      subtitle: "435 km · ~5h 15 min",
      badge: 5,
      color: "#64748b",
      coords: TORLA,
      duration: "5h 15m",
      distance: "435 km",
      elevation: "-",
      description: "Regreso por autovía: Torla → Sabiñánigo → Huesca → Zaragoza → Teruel → Valencia.",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop&q=80"
    },
    drivePath: [],
    routePath: []
  }
];

// Pins minimalistas para el mapa
export const MAP_PINS = [
  { id: "dia-1", badge: "1", name: "Cazadores", color: "#f59e0b", coords: [42.6420, -0.0400] as [number, number] },
  { id: "dia-2", badge: "2", name: "Otal", color: "#10b981", coords: [42.6940, -0.1350] as [number, number] },
  { id: "dia-3", badge: "3", name: "Añisclo", color: "#0ea5e9", coords: [42.5680, 0.0480] as [number, number] },
  { id: "dia-4", badge: "4", name: "Sorrosal", color: "#a855f7", coords: [42.6045, -0.1220] as [number, number] },
  { id: "camping", badge: "⛺", name: "Camping Río Ara", color: "#22c55e", coords: [42.6240, -0.1120] as [number, number] }
];

export const DAYS = TRIP_DAYS;
