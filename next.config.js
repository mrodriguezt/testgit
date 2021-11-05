module.exports = {
  images: {
    domains: [
      "localhost",
      "suzukiecuador.com",
      "www.suzukiecuador.com",
      "34.74.100.88",
      "bkp-ce-websuzukiprd.storage.googleapis.com",
      process.env.BASE_URL.split("//")[1],
    ],
  },
  env: {
    BASE_URL: process.env.BASE_URL,
    BASE_URL_IMG: process.env.BASE_URL_IMG,
    GMAPSAPI: process.env.GMAPSAPI,
    CAMPANIA_TEST_DRIVE: process.env.CAMPANIA_TEST_DRIVE,
    CAMPANIA_COTIZACION: process.env.CAMPANIA_COTIZACION,
    CAMPANIA_CONTACTO: process.env.CAMPANIA_CONTACTO,
    CAMPANIA_AGENDAR_CITA: process.env.CAMPANIA_AGENDAR_CITA,
    SUGAR_CRM_TOKEN: process.env.SUGAR_CRM_TOKEN,
    DOMAIN: process.env.DOMAIN
  },
};
