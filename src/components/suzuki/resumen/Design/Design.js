import React from "react";
function Design() {
    return (
        <div className="row mx-0 justify-content-center px-5 py-3 pb-5">
            <div className="row col-12 px-5 align-items-center pb-2">
                <div className="titulo row align-items-center ">
                <label className="title mb-0 mr-3">Diseño</label>
                <span className="line mt-2"/>
                </div>
                
            </div>
            <div className="row mx-0 px-5 justify-content-center align-items-center py-3">
                <div className="col-5 pr-3 my-5" >
                <div>
                        <img className="w-100" src="/images/suzuki/rectangle 86.png"></img>
                    </div>
                </div>
                <div className="col-7 pl-3 my-5">
                    <div className="text-left">
                        <p className="title1 mb-4 grey-light">Tamaño incluso en un espacio reducido.</p>
                        <p className="subtitle2 mb-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus risus quam, viverra in est ut, aliquam hendrerit est. Pellentesque at ligula quis leo bibendum consectetur.
                         </p>
                    </div>
                    <div className="my-5">
                        <img className="w-100" src="/images/suzuki/rectangle 85.png"></img>
                    </div>
                    <div className="text-left">
                        <p className="title1 mb-4 grey-light"> Personalidad para todos.</p>
                        <p className="subtitle2 mb-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus risus quam, viverra in est ut, aliquam hendrerit est. Pellentesque at ligula quis leo bibendum consectetur.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Design;