import React, { useRef } from "react";
//import style from "../../../styles/components/report-compra/report-compra.module.scss";
import style from './report-cotizacion.module.css';
import { jsPDF } from "jspdf";
import { getHTML } from "../../api/reports";
import Loader from "../../../src/components/common/Loader";
//import { provincias } from "../../../constants";
import { capitalizeWords } from "../../../utils/fuctions";

export async function getServerSideProps({ query }) {
  const { id } = query;

  let props = await getHTML(id);
  if (!props && !props?.cotizacion) {
    return {
      // returns the default 404 page with a status code of 404
      notFound: true
    };
  }

  return { props };
}


const Pdf = (props) => {

  let loaderRef = useRef();
  const { cotizacion, vehicle } = props;
  const brandHighlight = [0, 49, 69];
  const separatorColor = [236, 236, 236];
  const textStyles = {
    titleText: { font: ["helvetica", "bold"], fontSize: 20, textColor: [62, 62, 64] }, //64, 64, 64
    subtitleText: { font: ["helvetica", "normal"], fontSize: 14, textColor: [64, 64, 66] },
    regularText: { font: ["helvetica", "normal"], fontSize: 12, textColor: [0, 0, 0] },
    labelText: { font: ["helvetica", "normal"], fontSize: 12, textColor: [136, 136, 136] },
    labelTextStrong: { font: ["helvetica", "normal"], fontSize: 12, textColor: [85, 85, 85] },
    valueText: { font: ["helvetica", "bold"], fontSize: 13, textColor: [128, 128, 128] },
    valueTextStrong: { font: ["helvetica", "bold"], fontSize: 13, textColor: [64, 64, 66] },
    valueTextHighlight: { font: ["helvetica", "bold"], fontSize: 13, textColor: [255, 0, 0] }
  };


  const getPdf = () => {
    let valorFinanciar = 0;
    let metadataContado = null;
    if (cotizacion?.forma_pago && cotizacion?.forma_pago == "Financiado") {
      try {
        if (cotizacion?.financiamiento_entrada) {
          valorFinanciar = parseFloat(cotizacion?.precio) - parseFloat(cotizacion?.financiamiento_entrada);
        } else {
          valorFinanciar = parseFloat(cotizacion?.precio);
        }
      } catch (e) { }
    }

    if (cotizacion?.forma_pago && cotizacion?.forma_pago == "Contado") {
      try {
        metadataContado = JSON.parse(cotizacion?.contado_servicios_seguridad);
      } catch (e) { }
    }
    var formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",

      // These options are needed to round to whole numbers if that's what you want.
      minimumFractionDigits: 0 // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
      //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    });
    //let provincia = provincias?.find(item => item.value == cotizacion?.pricing_placa_letra)?.label;
    let provincia = cotizacion?.pricing_placa_letra ?? "";

    //let img = "/_next/image?url=%2Fimg%2Fno-car-image.jpg&w=1920&q=75";
    let img = "/images/modelos/silueta-auto-pdf.png";
    if (cotizacion?.vehiculo?.imagenes && cotizacion?.vehiculo?.imagenes?.length == 1) {
      img = cotizacion?.vehiculo?.imagenes[0]?.url;
    } else if (cotizacion?.vehiculo?.imagenes && cotizacion?.vehiculo?.imagenes?.length > 1) {
      try {
        let indexImage = cotizacion?.vehiculo?.imagenes?.findIndex(function (e) {
          let a, b;
          a = e?.name?.match(/\_1\.\w+/);
          if (a) {
            b = a[0];
          }

          return b ? true : false;
        });
        if (indexImage >= 0) {
          img = cotizacion?.vehiculo?.imagenes[indexImage]?.url;
        }
      } catch (e) {
        console.log(e);
      }
    }

    var respuesta = {
      vehiculo_tipo: "",
      vehiculo_url: img,
      //"/img/reports/vehiculo.png"
      marca: cotizacion?.marca ?? "",
      modelo: cotizacion?.modelo ?? "",

      version: cotizacion?.version ?? "",
      color: cotizacion?.color ?? "",
      precio: cotizacion?.precio ? formatter.format(parseFloat(cotizacion?.precio)).replace("$", "") : "",
      pricing: cotizacion?.pricing ?? "",
      pricing_marca: cotizacion?.pricing_marca ?? "",
      pricing_modelo: cotizacion?.pricing_modelo ?? "",
      pricing_anio: cotizacion?.pricing_anio ?? "",
      pricing_version: cotizacion?.pricing_submodelo ?? "",
      pricing_kilometraje: cotizacion?.pricing_kms
        ? formatter.format(parseFloat(cotizacion?.pricing_kms)).replace("$", "")
        : "",
      pricing_provinciaPlaca: provincia ?? "",
      pricing_placaDigito: cotizacion?.pricing_placa_ultimo ?? "",
      pricing_valor: cotizacion?.pricing_valor
        ? formatter.format(parseFloat(cotizacion?.pricing_valor)).replace("$", "")
        : "",

      financiamiento_forma_pago: cotizacion?.forma_pago ?? "",
      financiamiento_entrada: cotizacion?.financiamiento_entrada
        ? formatter.format(parseFloat(cotizacion?.financiamiento_entrada)).replace("$", "")
        : 0,
      //financiamiento_valor_financiado:  formatter.format(parseFloat(valorFinanciar)).replace("$", ""),
      financiamiento_valor_financiado: cotizacion?.financiamiento_tipo ?? "",
      financiamiento_cuota_inscripcion: cotizacion?.financiamiento_cuota_inscripcion ?? "",
      financiamiento_cuota_final: cotizacion?.financiamiento_cuota_final ?? "",
      financiamiento_meses_plazo: cotizacion?.financiamiento_meses_plazo ?? "",
      financiamiento_tipo: cotizacion?.financiamiento_tipo ?? "",
      financiamiento_cuota: cotizacion?.financiamiento_cuota
        ? formatter.format(parseFloat(cotizacion?.financiamiento_cuota)).replace("$", "")
        : "",
      financiamiento_plan: cotizacion?.financiamiento_plan ?? "",
      financiamiento_cashback: cotizacion?.financiamiento_cashback ?? "",

      nombres: cotizacion?.nombres ?? "",
      apellidos: cotizacion?.apellidos ?? "",
      paquete: cotizacion?.paquete ?? "",
      numero_documento: cotizacion?.cedula ?? "",
      email: cotizacion?.correo ?? "",
      telefono: cotizacion?.telefono ?? "",
      id_CRM: cotizacion?.Id_CRM ?? ""
    };
    console.log(respuesta);

    var margin = 20;
    var y = 0;
    let f2 = 0;
    let f1 = 0;
    var ancho_pagina = 595;
    const alto_pagina = 842;
    var center_pagina = 297;
    var doc = new jsPDF("p", "pt", "a4", false);

    const c1 = margin;
    const c2 = c1 + 185;
    const c3 = c2 + 185;

    const c2_4 = c1 + 139;
    const c3_4 = c2_4 + 139;
    const c4_4 = c3_4 + 139;

    //linea roja superior
    doc.setDrawColor(...brandHighlight); // draw red line
    doc.setLineWidth(3);
    //margen_izquierdo, altura_izquierda, margen_derecho, altura_derecha
    //y = y + 5;
    doc.line(0, y, ancho_pagina, y);

    const logo = new Image();
    logo.src = "/images/reports/logo.png";
    y = y + 8;
    // data, formato, y, y, width, height, alias, compress, rotation
    doc.addImage(logo, "png", margin, y, 135, 30, undefined, "none");

    //linea gris inferior
    doc.setDrawColor(...separatorColor); // draw gray line
    doc.setLineWidth(1);
    y = y + 35;
    doc.line(margin, y, ancho_pagina - margin, y);

    //Mensaje de Bievenida
    doc.setFont(...textStyles.titleText.font);
    doc.setFontSize(textStyles.titleText.fontSize);
    doc.setTextColor(...textStyles.titleText.textColor);
    y = y + 20;
    doc.text(center_pagina, y, "¡Hola " + capitalizeWords(respuesta["nombres"]) + "!", "center");

    //Sub-mensaje
    doc.setFont(...textStyles.subtitleText.font);
    doc.setFontSize(textStyles.subtitleText.fontSize);
    doc.setTextColor(...textStyles.subtitleText.textColor);
    y = y + 20;
    doc.text(center_pagina, y, "Acabas de realizar la cotización exitosamente, aquí te", "center");
    y = y + 15;
    doc.text(center_pagina, y, "detallamos más información del vehículo", "center");

    //Datos del vehiculo
    doc.setFont(...textStyles.regularText.font);
    doc.setFontSize(textStyles.regularText.fontSize);
    doc.setTextColor(...textStyles.regularText.textColor);
    y = y + 20;
    doc.text(margin, y, "Datos del vehículo:");

    //foto del vehiculo
    const img_vehiculo = new Image();
    img_vehiculo.src = respuesta["vehiculo_url"];
    y = y + 10;
    doc.addImage(img_vehiculo, "png", margin, y, center_pagina - margin - 34, 146, undefined, "none");

    //Modelo del vehiculo
    doc.setFont(...textStyles.labelText.font);
    doc.setFontSize(textStyles.labelText.fontSize);
    doc.setTextColor(...textStyles.labelText.textColor);
    y = y + 20;
    f2 = y;
    doc.text(c3_4, f2, "Modelo");
    doc.setFont(...textStyles.valueTextStrong.font);
    doc.setFontSize(textStyles.valueTextStrong.fontSize);
    doc.setTextColor(...textStyles.valueTextStrong.textColor);
    y = y + 20;
    doc.text(c3_4, y, respuesta["modelo"]);

    //Paquete del vehiculo
    doc.setFont(...textStyles.labelText.font);
    doc.setFontSize(textStyles.labelText.fontSize);
    doc.setTextColor(...textStyles.labelText.textColor);
    y = y + 30;
    doc.text(c3_4, y, "Paquete");
    doc.setFont(...textStyles.valueTextStrong.font);
    doc.setFontSize(textStyles.valueTextStrong.fontSize);
    doc.setTextColor(...textStyles.valueTextStrong.textColor);
    y = y + 20;
    splitTitle = doc.splitTextToSize(respuesta["paquete"], 120);
    doc.text(c3_4, y, splitTitle);

    //Version del vehiculo
    doc.setFont(...textStyles.labelText.font);
    doc.setFontSize(textStyles.labelText.fontSize);
    doc.setTextColor(...textStyles.labelText.textColor);
    y = y + 30;
    doc.text(c3_4, y, "Versión");
    doc.setFont(...textStyles.valueTextStrong.font);
    doc.setFontSize(textStyles.valueTextStrong.fontSize);
    doc.setTextColor(...textStyles.valueTextStrong.textColor);
    y = y + 20;
    doc.text(c3_4, y, respuesta["version"]);

    //Precio desde del vehiculo
    doc.setFont(...textStyles.labelText.font);
    doc.setFontSize(textStyles.labelText.fontSize);
    doc.setTextColor(...textStyles.labelText.textColor);
    doc.text(c4_4, f2, "Precio desde");
    doc.setFont(...textStyles.valueTextHighlight.font);
    doc.setFontSize(textStyles.valueTextHighlight.fontSize);
    doc.setTextColor(...textStyles.valueTextHighlight.textColor);
    f2 = f2 + 20;
    let splitTitle = doc.splitTextToSize(respuesta["precio"]);
    doc.text(c4_4, f2, splitTitle);

    //Color del vehiculo
    doc.setFont(...textStyles.labelText.font);
    doc.setFontSize(textStyles.labelText.fontSize);
    doc.setTextColor(...textStyles.labelText.textColor);
    f2 = f2 + 30;
    doc.text(c4_4, f2, "Color");
    doc.setFont(...textStyles.valueTextStrong.font);
    doc.setFontSize(textStyles.valueTextStrong.fontSize);
    doc.setTextColor(...textStyles.valueTextStrong.textColor);
    f2 = f2 + 20;
    doc.text(c4_4, f2, capitalizeWords(respuesta["color"]));

    //Trading
    /*doc.setFont(...textStyles.regularText.font);
    doc.setFontSize(textStyles.regularText.fontSize);
    doc.setTextColor(...textStyles.regularText.textColor);
    y = y + 80;
    doc.text(margin, y, `¿Vehículo como parte de pago? ${respuesta["pricing"] ? "SI" : "NO"}`);*/

    if (respuesta["pricing"] == true) {
      //Pricing - Marca
      doc.setFont(...textStyles.labelTextStrong.font);
      doc.setFontSize(textStyles.labelTextStrong.fontSize);
      doc.setTextColor(...textStyles.labelTextStrong.textColor);
      y = y + 20;
      f1 = y;
      doc.text(margin, y, "Marca");
      doc.setFont(...textStyles.valueText.font);
      doc.setFontSize(textStyles.valueText.fontSize);
      doc.setTextColor(...textStyles.valueText.textColor);
      y = y + 15;
      f2 = y;
      doc.text(margin, y, respuesta["pricing_marca"]);

      //Pricing - Modelo
      doc.setFont(...textStyles.labelTextStrong.font);
      doc.setFontSize(textStyles.labelTextStrong.fontSize);
      doc.setTextColor(...textStyles.labelTextStrong.textColor);
      doc.text(c2_4, f1, "Modelo");
      doc.setFont(...textStyles.valueText.font);
      doc.setFontSize(textStyles.valueText.fontSize);
      doc.setTextColor(...textStyles.valueText.textColor);
      doc.text(c2_4, f2, respuesta["pricing_modelo"]);

      //Pricing - Año
      doc.setFont(...textStyles.labelTextStrong.font);
      doc.setFontSize(textStyles.labelTextStrong.fontSize);
      doc.setTextColor(...textStyles.labelTextStrong.textColor);
      doc.text(c3_4, f1, "Año");
      doc.setFont(...textStyles.valueText.font);
      doc.setFontSize(textStyles.valueText.fontSize);
      doc.setTextColor(...textStyles.valueText.textColor);
      doc.text(c3_4, f2, respuesta["pricing_anio"]);

      //Pricing - Versión
      doc.setFont(...textStyles.labelTextStrong.font);
      doc.setFontSize(textStyles.labelTextStrong.fontSize);
      doc.setTextColor(...textStyles.labelTextStrong.textColor);
      doc.text(c4_4, f1, "Versión");
      doc.setFont(...textStyles.valueText.font);
      doc.setFontSize(textStyles.valueText.fontSize);
      doc.setTextColor(...textStyles.valueText.textColor);
      doc.text(c4_4, f2, respuesta["pricing_version"]);

      //Pricing - Kilometraje
      doc.setFont(...textStyles.labelTextStrong.font);
      doc.setFontSize(textStyles.labelTextStrong.fontSize);
      doc.setTextColor(...textStyles.labelTextStrong.textColor);
      y = y + 20;
      f1 = y;
      doc.text(margin, y, "Kilometraje");
      doc.setFont(...textStyles.valueText.font);
      doc.setFontSize(textStyles.valueText.fontSize);
      doc.setTextColor(...textStyles.valueText.textColor);
      y = y + 15;
      f2 = y;
      doc.text(margin, y, respuesta["pricing_kilometraje"]);

      //Pricing - Transmisión
      doc.setFont(...textStyles.labelTextStrong.font);
      doc.setFontSize(textStyles.labelTextStrong.fontSize);
      doc.setTextColor(...textStyles.labelTextStrong.textColor);
      //doc.text(center_pagina - 120, f1, "Provincia de la Placa", "center");
      doc.text(c2_4, f1, "Provincia Placa");
      doc.setFont(...textStyles.valueText.font);
      doc.setFontSize(textStyles.valueText.fontSize);
      doc.setTextColor(...textStyles.valueText.textColor);
      splitTitle = doc.splitTextToSize(respuesta["pricing_provinciaPlaca"], 160);

      doc.text(c2_4, f2, splitTitle);

      //Pricing - Placa
      doc.setFont(...textStyles.labelTextStrong.font);
      doc.setFontSize(textStyles.labelTextStrong.fontSize);
      doc.setTextColor(...textStyles.labelTextStrong.textColor);
      //doc.text(center_pagina + 30, f1, "Ultimo Digito Placa", "center");
      doc.text(c3_4, f1, "Placa Dígito");
      doc.setFont(...textStyles.valueText.font);
      doc.setFontSize(textStyles.valueText.fontSize);
      doc.setTextColor(...textStyles.valueText.textColor);
      doc.text(c3_4, f2, respuesta["pricing_placaDigito"]);

      //Pricing - Precio Referencial
      doc.setFont(...textStyles.labelTextStrong.font);
      doc.setFontSize(textStyles.labelTextStrong.fontSize);
      doc.setTextColor(...textStyles.labelTextStrong.textColor);
      doc.text(c4_4, f1, "Precio referencial");
      doc.setFont(...textStyles.valueTextHighlight.font);
      doc.setFontSize(textStyles.valueTextHighlight.fontSize);
      doc.setTextColor(...textStyles.valueTextHighlight.textColor);
      doc.text(c4_4, f2, "$ " + respuesta["pricing_valor"]);
    }

    y = y + 15;
    //Forma de Pago
    /*doc.setFont(...textStyles.regularText.font);
    doc.setFontSize(textStyles.regularText.fontSize);
    doc.setTextColor(...textStyles.regularText.textColor);
    y = y + 20;
    doc.text(margin, y, "Forma de pago: " + respuesta["financiamiento_forma_pago"]);*/

    if (respuesta["financiamiento_forma_pago"] == "Financiado") {
      //Forma de Pago
      doc.setFont(...textStyles.regularText.font);
      doc.setFontSize(textStyles.regularText.fontSize);
      doc.setTextColor(...textStyles.regularText.textColor);
      y = y + 20;
      doc.text(margin, y, "Tipo de Financiamiento: " + respuesta["financiamiento_tipo"]);

      //Forma de Pago - Entrada
      doc.setFont(...textStyles.labelTextStrong.font);
      doc.setFontSize(textStyles.labelTextStrong.fontSize);
      doc.setTextColor(...textStyles.labelTextStrong.textColor);
      y = y + 20;
      f1 = y;
      doc.text(margin, y, "Entrada");
      doc.setFont(...textStyles.valueText.font);
      doc.setFontSize(textStyles.valueText.fontSize);
      doc.setTextColor(...textStyles.valueText.textColor);
      y = y + 15;
      f2 = y;
      doc.text(margin, y, "$ " + respuesta["financiamiento_entrada"]);

      //Forma de Pago - Meses Plazo
      doc.setFont(...textStyles.labelTextStrong.font);
      doc.setFontSize(textStyles.labelTextStrong.fontSize);
      doc.setTextColor(...textStyles.labelTextStrong.textColor);
      doc.text(c2, f1, "Meses plazo");
      doc.setFont(...textStyles.valueText.font);
      doc.setFontSize(textStyles.valueText.fontSize);
      doc.setTextColor(...textStyles.valueText.textColor);
      doc.text(c2, f2, "" + respuesta["financiamiento_meses_plazo"]);

      //Forma de Pago - Financiamiento
      doc.setFont(...textStyles.labelTextStrong.font);
      doc.setFontSize(textStyles.labelTextStrong.fontSize);
      doc.setTextColor(...textStyles.labelTextStrong.textColor);
      doc.text(c3, f1, "Financiamiento");
      doc.setFont(...textStyles.valueText.font);
      doc.setFontSize(textStyles.valueText.fontSize);
      doc.setTextColor(...textStyles.valueText.textColor);
      doc.text(c3, f2, respuesta["financiamiento_valor_financiado"]);

      //Forma de Pago - Cuota mensual referencial
      doc.setFont(...textStyles.labelTextStrong.font);
      doc.setFontSize(textStyles.labelTextStrong.fontSize);
      doc.setTextColor(...textStyles.labelTextStrong.textColor);
      y = y + 20;
      doc.text(margin, y, "Cuota mensual referencial");
      doc.setFont(...textStyles.valueTextHighlight.font);
      doc.setFontSize(textStyles.valueTextHighlight.fontSize);
      doc.setTextColor(...textStyles.valueTextHighlight.textColor);
      y = y + 15;
      doc.text(margin, y, "$ " + respuesta["financiamiento_cuota"]);

      if (respuesta["financiamiento_tipo"] == "Toyota Siempre Nuevo") {
        //Forma de Pago TSN - Cuota Final
        doc.setFont(...textStyles.labelTextStrong.font);
        doc.setFontSize(textStyles.labelTextStrong.fontSize);
        doc.setTextColor(...textStyles.labelTextStrong.textColor);
        y = y + 20;
        f1 = y;
        doc.text(margin, y, "Cuota Final");
        doc.setFont(...textStyles.valueText.font);
        doc.setFontSize(textStyles.valueText.fontSize);
        doc.setTextColor(...textStyles.valueText.textColor);
        y = y + 15;
        f2 = y;
        doc.text(margin, y, "$ " + respuesta["financiamiento_cuota_final"]);

        if (respuesta["pricing"]) {
          //Forma de Pago TSN -Cashback
          doc.setFont(...textStyles.labelTextStrong.font);
          doc.setFontSize(textStyles.labelTextStrong.fontSize);
          doc.setTextColor(...textStyles.labelTextStrong.textColor);
          doc.text(c2, f1, "Cashback");
          doc.setFont(...textStyles.valueText.font);
          doc.setFontSize(textStyles.valueText.fontSize);
          doc.setTextColor(...textStyles.valueText.textColor);
          doc.text(c2, f2, "$ " + respuesta["financiamiento_cashback"]);
        }

        //Forma de Pago TSN - Detalle
        doc.setFont(...textStyles.regularText.font);
        doc.setFontSize(textStyles.regularText.fontSize);
        doc.setTextColor(...textStyles.regularText.textColor);
        y = y + 20;
        doc.text(margin, y, "Detalle");
        //doc.setFontSize(14);
        //doc.setTextColor(85, 85, 85);
        doc.setTextColor(...textStyles.labelTextStrong.textColor);
        y = y + 15;
        doc.text(margin, y, "- Las cuotas más bajas del mercado");
        y = y + 15;
        doc.text(margin, y, "- Una sola entrada de por vida");
        y = y + 15;
        doc.text(margin, y, "- Renueva tu vehículo cada 2, 3 o 4 años y mantienes la misma cuota");
        y = y + 15;
        doc.text(margin, y, "- Tenemos el mejor precio de reventa");
        y = y + 15;
        doc.text(margin, y, "- Entrega de vehículo inmediata");
        y = y + 15;
        doc.text(margin, y, "- Una inversión inteligente");
      }

      if (respuesta["financiamiento_tipo"] == "Certero") {
        //Forma de Pago Certero - Cuota Final
        doc.setFont(...textStyles.labelTextStrong.font);
        doc.setFontSize(textStyles.labelTextStrong.fontSize);
        doc.setTextColor(...textStyles.labelTextStrong.textColor);
        y = y + 20;
        f1 = y;
        doc.text(margin, y, "Plan");
        doc.setFont(...textStyles.valueText.font);
        doc.setFontSize(textStyles.valueText.fontSize);
        doc.setTextColor(...textStyles.valueText.textColor);
        y = y + 15;
        f2 = y;
        doc.text(margin, y, respuesta["financiamiento_plan"]);

        //Forma de Pago Certero - Cuota de inscripción
        doc.setFont(...textStyles.labelTextStrong.font);
        doc.setFontSize(textStyles.labelTextStrong.fontSize);
        doc.setTextColor(...textStyles.labelTextStrong.textColor);
        doc.text(c2, f1, "Cuota de inscripción");
        doc.setFont(...textStyles.valueText.font);
        doc.setFontSize(textStyles.valueText.fontSize);
        doc.setTextColor(...textStyles.valueText.textColor);
        doc.text(c2, f2, "$ " + respuesta["financiamiento_cuota_inscripcion"]);

        //Forma de Pago Certero - Detalle
        doc.setFont(...textStyles.regularText.font);
        doc.setFontSize(textStyles.regularText.fontSize);
        doc.setTextColor(...textStyles.regularText.textColor);

        y = y + 20;
        doc.text(margin, y, "Detalle");
        //doc.setFontSize(14);
        //doc.setTextColor(85, 85, 85);
        doc.setTextColor(...textStyles.labelTextStrong.textColor);
        y = y + 15;
        doc.text(margin, y, "- Compra programada");
        y = y + 15;
        doc.text(margin, y, "- Sin entrada");
        y = y + 15;
        doc.text(margin, y, "- Sin intereses");
        y = y + 15;
        doc.text(margin, y, "- Entrega de vehículo programada");
      }

      if (respuesta["financiamiento_tipo"] == "Crédito Tradicional") {
        if (respuesta["pricing"]) {
          //Forma de Pago Tradicional -Cashback
          doc.setFont(...textStyles.labelTextStrong.font);
          doc.setFontSize(textStyles.labelTextStrong.fontSize);
          doc.setTextColor(...textStyles.labelTextStrong.textColor);
          y = y + 20;
          doc.text(margin, y, "Cashback");
          doc.setFont(...textStyles.valueText.font);
          doc.setFontSize(textStyles.valueText.fontSize);
          doc.setTextColor(...textStyles.valueText.textColor);
          y = y + 15;
          doc.text(margin, y, "$ " + respuesta["financiamiento_cashback"]);
        }

        //Forma de Pago Tradiconal - Detalle
        doc.setFont(...textStyles.regularText.font);
        doc.setFontSize(textStyles.regularText.fontSize);
        doc.setTextColor(...textStyles.regularText.textColor);
        y = y + 20;
        doc.text(margin, y, "Detalle");
        //doc.setFontSize(14);
        //doc.setTextColor(85, 85, 85);
        doc.setTextColor(...textStyles.labelTextStrong.textColor);

        y = y + 15;
        doc.text(margin, y, "- Cómodas cuotas");
        y = y + 15;
        doc.text(margin, y, "- Plazo a escoger");
        y = y + 15;
        doc.text(margin, y, "- Entrada flexible");
        y = y + 15;
        doc.text(margin, y, "- Entrega de vehículo inmediata");
      }
    }

    if (respuesta["financiamiento_forma_pago"] == "Contado") {
      if (metadataContado) {
        for (var i = 0; i < metadataContado.length; i += 2) {
          if (metadataContado[i]?.nombre && metadataContado[i]?.monto) {
            doc.setFont(...textStyles.labelTextStrong.font);
            doc.setFontSize(textStyles.labelTextStrong.fontSize);
            doc.setTextColor(...textStyles.labelTextStrong.textColor);
            y = y + 20;
            f1 = y;
            doc.text(margin, y, metadataContado[i]?.nombre);
            doc.setFont(...textStyles.valueText.font);
            doc.setFontSize(textStyles.valueText.fontSize);
            doc.setTextColor(...textStyles.valueText.textColor);
            y = y + 15;
            f2 = y;
            doc.text(margin, y, "$ " + formatter.format(parseFloat(metadataContado[i]?.monto)).replace("$", ""));
          }

          if (metadataContado[i + 1]?.nombre && metadataContado[i + 1]?.monto) {
            doc.setFont(...textStyles.labelTextStrong.font);
            doc.setFontSize(textStyles.labelTextStrong.fontSize);
            doc.setTextColor(...textStyles.labelTextStrong.textColor);
            doc.text(c2, f1, metadataContado[i + 1]?.nombre);
            doc.setFont(...textStyles.valueText.font);
            doc.setFontSize(textStyles.valueText.fontSize);
            doc.setTextColor(...textStyles.valueText.textColor);
            doc.text(c2, f2, "$ " + formatter.format(parseFloat(metadataContado[i + 1]?.monto)).replace("$", ""));
          }
        }
      }
    }

    //Datos del Solicitante
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    y = y + 30;
    doc.text(margin, y, "Datos del solicitante:");

    //Datos del Solicitante - Nombres
    doc.setFont(...textStyles.labelTextStrong.font);
    doc.setFontSize(textStyles.labelTextStrong.fontSize);
    doc.setTextColor(...textStyles.labelTextStrong.textColor);
    y = y + 20;
    f1 = y;
    doc.text(c1, y, "Nombres");
    doc.setFont(...textStyles.valueText.font);
    doc.setFontSize(textStyles.valueText.fontSize);
    doc.setTextColor(...textStyles.valueText.textColor);
    y = y + 15;
    f2 = y;
    splitTitle = doc.splitTextToSize(respuesta["nombres"], 180);
    doc.text(c1, y, splitTitle);

    //Datos del Solicitante - Apellidos
    doc.setFont(...textStyles.labelTextStrong.font);
    doc.setFontSize(textStyles.labelTextStrong.fontSize);
    doc.setTextColor(...textStyles.labelTextStrong.textColor);
    doc.text(c2, f1, "Apellidos");
    doc.setFont(...textStyles.valueText.font);
    doc.setFontSize(textStyles.valueText.fontSize);
    doc.setTextColor(...textStyles.valueText.textColor);
    splitTitle = doc.splitTextToSize(respuesta["apellidos"], 180);
    doc.text(c2, f2, splitTitle);

    //Datos del Solicitante - Cedula
    doc.setFont(...textStyles.labelTextStrong.font);
    doc.setFontSize(textStyles.labelTextStrong.fontSize);
    doc.setTextColor(...textStyles.labelTextStrong.textColor);
    doc.text(c3, f1, "Cédula");
    doc.setFont(...textStyles.valueText.font);
    doc.setFontSize(textStyles.valueText.fontSize);
    doc.setTextColor(...textStyles.valueText.textColor);
    doc.text(c3, f2, respuesta["numero_documento"]);

    //Datos del Solicitante - Email
    doc.setFont(...textStyles.labelTextStrong.font);
    doc.setFontSize(textStyles.labelTextStrong.fontSize);
    doc.setTextColor(...textStyles.labelTextStrong.textColor);
    y = y + 20;
    f1 = y;
    doc.text(c1, y, "Correo eléctronico");
    doc.setFont(...textStyles.valueText.font);
    doc.setFontSize(textStyles.valueText.fontSize);
    doc.setTextColor(...textStyles.valueText.textColor);
    y = y + 15;
    f2 = y;
    splitTitle = doc.splitTextToSize(respuesta["email"], 180);
    doc.text(c1, y, splitTitle);

    //Datos del Solicitante - Telefono
    doc.setFont(...textStyles.labelTextStrong.font);
    doc.setFontSize(textStyles.labelTextStrong.fontSize);
    doc.setTextColor(...textStyles.labelTextStrong.textColor);
    doc.text(c2, f1, "Teléfono");
    doc.setFont(...textStyles.valueText.font);
    doc.setFontSize(textStyles.valueText.fontSize);
    doc.setTextColor(...textStyles.valueText.textColor);
    doc.text(c2, f2, respuesta["telefono"]);

    //linea gris inferior
    doc.setDrawColor(...separatorColor); // draw gray line
    doc.setLineWidth(1);
    y = alto_pagina - margin - 45;
    doc.line(margin, y, ancho_pagina - margin, y);

    //imagen del footer
    //const img_footer = new Image();
    //img_footer.src = "/img/reports/footer.jpg";
    y = y + 5;
    doc.addImage(logo, "png", 230, y, 135, 30, undefined, "none");

    //copyright
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.setTextColor(128, 128, 128);
    y = y + 42;

    var today = new Date();
    var year = today.getFullYear();

    doc.text(center_pagina, y, "Todos los derechos reservados ©" + year, "center");

    doc.save("Cotizacion.pdf");
  };

  const generatePdf = () => {
    try {
      loaderRef?.current?.showLoader(true);
      getPdf();
      loaderRef?.current?.showLoader(false);
    } catch (e) {
      console.log(e);
      loaderRef?.current?.showLoader(false);
    }
  };
  return (
    <>
      <Loader ref={loaderRef} />
      <div className={style.containerImg}>
        <img onClick={() => generatePdf()} className={style.img} src="/images/reports/pdf.svg" ></img>
        <p onClick={() => generatePdf()} className={style.text}>Descargar Pdf</p>
      </div>
      {props && props.htmlTemplate && (
        <div id="content-template" dangerouslySetInnerHTML={{ __html: props?.htmlTemplate }} />
      )}
    </>
  );
};

export default Pdf;
