import React from "react";
import Link from 'next/link'


class Headercontact extends React.Component {
    render() {
      return(
        <div className=" m-0 b-greyl px-5 header2" >
          <div className="row">
              <div className="col-5 pt-1">
                <img
                    className="mr-2"
                    src="/images/icons/back_arrow.png"
                    alt="Regresar"
                />
                <span className="subtitle">Contáctenos</span>
              </div>
              <div className="col d-flex flex-row-reverse">
                  <Link href="/talleres">
                    <a>
                        <button className={this.props.workshop ? "btn btn-header active" : "btn btn-header"}>Talleres</button> 
                    </a>
                  </Link>
                  <Link href="/talleres">
                    <a>
                    <button className={this.props.agencies ? "btn btn-header mr-2 active" : "btn btn-header mr-2"}>Agencias</button>
                    </a>
                  </Link>
                  <Link href="/talleres">
                    <a>
                      <button className={this.props.contact ? "btn btn-header mr-3 active" : "btn btn-header mr-3"}>Déjanos tu mensaje aquí</button>
                    </a>
                  </Link>
              </div>
            </div>
          </div>
      )
    }
}
    
export default Headercontact;