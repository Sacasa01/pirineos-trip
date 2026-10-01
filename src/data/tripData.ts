// src/data/tripData.ts

export interface TimelineItem {
  time: string;
  activity: string;
  icon: 'car' | 'bus' | 'hike' | 'picnic' | 'camp' | 'food' | 'info';
}

export interface RefugioInfo {
  name: string;
  altitude: string;
  type: string; // 'Guardado' | 'Albergue' | 'Libre'
  services: string;
  coords: [number, number];
  bookingUrl: string;
}

export interface WikilocInfo {
  title: string;
  rating: string;
  distance: string;
  elevation: string;
  difficulty: string;
  searchUrl: string;
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
  refugio: RefugioInfo;
  wikiloc: WikilocInfo;
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
  subtitle: "Ruta de los Refugios y Rutas Top de Wikiloc · 4 Amigos",
  dates: "8 - 12 Oct 2026",
  travelers: 4,
  vehicle: "Coche propio desde Valencia (~1.150 km)",
  budgetPerPerson: "~65 € (gasolina + logística)"
};

// Coordenadas geográficas oficiales exactas
const BENASQUE_ERISTE: [number, number] = [42.5930, 0.4900];
const REFUGIO_ORUS: [number, number] = [42.6275, 0.4575]; // 2.148 m
const PANTICOSA_BANOS: [number, number] = [42.7600, -0.2350]; // 1.636 m
const REFUGIO_BACHIMANA: [number, number] = [42.7800, -0.2275]; // 2.200 m
const BUJARUELO_REFUGIO: [number, number] = [42.6944, -0.1069]; // 1.338 m
const ORDESA_PRADERA: [number, number] = [42.6535, -0.0575]; // 1.320 m
const REFUGIO_GORIZ: [number, number] = [42.6633, 0.0147]; // 2.200 m
const ANISCLO_SAN_URBEZ: [number, number] = [42.5535, 0.0520]; // 980 m
const FUEN_BLANCA_REFUGIO: [number, number] = [42.6425, 0.0592]; // 1.700 m

export const TRIP_DAYS: DayItinerary[] = [
  {
    id: "dia-1",
    dayNumber: 1,
    dateTitle: "Jueves, 8 de octubre",
    dateTitleShort: "Jue 8",
    routeTitle: "Benasque / Posets (Ángel Orús)",
    color: "#f59e0b", // warm amber
    thumbnail: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&auto=format&fit=crop&q=80",
    refugio: {
      name: "Refugio Ángel Orús",
      altitude: "2.148 m",
      type: "Guardado (FAM / FEDME)",
      services: "Cena caliente, literas, mantas, agua caliente, taquillas, bar",
      coords: REFUGIO_ORUS,
      bookingUrl: "https://www.alberguesyrefugios.com/angelorus/"
    },
    wikiloc: {
      title: "Cascada de Espigantosa ➔ Refugio Ángel Orús (GR-11.2)",
      rating: "⭐⭐⭐⭐⭐ (4.9 · +1.200 valoraciones)",
      distance: "7,5 km (ida y vuelta)",
      elevation: "+650 m",
      difficulty: "Moderada",
      searchUrl: "https://es.wikiloc.com/wikiloc/find.do?q=Espigantosa+Refugio+Angel+Orus+GR-11"
    },
    routeSummary: {
      depart: "06:00 · Valencia ➔ Benasque / Eriste (6h 10m / ~500 km)",
      startHike: "13:30 · Cascada de Espigantosa ➔ Subida al refugio",
      endHike: "17:30 · Llegada al Refugio Ángel Orús",
      sleep: "Dormir en Refugio Ángel Orús (2.148 m)"
    },
    timeline: [
      { time: "06:00", activity: "Salida en coche desde Valencia hacia Benasque (la zona más oriental y lejana, 6h 10m).", icon: "car" },
      { time: "12:30", activity: "Llegada al Valle de Benasque (Eriste) y comida rápida previa a la subida.", icon: "food" },
      { time: "13:30", activity: "Aparcamiento de la Cascada de Espigantosa (1.550 m) e inicio del sendero S-4 / GR-11.2.", icon: "hike" },
      { time: "14:45", activity: "Paso junto a las cascadas del barranco de Grist y bosque de pino negro.", icon: "hike" },
      { time: "16:15", activity: "Cruce del puente de Presentet y vistas a las crestas del Macizo del Posets.", icon: "hike" },
      { time: "17:30", activity: "Llegada al Refugio Ángel Orús (2.148 m). Check-in, reparto de literas y descanso.", icon: "camp" },
      { time: "19:30", activity: "Cena caliente en el refugio y noche en alta montaña.", icon: "food" }
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
      distance: "7,5 km",
      elevation: "+650 m",
      description: "Ruta top de Wikiloc que remonta el salvaje Valle de Eriste desde la Cascada de Espigantosa hasta el pie del Posets (3.375 m). El camino culmina en el refugio guardado Ángel Orús.",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop&q=80"
    },
    drivePath: [
      [39.4699, -0.3763], // Valencia
      [40.3456, -1.1072], // Teruel
      [41.6488, -0.8891], // Zaragoza
      [42.0080, 0.1260],  // Barbastro
      [42.1900, 0.3370],  // Graus
      BENASQUE_ERISTE
    ],
    routePath: [
      [42.6075, 0.4500], // Parking Espigantosa
      [42.6130, 0.4490],
      [42.6190, 0.4510], // Puente de Presentet
      [42.6240, 0.4550],
      REFUGIO_ORUS,       // Refugio Ángel Orús (2.148 m)
      [42.6320, 0.4520], // Opción Ibón de Llardaneta
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
    refugio: {
      name: "Refugio de Bachimaña",
      altitude: "2.200 m",
      type: "Guardado moderno (FAM)",
      services: "Cena, duchas calientes, Wi-Fi, bar, calefacción, taquillas",
      coords: REFUGIO_BACHIMANA,
      bookingUrl: "https://www.alberguesyrefugios.com/bachimana/"
    },
    wikiloc: {
      title: "Baños de Panticosa ➔ Cascadas del Caldarés ➔ Ibones de Bachimaña",
      rating: "⭐⭐⭐⭐⭐ (4.9 · +2.400 valoraciones)",
      distance: "12 km (circular/ibones)",
      elevation: "+680 m",
      difficulty: "Moderada",
      searchUrl: "https://es.wikiloc.com/wikiloc/find.do?q=Banos+de+Panticosa+Ibones+Bachimana+Infiernos"
    },
    routeSummary: {
      depart: "08:00 · Benasque ➔ Baños de Panticosa (Valle de Tena, 2h)",
      startHike: "11:00 · Casa de Piedra ➔ Garganta Caldarés ➔ Ibones",
      endHike: "17:00 · Llegada al Refugio de Bachimaña",
      sleep: "Dormir en Refugio de Bachimaña (o Casa de Piedra)"
    },
    timeline: [
      { time: "07:00", activity: "Desayuno en Ángel Orús y bajada rápida a los coches en Espigantosa (1h30).", icon: "hike" },
      { time: "08:45", activity: "Carretera hacia el oeste: Campo ➔ Aínsa ➔ Fiscal ➔ Biescas ➔ Panticosa.", icon: "car" },
      { time: "11:00", activity: "Llegada al Balneario de Panticosa (Refugio Casa de Piedra) e inicio del sendero GR-11.", icon: "hike" },
      { time: "12:30", activity: "Remonte del cañón del Caldarés pasando por la Cascada del Pino y Cuesta del Fraile.", icon: "hike" },
      { time: "14:00", activity: "Llegada al Refugio de Bachimaña (2.200 m) y comida picnic con vistas al embalse.", icon: "picnic" },
      { time: "15:30", activity: "Paseo hacia los Ibones Azules bajo el marmóreo glaciar de los Picos del Infierno (3.082 m).", icon: "hike" },
      { time: "17:30", activity: "Regreso al Refugio de Bachimaña. Alojamiento y descanso.", icon: "camp" },
      { time: "20:00", activity: "Cena en el refugio y descanso en el Valle de Tena.", icon: "food" }
    ],
    poi: {
      id: "panticosa-bachimana",
      name: "Panticosa / Picos del Infierno",
      shortName: "2 · Panticosa / Bachimaña",
      subtitle: "Valle de Tena · Refugio de Bachimaña (2.200 m)",
      badge: 2,
      color: "#10b981",
      coords: REFUGIO_BACHIMANA,
      duration: "5-6 h",
      distance: "12 km",
      elevation: "+680 m",
      description: "Una de las 5 rutas más transitadas de Wikiloc en el Pirineo Central. Conecta el balneario termal con el circo de lagos glaciares de Bachimaña y las paredes de los Picos del Infierno.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop&q=80"
    },
    drivePath: [
      BENASQUE_ERISTE,
      [42.4100, 0.3950], // Campo
      [42.4170, 0.1380], // Aínsa
      [42.5000, -0.1200], // Fiscal
      [42.6300, -0.3200], // Biescas
      PANTICOSA_BANOS
    ],
    routePath: [
      PANTICOSA_BANOS,   // Refugio Casa de Piedra
      [42.7680, -0.2290], // Mirador cascada Pino
      [42.7750, -0.2240], // Cuesta del Fraile
      REFUGIO_BACHIMANA,  // Refugio de Bachimaña (2.200 m)
      [42.7900, -0.2310], // Ibones Azules
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
    refugio: {
      name: "Refugio de Bujaruelo",
      altitude: "1.338 m",
      type: "Albergue / Refugio histórico con carretera",
      services: "Restaurante con brasa, habitaciones, zona de acampada, bar, duchas",
      coords: BUJARUELO_REFUGIO,
      bookingUrl: "https://www.refugiodebujaruelo.com/"
    },
    wikiloc: {
      title: "San Nicolás de Bujaruelo ➔ Valle de Otal (Circo Glaciar)",
      rating: "⭐⭐⭐⭐⭐ (4.8 · +1.800 valoraciones)",
      distance: "14 km (o 19 km con variantes)",
      elevation: "+480 m",
      difficulty: "Fácil / Moderada",
      searchUrl: "https://es.wikiloc.com/wikiloc/find.do?q=Bujaruelo+Valle+de+Otal"
    },
    routeSummary: {
      depart: "08:30 · Panticosa ➔ San Nicolás de Bujaruelo (50 min)",
      startHike: "10:00 · Puente medieval ➔ Ascenso a Otal ➔ Circo",
      endHike: "16:00 · Regreso al Refugio de Bujaruelo",
      sleep: "Dormir en Refugio de Bujaruelo (acceso coche por pista)"
    },
    timeline: [
      { time: "07:30", activity: "Desayuno en Bachimaña y descenso al Balneario de Panticosa.", icon: "hike" },
      { time: "09:00", activity: "Coche hacia Torla por el puerto de Cotefablo y desvío al Valle de Bujaruelo.", icon: "car" },
      { time: "09:45", activity: "Pista forestal de 6,3 km desde Puente de los Navarros hasta el mismo refugio.", icon: "car" },
      { time: "10:15", activity: "Inicio ruta desde la puerta del refugio: cruce del puente románico de piedra sobre el río Ara.", icon: "hike" },
      { time: "11:15", activity: "Zetas cómodas por el bosque de hayas hasta la cancela ganadera de Otal.", icon: "hike" },
      { time: "12:30", activity: "Paseo llano y espectacular por el fondo del inmenso circo glaciar colgado de Otal.", icon: "hike" },
      { time: "13:30", activity: "Picnic en la cabecera del valle rodeados de cascadas y murallones.", icon: "picnic" },
      { time: "16:00", activity: "Regreso a pie al Refugio de Bujaruelo. Relax en la pradera junto al río Ara.", icon: "food" },
      { time: "19:30", activity: "Cena típica con carnes a la brasa en el refugio y descanso.", icon: "camp" }
    ],
    poi: {
      id: "bujaruelo-otal",
      name: "Bujaruelo / Valle de Otal",
      shortName: "3 · Bujaruelo / Otal",
      subtitle: "Valle de Bujaruelo & Otal · Refugio de Bujaruelo (1.338 m)",
      badge: 3,
      color: "#14b8a6",
      coords: BUJARUELO_REFUGIO,
      duration: "5-6 h",
      distance: "14-19 km",
      elevation: "+480 m",
      description: "Ruta favorita de las familias y montañeros en Wikiloc por su incomparable belleza sin dificultad técnica. Se accede en coche hasta el refugio y se asciende al circo glaciar en U de Otal.",
      image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&auto=format&fit=crop&q=80"
    },
    drivePath: [
      PANTICOSA_BANOS,
      [42.6300, -0.3200], // Biescas
      [42.6020, -0.1180], // Broto
      [42.6280, -0.1110], // Torla
      [42.6530, -0.1030], // Puente de los Navarros
      BUJARUELO_REFUGIO
    ],
    routePath: [
      BUJARUELO_REFUGIO,  // Refugio de Bujaruelo (1.338 m)
      [42.6930, -0.1075], // Puente medieval
      [42.6915, -0.1120], // Zetas
      [42.6900, -0.1240],
      [42.6925, -0.1290], // Cancela ganadera
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
    refugio: {
      name: "Refugio de Góriz",
      altitude: "2.200 m",
      type: "Guardado legendario (FAM)",
      services: "Cena montañera, literas, taquillas, bar, punto base Monte Perdido",
      coords: REFUGIO_GORIZ,
      bookingUrl: "https://www.goriz.es/"
    },
    wikiloc: {
      title: "Pradera de Ordesa ➔ Senda de los Cazadores ➔ Faja de Pelay ➔ Góriz",
      rating: "⭐⭐⭐⭐⭐ (5.0 · +5.000 valoraciones)",
      distance: "18 km",
      elevation: "+950 m",
      difficulty: "Exigente",
      searchUrl: "https://es.wikiloc.com/wikiloc/find.do?q=Ordesa+Cazadores+Faja+Pelay+Cola+Caballo+Goriz"
    },
    routeSummary: {
      depart: "08:00 · Bujaruelo ➔ Pradera de Ordesa (25 min)",
      startHike: "08:45 · Senda Cazadores ➔ Faja de Pelay ➔ Cola de Caballo",
      endHike: "16:30 · Llegada al Refugio de Góriz",
      sleep: "Dormir en Refugio de Góriz (2.200 m)"
    },
    timeline: [
      { time: "07:30", activity: "Desayuno en Bujaruelo y preparación de mochilas de alta montaña.", icon: "food" },
      { time: "08:15", activity: "Desplazamiento a la Pradera de Ordesa por Puente de los Navarros.", icon: "car" },
      { time: "08:45", activity: "Inicio por la mítica Senda de los Cazadores hacia el balcón de Calcilarruego.", icon: "hike" },
      { time: "11:30", activity: "Travesía aérea de 8 km por la Faja de Pelay colgados sobre el cañón.", icon: "hike" },
      { time: "13:30", activity: "Llegada al Circo de Soaso, Cascada Cola de Caballo y picnic.", icon: "picnic" },
      { time: "14:45", activity: "Subida por las Clavijas de Soaso o Senda de los Mulos hacia Góriz.", icon: "hike" },
      { time: "16:30", activity: "Llegada al legendario Refugio de Góriz (2.200 m) al pie de Monte Perdido.", icon: "camp" },
      { time: "19:30", activity: "Cena comunitaria con alpinistas y noche bajo las estrellas del Parque Nacional.", icon: "food" }
    ],
    poi: {
      id: "ordesa-goriz",
      name: "Ordesa — Cazadores & Góriz",
      shortName: "4 · Ordesa / Góriz",
      subtitle: "Valle de Ordesa · Faja de Pelay · Refugio de Góriz (2.200 m)",
      badge: 4,
      color: "#3b82f6",
      coords: REFUGIO_GORIZ,
      duration: "6.5-7 h",
      distance: "18 km",
      elevation: "+950 m",
      description: "La ruta de senderismo #1 de toda España en Wikiloc. Ascenso a Calcilarruego, balcón de la Faja de Pelay, Cola de Caballo y llegada triunfal al Refugio de Góriz a los pies de Monte Perdido (3.355 m).",
      image: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&auto=format&fit=crop&q=80"
    },
    drivePath: [
      BUJARUELO_REFUGIO,
      [42.6530, -0.1030],
      ORDESA_PRADERA
    ],
    routePath: [
      ORDESA_PRADERA,
      [42.6515, -0.0535],
      [42.6450, -0.0460],
      [42.6415, -0.0400], // Calcilarruego
      [42.6400, -0.0210], // Faja de Pelay
      [42.6375, -0.0050], // Cola de Caballo
      [42.6450, -0.0080], // Clavijas de Soaso
      [42.6550, -0.0120],
      REFUGIO_GORIZ       // Refugio de Góriz (2.200 m)
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
    refugio: {
      name: "Refugio libre de Fuen Blanca",
      altitude: "1.700 m",
      type: "Refugio libre de montaña / cabaña",
      services: "Refugio no guardado básico para emergencias, fuente de agua, pradera",
      coords: FUEN_BLANCA_REFUGIO,
      bookingUrl: "https://www.refugioslibres.com/fuen-blanca"
    },
    wikiloc: {
      title: "Cañón de Añisclo: San Úrbez ➔ La Ripareta ➔ Cascadas de Fuen Blanca",
      rating: "⭐⭐⭐⭐⭐ (4.9 · +1.600 valoraciones)",
      distance: "16 km (ida y vuelta)",
      elevation: "+450 m",
      difficulty: "Moderada",
      searchUrl: "https://es.wikiloc.com/wikiloc/find.do?q=Canon+de+Anisclo+San+Urbez+La+Ripareta+Fuen+Blanca"
    },
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
      { time: "13:00", activity: "Ascenso hacia el Refugio libre de Fuen Blanca (1.700 m) y sus cascadas.", icon: "hike" },
      { time: "13:45", activity: "Picnic de despedida junto al agua esmeralda en Fuen Blanca.", icon: "picnic" },
      { time: "15:00", activity: "Regreso a los coches en San Úrbez para iniciar el viaje de vuelta.", icon: "car" },
      { time: "15:30", activity: "Salida directa hacia Valencia por Escalona, Aínsa, Barbastro y Teruel.", icon: "car" },
      { time: "19:30", activity: "Llegada prevista a Valencia (ahorrando 1h y media al salir desde el sur).", icon: "car" }
    ],
    poi: {
      id: "anisclo-fuen-blanca",
      name: "Cañón de Añisclo / Fuen Blanca",
      shortName: "5 · Añisclo / Fuen Blanca",
      subtitle: "Garganta del Bellós · Refugio libre de Fuen Blanca",
      badge: 5,
      color: "#a855f7",
      coords: FUEN_BLANCA_REFUGIO,
      duration: "5 h",
      distance: "16 km",
      elevation: "+450 m",
      description: "Una de las gargantas calizas más sobrecogedoras de Europa. Sendero tallado en la roca que remonta el río Bellós hasta el circo y refugio libre de Fuen Blanca.",
      image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop&q=80"
    },
    drivePath: [
      ORDESA_PRADERA,
      [42.6020, -0.1180], // Broto
      [42.5800, -0.0800], // Fanlo
      ANISCLO_SAN_URBEZ,
      [42.4170, 0.1380], // Aínsa
      [42.0080, 0.1260], // Barbastro
      [41.6488, -0.8891], // Zaragoza/Teruel
      [39.4699, -0.3763]  // Valencia
    ],
    routePath: [
      ANISCLO_SAN_URBEZ,
      [42.5560, 0.0510], // Ermita San Úrbez
      [42.5640, 0.0480],
      [42.5740, 0.0450],
      [42.5840, 0.0415], // La Ripareta
      [42.6000, 0.0380],
      [42.6200, 0.0450],
      FUEN_BLANCA_REFUGIO, // Refugio libre de Fuen Blanca (1.700 m)
      [42.6200, 0.0450],
      [42.5840, 0.0415],
      ANISCLO_SAN_URBEZ
    ]
  }
];

// Pins de los 5 Refugios de Montaña
export const REFUGIO_PINS = [
  { id: "dia-1", badge: "🛖", name: "Refugio Ángel Orús (2.148 m)", color: "#f59e0b", coords: REFUGIO_ORUS, alt: "2.148 m" },
  { id: "dia-2", badge: "🛖", name: "Refugio Bachimaña (2.200 m)", color: "#10b981", coords: REFUGIO_BACHIMANA, alt: "2.200 m" },
  { id: "dia-3", badge: "🛖", name: "Refugio Bujaruelo (1.338 m)", color: "#14b8a6", coords: BUJARUELO_REFUGIO, alt: "1.338 m" },
  { id: "dia-4", badge: "🛖", name: "Refugio de Góriz (2.200 m)", color: "#3b82f6", coords: REFUGIO_GORIZ, alt: "2.200 m" },
  { id: "dia-5", badge: "🛖", name: "Refugio Fuen Blanca (1.700 m)", color: "#a855f7", coords: FUEN_BLANCA_REFUGIO, alt: "1.700 m" }
];

// Pins de las 5 Etapas
export const MAP_PINS = [
  { id: "dia-1", badge: "1", name: "Benasque / Posets", color: "#f59e0b", coords: REFUGIO_ORUS },
  { id: "dia-2", badge: "2", name: "Panticosa / Infiernos", color: "#10b981", coords: REFUGIO_BACHIMANA },
  { id: "dia-3", badge: "3", name: "Bujaruelo / Otal", color: "#14b8a6", coords: BUJARUELO_REFUGIO },
  { id: "dia-4", badge: "4", name: "Ordesa / Góriz", color: "#3b82f6", coords: REFUGIO_GORIZ },
  { id: "dia-5", badge: "5", name: "Añisclo / Fuen Blanca", color: "#a855f7", coords: FUEN_BLANCA_REFUGIO }
];

export const DAYS = TRIP_DAYS;
