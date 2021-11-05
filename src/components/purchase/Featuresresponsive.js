import React from 'react'
import {Accordion, Card, Button} from 'react-bootstrap'

function Featuresresponsive(){
    return(
        <>
        <div className="col-12">
            <span className="text-sec black float-right mt-3">Precio desde</span>
            <span className="title2">Yaris Automático</span>
            

            <Accordion>
                <Card  className="detail-purchase">
                <Card.Header>
                    <span className="title2 red float-right">$ 16000</span>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0" className="btn-more mt-1">
                    <label className="float-left">Ver características <img src="/images/icons/downred.png" /></label>
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0" className="detail-data">
                    <Card.Body className="pt-0 px-1">
                    <span className="text-d">Precio base</span>
                    <span className="text-d float-right">$16.000</span>
                    <br/>
                    <span className="text-d">Combustible</span>
                    <span className="text-d float-right">Gasolina</span>
                    <br/>
                    <span className="text-d">Transmisión</span>
                    <span className="text-d float-right">Manual</span>
                    <br/>
                    <span className="text-d">Seguridad</span>
                    <span className="text-d float-right">Precio base</span>
                    <br/>
                    </Card.Body>
                </Accordion.Collapse>
                </Card>
            </Accordion>
            </div>
        <div className="col-4 text-right">
            
        </div>
        </>
    )
}

export default Featuresresponsive