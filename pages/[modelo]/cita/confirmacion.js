import React, { useEffect, useState } from "react";
import GeneralLayout from "../../../layouts/GeneralLayout";
import { withRouter } from 'next/router';
import Link from "next/link";
import { modelos, posventa_versiones } from "../../../utils/constant";
import Seo from '../../api/Seo';
function ThankYouPage({ router, seo }) {
    const [models, setModels] = useState([]);
    const [image, setImage] = useState('');
    const [existModel, setExistModel] = useState(false);
    useEffect(() => {
        (async () => {
            setModels(modelos);
            for (let i = 0; i < models.length; i++) {
                if (models[i].modelo === router.query.model) {
                    setImage(models[i].image);
                    setExistModel(true);
                }
            }
            if (!existModel) {
                for (let i = 0; i < posventa_versiones.length; i++) {
                    if (posventa_versiones[i].modelo === router.query.model) {
                        setImage(posventa_versiones[i].imagen);
                        setExistModel(true);
                    }
                }
            }
        })();
    }, [models, router.query.model]);

    const Page = () => {

        return (
            <div className="container-fluid model-detail " style={{ background: ` linear-gradient(180deg, rgba(255, 255, 255, 0) 27.79%, rgba(255, 255, 255, 0.8) 93.44%), url('/images/ThankPage/fondo.webp')`, backgroundSize: 'cover' }}>

                <div className="row  ow justify-content-center justify-content-start h-thankyou"  >
                    <div className="col-12 col-sm-9 col-md-7 col-lg-5  text-center align-self-center mt-sm-5 ">
                        <div><label className="titulo-thankyou blue-t">¡Gracias!</label></div>
                        <div><label className='subtitulo-thankyou blue-t'> Por enviarnos tu solicitud </label></div>
                        <div className='offset-md-2 col-md-8 offset-lg-0 col-lg-12 offset-xl-2 col-xl-8 '>
                            <p className='texto-thankyou'> Uno de nuestros asesores se pondrá en contacto contigo </p>
                        </div>
                        {image !== '' &&
                            <img className='img-fluid' src={'/images' + image} alt="" />
                        }
                        <div className={image !== '' ? 'col-12 offset-md-1 offset-sm-2 offset-lg-1 col-md-10 col-sm-8 col-lg-10 px-xl-5 pb-4' : 'col-12 offset-md-1 offset-sm-2 offset-lg-1 col-md-10 col-sm-8 col-lg-10 px-xl-5 pt-5 '}>
                            <Link href={'/#modelos'}>
                                <a style={{ textDecoration: "none" }}>
                                    <button className="btn btn-primary w-100">
                                        Cotizar otro modelo
                                    </button>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
    return (
        <GeneralLayout Seo={seo}>
            <Page />
        </GeneralLayout>
    )
}

export default withRouter(ThankYouPage)
export async function getServerSideProps({ resolvedUrl }) {

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
    return { props: { seo: responseSeo } };
}