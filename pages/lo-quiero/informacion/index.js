import React from "react";
import { useRouter } from "next/router";
import GeneralLayout from "../../../layouts/GeneralLayout";
// Forms
import User from "../../../src/components/forms/Informacion";
import Seo from '../../api/Seo';
export default function form(props) {
  const router = useRouter();

  return (
    <GeneralLayout toTop={false} Seo={props?.seo}>
      <div className="container min-vh-50 d-flex align-items-center">
        <div className=" mx-lg-5 px-lg-5 my-5 mx-3">
          <div className=" mx-lg-5 px-lg-5">
            <div className="mx-lg-5 px-lg-5">
              <h1>Ingresa tus datos</h1>
              <div className="text-14 mb-4">
                Ingresa la siguiente información para contactarte
              </div>
              <User />
            </div>
          </div>
        </div>
      </div>
    </GeneralLayout>
  );
}
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