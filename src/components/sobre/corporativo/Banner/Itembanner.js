import React from "react";

function Itembanner(props) {
    return (
        <div className="item item-banner d-flex align-items-center">
            <div className={(props.item.titulo === "") ? "d-none d-sm-flex col-sm-12 px-0 imageBanner" : "d-none d-sm-flex col-sm-6 px-0 imageBanner"}style={{ backgroundImage: `url('/images/banner/${props.item.image}')` }}>
            </div>
            <div className={(props.item.titulo === "") ? "d-none ml-3" : "ml-3 col-sm-5 texto"}>
                <p className="title1 mb-4">{props.item.titulo}</p>
                <p className="subtitle2 mb-4">{props.item.description}</p>
            </div>
        </div>
    )
}

export default Itembanner;