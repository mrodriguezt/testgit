import React from 'react'

function Features(){
    return(
        <>
        <div className="col-8 d-inline-block">
            <label className="title2 d-block">Yaris Automático</label>
        </div>
        <div className="col-4 text-right d-inline-block">
            <span className="text-sec d-block">Precio desde</span>
            <span className="title2 red d-block">$ 16000</span>
        </div>

        <div className="col-3 b-grey2 py-1 d-inline-block">
            <span className="subtitle5 d-block">Precio base</span>
            <span className="subtitle2 grey-light d-block">$16,000</span>
        </div>
        <div className="col-3 b-grey2 d-inline-block">
            <span className="subtitle5 d-block">Combustible</span>
            <span className="subtitle2 grey-light d-block">Gasolina</span>
        </div>
        <div className="col-2 b-grey2 d-inline-block">
            <span className="subtitle5 d-block">Transmisión</span>
            <span className="subtitle2 grey-light d-block">Manual</span>
        </div>
        <div className="col-4 b-grey2 d-inline-block">
            <span className="subtitle5 d-block">Seguridad</span>
            <span className="subtitle2 grey-light d-block">Asistida de frenado</span>
        </div>
        </>
    )
}

export default Features