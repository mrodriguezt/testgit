import axios from "axios";

const baseURL = "https://api-sugarcrm.casabaca.com/api";//
const token = process.env.SUGAR_CRM_TOKEN

const http = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});


const conceptos = [
  {
    Asunto:"Agendamiento Test Drive",
    LineaNegocio:2,
    TipoTransaccion:1,
    Campania: process.env.CAMPANIA_TEST_DRIVE
  },

  {
    Asunto:"Posventa Agendar Cita",
    LineaNegocio:1,
    TipoTransaccion:1
  },

  {
    Asunto:"Repuestos Cotización",
    LineaNegocio:1,
    TipoTransaccion:1
  },

  {
    Asunto:"Cotización",
    LineaNegocio:2,
    TipoTransaccion:1,
    Campania: process.env.CAMPANIA_COTIZACION
  },

  {
    Asunto:"Mensaje de Contacto",
    LineaNegocio:2,
    TipoTransaccion:4,
    Campania: process.env.CAMPANIA_CONTACTO
  },

  {
    Asunto:"Agendar Cita",
    LineaNegocio:2,
    TipoTransaccion:1,
    Campania: process.env.CAMPANIA_AGENDAR_CITA
  },

];

export default class LinkSugar {
  constructor(form_id, cedula, nombres, apellidos, email, celular,urlForm) {
    this.form_id = form_id;
    this.cedula = cedula;
    this.nombres = nombres;
    this.apellidos = apellidos;
    this.email = email;
    this.celular = celular;
    this.url_formulario = urlForm;
  }

  async send(data) {
    const fields = getFieldsArray(data);
    const sugarData = {
      datosSugarCRM: {
        numero_identificacion: this.cedula,
        tipo_identificacion: "C",
        email: this.email,
        nombres: this.nombres,
        apellidos: this.apellidos,
        celular: this.celular,
        comentario_cliente: data?.comentario_cliente ?? '',
        medio:'16',
        campania: conceptos[this.form_id - 1]?.Campania,
        linea_negocio: conceptos[this.form_id - 1]?.LineaNegocio,
        tipo_transaccion: conceptos[this.form_id - 1]?.TipoTransaccion,
        asunto: conceptos[this.form_id - 1]?.Asunto,
        id_interaccion_inconcert: "inconcert_TptFVX2xLy",
      },
      datos_adicionales: {
        title: this.asunto,
        pageUrl:this.url_formulario,
        thankyouPageUrl:this.url_formulario,
        fields,
      },
    };
    let result;

    await http
      .post("/tickets", sugarData)
      .then((response) => {
        let data =
          "data" in ("data" in response ? response.data : response)
            ? response.data.data
            : response.data;
        result = { success: true, data, reason: null };
      })
      .catch((error) => {
        let reason =
          "response" in error
            ? "data" in error.response
              ? error.response.data
              : error.response
            : error.toJSON();
        result = { success: false, data: null, reason };
      });
      
    return result;
  }
}

// Aplana un objeto complejo en uno del tipo {key: value}
// Fuente: https://stackoverflow.com/a/34515563
const flattenObject = (object, separator, parents = []) =>
  Object.assign(
    {},
    ...Object.entries(object).map(([key, value]) =>
      value && typeof value === "object"
        ? flattenObject(value, separator, [...parents, key])
        : { [[...parents, key].join(separator)]: value }
    )
  );

// Dado un objeto retorna un array de objetos con los atributos key y nombre
const getFieldsArray = (data) => {
  const flatData = flattenObject(data, "_");
  const result = Object.keys(flatData).map((key) => ({
    key,
    nombre: flatData[key],
  }));

  return result;
};
