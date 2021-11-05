import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown } from "react-bootstrap"
import Link from 'next/link'

import { Accordion, Card, Button } from "react-bootstrap";
export default class NavbarMobile extends Component {
    state = {
        collapseAgenda: true,
        collapseExo: true,
        collapse: true
    };


    collapse = (opcion) => {

        let valorNuevo = {};
        if (opcion == 'modelos') {
            let collapseAgenda = !this.state.collapseAgenda;
            let collapseExo = this.state.collapseExo;
            if (collapseAgenda == false) {

                collapseExo = collapseExo == false ? true : collapseExo;
            }


            valorNuevo = { collapseAgenda, collapseExo };
        }

        if (opcion == 'exo') {
            let collapseAgenda = this.state.collapseAgenda;
            let collapseExo = !this.state.collapseExo;
            if (collapseExo == false) {

                collapseAgenda = collapseAgenda == false ? true : collapseAgenda;
            }
            valorNuevo = { collapseAgenda, collapseExo };
        }

        if (opcion == 'close') {
            let collapse = !this.state.collapse;

            valorNuevo = { collapse };
            let content = document.getElementById('content-template');
            content.classList.toggle('over-flow-hidden-only-mobile');

            document.body.classList.toggle('over-flow-hidden-only-mobile');
        }
        this.setState({
            ...this.state,
            ...valorNuevo
        });



    }

    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="lg" className="ml-auto px-sm-5 px-3 px-lg-3 px-xl-5 py-2 py-sm-1 py-md-2 py-lg-0 shadow-menu d-flex d-lg-none" sticky="top">
                    <Navbar.Brand href="/"><img
                        src="/logo.png"
                        height="25"
                        width='36.225'
                        className="d-inline-block align-top"
                        alt="Suzuki logo"
                    />
                    </Navbar.Brand>
                    <Navbar.Toggle className="no-shadow" aria-controls="responsive-navbar-nav" onClick={() => this.collapse('close')} />

                </Navbar>

                <aside className={`sidebar  ${this.state.collapse ? '' : 'show'}  `}>
                    <div onClick={() => this.collapse('close')} className="sidebar-icon-close px-sm-5 px-3">
                        <img src="/images/navbarMobile/X.png" alt="Cerrar navbar"></img>
                    </div>
                    <div className="container-scroll">
                        <div className="side-bar-content px-sm-5 px-3">
                            <Link href="/"   >
                                <a onClick={() => this.collapse('close')}
                                    className="link-side-bar-content nav-link">Inicio</a>
                            </Link>
                            <Accordion >
                                <Card className="border-0">
                                    <Accordion.Toggle as={Card.Header} className="border-0 bg-white link-side-bar-content" eventKey="1" onClick={() => { this.collapse('modelos') }}>
                                        <div className={`header-collpase-card ${this.state.collapseAgenda ? '' : 'show'}`} >
                                            <span className="subtitle l-header font-weight-bold m-0" >Modelos</span>
                                            <div className="icon-dropdown show"></div>
                                        </div>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="1">
                                        <Card.Body className="d-flex flex-column py-0">
                                            <Link href="/modelos/vitara" >
                                                <a onClick={() => this.collapse('close')} className="subtitle2 l-header">Vitara
                                                </a>
                                            </Link>
                                            <Link href="/modelos/scross" >
                                                <a onClick={() => this.collapse('close')}
                                                    className="subtitle2 l-header">SX4 S-CROSS
                                                </a>
                                            </Link>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                            <Link href="/lo-quiero">
                                <a onClick={() => this.collapse('close')}
                                    className="link-side-bar-content nav-link">Lo quiero</a>
                            </Link>
                            <Link href="/posventa">
                                <a onClick={() => this.collapse('close')}
                                    className="link-side-bar-content nav-link">Posventa</a>
                            </Link>
                            <Link href="/encuentranos">
                                <a onClick={() => this.collapse('close')}
                                    className="link-side-bar-content nav-link">Encuéntranos</a>
                            </Link>
                            {/* <Accordion >
                        <Card className="border-0">
                            <Accordion.Toggle as={Card.Header} className="border-0 bg-white link-side-bar-content" eventKey="1" onClick={()=>{this.collapse('agenda')}}>
                                <div className={`header-collpase-card ${this.state.collapseAgenda? '':'show'}`} >
                                    <span className="subtitle l-header m-0" >Agenda</span>
                                    <div className="icon-dropdown show"></div>
                                </div>
                            
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body className="d-flex flex-column py-0">
                                    <Link href="/test-drive" >
                                        <a className="subtitle2 l-header">Test drive
                                        </a>
                                    </Link>
                                    <Link href="#" >
                                        <a className="subtitle2 l-header">Talleres
                                        </a>
                                    </Link>
                                   
                                
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className="border-0">
                            <Card.Body className="p-0">
                                <Link href="/financiamiento" >
                                    <a className="link-side-bar-content nav-link">Financiamiento
                                    </a>
                                </Link>
                                
                            </Card.Body>
                        </Card>
                        <Card className="border-0">
                            <Accordion.Toggle as={Card.Header} className="border-0 bg-white link-side-bar-content" eventKey="2" onClick={()=>{this.collapse('exo')}}>
                                <div className={`header-collpase-card ${this.state.collapseExo? '':'show'}`} >
                                    <span className="subtitle l-header m-0">Exonerados</span>
                                    <div className="icon-dropdown"></div>
                                </div>
                            
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="2">
                                <Card.Body className="d-flex flex-column py-0">
                                    <Link href="/exonerado-discapacidad" >
                                        <a className="subtitle2 l-header">Personas con discapacidad
                                        </a>
                                    </Link>
                                    <Link href="/exonerado-diplomatico" >
                                        <a className="subtitle2 l-header">Diplomáticos
                                        </a>
                                    </Link>                
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion> */}
                        </div>
                    </div>
                </aside>

            </>
        )
    }
}
