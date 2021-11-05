import React from 'react';
import GeneralLayout from "../layouts/GeneralLayout";
import Content from "../src/components/about-suzuki/about-suzuki";
import Breadcrumbs from '../src/components/common/Breadcrumbs';
import Seo from './api/Seo';
function sobresuzuki(props) {
    const routes = [
        {
            path: '/',
            title: 'Inicio'
        },
        {
            path: '#',
            title: 'Sobre Suzuki'
        }
    ]
    return (
        <GeneralLayout Seo={props?.seo}>
            <Breadcrumbs routes={routes} />
            <Content />
        </GeneralLayout>
    )
}

export default sobresuzuki;

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
