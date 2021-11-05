import React, { useContext } from 'react'
import { PurchaseContext } from "../../context/PurchaseProvider";

//class Stepcontainer extends Component {
function Stepcontainer (props) {
  
  const { activeStep, steps } = useContext(PurchaseContext);

  /*constructor(props) {
    super(props);

    this.state = {
        step: 0,
        selected_model:0
    }
}
handleClick = (index) =>{
  this.setState({ selected_model: index})
  this.props.onClick(index)
}

onNext = (step) =>{
  this.setState({ step: step})
  this.props.onNext(step)
}*/


  let step_data = steps[activeStep]

  const Step= require(`${step_data.path}`).default;
  return(
    <div className={props.isMobile?'step-container col-12':"step-container col-11"} id="step-container">
      <Step/>
    </div>
  )
};

export default Stepcontainer;