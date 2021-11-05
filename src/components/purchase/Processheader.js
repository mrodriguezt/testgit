import React, { Component } from 'react'
import Steppermy from './Stepper/Stepper.js'

class Processheader extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
}

render(){
  
    return(
      <div className="md-stepper-horizontal orange row mx-0">
        <div className="col-12 d-flex ">
            <Steppermy/>
        </div>
      </div>
    )
}
};

export default Processheader;