export const BASE_URL = process.env.BASE_URL;
export const domainSite = process.env.DOMAIN;
export const BASE_URL_IMG = "";
export const BASE_URL_INSTA =
  "https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type,thumbnail_url,username,permalink&access_token=";
export const KEY_INSTA =
  "IGQVJWaWpBa0h3UEUzTzZAWNFVPTVN6ZAGIxZAXZAON1U3OEZA1U3prc0RrSlhRTldwLVV5NjVXMEppZAmF5bUNBLUViSV9UTGNyRHQwVVltYXA0OFF2bmgwU09MOW1BX29ENFoteWFMV19JVUpBN21MdG90bQZDZD";

export const ciudades = [
  { id: 0, nombre: "Guayaquil" },
  { id: 1, nombre: "Quito" },
  { id: 2, nombre: "Ambato" },
  { id: 3, nombre: "Cuenca" },
];

export const horarios = [
  { id: 0, horario: "Mañana" },
  { id: 1, horario: "Tarde" },
];

export const posventa_versiones = [
  {
    modelo: "GRAND VITARA 1.6 TM 4X4",
    imagen: "/posventa/gVitaraTM.png",
  },
  {
    modelo: "GRAND VITARA 2.0 TM 4X4",
    imagen: "/posventa/gVitaraTM.png",
  },
  {
    modelo: "GRAND VITARA 2.0 TM 4X2",
    imagen: "/posventa/gVitaraTM.png",
  },
  {
    modelo: "GRAND VITARA SZ 2.0 TM 4X2",
    imagen: "/posventa/gVitaraSZ.png",
  },
  {
    modelo: "GRAND VITARA SZ 2.0 TM 4X4",
    imagen: "/posventa/gVitaraSZ.png",
  },
  {
    modelo: "GRAND VITARA SZ 2.4 TA 4X2",
    imagen: "/posventa/gVitaraSZ.png",
  },
  {
    modelo: "GRAND VITARA SZ 2.4 TA 4X4",
    imagen: "/posventa/gVitaraSZ.png",
  },
  {
    modelo: "JIMNY 1.5 TA 4X4",
    imagen: "/posventa/jimmy.png",
  },
  {
    modelo: "JIMNY 1.5 TM 4X4",
    imagen: "/posventa/jimmy.png",
  },
  {
    modelo: "NEW VITARA 1.6 4X2 TM",
    imagen: "/posventa/vitara.png",
  },
  {
    modelo: "NEW VITARA 1.6 4X4 TM",
    imagen: "/posventa/vitara.png",
  },
  {
    modelo: "SCROSS SX4",
    imagen: "/posventa/s_cross.png",
  },
  {
    modelo: "VITARA 1.6 TM 4X4",
    imagen: "/posventa/vitaraTM.png",
  },
];
export const agencias = [
  {
    id: 0,
    nombre: "SZK Store Automotores Carlos Larrea",
    direccion: "Av Atahualpa y Av Víctor Hugo",
    detalle: "Showroom y taller",
    horario: "Lunes a Sábado 9:00 a 18:00 <br/> Domingo Cerrado",
    address: { lat: -1.2630611, lng: -78.6454006 - 78.6454006 },
    ciudad: "Ambato",
    selected: false,
  },
  {
    id: 1,
    nombre: "SZK Store Alton Motors",
    direccion: "Av. España N. 321 y Calle Núñez de Bonilla N. 316",
    detalle: "Showroom y taller",
    horario: "Lunes a Sábado 9:00 a 18:00 <br/> Domingo Cerrado",
    address: { lat: -2.8935022, lng: -78.9954829 },
    ciudad: "Cuenca",
    selected: false,
  },
  {
    id: 2,
    nombre: "SZK Store Alton Motors",
    direccion:
      "Av. De las Américas, manzana 160, solar 9, ciudadela La Garzota",
    detalle: "Showroom y taller",
    horario: "Lunes a Sábado 9:00 a 18:00 <br/> Domingo Cerrado",
    address: { lat: -2.17134475789, lng: -79.8896292371 },
    ciudad: "Guayaquil",
    selected: false,
  },
  {
    id: 3,
    nombre: "SZK Store Guayaquil",
    direccion: "Av. Juan Tanca Marengo - Diagonal al Mall del Sol",
    detalle: "Showroom y taller",
    horario: "Lunes a Sábado 9:00 a 18:00 <br/> Domingo Cerrado",
    address: { lat: -2.156935, lng: -79.893767 },
    ciudad: "Guayaquil",
    selected: false,
  },
  {
    id: 4,
    nombre: "SZK Store Cumbayá",
    direccion: "Av. Oswaldo Guayazamín y Escalón de Lumbisi",
    detalle: "Showroom y taller",
    horario: "Lunes a Sábado 9:00 a 18:00 <br/> Domingo Cerrado",
    address: { lat: -0.209524, lng: -78.437032 },
    ciudad: "Quito",
    selected: false,
  },
  {
    id: 5,
    nombre: "SZK Store Labrador",
    direccion: "Av. El Inca y Av. Amazonas Esq.",
    detalle: "Showroom y taller",
    horario: "Lunes a Sábado 9:00 a 18:00 <br/> Domingo Cerrado",
    address: { lat: -0.1586806, lng: -78.4837049 },
    ciudad: "Quito",
    selected: false,
  },
  {
    id: 6,
    nombre: "SZK Store San Rafael",
    direccion: "Av. General Rumiñahui e Isla Pinzón",
    detalle: "Showroom y taller",
    horario: "Lunes a Sábado 9:00 a 18:00 <br/> Domingo Cerrado",
    address: { lat: -0.3039491, lng: -78.4542021 },
    ciudad: "Quito",
    selected: false,
  },
  {
    id: 7,
    nombre: "SZK Store Sur",
    direccion: "Av. Maldonado y Pueblo Viejo Esq.",
    detalle: "Showroom y taller",
    horario: "Lunes a Sábado 9:00 a 18:00 <br/> Domingo Cerrado",
    address: { lat: -0.2728668, lng: -78.5292061 },
    ciudad: "Quito",
    selected: false,
  },
];

export const talleres = [
  { id: 0, nombre: "Guayaquil" },
  { id: 1, nombre: "Quito" },
  { id: 2, nombre: "Guayaquil" },
];
export const anios = [
  {
    anio: "2010",
  },
  {
    anio: "2011",
  },
  {
    anio: "2012",
  },
  {
    anio: "2013",
  },
  {
    anio: "2014",
  },
  {
    anio: "2015",
  },
  {
    anio: "2016",
  },
  {
    anio: "2017",
  },
  {
    anio: "2018",
  },
  {
    anio: "2019",
  },
  {
    anio: "2020",
  },
  {
    anio: "2021",
  },
];
export const parts = [
  {
    title: "Kit Reparación de Embrague Suzuki",
    image: "/images/posventa/parte2.png",
    description:
      "Incluye: plato, disco, rodamiento de embrague, rodamiento de apoyo del volante y pernos de sujeción del plato.",
  },
  {
    title: "Partes Genuinas de Desgaste",
    image: "/images/posventa/parte3.png",
    description:
      "Repuestos Genuinos Suzuki de desgaste cuentan con la aprobación de estándares de: rendimiento, calidad, durabilidad, seguridad y confort.",
  },
  {
    title: "Partes Genuinas de Mantenimiento",
    image: "/images/posventa/parte4.png",
    description:
      "Suzuki recomienda el uso de partes genuinas de mantenimiento para obtener condiciones óptimas de funcionamiento y maximizar la vida útil del vehículo.",
  },
  {
    title: "Kit de Servicio Suzuki",
    image: "/images/posventa/parte5.png",
    description:
      "Contiene únicamente Repuestos Genuinos, los cuales permiten un reemplazo completo de partes y de esta manera un óptimo desempeño del vehículo generando beneficios a los propietarios de vehículos Suzuki.",
  },
];
export const modelos = [
  {
    id: 0,
    tipo: "SUV",
    modelo: "Vitara",
    precio: 25490,
    orden: 2,
    slug: "vitara",
    image: "/gallery/vitara.png",
    imageNav: "/navbar/vitara.png",
    image2: "/navbar/vitara-1.png",
    background: "/navbar/GALERIA-3.png",
    logo: "/modelos/logo_vitara.png",
    descripcion: "4X4 por naturaleza. El SUV de nacimiento con rendimiento dentro y fuera de ruta, diseño audaz y tecnología avanzada.",
    versions: [
      {
        nombre: "GL+",
        colores: [
          {
            nombre: "Blanco",
            codigo: "#e8e8e8",
            codigo2: "#e8e8e8",
            imagen: "/images/modelos/vitara/blanco.jpg",
          },
          {
            nombre: "Blanco",
            codigo: "#000000",
            codigo2: "#e8e8e8",
            imagen: "/images/modelos/vitara/blanco.jpg",
          },
          {
            nombre: "Celeste",
            codigo: "#2a6e7f",
            codigo2: "#2a6e7f",
            imagen: "/images/modelos/vitara/celeste.jpg",
          },
          {
            nombre: "Celeste",
            codigo: "#e8e8e8",
            codigo2: "#2a6e7f",
            imagen: "/images/modelos/vitara/celeste_blanco.jpg",
          },
          {
            nombre: "Celeste",
            codigo: "#2d2d2d",
            codigo2: "#2a6e7f",
            imagen: "/images/modelos/vitara/celeste_negro.jpg",
          },
          {
            nombre: "Negro",
            codigo: "#2d2d2d",
            codigo2: "#2d2d2d",
            imagen: "/images/modelos/vitara/negro.jpg",
          },
          {
            nombre: "Negro",
            codigo: "#e8e8e8",
            codigo2: "#2d2d2d",
            imagen: "/images/modelos/vitara/negro.jpg",
          },
          {
            nombre: "Plateado",
            codigo: "#989898",
            codigo2: "#989898",
            imagen: "/images/modelos/vitara/plateado.jpg",
          },
          {
            nombre: "Plomo",
            codigo: "#757576",
            codigo2: "#757576",
            imagen: "/images/modelos/vitara/plomo.jpg",
          },
          {
            nombre: "Rojo",
            codigo: "#a32325",
            codigo2: "#a32325",
            imagen: "/images/modelos/vitara/rojo.jpg",
          },
        ],
        precio: 25490.0,
        images: [
          "/images/modelos/siluetavitara 1.png",
          "/images/modelos/blanco.jpg",
        ],
        paquetes: [
          // {
          //   nombre: "PLUS",
          //   bold: false,
          //   precio: 7000.0,
          //   detalle: [
          //     "Neblineros",
          //     "Láminas de seguridad",
          //     "WeatherTech Cargo Universal",
          //   ],
          // },
          {
            bold: true,
            nombre: "PERSONALIZADO",
            detalle: ["Personalízalo con tu asesor"],
          },
          {
            bold: true,
            nombre: "Sin accesorios",
            detalle: ["No deseo paquete de accesorios"],
          },
        ],
      },
      {
        nombre: "GLX",
        colores: [
          {
            nombre: "Blanco",
            codigo: "#e8e8e8",
            codigo2: "#e8e8e8",
            imagen: "/images/modelos/vitara/blanco.jpg",
          },
          {
            nombre: "Celeste",
            codigo: "#2a6e7f",
            codigo2: "#2a6e7f",
            imagen: "/images/modelos/vitara/celeste.jpg",
          },
          {
            nombre: "Negro",
            codigo: "#2d2d2d",
            codigo2: "#2d2d2d",
            imagen: "/images/modelos/vitara/negro.jpg",
          },
          {
            nombre: "Plateado",
            codigo: "#989898",
            codigo2: "#989898",
            imagen: "/images/modelos/vitara/plateado.jpg",
          },
          {
            nombre: "Plomo",
            codigo: "#757576",
            codigo2: "#757576",
            imagen: "/images/modelos/vitara/plomo.jpg",
          },
          {
            nombre: "Rojo",
            codigo: "#a32325",
            codigo2: "#a32325",
            imagen: "/images/modelos/vitara/rojo.jpg",
          },
        ],
        precio: 27990.0,
        images: [
          "/images/modelos/siluetavitara 1.png",
          "/images/modelos/rojo.jpg",
        ],
        paquetes: [
          // {
          //   nombre: "PLUS",
          //   bold: false,
          //   precio: 7000.0,
          //   detalle: [
          //     "Láminas de seguridad",
          //     "Malla de carga",
          //     "WeatherTech Cargo Universal",
          //   ],
          // },
          {
            bold: true,
            nombre: "PERSONALIZADO",
            detalle: ["Personalízalo con tu asesor"],
          },
          {
            bold: true,
            nombre: "Sin accesorios",
            detalle: ["No deseo paquete de accesorios"],
          },
        ],
      },
    ],
    caracteristicas: [
      { icon: "disenoVitara.svg", descripcion: "Diseño audaz" },
      { icon: "Feature1-allgripproVit.svg", descripcion: "" },
      { icon: "audio.svg", descripcion: "Apple Car Play y Android Auto" },
      { icon: "botonEncendido.svg", descripcion: "Botón de encendido" },
    ],
  },
  {
    id: 1,
    tipo: "Crossover",
    modelo: "SX4 S-CROSS",
    precio: 22990,
    orden: 4,
    slug: "scross",
    image: "/gallery/sx4 s-cross.png",
    imageNav: "/navbar/sx4.png",
    image2: "/navbar/sx4-1.png",
    background: "/navbar/GALERIA-1.png",
    logo: "/modelos/logo_scross.png",
    descripcion: "¿Siguiente destino? El verdadero Crossover que se aventura a cualquier viaje.",
    caracteristicas: [
      { icon: "disenoScross.svg", descripcion: "Diseño dinámico" },
      { icon: "audio.svg", descripcion: "Apple Car Play y Android Auto" },
      { icon: "espacio.svg", descripcion: "Espacio / Confort" },
      {
        icon: "freno.png",
        descripcion: "Frenos de disco a las 4 ruedas",
      },
    ],
    versions: [
      {
        nombre: "TM",
        colores: [
          {
            nombre: "Blanco",
            codigo: "#e8e8e8",
            codigo2: "#e8e8e8",
            imagen: "/images/modelos/scrosscotizacion.png",
          },
          {
            nombre: "Azul",
            codigo: "#1f2e43",
            codigo2: "#1f2e43",
            imagen: "/images/modelos/scrosscotizacion.png",
          },
          {
            nombre: "Negro",
            codigo: "#2d2d2d",
            codigo2: "#2d2d2d",
            imagen: "/images/modelos/scrosscotizacion.png",
          },
          {
            nombre: "Plateado",
            codigo: "#989898",
            codigo2: "#989898",
            imagen: "/images/modelos/scrosscotizacion.png",
          },
          {
            nombre: "Plomo",
            codigo: "#757576",
            codigo2: "#757576",
            imagen: "/images/modelos/scrosscotizacion.png",
          },
          {
            nombre: "Vino",
            codigo: "#a32325",
            codigo2: "#a32325",
            imagen: "/images/modelos/scrosscotizacion.png",
          },
        ],
        precio: 22990,
        images: [
          "/images/modelos/Rectangle 83.png",
          "/images/modelos/scrosscotizacion.png",
          "/images/modelos/video.png",
          "/images/modelos/Rectangle 92.png",
        ],
        paquetes: [
          // {
          //   nombre: "PLUS",
          //   bold: false,
          //   precio: 0,
          //   detalle: ["Láminas de seguridad", "Malla de carga WeatherTech"],
          // },
          {
            bold: true,
            nombre: "PERSONALIZADO",
            detalle: ["Personalízalo con tu asesor"],
          },
          {
            bold: true,
            nombre: "Sin accesorios",
            detalle: ["No deseo paquete de accesorios"],
          },
        ],
      },
    ],
  },
];
export const modelsDetails = [
  {
    slug: "vitara",
    video:
      "/videos/vitara.mp4",

    test: {
      fondo: "/images/modelos/fondo_test.png",
      img: "/images/modelos/Rectangle 82V.png",
    },
    galeria: [
      {
        price: 16000,
        color: { nombre: "Blanco", codigo: "#e8e8e8" },
        images: [
          "/images/modelos/PngItem_521.png",
          "/images/modelos/Rectangle 82.png",
          "/images/modelos/video.png",
          "/images/modelos/Rectangle 92.png",
        ],
      },
      {
        price: 18000,
        color: { nombre: "Celeste", codigo: "#2a6e7f" },
        images: [
          "/images/modelos/Rectangle 83.png",
          "/images/modelos/Rectangle 82.png",
          "/images/modelos/video.png",
          "/images/modelos/Rectangle 92.png",
        ],
      },
      {
        price: 18000,
        color: { nombre: "Negro", codigo: "#000000" },
        images: [
          "/images/modelos/Rectangle 83.png",
          "/images/modelos/Rectangle 82.png",
          "/images/modelos/video.png",
          "/images/modelos/Rectangle 92.png",
        ],
      },
    ],
    personalidad: {
      titulo: "Time to play",
      texto:
        "<p>Proyectos, metas y grandes objetivos una vida llena de responsabilidades. </p><p>Más allá de los compromisos y horarios a cumplir, una fuerza más profunda vive dentro de todos nosotros: un espíritu joven.<br/>Listo para salir y desafiar tu rutina con un desempeño dentro y fuera de ruta, diseño audaz y tecnología de vanguardia. </p><p>Descubre el nuevo SUZUKI Vitara.</p>",
    },
    exterior: {
      vehiculo: {
        titulo: `Más fuerte. <br/>Más atrevido.`,
        subtitulo: `Diseñado para <br/> la aventura.`,
        texto: `Un verdadero SUV de nacimiento, <b>cargado de fortaleza y energía</b>. Caracterizado por el estilo audaz y atrevido del Vitara, dispuesto a descubrir nuevos lugares dentro y fuera de ruta. Con un diseño icónico sin miedo a captar miradas.`,
        imagen: "/images/modelos/006 1.png",
        fondo: "/images/modelos/bg.png",
      },
      faros: {
        titulo: "Faros LED",
        subtitulo:
          "Faros LED de alta intensidad se utilizan para conservar energía al usar luces bajas.",
        texto: "El color azul del protector crea una impresión dinámica",
        imagen: "/images/modelos/faros.png",
      },
      luces: {
        titulo: "Luces LED para el día y neblineros",
        texto: `El diseño único de las luces para el día “DRL” incluye <b>faros LED</b> en un arreglo vertical. También se provee de neblineros que son esenciales para una <b>buena visibilidad</b> en condiciones climáticas adversas.`,
        imagen: "/images/modelos/210 1.png",
      },
      insignia: {
        titulo: "Insignia de los SUV Suzuki",
        texto: `La atrevida parrilla de 5 elementos, <b>fuerte parachoques</b> delantero terminado con estilizados <b>asientos cromados</b> proveen al Vitara de una apariencia elegante y moderna.`,
        imagen: "/images/modelos/Exterior SUV 1.png",
      },
      ruedas: {
        titulo: "Nuevo diseño de aros",
        subtitulo: `Aros de <br /> aleación <br /> pintados <br />`,
        texto: `17" <br /> (GLX)`,
        imagen: "/images/modelos/RUEDA_2 2.png",
      },
      aros: {
        subtitulo: `Aros de <br /> aleación <br /> pintados <br />`,
        texto: `16"`,
        imagen: "/images/modelos/RUEDA 2.png",
      },
    },
    interior: {
      index: {
        titulo: `Siéntete <br />
        como en casa.`,
        subtitulo: "En un interior refinado.",
        texto: `Características avanzadas y <b>detalles de calidad</b> ofrecen confort y satisfacción al conducir, dentro y fuera de ruta.`,
        imagen: "/images/modelos/Interior 1.png",
      },
      instrumentos: {
        titulo: `Nuevo panel de <br />
        intrumentos`,
        //subtitulo: "Con material suave acolchado",
        texto: `Material interno suave acolchado para el panel superior de instrumentos asegura una <b>sensación excepcional</b> al espacio de cabina.`,
        imagen: "/images/modelos/114.jpg",
      },
      lcd: {
        titulo:
          "Nueva pantalla de LCD a color de información múltiple de 4.2 pulgadas",
        subtitulo: `Una avanzada pantalla LCD a color de información múltiple de 4.2 pulgadas
        ocupa el centro del panel de indicadores para informar al conductor con datos precisos y confiables acerca del comportamiento
        y operación del vehículo. La pantalla dinámica visualmente ilustra una amplia gama de funciones como son los modos de conducción
        del ALLGRIP, fuerzas G, desempeño del motor y torque, y uso del freno y acelerador, entre otras cosas.`,
        texto:
          "Con una amplia gama de opciones para escoger, tu experiencia de conducción nunca estará corta de diversión.",
        imagen: "/images/modelos/performance-4.png",
      },
      asientos: {
        titulo: "Nuevos asientos con patrones geométricos",
        texto: `Elegantes asientos delanteros y posteriores aseguran máximo <b>soporte y comodidad</b> tanto para el conductor como para los pasajeros.`,
        imagen: "/images/modelos/Nuevo_asiento_patrones_geometricos.png",
      },
      reloj: {
        titulo: "Nuevo diseño del reloj",
        subtitulo: "Integrado en el tablero de instrumentos",
        texto:
          "El reloj suma un toque moderno y sofisticado al espacio del conductor.",
        imagen: "/images/modelos/nuevo_diseño_reloj.png",
      },
      maletero: {
        titulo: "Espacio de maletero generoso",
        subtitulo: "",
        texto: `Con una apertura amplia del maletero, una altura baja de carga e impresionante capacidad de 710 litros* cuando ambos asientos posteriores están recogidos, el Vitara facilita la carga de cualquier cosa que se pueda necesitar.
        <p style="font-size: 14px; line-height: 140%;">
          * Medido sin el estante posterior.
        </p>`,
        imagen: "/images/modelos/135 1.png",
      },
      aire: {
        titulo: `Aire acondicionado <br />
        automático (GLX)`,
        subtitulo: "",
        texto: "",
        imagen: "/images/modelos/aire2.jpg",
      },
      reposabrazos: {
        titulo: "Reposabrazos central frontal",
        subtitulo:
          "El reposabrazos central frontal se puede deslizar a la posición óptima y también incorpora un compartimento para almacenamiento.",
        texto: "",
        imagen: "/images/modelos/Reposabrazos_central_frontal.png",
      },
    },
    security: {
      inicio: {
        titulo: "Seguridad",
        subtitulo: "Dentro y fuera de ruta.",
        texto:
          "Equipado con <strong>tecnologías de vanguardia</strong>, el conductor y los pasajeros pueden estar seguros de estar asistidos, <strong>protegidos</strong> y entretenidos en todo momento.",
        imagen: "/images/modelos/seguridad-1.webp",
      },
      carroceria: {
        titulo: "Carrocería TECT",
        texto:
          "El diseño de la carrocería del Vitara se centra en el concepto TECT de SUZUKI, resultando en una estructura que absorbe eficientemente y dispersa la energía en el evento de una colisión.",
        imagen: "/images/modelos/seguridad-2.png",
      },
      airbag: {
        titulo: "6 Airbags",
        texto:
          "Incluyendo como estándar bolsas de aire SRS para el conductor y el pasajero de enfrente, bolsas de aire SRS laterales que reducen el impacto al pecho en colisiones laterales y bolsas de aire SRS de cortina que reducen impacto a la cabeza.",
        subtitulo:
          "El desempeño al conducir está complementado por las funciones de seguridad protectiva",
        imagen: "/images/modelos/seguridad-3.png",
      },
      esp: {
        titulo: "ESP®",
        texto:
          "En el caso de que las ruedas pierdan tracción, el Programa de Estabilidad Electrónica ESP® automáticamente ajusta el motor y los frenos para ayudar al conductor a mantener el control.",
        imagen: "/images/modelos/seguridad-4.png",
      },
      sensores: {
        titulo: "Sensores de parqueo <br /> frontales y posteriores (GLX)",
        texto:
          "Sensores ultrasónicos en los parachoques detectan obstáculos y emiten advertencias audiovisuales que el conductor puede observar en la pantalla de información múltiple y escuchar una alerta de sonido de advertencia.",
        imagen: "/images/modelos/seguridad-5.png",
      },
    },
    performance: {
      inicio: {
        titulo: "Desempeño en todos los terrenos",
        texto:
          "Un compañero listo para cualquier aventura. Descubre un desempeño multi-propósito que desafía las superficies y condiciones climáticas más retadoras. Impulsado por motores de torque y eficiencia superior, equipado con un sistema único de tracción de cuatro ruedas ALLGRIP. Disfruta de un verdadero SUV con genes auténticos SUZUKI.",
        imagen: "performance-1.png",
      },
      motor: {
        titulo: "Motor de 1.6 litros a gasolina",
        texto:
          "Con un desempeño de alto torque a través de todas sus marchas desde la más baja hasta la más alta, este motor se conduce de manera poderosa tanto en los caminos de ciudad como en carreteras sinuosas. Adicionalmente, la reducción de fricción y peso del motor y sus partes relacionadas aseguran una excelente eficiencia de combustible.",
        imagen: "performance-2.png",
      },
      allgrip: {
        titulo: "All Grip ",
        subtitulo: "Modo de conducción seleccionable.",
        texto: `"Un vehículo que puede recorrer carreteras en mal estado e ir a
        lugares a los que los coches no podían ir en el pasado". Con esta
        filosofía, nuestro primer modelo de tracción en las cuatro ruedas
        se desarrolló en 1970. Este fue el comienzo de ALLGRIP, la
        reconocida tecnología de tracción en las cuatro ruedas de SUZUKI.
        <br />
        Nuestra tecnología 4WD se ha perfeccionado para brindar a los
        conductores aún más emoción, placer y tranquilidad. Con ALLGRIP en tu Vitara, puedes ampliar tu gama de actividades y mejorar tus diversos estilos de vida.`,
        imagen: "performance-3.png",
      },
      esp: {
        titulo: "ESP®",
        texto:
          "En el caso de que las ruedas pierdan tracción, el Programa de Estabilidad Electrónica ESP® automáticamente ajusta el motor y los frenos para ayudar al conductor a mantener el control.",
        imagen: "/images/modelos/seguridad-4.png",
      },
      sensores: {
        titulo: "Seguridad contra impactos y protección peatonal",
        texto:
          "El diseño de la carrocería del S-CROSS se centra en el concepto TECT de SUZUKI, resultando en una estructura que absorbe eficientemente y dispersa la energía en el evento de una colisión.",
        imagen: "/images/modelos/seguridad-5.png",
      },
    },
    versions: [
      {
        nombre: "GLX",
        image: "/images/modelos/Rectangle 82.png",
        features: [
          {
            name: "Dirección asistida",
            image: "/images/modelos/check.png",
          },
          {
            name: "Control de arranque en pendiente",
            image: "/images/modelos/check.png",
          },
          {
            name: "Control de velocidad crucero",
            image: "/images/modelos/check.png",
          },
          {
            name: "Asistente de frenado frontal",
            image: "/images/modelos/check.png",
          },
          {
            name: "Sensores de parqueo posteriores",
            image: "/images/modelos/check.png",
          },
          {
            name: "Botón de encendido",
            image: "/images/modelos/check.png",
          },
          {
            name: "Radio pantalla táctil 9” Apple Carplay & Android Auto",
            image: "/images/modelos/check.png",
          },
          {
            name: "Cámara de reversa",
            image: "/images/modelos/check.png",
          },
          {
            name: "Vidrios eléctricos delanteros y posteriores",
            image: "/images/modelos/check.png",
          },
          {
            name: "AC Automático",
            image: "/images/modelos/check.png",
          },
          {
            name: "Airbags frontales  ",
            image: "/images/modelos/check.png",
          },
        ],
      },
      {
        nombre: "GL+",
        image: "/images/modelos/Rectangle 83.png",
        features: [
          {
            name: "Dirección asistida",
            image: "/images/modelos/check.png",
          },
          {
            name: "Control de arranque en pendiente",
            image: "/images/modelos/check.png",
          },
          {
            name: "Control de velocidad crucero",
            image: "/images/modelos/check.png",
          },
          {
            name: "Asistente de frenado frontal",
            image: "/images/modelos/check.png",
          },
          {
            name: "Sensores de parqueo posteriores",
            image: "/images/modelos/check.png",
          },
          {
            name: "Botón de encendido",
            image: "/images/modelos/check.png",
          },
          {
            name: "Radio pantalla táctil 9” Apple Carplay & Android Auto",
            image: "/images/modelos/check.png",
          },
          {
            name: "Cámara de reversa",
            image: "/images/modelos/check.png",
          },
          {
            name: "Vidrios eléctricos delanteros y posteriores",
            image: "/images/modelos/check.png",
          },
          {
            name: "AC Automático",
            image: "/images/modelos/check.png",
          },
          {
            name: "Airbags frontales  ",
            image: "/images/modelos/check.png",
          },
          {
            name: "Airbags laterales y cortina",
            image: "/images/modelos/plus.png",
          },
          {
            name: "Luces antineblina",
            image: "/images/modelos/plus.png",
          },
          {
            name: "Faros delanteros tecnología LED",
            image: "/images/modelos/plus.png",
          },
          {
            name: "6 parlantes",
            image: "/images/modelos/plus.png",
          },
          {
            name: "Sensores de parqueo frontales",
            image: "/images/modelos/plus.png",
          },
          {
            name: "Sensor de lluvia",
            image: "/images/modelos/plus.png",
          },
          {
            name: "Asiento pasajero regulación altura",
            image: "/images/modelos/plus.png",
          },
          {
            name: "Asientos de cuero sintético",
            image: "/images/modelos/plus.png",
          },
          {
            name: "Retrovisor interno fotocrómatico",
            image: "/images/modelos/plus.png",
          },
        ],
      },
    ],
    conectivity: {
      index: [
        {
          title: "Sistema de infotainment",
          subtitle: "Con pantalla táctil de 9 pulgadas.",
          description:
            "Conectividad de vanguardia y sistema de audio a través de una pantalla táctil, interfaz intuitiva y funciones multimedia que incluyen radio, manos libres, sistema de navegación, cámara de retro e integración con Smartphones.",
          image: "/images/modelos/img-5.webp",
        },
      ],
      features: [
        {
          title: "Conexión Bluetooth, USBC y USBA",
          description:
            "Conecta tu teléfono inteligente de manera inalámbrica vía Bluetooth, conexión de cable USBC o USBA de una manera fácil y ágil.",
          image: "/images/modelos/Group 5.png",
        },
        {
          title: "Android® Auto",
          description:
            " Un copiloto inteligente que te ayudará a mantenerte conectado, concentrado y entretenido con el asistente de Google. Google Maps, Google Search y otros servicios de Google al alcance de tus dedos, sin distracciones.",
          image: "/images/modelos/Group 6.png",
        },
        {
          title: "Apple CarPlay",
          description:
            "La pantalla de 7 pulgadas y el menú de navegación intuitivo hacen que la operación sea particularmente fácil y segura.",
          image: "/images/modelos/Group 7.png",
        },
      ],
    },
  },
  {
    slug: "scross",
    video: "/videos/scross.mp4",
    test: {
      fondo: "/images/modelos/test-sc.png",
      img: "/images/modelos/sc-img.png",
    },
    galeria: [
      {
        price: 18000,
        color: { nombre: "Blanco", codigo: "#e8e8e8" },
        images: [
          "/images/modelos/Rectangle 83.png",
          "/images/modelos/Rectangle 82.png",
          "/images/modelos/video.png",
          "/images/modelos/Rectangle 92.png",
        ],
      },
      {
        price: 18000,
        color: { nombre: "Celeste", codigo: "#2a6e7f" },
        images: [
          "/images/modelos/Rectangle 83.png",
          "/images/modelos/Rectangle 82.png",
          "/images/modelos/video.png",
          "/images/modelos/Rectangle 92.png",
        ],
      },
      {
        price: 18000,
        color: { nombre: "Negro", codigo: "#000000" },
        images: [
          "/images/modelos/Rectangle 83.png",
          "/images/modelos/Rectangle 82.png",
          "/images/modelos/video.png",
          "/images/modelos/Rectangle 92.png",
        ],
      },
    ],
    personalidad: {
      titulo: "DEFINE YOUR DESTINATION",
      texto:
        "<p>Libera tus impulsos – llega a cualquier destino en cualquier momento con un verdadero viajero. El nuevo SX4 S-CROSS está listo para aventurarse a cualquier plan sobre cuatro ruedas. </p><p>Ofreciendo una experiencia placentera todo terreno, un desempeño de nueva generación y un diseño novedoso, transmite el poder de un verdadero crossover. Hacia donde tu imaginación te lleve, la elección del SX4 S-CROSS será siempre perfecta. </p><p>Define tu siguiente destino.</p>",
    },
    exterior: {
      vehiculo: {
        titulo: `Frente <br/> dinámico.   `,
        subtitulo: "",
        texto: `Observa dentro de su vigoroso rostro masculino, El frente atrevido es la particularidad característica de un diseño novedoso con un carácter de SUV robusto. La nueva e impresionante rejilla delantera levanta la punta del capó - irradiando vigor dinámico junto con nuevas bandas protectoras y faros LED que realzan las líneas bajas del perfil. `,
        fondo: "/images/modelos/exteriors-1.webp",
        imagen: "",
      },
      faros: {
        titulo: "Barras portaequipajes integradas",
        texto: "",
        subtitulo:
          "Las barras portaequipajes juntan una apariencia nítida con la fluidez aerodinámica",
        imagen: "/images/modelos/exteriors-2.webp",
      },
      luces: {
        titulo: "Aros y Neumáticos",
        subtitulo: "",
        texto: `Los nuevos aros atléticamente estilizados y neumáticos más grandes realzan la apariencia dimensional del SX4 S-Cross. <br/> Con la forma para optimizar el flujo de aire y neumáticos de baja resistencia de rodaje se promueve el ahorro de combustible.`,
        imagen: "/images/modelos/exteriors-3.png",
      },
      ruedas: {
        titulo: "Nuevo diseño de aros",
        subtitulo: `Aros de <br /> aleación de `,
        texto: `16"`,
        imagen: "/images/modelos/rueda_scross.webp",
      },
    },
    interior: {
      index: {
        titulo: `Diseño del panel de instrumentos`,
        subtitulo: "",
        texto: `Líneas fluidas y materiales de alta calidad en cada detalle: Subirse al SX4 S-CROSS significa ser atraído por un sentimiento de movimiento dinámico.`,
        imagen: "/images/modelos/101.jpg",
      },
      instrumentos: {
        titulo: `Velocidad de crucero y limitador de velocidad`,
        subtitulo: "",
        texto: "",
        imagen: "/images/modelos/110.jpg",
        order: 1,
      },
      lcd: {
        titulo: "Pantalla de despliegue de información múltiple",
        subtitulo: "",
        texto: "",
        imagen: "/images/modelos/interiors-lcd.webp",
        order: 7,
      },
      asientos: {
        titulo: "Gran visibilidad",
        texto: `Los espejos laterales están montados en los hombros de las puertas para ayudar a maximizar el campo de visión del conductor.`,
        imagen: "/images/modelos/129.jpg",
        order: 3,
      },
      bolsillo: {
        titulo: "Bolsillo en el respaldo",
        subtitulo: "",
        texto: "",
        imagen: "/images/modelos/bolsillo.webp",
        order: 5,
      },
      maletero: {
        titulo: "Volante ajustable",
        subtitulo: "",
        texto: "",
        imagen: "/images/modelos/113.jpg",
        order: 2,
      },
      aire: {
        titulo: `Espacio generoso para equipaje`,
        subtitulo: "",
        texto: "",
        imagen: "/images/modelos/interiors-maletero.webp",
        order: 8,
      },
      reposabrazos: {
        titulo: "Reposabrazos central frontal",
        subtitulo:
          "El reposabrazos central frontal se puede deslizar a la posición óptima y también incorpora un compartimento para almacenamiento.",
        texto: "",
        imagen: "/images/modelos/Reposabrazos_central_frontal.png",
        order: 4,
      },
      confort: {
        titulo: "Extra confort",
        subtitulo: "",
        texto: "",
        imagenes: [
          "/images/modelos/confort1.png",
          "/images/modelos/confort2.png",
          "/images/modelos/confort3.png",
        ],
        order: 6,
      },
    },
    security: {
      inicio: {
        titulo: "Seguridad para todo el camino",
        subtitulo: "Amplía tu alcance moviéndote siempre con confianza.",
        texto:
          "Bien protegido, siempre. El SX4 S-CROSS te asiste y protege en una fracción de segundo: Cuenta con sistemas preventivos para anticipar y evitar un accidente y con sistemas de protección para minimizar el riesgo de lesiones.",
        imagen: "/images/modelos/sseguridad-1.webp",
      },
      carroceria: {
        titulo: "ESP ®",
        texto:
          "(Programa de Estabilidad Electrónica) <br/> En el caso de que las ruedas pierdan tracción, el Programa de Estabilidad Electrónica ESP ® automáticamente ajusta el motor y los frenos para ayudar al conductor a mantener el control. <br/>*ESP ® es una marca registrada de Daimier AG.",
        imagen: "/images/modelos/sseguridad-4.png",
      },
      sensores: {
        titulo: "Seguridad contra impactos y protección peatonal",
        texto:
          "El diseño de la carrocería del S-CROSS se centra en el concepto TECT de SUZUKI, resultando en una estructura que absorbe eficientemente y dispersa la energía en el evento de una colisión.",
        imagen: "/images/modelos/sseguridad-5.png",
      },
    },
    performance: {
      inicio: {
        titulo: "Desempeño en todos los terrenos",
        texto: `Conducir el SX4 S-CROSS es siempre una experiencia apasionante. Desafía todas las superficies y todos los climas con un verdadero multi-propósito impulsado por los legendarios genes SUZUKI. Siente la confianza a través de una conducción fácil y placentera. Junto al compañero perfecto diseñado para largas distancias, recorre nuevos caminos donde disfrutarás de nuevos niveles de agilidad y eficiencia.`,
        imagen: "index.png",
      },
      motor: {
        titulo: "Motor de 1.6 litros a gasolina",
        texto:
          "El poderoso y al mismo tiempo eficiente motor de 1.6 litros a gasolina tiene un diseño actualizado para un desempeño con mejor torque a través del rango de revoluciones. Ahorro de peso en el motor y otras partes relacionadas contribuyen en entregar eficiencia de combustible superior conjuntamente con un alto desempeño de potencia y torque.",
        imagen: "sperformance-2.png",
      },
      suspension: {
        titulo: "Sistema de suspensión de alto desempeño",
        texto: `El sistema de suspensión fue afinado en carreteras Europeas para asegurar la mejor combinación posible de velocidad y manejo, comodidad y silencio.`,
        imagen: "suspension.png",
      },
      aerodinamica: {
        titulo: "Aerodinámica superior",
        texto: `Ingeniería asistida por computadoras y pruebas realizadas en túnel de viento ayudaron a desarrollar el diseño aerodinámico que mejora el desempeño y la eficiencia de combustible.
        <br />
        <br />
        El SX4 S-CROSS tiene una aerodinámica excepcional para un crossover.`,
        imagen: "aerodinamica.png",
      },
    },
    conectivity: {
      index: [
        {
          title: "Sistema de infotainment",
          subtitle: "Con pantalla táctil de 9 pulgadas.",
          description:
            "Conectividad de vanguardia y sistema de audio a través de una pantalla táctil, interfaz intuitiva y funciones multimedia que incluyen radio, manos libres, sistema de navegación, cámara de retro e integración con Smartphones.",
          image: "/images/modelos/img-5.webp",
        },
      ],
      features: [
        {
          title: "Conexión Bluetooth, USBC y USBA",
          description:
            "Conecta tu teléfono inteligente de manera inalámbrica vía Bluetooth, conexión de cable USBC o USBA de una manera fácil y ágil.",
          image: "/images/modelos/Group 5.png",
        },
        {
          title: "Android® Auto",
          description:
            " Un copiloto inteligente que te ayudará a mantenerte conectado, concentrado y entretenido con el asistente de Google. Google Maps, Google Search y otros servicios de Google al alcance de tus dedos, sin distracciones.",
          image: "/images/modelos/Group 6.png",
        },
        {
          title: "Apple CarPlay",
          description:
            "Una forma inteligente y segura de usar tu iPhone en tu vehículo sin desviar la atención de la carretera. Llamadas, música y navegación a tu alcance al conectar tu dispositivo iPhone compatible con Apple CarPlay.",
          image: "/images/modelos/Group 7.png",
        },
      ],
    },
  },
  {
    video: "jimny.mp4",
    galeria: [
      {
        price: 18000,
        color: { nombre: "Blanco", codigo: "#e8e8e8" },
        images: [
          "/images/modelos/Rectangle 83.png",
          "/images/modelos/Rectangle 82.png",
          "/images/modelos/video.png",
          "/images/modelos/Rectangle 92.png",
        ],
      },
      {
        price: 18000,
        color: { nombre: "Celeste", codigo: "#2a6e7f" },
        images: [
          "/images/modelos/Rectangle 83.png",
          "/images/modelos/Rectangle 82.png",
          "/images/modelos/video.png",
          "/images/modelos/Rectangle 92.png",
        ],
      },
      {
        price: 18000,
        color: { nombre: "Negro", codigo: "#000000" },
        images: [
          "/images/modelos/Rectangle 83.png",
          "/images/modelos/Rectangle 82.png",
          "/images/modelos/video.png",
          "/images/modelos/Rectangle 92.png",
        ],
      },
    ],
    personalidad: {
      titulo: "Time to play",
      texto:
        "Proyectos, metas y grandes objetivos una vida llena de responsabilidades. <br/>Más allá de los compromisos y horarios a cumplir, una fuerza más profunda vive dentro de todos nosotros: un espíritu joven.<br/> Listo para salir y desafiar tu rutina con un desempeño dentro y fuera de ruta, diseño audaz y tecnología de vanguardia. <br/>Descubre el nuevo SUZUKIVitara.",
    },
    exterior: {
      vehiculo: {
        titulo: `Más fuerte. <br/>Más atrevido.`,
        subtitulo: `Diseñado para <br/> la aventura.`,
        texto: `Un verdadero SUV de nacimiento, <b>cargado de fortaleza y energía</b>. Caracterizado por el estilo audaz y atrevido del Vitara, dispuesto a descubrir nuevos lugares dentro y fuera de ruta. Con un diseño icónico sin miedo a captar miradas.`,
        imagen: "/images/modelos/006 1.png",
      },
      faros: {
        titulo: "Faros LED",
        subtitulo:
          "Faros LED de alta intensidad se utilizan para conservar energía al usar luces bajas.",
        texto: "El color azul del protector crea una impresión dinámica",
        imagen: "/images/modelos/faros.png",
      },
      luces: {
        titulo: "Luces LED para el día y neblineros",
        texto: `El diseño único de las luces para el día “DRL” incluye <b>faros LED</b> en un arreglo vertical. También se provee de neblineros que son esenciales para una <b>buena visibilidad</b> en condiciones climáticas adversas.`,
        imagen: "/images/modelos/210 1.png",
      },
      insignia: {
        titulo: "Insignia de los SUV Suzuki",
        texto: `La atrevida parrilla de 5 elementos, <b>fuerte parachoques</b> delantero terminado con estilizados <b>asientos cromados</b> proveen al Vitara de una apariencia elegante y moderna.`,
        imagen: "/images/modelos/Exterior SUV 1.png",
      },
      ruedas: {
        titulo: "Nuevo diseño de aros",
        subtitulo: `Aros de <br /> aleación <br /> pintados <br />`,
        texto: `17" <br /> (GLX)`,
        imagen: "/images/modelos/RUEDA_2 2.png",
      },
      aros: {
        subtitulo: `Aros de <br /> aleación <br /> pintados <br />`,
        texto: `16"`,
        imagen: "/images/modelos/RUEDA 2.png",
      },
    },
    interior: {
      index: {
        titulo: `Siéntete <br />
        como en casa.`,
        subtitulo: "En un interior refinado.",
        texto: `Características avanzadas y <b>detalles de calidad</b> ofrecen confort y satisfacción al conducir, dentro y fuera de ruta.`,
        imagen: "/images/modelos/Interior 1.png",
      },
      instrumentos: {
        titulo: `Nuevo panel de <br />
        intrumentos`,
        //subtitulo: "Con material suave acolchado",
        texto: `Material interno suave acolchado para el panel superior de instrumentos asegura una <b>sensación excepcional</b> al espacio de cabina`,
        imagen: "/images/modelos/114.jpg",
      },
      lcd: {
        titulo:
          "Nueva pantalla de LCD a color de información múltiple de 4.2 pulgadas",
        subtitulo: `Una avanzada pantalla LCD a color de información múltiple de 4.2 pulgadas
        ocupa el centro del panel de indicadores para informar al conductor con datos precisos y confiables acerca del comportamiento
        y operación del vehículo. La pantalla dinámica visualmente ilustra una amplia gama de funciones como son los modos de conducción
        del ALLGRIP, fuerzas G, desempeño del motor y torque, y uso del freno y acelerador, entre otras cosas.`,
        texto:
          "Con una amplia gama de opciones para escoger, su experiencia de conducción nunca estará corta de diversión.",
        imagen: "/images/modelos/performance-4.png",
      },
      asientos: {
        titulo: "Nuevos asientos con patrones geométricos",
        texto: `Elegantes asientos delanteros y posteriores aseguran máximo <b>soporte y comodidad</b> tanto para el conductor como para los pasajeros`,
        imagen: "/images/modelos/Nuevo_asiento_patrones_geometricos.png",
      },
      reloj: {
        titulo: "Nuevo diseño del reloj",
        subtitulo: "Integrado en el tablero de instrumentos",
        texto:
          "El reloj suma un toque moderno y sofisticado al espacio del conductor.",
        imagen: "/images/modelos/nuevo_diseño_reloj.png",
      },
      maletero: {
        titulo: "Espacio de maletero generoso",
        subtitulo: "",
        texto: `Con una apertura amplia del maletero, una altura baja de carga e impresionante capacidad de 710 litros* cuando ambos asientos posteriores están recogidos, el Vitara facilita la carga de cualquier cosa que se pueda necesitar. Medido sin el estante posterior.
          <p style={{ fontSize: "14px", lineHeight: "140%", width:"880px"}}>
            * Medido sin el estante posterior.
          </p>`,
        imagen: "/images/modelos/135 1.png",
      },
      aire: {
        titulo: `Aire acondicionado <br />
        automático (GLX)`,
        subtitulo: "",
        texto: "",
        imagen: "/images/modelos/aire2.jpg",
      },
      reposabrazos: {
        titulo: "Reposabrazos central frontal",
        subtitulo:
          "El reposabrazos central frontal se puede deslizar a la posición óptima y también incorpora un compartimento para almacenamiento.",
        texto: "",
        imagen: "/images/modelos/Reposabrazos_central_frontal.png",
      },
    },
    security: {
      inicio: {
        titulo: "Seguridad",
        subtitulo: "El Vitara es más que un simple aspecto",
        texto:
          "También tiene un montón de cerebro. Equipado con <strong>tecnologías de vanguardia</strong>, el conductor y los pasajeros pueden estar seguros de estar asistidos, <strong>protegidos</strong> y entretenidos en todo momento.",
        imagen: "/images/modelos/seguridad-1.png",
      },
      carroceria: {
        titulo: "Carrocería TECT",
        texto:
          "El diseño de la carrocería del Vitara se centra en el concepto TECT de SUZUKI, resultando en una estructura que absorbe eficientemente y dispersa la energía en el evento de una colisión.",
        imagen: "/images/modelos/seguridad-2.png",
      },
      airbag: {
        titulo: "6 bolsas de aire",
        texto:
          "Incluyendo como estándar bolsas de aire SRS para el conductor y el pasajero de enfrente, bolsas de aire SRS laterales que reducen el impacto al pecho en colisiones laterales y bolsas de aire SRS de cortina que reducen impacto a la cabeza.",
        subtitulo:
          "El desempeño al conducir está complementado por las funciones de seguridad protectiva",
        imagen: "/images/modelos/seguridad-3.png",
      },
      esp: {
        titulo: "ESP®",
        texto:
          "En el caso de que las ruedas pierdan tracción, el Programa de Estabilidad Electrónica ESP® automáticamente ajusta el motor y los frenos para ayudar al conductor a mantener el control.",
        imagen: "/images/modelos/seguridad-4.png",
      },
      sensores: {
        titulo: "Sensores de parqueo <br /> frontales y posteriores (GLX)",
        texto:
          "Sensores ultrasónicos en los parachoques detectan obstáculos y emiten advertencias audiovisuales que el conductor puede observar en la pantalla de información múltiple y escuchar una alerta de sonido de advertencia",
        imagen: "/images/modelos/seguridad-5.png",
      },
    },
    performance: {
      inicio: {
        titulo: "Desempeño en todos los terrenos",
        texto:
          "Un compañero listo para cualquier aventura. Descubre un desempeño multi-propósito que desafía las superficies y condiciones climáticas más retadoras. Impulsado por motores de torque y eficiencia superior, equipado con un sistema único de tracción de cuatro ruedas ALLGRIP. Disfruta de un verdadero SUV con genes auténticos SUZUKI.",
        imagen: "performance-1.png",
      },
      motor: {
        titulo: "Motor de 1.6 litros a gasolina",
        texto:
          "Con un desempeño de alto torque a través de todas sus marchas desde la más baja hasta la más alta, este motor se conduce de manera poderosa tanto en los caminos de ciudad como en carreteras sinuosas. Adicionalmente, la reducción de fricción y peso del motor y sus partes relacionadas aseguran una excelente eficiencia de combustible",
        imagen: "performance-2.png",
      },
      allgrip: {
        titulo: "All Grip ",
        texto: `"Un vehículo que puede recorrer carreteras en mal estado e ir a
        lugares a los que los coches no podían ir en el pasado". Con esta
        filosofía, nuestro primer modelo de tracción en las cuatro ruedas
        se desarrolló en 1970. Este fue el comienzo de ALLGRIP, la
        reconocida tecnología de tracción en las cuatro ruedas de SUZUKI.
        <br />
        Nuestra tecnología 4WD se ha perfeccionado para brindar a los
        conductores aún más emoción, placer y tranquilidad. Con ALLGRIP en
        su Vitara, puede ampliar su gama de actividades y mejorar sus
        diversos estilos de vida.`,
        imagen: "performance-3.png",
      },
      esp: {
        titulo: "ESP®",
        texto:
          "En el caso de que las ruedas pierdan tracción, el Programa de Estabilidad Electrónica ESP® automáticamente ajusta el motor y los frenos para ayudar al conductor a mantener el control.",
        imagen: "/images/modelos/seguridad-4.png",
      },
      sensores: {
        titulo: "Seguridad contra impactos y protección peatonal",
        texto:
          "El diseño de la carrocería del S-CROSS se centra en el concepto TECT de SUZUKI, resultando en una estructura que absorbe eficientemente y dispersa la energía en el evento de una colisión",
        imagen: "/images/modelos/seguridad-5.png",
      },
    },
    versions: [
      {
        nombre: "GLX",
        image: "/images/modelos/Rectangle 82.png",
        features: [
          {
            name: "Dirección asistida",
            image: "/images/modelos/check.png",
          },
          {
            name: "Control de arranque en pendiente",
            image: "/images/modelos/check.png",
          },
          {
            name: "Control de velocidad crucero",
            image: "/images/modelos/check.png",
          },
          {
            name: "Asistente de frenado frontal",
            image: "/images/modelos/check.png",
          },
          {
            name: "Sensores de parqueo posteriores",
            image: "/images/modelos/check.png",
          },
          {
            name: "Botón de encendido",
            image: "/images/modelos/check.png",
          },
          {
            name: "Radio pantalla táctil 9” Apple Carplay & Android Auto",
            image: "/images/modelos/check.png",
          },
          {
            name: "Cámara de reversa",
            image: "/images/modelos/check.png",
          },
          {
            name: "Vidrios eléctricos delanteros y posteriores",
            image: "/images/modelos/check.png",
          },
          {
            name: "AC Automático",
            image: "/images/modelos/check.png",
          },
          {
            name: "Airbags frontales  ",
            image: "/images/modelos/check.png",
          },
        ],
      },
      {
        nombre: "GL+",
        image: "/images/modelos/Rectangle 83.png",
        features: [
          {
            name: "Dirección asistida",
            image: "/images/modelos/check.png",
          },
          {
            name: "Control de arranque en pendiente",
            image: "/images/modelos/check.png",
          },
          {
            name: "Control de velocidad crucero",
            image: "/images/modelos/check.png",
          },
          {
            name: "Asistente de frenado frontal",
            image: "/images/modelos/check.png",
          },
          {
            name: "Sensores de parqueo posteriores",
            image: "/images/modelos/check.png",
          },
          {
            name: "Botón de encendido",
            image: "/images/modelos/check.png",
          },
          {
            name: "Radio pantalla táctil 9” Apple Carplay & Android Auto",
            image: "/images/modelos/check.png",
          },
          {
            name: "Cámara de reversa",
            image: "/images/modelos/check.png",
          },
          {
            name: "Vidrios eléctricos delanteros y posteriores",
            image: "/images/modelos/check.png",
          },
          {
            name: "AC Automático",
            image: "/images/modelos/check.png",
          },
          {
            name: "Airbags frontales  ",
            image: "/images/modelos/check.png",
          },
          {
            name: "Airbags laterales y cortina",
            image: "/images/modelos/plus.png",
          },
          {
            name: "Luces antineblina",
            image: "/images/modelos/plus.png",
          },
          {
            name: "Faros delanteros tecnología LED",
            image: "/images/modelos/plus.png",
          },
          {
            name: "6 parlantes",
            image: "/images/modelos/plus.png",
          },
          {
            name: "Sensores de parqueo frontales",
            image: "/images/modelos/plus.png",
          },
          {
            name: "Sensor de lluvia",
            image: "/images/modelos/plus.png",
          },
          {
            name: "Asiento pasajero regulación altura",
            image: "/images/modelos/plus.png",
          },
          {
            name: "Asientos de cuero sintético",
            image: "/images/modelos/plus.png",
          },
          {
            name: "Retrovisor interno fotocrómatico",
            image: "/images/modelos/plus.png",
          },
        ],
      },
    ],
    conectivity: {
      index: [
        {
          title: "Sistema de infotainment",
          subtitle: "Con pantalla táctil de 9 pulgadas.",
          description:
            "Conectividad de vanguardia y sistema de audio a través de una pantalla táctil, interfaz intuitiva y funciones multimedia que incluyen radio, manos libres, sistema de navegación, cámara de retro e integración con Smartphones.",
          image: "/images/modelos/img-5.webp",
        },
      ],
      features: [
        {
          title: "Conexión Bluetooth, USBC y USBA",
          description:
            "Conecta tu teléfono inteligente de manera inalámbrica vía Bluetooth, conexión de cable USBC o USBA de una manera fácil y ágil.",
          image: "/images/modelos/Group 5.png",
        },
        {
          title: "Android® Auto",
          description:
            " Un copiloto inteligente que te ayudará a mantenerte conectado, concentrado y entretenido con el asistente de Google. Google Maps, Google Search y otros servicios de Google al alcance de tus dedos, sin distracciones.",
          image: "/images/modelos/Group 6.png",
        },
        {
          title: "Apple CarPlay",
          description:
            "La pantalla de 7 pulgadas y el menú de navegación intuitivo hacen que la operación sea particularmente fácil y segura.",
          image: "/images/modelos/Group 7.png",
        },
      ],
    },
  },
];
export const modelosPdf = [
  {
    nombre: "GRAND VITARA",
    imagen: "/images/posventa/gVitaraTM.png",
    versiones: [
      {
        nombre: "GRAND VITARA 1.6 TM 4X4",
        pdf: "/fichas/GRAND VITARA 1.6 TM 4X4.pdf",
        imagen: "/images/posventa/vitara.png",
      },
      {
        nombre: "GRAND VITARA 2.0 TM 4X4",
        pdf: "/fichas/GRAND VITARA 2.0 TM 4X2.pdf",
        imagen: "/images/posventa/vitara.png",
      },
      {
        nombre: "GRAND VITARA 2.0 TM 4X2",
        pdf: "/fichas/GRAND VITARA 2.0 TM 4X4.pdf",
        imagen: "/images/posventa/vitara.png",
      },
    ],
  },
  {
    nombre: "GRAND VITARA SZ",
    imagen: "/images/posventa/gVitaraSZ.png",
    versiones: [
      {
        nombre: "GRAND VITARA SZ 2.0 TM 4X2",
        pdf: "/fichas/GRAND VITARA SZ 2.0 TM 4X2.pdf",
        imagen: "/images/posventa/vitara.png",
      },
      {
        nombre: "GRAND VITARA SZ 2.0 TM 4X4",
        pdf: "/fichas/GRAND VITARA SZ 2.0 TM 4X4.pdf",
        imagen: "/images/posventa/vitara.png",
      },
      {
        nombre: "GRAND VITARA SZ 2.4 TA 4X2",
        pdf: "/fichas/GRAND VITARA SZ 2.4 TA 4X2.pdf",
        imagen: "/images/posventa/vitara.png",
      },
      {
        nombre: "GRAND VITARA SZ 2.4 TA 4X4",
        pdf: "/fichas/GRAND VITARA SZ 2.4 TA 4X4.pdf",
        imagen: "/images/posventa/vitara.png",
      },
      {
        nombre: "GRAND VITARA SZ 2.4 TM 4x4",
        pdf: "/fichas/GRAND VITARA SZ 2.4 TM 4x4.pdf",
        imagen: "/images/posventa/vitara.png",
      },
    ],
  },
  {
    nombre: "NEW VITARA",
    imagen: "/images/posventa/vitara.png",
    versiones: [
      {
        nombre: "NEW VITARA 1.6 4X2 TM",
        pdf: "/fichas/NEW VITARA 1.6 4X2 TM.pdf",
        imagen: "/images/posventa/vitara.png",
      },
      {
        nombre: "NEW VITARA 1.6 4X4 TM",
        pdf: "/fichas/NEW VITARA 1.6 4X4 TM.pdf",
        imagen: "/images/posventa/vitara.png",
      },
    ],
  },
  {
    nombre: "VITARA",
    imagen: "/images/posventa/Suzuki-Vitara-1988(OUT).png",
    versiones: [
      {
        nombre: "VITARA 1.6 TM 4X4",
        pdf: "/fichas/VITARA 1.6 TM 4X4.pdf",
        imagen: "/images/posventa/Suzuki-Vitara-1988(OUT).png",
      },
    ],
  },
  {
    nombre: "S-CROSS",
    imagen: "/images/posventa/s_cross.png",
    versiones: [
      {
        nombre: "SCROSS SX4",
        pdf: "/fichas/SCROSS SX4.pdf",
        imagen: "/images/posventa/s_cross.png",
      },
    ],
  },
  {
    nombre: "JIMNY",
    imagen: "/images/posventa/jimmy.png",
    versiones: [
      {
        nombre: "JIMNY 1.5 AT 4X4",
        pdf: "/fichas/JIMNY 1.5 TA 4X4.pdf",
        imagen: "/images/posventa/jimmy.png",
      },
      {
        nombre: "JIMNY 1.5 TM 4X4",
        pdf: "/fichas/JIMNY 1.5 TM 4X4.pdf",
        imagen: "/images/posventa/jimmy.png",
      },
    ],
  },
];
