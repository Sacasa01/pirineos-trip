// src/data/tripData.ts

export interface TimelineItem {
  time: string;
  activity: string;
  icon: 'car' | 'bus' | 'hike' | 'picnic' | 'camp' | 'food' | 'info';
}

export interface RefugioInfo {
  name: string;
  altitude: string;
  type: string;
  services: string;
  coords: [number, number];
  bookingUrl: string;
}

export interface WikilocInfo {
  id?: string;
  title: string;
  rating: string;
  distance: string;
  elevation: string;
  difficulty: string;
  searchUrl: string;
  embedUrl?: string;
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
  subtitle: "Ruta de los Refugios & Tracks Wikiloc · 4 Amigos",
  dates: "8 - 12 Oct 2026",
  travelers: 4,
  vehicle: "Coche propio desde Valencia (~1.150 km)",
  budgetPerPerson: "~65 € (gasolina + peajes compartidos)"
};

// Coordenadas geográficas oficiales exactas
const VALENCIA: [number, number] = [39.4699, -0.3763];
const PANTICOSA_PARKING: [number, number] = [42.7220, -0.2809]; // Parking telecabina
const REFUGIO_VERDE: [number, number] = [42.6880, -0.2350]; // Refugio del Verde (2.050 m)
const BUJARUELO_PARKING: [number, number] = [42.6944, -0.1069]; // Refugio/Parking Bujaruelo (1.338 m)
const ORDESA_PRADERA: [number, number] = [42.6535, -0.0575]; // Parking Pradera Ordesa (1.320 m)
const REFUGIO_GORIZ: [number, number] = [42.6633, 0.0147]; // Refugio de Góriz (2.200 m)
const ANISCLO_SAN_URBEZ: [number, number] = [42.5535, 0.0520]; // Parking San Úrbez (980 m)
const FUEN_BLANCA_REFUGIO: [number, number] = [42.6425, 0.0592]; // Refugio libre Fuen Blanca (1.700 m)
const BENASQUE_ESPIGANTOSA: [number, number] = [42.6075, 0.4500]; // Parking Cascada Espigantosa
const REFUGIO_ORUS: [number, number] = [42.6275, 0.4575]; // Refugio Ángel Orús (2.148 m)

export const TRIP_DAYS: DayItinerary[] = [
  // ─── ETAPA 1: PANTICOSA / IBÓN DE SABOCOS (Track enviado por el usuario: 116398514) ───
  {
    id: "dia-1",
    dayNumber: 1,
    dateTitle: "Jueves, 8 de octubre",
    dateTitleShort: "Jue 8",
    routeTitle: "Panticosa: Rincón del Verde & Ibón de Sabocos",
    color: "#10b981", // emerald green
    thumbnail: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop&q=80",
    refugio: {
      name: "Refugio del Verde / Panticosa",
      altitude: "2.050 m",
      type: "Refugio abierto a senderistas (km 9,6 de ruta)",
      services: "Refugio libre en ruta, fuente de agua, alojamiento en Panticosa/Baños",
      coords: REFUGIO_VERDE,
      bookingUrl: "https://es.wikiloc.com/rutas-senderismo/panticosa-rincon-del-verde-collado-ibon-de-sabocos-selva-verde-116398514"
    },
    wikiloc: {
      id: "116398514",
      title: "Panticosa ➔ Rincón del Verde ➔ Ibón de Sabocos ➔ Barranco Travenosa",
      rating: "⭐⭐⭐⭐⭐ (4.9 · Track verificado)",
      distance: "17,4 km (circular)",
      elevation: "+980 m",
      difficulty: "Moderada / Alta",
      searchUrl: "https://es.wikiloc.com/rutas-senderismo/panticosa-rincon-del-verde-collado-ibon-de-sabocos-selva-verde-116398514",
      embedUrl: "https://es.wikiloc.com/wikiloc/embedv2.do?id=116398514&elevation=on&images=on&maptype=H"
    },
    routeSummary: {
      depart: "06:00 · Valencia ➔ Panticosa por autovía A-23 (4h 45m)",
      startHike: "11:30 · Parking Panticosa ➔ Rincón del Verde ➔ Ibón de Sabocos",
      endHike: "17:30 · Vuelta al coche por Barranco de la Travenosa",
      sleep: "Noche en Panticosa / Refugio de Montaña"
    },
    timeline: [
      { time: "06:00", activity: "Salida en coche desde Valencia por autovía A-23 (Teruel, Zaragoza, Huesca, Biescas ➔ Panticosa, ~4h 45m).", icon: "car" },
      { time: "11:00", activity: "Llegada al parking de las pistas de esquí de Panticosa y preparativos de mochila.", icon: "info" },
      { time: "11:30", activity: "Inicio ruta a pie: cruce del puente sobre el río Bolática y sendero PR HU-91.", icon: "hike" },
      { time: "13:00", activity: "Entrada en La Ripera y el majestuoso Rincón del Verde a los pies de Sierra Tendeñera.", icon: "hike" },
      { time: "14:30", activity: "Paso por el Refugio del Verde (km 9,6) y subida a la Collada del Verde (2.200 m).", icon: "camp" },
      { time: "15:15", activity: "Llegada al paradisíaco Ibón de Sabocos (1.905 m) para comer el picnic y descansar.", icon: "picnic" },
      { time: "16:15", activity: "Descenso panorámico por el Barranco de la Travenosa con vistas al Pico Argualas.", icon: "hike" },
      { time: "17:45", activity: "Regreso al parking de Panticosa. Vuelta al coche.", icon: "car" },
      { time: "20:00", activity: "Cena y descanso en el Valle de Tena.", icon: "food" }
    ],
    poi: {
      id: "panticosa-sabocos",
      name: "Panticosa / Ibón de Sabocos",
      shortName: "1 · Panticosa (Sabocos)",
      subtitle: "Valle de Tena · Rincón del Verde & Ibón de Sabocos",
      badge: 1,
      color: "#10b981",
      coords: PANTICOSA_PARKING,
      duration: "6 h",
      distance: "17,4 km",
      elevation: "+980 m",
      description: "Ruta oficial de Wikiloc (ID: 116398514). Sube por el valle de La Ripera y Rincón del Verde, visita el Refugio del Verde, corona la Collada y bordea el mágico lago glaciar del Ibón de Sabocos.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop&q=80"
    },
    // Conexión en coche: Valencia -> Teruel -> Zaragoza -> Huesca -> Sabiñánigo -> Biescas -> Panticosa
    drivePath: [
      VALENCIA,
      [40.3456, -1.1072], // Teruel
      [41.6488, -0.8891], // Zaragoza
      [42.1400, -0.4080], // Huesca
      [42.5180, -0.3640], // Sabiñánigo
      [42.6300, -0.3200], // Biescas
      [42.7050, -0.3150], // Escarrilla
      PANTICOSA_PARKING
    ],
    // Trazado a pie exacto (Track 116398514): Panticosa -> Ripera -> Refugio Verde -> Collada -> Sabocos -> Travenosa -> Panticosa
    routePath: [
      PANTICOSA_PARKING,
      [42.7150, -0.2650], // Puente la Zoche
      [42.7050, -0.2500], // La Ripera
      [42.6950, -0.2400], // Cascada Tendeñera
      REFUGIO_VERDE,      // Refugio del Verde (km 9,6)
      [42.6820, -0.2400], // Collada del Verde (2.200 m)
      [42.6850, -0.2580], // Ibón de Sabocos (1.905 m)
      [42.7020, -0.2720], // Barranco Travenosa
      PANTICOSA_PARKING   // Vuelta al coche
    ]
  },

  // ─── ETAPA 2: BUJARUELO / VALLE DE OTAL ───
  {
    id: "dia-2",
    dayNumber: 2,
    dateTitle: "Viernes, 9 de octubre",
    dateTitleShort: "Vie 9",
    routeTitle: "Bujaruelo / Valle de Otal (Circo Glaciar)",
    color: "#14b8a6", // teal
    thumbnail: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&auto=format&fit=crop&q=80",
    refugio: {
      name: "Refugio de Bujaruelo",
      altitude: "1.338 m",
      type: "Albergue / Refugio guardado con acceso en coche",
      services: "Restaurante brasa, habitaciones, zona acampada, bar, duchas",
      coords: BUJARUELO_PARKING,
      bookingUrl: "https://www.refugiodebujaruelo.com/"
    },
    wikiloc: {
      id: "bujaruelo-otal",
      title: "San Nicolás de Bujaruelo ➔ Puente Medieval ➔ Circo de Otal",
      rating: "⭐⭐⭐⭐⭐ (4.9 · +1.800 valoraciones)",
      distance: "14 km (circular)",
      elevation: "+480 m",
      difficulty: "Fácil / Moderada",
      searchUrl: "https://es.wikiloc.com/wikiloc/find.do?q=Bujaruelo+Valle+de+Otal"
    },
    routeSummary: {
      depart: "08:30 · Coche Panticosa ➔ Bujaruelo por pista forestal (45 min)",
      startHike: "09:30 · Puente románico ➔ Valle de Otal",
      endHike: "15:00 · Llegada al Refugio de Bujaruelo",
      sleep: "Dormir en Refugio de Bujaruelo (1.338 m)"
    },
    timeline: [
      { time: "08:30", activity: "Coche desde Panticosa pasando por Biescas y Torla hasta el desvío de Bujaruelo.", icon: "car" },
      { time: "09:15", activity: "Pista forestal de 6,3 km desde Puente de los Navarros hasta el Refugio de Bujaruelo.", icon: "car" },
      { time: "09:30", activity: "Inicio ruta a pie: cruce del icónico puente medieval de piedra sobre el río Ara.", icon: "hike" },
      { time: "10:30", activity: "Zetas de subida entre hayedos hasta la cancela ganadera del Collado de Otal.", icon: "hike" },
      { time: "12:00", activity: "Paseo llano por el fondo del inmenso valle glaciar colgado de Otal.", icon: "hike" },
      { time: "13:00", activity: "Picnic en la cabecera del circo rodeados de paredes verticales.", icon: "picnic" },
      { time: "15:00", activity: "Regreso a pie al Refugio de Bujaruelo. Relax en la pradera junto al río.", icon: "camp" },
      { time: "19:30", activity: "Cena montañera en el restaurante del refugio y descanso.", icon: "food" }
    ],
    poi: {
      id: "bujaruelo-otal",
      name: "Bujaruelo / Valle de Otal",
      shortName: "2 · Bujaruelo (Otal)",
      subtitle: "Valle de Bujaruelo & Otal · Refugio de Bujaruelo (1.338 m)",
      badge: 2,
      color: "#14b8a6",
      coords: BUJARUELO_PARKING,
      duration: "5 h",
      distance: "14 km",
      elevation: "+480 m",
      description: "Ruta estelar de Wikiloc. Se aparca en el mismo refugio y se asciende al circo glaciar colgado de Otal cruzando el puente medieval del río Ara.",
      image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&auto=format&fit=crop&q=80"
    },
    // Conexión en coche: Panticosa -> Biescas -> Puerto de Cotefablo -> Broto -> Torla -> Pista Bujaruelo
    drivePath: [
      PANTICOSA_PARKING,
      [42.7050, -0.3150], // Escarrilla
      [42.6300, -0.3200], // Biescas
      [42.6120, -0.2030], // Puerto de Cotefablo (túnel)
      [42.6030, -0.1200], // Broto
      [42.6280, -0.1110], // Torla
      [42.6530, -0.1030], // Puente de los Navarros
      [42.6750, -0.1050], // Valle del Ara
      BUJARUELO_PARKING
    ],
    // Ruta a pie: Refugio Bujaruelo -> Puente -> Zetas -> Cancela Otal -> Circo Otal -> Vuelta al Refugio
    routePath: [
      BUJARUELO_PARKING,
      [42.6930, -0.1075], // Puente medieval
      [42.6915, -0.1120], // Zetas
      [42.6900, -0.1240],
      [42.6925, -0.1290], // Cancela Otal
      [42.6955, -0.1440],
      [42.6970, -0.1580], // Circo Glaciar Otal
      [42.6955, -0.1440],
      [42.6925, -0.1290],
      BUJARUELO_PARKING
    ]
  },

  // ─── ETAPA 3: ORDESA / GÓRIZ ───
  {
    id: "dia-3",
    dayNumber: 3,
    dateTitle: "Sábado, 10 de octubre",
    dateTitleShort: "Sáb 10",
    routeTitle: "Ordesa: Cazadores, Faja Pelay & Góriz",
    color: "#3b82f6", // vibrant blue
    thumbnail: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=600&auto=format&fit=crop&q=80",
    refugio: {
      name: "Refugio de Góriz",
      altitude: "2.200 m",
      type: "Guardado legendario (FAM)",
      services: "Cena caliente, literas, mantas, punto base Monte Perdido, bar",
      coords: REFUGIO_GORIZ,
      bookingUrl: "https://www.goriz.es/"
    },
    wikiloc: {
      id: "ordesa-goriz",
      title: "Pradera Ordesa ➔ Senda Cazadores ➔ Faja de Pelay ➔ Góriz",
      rating: "⭐⭐⭐⭐⭐ (5.0 · #1 España en Wikiloc)",
      distance: "18 km",
      elevation: "+950 m",
      difficulty: "Exigente",
      searchUrl: "https://es.wikiloc.com/wikiloc/find.do?q=Ordesa+Cazadores+Faja+Pelay+Cola+Caballo+Goriz"
    },
    routeSummary: {
      depart: "08:00 · Coche Bujaruelo ➔ Pradera de Ordesa (25 min)",
      startHike: "08:45 · Senda Cazadores ➔ Faja de Pelay ➔ Cola de Caballo",
      endHike: "16:30 · Llegada al Refugio de Góriz",
      sleep: "Dormir en Refugio de Góriz (2.200 m)"
    },
    timeline: [
      { time: "08:00", activity: "Desplazamiento en coche de Bujaruelo a la Pradera de Ordesa.", icon: "car" },
      { time: "08:45", activity: "Inicio ruta a pie: Senda de los Cazadores hacia el Mirador de Calcilarruego.", icon: "hike" },
      { time: "11:30", activity: "Travesía aérea por la Faja de Pelay colgados 8 km sobre el Cañón de Ordesa.", icon: "hike" },
      { time: "13:30", activity: "Llegada al Circo de Soaso y la Cascada Cola de Caballo para el picnic.", icon: "picnic" },
      { time: "14:45", activity: "Subida por las Clavijas de Soaso / Senda de los Mulos hacia la meseta alta.", icon: "hike" },
      { time: "16:30", activity: "Llegada al histórico Refugio de Góriz (2.200 m) bajo Monte Perdido.", icon: "camp" },
      { time: "19:30", activity: "Cena caliente comunitaria en Góriz y noche bajo las estrellas.", icon: "food" }
    ],
    poi: {
      id: "ordesa-goriz",
      name: "Ordesa / Góriz",
      shortName: "3 · Ordesa (Góriz)",
      subtitle: "Valle de Ordesa · Faja de Pelay · Refugio de Góriz (2.200 m)",
      badge: 3,
      color: "#3b82f6",
      coords: REFUGIO_GORIZ,
      duration: "6.5-7 h",
      distance: "18 km",
      elevation: "+950 m",
      description: "La ruta de senderismo más aclamada de toda España en Wikiloc. Sube por Cazadores, planea por Pelay y culmina en el refugio de Góriz (2.200 m) a los pies de Monte Perdido (3.355 m).",
      image: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&auto=format&fit=crop&q=80"
    },
    // Conexión en coche: Bujaruelo -> Valle del Ara -> Puente de los Navarros -> Pradera Ordesa
    drivePath: [
      BUJARUELO_PARKING,
      [42.6750, -0.1050], // Pista Valle del Ara
      [42.6530, -0.1030], // Puente de los Navarros
      [42.6480, -0.0820], // Entrada Parque Ordesa
      ORDESA_PRADERA
    ],
    // Ruta a pie: Pradera -> Cazadores -> Faja Pelay -> Cola Caballo -> Góriz
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

  // ─── ETAPA 4: CAÑÓN DE AÑISCLO / FUEN BLANCA ───
  {
    id: "dia-4",
    dayNumber: 4,
    dateTitle: "Domingo, 11 de octubre",
    dateTitleShort: "Dom 11",
    routeTitle: "Cañón de Añisclo: San Úrbez ➔ Fuen Blanca",
    color: "#a855f7", // purple
    thumbnail: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&auto=format&fit=crop&q=80",
    refugio: {
      name: "Refugio libre de Fuen Blanca",
      altitude: "1.700 m",
      type: "Cabaña libre / refugio no guardado",
      services: "Cabaña pastoril para resguardo, fuente natural de agua esmeralda",
      coords: FUEN_BLANCA_REFUGIO,
      bookingUrl: "https://www.refugioslibres.com/fuen-blanca"
    },
    wikiloc: {
      id: "anisclo-fuen-blanca",
      title: "Cañón de Añisclo: Parking San Úrbez ➔ La Ripareta ➔ Fuen Blanca",
      rating: "⭐⭐⭐⭐⭐ (4.9 · +1.600 valoraciones)",
      distance: "16 km (ida y vuelta)",
      elevation: "+450 m",
      difficulty: "Moderada",
      searchUrl: "https://es.wikiloc.com/wikiloc/find.do?q=Canon+de+Anisclo+San+Urbez+La+Ripareta+Fuen+Blanca"
    },
    routeSummary: {
      depart: "08:30 · Coche Ordesa / Torla ➔ San Úrbez por Fanlo (35 min)",
      startHike: "09:30 · Ermita San Úrbez ➔ Desfiladero Bellós ➔ Fuen Blanca",
      endHike: "15:00 · Vuelta al coche en San Úrbez",
      sleep: "Dormir en Añisclo / Escalona / Aínsa"
    },
    timeline: [
      { time: "08:30", activity: "Coche por la pintoresca carretera de Fanlo hacia el Parking de San Úrbez.", icon: "car" },
      { time: "09:30", activity: "Inicio ruta a pie: Ermita rupestre de San Úrbez y puente medieval del Bellós.", icon: "hike" },
      { time: "11:30", activity: "Llegada a La Ripareta entre pozas de agua esmeralda y bosques de hayas.", icon: "hike" },
      { time: "13:00", activity: "Ascenso hacia el circo y Refugio libre de Fuen Blanca (1.700 m).", icon: "camp" },
      { time: "13:45", activity: "Picnic junto al nacimiento de las cascadas de Fuen Blanca.", icon: "picnic" },
      { time: "15:30", activity: "Regreso a pie al parking de San Úrbez y vuelta al coche.", icon: "car" },
      { time: "17:30", activity: "Paseo por el casco histórico medieval de Aínsa.", icon: "info" },
      { time: "20:30", activity: "Cena en Aínsa o Escalona.", icon: "food" }
    ],
    poi: {
      id: "anisclo-fuen-blanca",
      name: "Cañón de Añisclo",
      shortName: "4 · Cañón de Añisclo",
      subtitle: "Garganta del Bellós · Refugio libre de Fuen Blanca",
      badge: 4,
      color: "#a855f7",
      coords: FUEN_BLANCA_REFUGIO,
      duration: "5 h",
      distance: "16 km",
      elevation: "+450 m",
      description: "Garganta kárstica monumental de Wikiloc. El sendero serpentea por el fondo del cañón del Bellós hasta las cascadas y refugio de Fuen Blanca.",
      image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop&q=80"
    },
    // Conexión en coche: Ordesa -> Puente de los Navarros -> Torla -> Broto -> Fanlo -> San Úrbez
    drivePath: [
      ORDESA_PRADERA,
      [42.6480, -0.0820],
      [42.6530, -0.1030], // Puente de los Navarros
      [42.6280, -0.1110], // Torla
      [42.6030, -0.1200], // Broto
      [42.5870, -0.1150], // Sarvisé
      [42.5880, -0.0190], // Fanlo
      [42.5750, 0.0150],  // Collado Fanlo
      ANISCLO_SAN_URBEZ
    ],
    // Ruta a pie: San Úrbez -> Molino Aso -> Garganta Bellós -> La Ripareta -> Refugio Fuen Blanca -> Vuelta
    routePath: [
      ANISCLO_SAN_URBEZ,
      [42.5560, 0.0510],
      [42.5640, 0.0480],
      [42.5740, 0.0450],
      [42.5840, 0.0415], // La Ripareta
      [42.6000, 0.0380],
      [42.6200, 0.0450],
      FUEN_BLANCA_REFUGIO, // Refugio libre Fuen Blanca
      [42.6200, 0.0450],
      [42.5840, 0.0415],
      ANISCLO_SAN_URBEZ
    ]
  },

  // ─── ETAPA 5: BENASQUE / POSETS (ÁNGEL ORÚS) & RETORNO A VALENCIA ───
  {
    id: "dia-5",
    dayNumber: 5,
    dateTitle: "Lunes, 12 de octubre",
    dateTitleShort: "Lun 12",
    routeTitle: "Benasque: Cascada Espigantosa ➔ Refugio Ángel Orús",
    color: "#f59e0b", // warm amber
    thumbnail: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&auto=format&fit=crop&q=80",
    refugio: {
      name: "Refugio Ángel Orús",
      altitude: "2.148 m",
      type: "Guardado de alta montaña (FAM)",
      services: "Cena, literas, mantas, taquillas, bar, punto base Posets",
      coords: REFUGIO_ORUS,
      bookingUrl: "https://www.alberguesyrefugios.com/angelorus/"
    },
    wikiloc: {
      id: "espigantosa-orus",
      title: "Espigantosa ➔ Puente de Presentet ➔ Refugio Ángel Orús (GR-11.2)",
      rating: "⭐⭐⭐⭐⭐ (4.9 · +1.200 valoraciones)",
      distance: "7,5 km (ida y vuelta)",
      elevation: "+650 m",
      difficulty: "Moderada",
      searchUrl: "https://es.wikiloc.com/wikiloc/find.do?q=Espigantosa+Refugio+Angel+Orus+Posets"
    },
    routeSummary: {
      depart: "08:00 · Coche Aínsa ➔ Valle de Benasque (Eriste, 1h 15m)",
      startHike: "09:30 · Cascada de Espigantosa ➔ Refugio Ángel Orús",
      endHike: "14:00 · Vuelta al coche y salida a Valencia",
      sleep: "Llegada a Valencia ~19:30"
    },
    timeline: [
      { time: "08:00", activity: "Coche hacia el Valle de Benasque pasando por Campo y el Congosto de Ventamillo.", icon: "car" },
      { time: "09:15", activity: "Llegada a Eriste y subida a la Cascada de Espigantosa (1.550 m).", icon: "car" },
      { time: "09:30", activity: "Inicio ruta a pie: Sendero GR-11.2 por el barranco de Grist.", icon: "hike" },
      { time: "10:45", activity: "Cruce del puente de Presentet bajo las imponentes crestas del Posets (3.375 m).", icon: "hike" },
      { time: "11:45", activity: "Llegada al emblemático Refugio Ángel Orús (2.148 m) y visita al ibón.", icon: "camp" },
      { time: "12:30", activity: "Picnic montañero en el refugio y descenso a los coches.", icon: "picnic" },
      { time: "14:00", activity: "Llegada a los vehículos en Espigantosa.", icon: "car" },
      { time: "14:30", activity: "Viaje de retorno directo hacia Valencia por Graus, Barbastro, Zaragoza/Teruel.", icon: "car" },
      { time: "19:30", activity: "Llegada a Valencia y fin de la gran travesía pirenaica.", icon: "car" }
    ],
    poi: {
      id: "benasque-orus",
      name: "Benasque / Ángel Orús",
      shortName: "5 · Benasque (Orús)",
      subtitle: "Valle de Benasque · Macizo del Posets (3.375 m)",
      badge: 5,
      color: "#f59e0b",
      coords: REFUGIO_ORUS,
      duration: "3.5-4 h",
      distance: "7,5 km",
      elevation: "+650 m",
      description: "Ruta oficial de Wikiloc hacia el Refugio Ángel Orús (2.148 m). Etapa reina bajo el Posets (3.375 m) antes de iniciar el viaje de vuelta directo a Valencia.",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop&q=80"
    },
    // Conexión en coche: Añisclo/Escalona -> Aínsa -> Campo -> Ventamillo -> Benasque y retorno a Valencia
    drivePath: [
      ANISCLO_SAN_URBEZ,
      [42.5450, 0.0900],  // Desfiladero de las Cambras
      [42.5020, 0.1480],  // Escalona
      [42.4170, 0.1380],  // Aínsa
      [42.4080, 0.3550],  // Foradada de Toscar
      [42.4080, 0.3950],  // Campo
      [42.4850, 0.4480],  // Congosto de Ventamillo
      [42.5120, 0.4900],  // Castejón de Sos
      [42.5880, 0.4900],  // Eriste
      BENASQUE_ESPIGANTOSA,
      [42.5880, 0.4900],  // Regreso: Eriste
      [42.5120, 0.4900],  // Castejón de Sos
      [42.4080, 0.3950],  // Campo
      [42.1900, 0.3370],  // Graus
      [42.0080, 0.1260],  // Barbastro
      [42.1400, -0.4080], // Huesca
      [41.6488, -0.8891], // Zaragoza
      [40.3456, -1.1072], // Teruel
      VALENCIA
    ],
    // Ruta a pie: Espigantosa -> Puente Presentet -> Refugio Ángel Orús -> Vuelta
    routePath: [
      BENASQUE_ESPIGANTOSA,
      [42.6130, 0.4490],
      [42.6190, 0.4510], // Puente de Presentet
      [42.6240, 0.4550],
      REFUGIO_ORUS,        // Refugio Ángel Orús (2.148 m)
      [42.6240, 0.4550],
      [42.6190, 0.4510],
      BENASQUE_ESPIGANTOSA
    ]
  }
];

// Pins de los REFUGIOS: SOLO ICONO 🛖 (SIN TEXTO EN EL MAPA PARA EVITAR SATURACIÓN)
export const REFUGIO_PINS = [
  { id: "dia-1", name: "Refugio del Verde", coords: REFUGIO_VERDE, alt: "2.050 m", color: "#10b981" },
  { id: "dia-2", name: "Refugio de Bujaruelo", coords: BUJARUELO_PARKING, alt: "1.338 m", color: "#14b8a6" },
  { id: "dia-3", name: "Refugio de Góriz", coords: REFUGIO_GORIZ, alt: "2.200 m", color: "#3b82f6" },
  { id: "dia-4", name: "Refugio libre Fuen Blanca", coords: FUEN_BLANCA_REFUGIO, alt: "1.700 m", color: "#a855f7" },
  { id: "dia-5", name: "Refugio Ángel Orús", coords: REFUGIO_ORUS, alt: "2.148 m", color: "#f59e0b" }
];

// Pins de las RUTAS (CON NÚMERO Y NOMBRE COMPACTO)
export const MAP_PINS = [
  { id: "dia-1", badge: "1", name: "Panticosa (Sabocos)", color: "#10b981", coords: PANTICOSA_PARKING },
  { id: "dia-2", badge: "2", name: "Bujaruelo (Otal)", color: "#14b8a6", coords: BUJARUELO_PARKING },
  { id: "dia-3", badge: "3", name: "Ordesa (Góriz)", color: "#3b82f6", coords: ORDESA_PRADERA },
  { id: "dia-4", badge: "4", name: "Cañón de Añisclo", color: "#a855f7", coords: ANISCLO_SAN_URBEZ },
  { id: "dia-5", badge: "5", name: "Benasque (Orús)", color: "#f59e0b", coords: BENASQUE_ESPIGANTOSA }
];

export const DAYS = TRIP_DAYS;
