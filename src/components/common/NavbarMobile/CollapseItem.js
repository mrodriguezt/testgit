import React, { Component } from 'react'
import  { Accordion, Card, Button }  from "react-bootstrap";
import { NavLink,Link } from "react-router-dom"
import './CollapseItem.css'
export default class CollapseItem extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const listLink = this.props.Links.map((link)=>{
            <NavLink to={link.path} className="subtitle2 l-header">{link.name}</NavLink>
        });
        
        return (
            <Accordion >
                        <Card className="border-0">
                            <Accordion.Toggle as={Card.Header} className="border-0 bg-white" eventKey={this.props.EventId}>
                                <div className="header-collpase-card" >
                                    <span className="subtitle l-header m-0">{this.props.Titulo}</span>
                                    <div className="icon-dropdown"></div>
                                </div>
                            
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey={this.props.EventId}>
                                <Card.Body className="d-flex flex-column py-0">
                                    {listLink}
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
            </Accordion>
        )
    }
}
