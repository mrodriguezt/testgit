import Blog from "../src/components/home/Blog";
import Banner from "../src/components/home/Banner1";
import GeneralLayout from "../layouts/GeneralLayout";
import Gallery from "../src/components/home/Gallery";
import Services from "../src/components/home/Services";
import Testimony from "../src/components/home/Testimony";
import React, { useEffect, useState } from "react";
import { getDatesInstagram } from "../pages/api/Instagram";
import { getBanners } from "./api/Banner";
import Seo from './api/Seo';
import { useMediaQuery } from "react-responsive";
export default function Home(props) {
  const [data, setData] = useState(props?.responseInstagram?.data ?? false);
  const mobileSsr = props.isMobile;
  const query = useMediaQuery({ maxWidth: 991.5 });
  const [isMobile, setIsMobile] = useState(mobileSsr);
  //
  useEffect(() => {
    console.log("media query", isMobile, query);
    if (query != null && query != undefined && query != isMobile) {
      console.log('actulizo el media query');
      setIsMobile(query);
    }
  }, [query]);
  /*useEffect(() => {
    async function datesInstragram() {
      const response = await getDatesInstagram();
      if (response) {
        setData(response.data);
      }
      else setData(false);
    }
    datesInstragram();
  }, []);*/

  useEffect(() => {
    if (process.browser) {
      const isChrome =
        /Chrome/.test(navigator.userAgent) &&
        /Google Inc/.test(navigator.vendor);
      if (window.location.hash) {
        console.log(window.location.hash);
        setTimeout(() => {
          const hash = window.location.hash;
          window.location.hash = "";
          window.location.hash = hash;
        }, 300);
      }
    }
  }, []);

  return (
    <GeneralLayout Seo={props?.seo}>
      <div className="home-container">
        <Banner isMobile={isMobile} slideInterval={4} data={props?.banners} />
        <Gallery isMobile={isMobile} />
        <Services isMobile={isMobile} />
        {/* <Blog /> */}
        {data && <Testimony isMobile={isMobile} data={data} />}
      </div>
    </GeneralLayout>
  );
}
export async function getServerSideProps({ resolvedUrl, req }) {


  const response = await Seo(resolvedUrl);
  const res_banners = await getBanners();
  const responseInstagram = await getDatesInstagram();
  let userAgent;
  if (req) {
    // if you are on the server and you get a 'req' property from your context
    userAgent = req.headers["user-agent"]; // get the user-agent from the headers
  } else {
    userAgent = navigator?.userAgent; // if you are on the client you can access the navigator from the window object
  }
  let isMobile = Boolean(userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i));

  return { props: { seo: response, banners: res_banners, isMobile: isMobile, responseInstagram: responseInstagram } };
}