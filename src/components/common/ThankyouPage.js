import React from "react";
import Link from "next/link";

export default function ThankYouPage({image, link, boton}) {
    return (
      <div
        className="container-fluid model-detail "
        style={{
          background: ` linear-gradient(180deg, rgba(255, 255, 255, 0) 27.79%, rgba(255, 255, 255, 0.8) 93.44%), url('/images/ThankPage/fondo.webp')`,
          backgroundSize: "cover",
        }}
      >
        <div className="row  ow justify-content-center justify-content-start h-thankyou">
          <div className="col-12 col-sm-9 col-md-7 col-lg-5  text-center align-self-center mt-sm-5 ">
            <div>
              <label className="titulo-thankyou blue-t">¡Gracias!</label>
            </div>
            <div>
              <label className="subtitulo-thankyou blue-t">
                {" "}
                Por enviarnos tu solicitud{" "}
              </label>
            </div>
            <div className="offset-md-2 col-md-8 offset-lg-0 col-lg-12 offset-xl-2 col-xl-8 ">
              <p className="texto-thankyou">
                {" "}
                Uno de nuestros asesores se pondrá en contacto contigo{" "}
              </p>
            </div>
            {image !== "" && <img className="img-fluid" src={image} alt="" />}
            <div
              className={
                image !== ""
                  ? "col-12 offset-md-1 offset-sm-2 offset-lg-1 col-md-10 col-sm-8 col-lg-10 px-xl-5 pb-4"
                  : "col-12 offset-md-1 offset-sm-2 offset-lg-1 col-md-10 col-sm-8 col-lg-10 px-xl-5 pt-5 "
              }
            >
              <Link href={link}>
                <a style={{ textDecoration: "none" }}>
                  <button className="btn btn-primary w-100">
                   {boton}
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};