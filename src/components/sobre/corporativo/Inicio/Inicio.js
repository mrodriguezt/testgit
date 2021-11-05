import React from "react";
function Inicio() {
    return (
        <div className="row init">
            <div className="row inicio mx-0 justify-content-center px-5 pt-3 ">
                <div className="row col-12 px-md-5 justify-content-center align-items-center ">

                    <div className="col-5 px-0 pb-3 text-left">
                        <p className="title1 mb-4 grey-light">Sobre Suzuki</p>
                        <p className="subtitle2 mb-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus risus quam, viverra in est ut, aliquam hendrerit est. Pellentesque at ligula quis leo bibendum consectetur. Donec placerat, ante ac consectetur varius, lorem ex eleifend purus.</p>
                    </div>
                    <div className="col-7 pr-3 imageBanner" style={{ backgroundImage: `url('/images/sobre/rectangle 90.png')` }}>
                    </div>
                </div>
            </div>
            <div className="row col-12">
                <div className="w-100 fondo"></div>
            </div>
        </div>

    )
}

export default Inicio;