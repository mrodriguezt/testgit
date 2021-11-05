import React from "react";

function Lifestyle() {
    return (

        <div className="row mx-0 justify-content-center lifestyle px-5 py-3">
            <div className="row col-12 px-5 align-items-center pb-2">
                <div className="titulo row align-items-center ">
                    <label className="title mb-0 mr-3">Estilo de vida</label>
                    <span className="line mt-2" />
                </div>
            </div>
            <div className="row mx-0 px-5 justify-content-center py-3 pb-5 pt-5">
                <div className="col-5 my-5">
                    <div>
                        <img className="w-100" src="/images/suzuki/rectangle 83.png"></img>
                    </div>
                    <div className="text-left pt-5">
                        <p className="title1 mb-4 grey-light">Entusiasmo por la vida cotidiana</p>
                        <p className="subtitle2 mb-2 pb-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus risus quam, viverra in est ut, aliquam hendrerit est. Pellentesque at ligula quis leo bibendum consectetur.
                    </p>

                    </div>
                </div>
                <div className="col-7 pl-3 my-5">
                    <div className="text-left py-4">
                        <p className="title1 mb-4 grey-light">En medio de la vida</p>
                        <p className="subtitle2 mb-2 black">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus risus quam, viverra in est ut, aliquam hendrerit est. Pellentesque at ligula quis leo bibendum consectetur.  Maecenas id elit quis sem feugiat tincidunt. Sed lorem quam, varius pharetra cursus nec, accumsan vitae eros.
                    </p>
                    </div>
                    <div>
                        <img className="w-100" src="/images/suzuki/rectangle 84.png"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Lifestyle;