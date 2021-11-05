import React, { useEffect } from "react";
import Loader from "../../src/components/common/Loader";
import Footer from "../../src/components/common/Footer";
import { useRouter } from "next/router";
import TestDrive from "../../src/components/common/TestDrive";
import NavbarSite from "../../src/components/common/NavbarSite";
import NavbarMobile from "../../src/components/common/NavbarMobile";
import AsideActions from "../../src/components/common/AsideActions";
import StorageFormInconcert from "../../src/context/StorageFormInconcert";
import Seo from "../../src/components/common/Seo";

const getSlug = () => {
  const router = useRouter();
  const pathName = router.pathname;
  const slug = pathName == "/" ? "home" : pathName;
  //
  return slug;
}

function GeneralLayout(props) {
  const { children, toTop } = props;
  const iframe = (w, d, t, u, n, a, m) => {
    a = d.createElement(t);
    m = d.getElementsByTagName(t)[0];
    a.async = 1;
    a.src = u;
    m.parentNode.insertBefore(a, m);
  };
  const slug = getSlug();
  useEffect(() => {
    iframe(
      window,
      document,
      "script",
      "https://mas-casabaca.inconcertcc.com/public/integration/scripts.js?token=1321ccfae1d295c9c4d4ae086709a3a8",
      "ic"
    );
  }, []);
  return (
    <div id="content-template">
      <Loader />
      <NavbarSite />
      <NavbarMobile />
      <StorageFormInconcert>
        <Seo data={props.Seo} slug={slug} />
        <AsideActions />
        <TestDrive />
        {children}
        <Footer top={toTop} />
      </StorageFormInconcert>
    </div>
  );
}

export default GeneralLayout;
