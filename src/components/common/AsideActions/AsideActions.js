import React, { Component } from 'react'
import Link from 'next/link'

export default class AsideActions extends Component {
    state = {
        collapse: false,
        clase: 'icons-aside-actions'
    };

    collapsar = () => {
        let nuevoEstado = false;
        let claseNueva = '';
        if (!this.state.collapse) {
            nuevoEstado = true;
            claseNueva = 'icons-aside-actions show-icons';

        }
        else {
            nuevoEstado = false;
            claseNueva = 'icons-aside-actions';
        }
        this.setState({
            collapse: nuevoEstado,
            clase: claseNueva
        });
    };
    render() {
        return (
            <div className={this.state.collapse ? 'container-aside-actions show' : 'container-aside-actions'}>
                <div className={this.state.collapse ? 'aside-action-icon position-relative d-lg-none d-block show' : 'aside-action-icon position-relative d-lg-none d-block'}>
                    <div className="position-absolute container-circular-background-icon" onClick={this.collapsar}>
                        <img className="circular-background-icon" src="/images/AsideActions/elipse.png" alt="Aside actions" width='1.7rem' height='54.4'></img>
                    </div>

                    <div className="position-absolute container-arrow" onClick={this.collapsar}>

                    </div>

                </div>
                <div className={this.state.clase} >
                    <Link href="https://wa.link/7yc1ph" >
                        <a className="icons-aside">
                            <div className="cotainer-img-icon-green">
                                <img src="/images/footer/WhatsappLogo.svg" className="m-img-icon" alt="Whatsapp" style={{ height: "32px" }} height='32' width='32'></img>
                            </div>
                            <div className="container-texto-aside-action">
                                <span>Whatsapp</span>
                            </div>
                        </a>
                    </Link>
                    <Link href="/modelos/vitara" >
                        <a className="icons-aside">
                            <div className="cotainer-img-icon">
                                <img src="/images/AsideActions/car.png" alt="Cotización" className="m-img-icon" height='32' width='32'></img>
                            </div>
                            <div className="container-texto-aside-action">
                                <span>Cotizar</span>
                            </div>
                        </a>
                    </Link>
                    <Link href="/encuentranos#mapa" >
                        <a className="icons-aside">
                            <div className="cotainer-img-icon">
                                <img src="/images/AsideActions/agencias.png" alt="Agencias" className="m-img-icon" height='32' width='32'></img>
                            </div>
                            <div className="container-texto-aside-action">
                                <span>Concesionarios</span>
                            </div>
                        </a>
                    </Link>

                    <Link href="/taller/agendarcitataller" >
                        <a className="icons-aside">
                            <div className="cotainer-img-icon">
                                <img src="/images/AsideActions/taller.png" alt="Cita taller" className="m-img-icon" height='32' width='32'></img>
                            </div>
                            <div className="container-texto-aside-action">
                                <span>Agenda cita talleres</span>
                            </div>
                        </a>

                    </Link>



                </div>
            </div>
        )
    }
}
