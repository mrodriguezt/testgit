import React from "react";
import GeneralLayout from "../layouts/GeneralLayout";
import { useMediaQuery } from "react-responsive";
import Contenido from "../src/components/posventa/Aftermarket.js";
import { getRepuestos, getPlanesMantenimiento, getContenido, getServicios } from "./api/PosVenta";
import Seo from './api/Seo';
function Posventas(props) {
    const isMobile = useMediaQuery({ maxWidth: 464 });
    return (
        <GeneralLayout Seo={props?.seo}>
            <Contenido data={props?.data}></Contenido>
        </GeneralLayout>
    );
}
export default Posventas;

export async function getServerSideProps({ resolvedUrl }) {

    let contenido = {
        banner: {},
        texto: {},
        condiciones: {},
        repuestos: {},
        garantia: {},
        mantenimiento: {}
    };
    const repuestos = await getRepuestos();
    const planesM = await getPlanesMantenimiento();
    const res_contenido = await getContenido();
    const servicios = await getServicios();

    if (res_contenido != null) {
        res_contenido?.forEach((item) => {
            if (item?.estilo == "banner") {
                contenido.banner = item;
            }
            if (item?.estilo == "texto") {
                contenido.texto = item;
            }
            if (item?.estilo == "condiciones") {
                contenido.condiciones = item;
            }
            if (item?.estilo == "repuestos") {
                contenido.repuestos = item;
            }
            if (item?.estilo == "garantia") {
                contenido.garantia = item;
            }
            if (item?.estilo == "mantenimiento") {
                contenido.mantenimiento = item;
            }
        });
    }

    let responseSeo = null;
    try {
        let url = resolvedUrl;
        if (url.indexOf('?') >= 0) {
            url = url.split('?')[0];
        }
        responseSeo = await Seo(url);
    }
    catch (e) {
        console.log(e);
    }
    return { props: { seo: responseSeo, data:{contenido, repuestos, planesM, servicios} } };
}