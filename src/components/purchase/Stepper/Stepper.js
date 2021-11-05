import React, { useState, useContext, useEffect  } from 'react'
import { PurchaseContext } from "../../../context/PurchaseProvider";
import { useMediaQuery } from "react-responsive";

function Stepper(props) {
    const mediaquery = useMediaQuery({ maxWidth: 464 });
    const { activeStep, steps } = useContext(PurchaseContext);
    const [stepsList, setStepd] = useState(steps);
    const [isMobile, setisMobile] = useState(true);

    useEffect(() => {
        if (mediaquery !== isMobile) {
            setisMobile(mediaquery)
        }
    }, [mediaquery])
    
    const stepsc = stepsList.map((step, index) => {
        let step_class = 'md-step pl-2'
        if (index == activeStep) step_class = 'md-step active pl-2'
        if (index < activeStep) step_class = 'md-step active done pl-2'

        let img = step.icon
        if (step_class == 'md-step pl-2') img = step.icon2

        return <div key={"step" + index} className={step_class}>
            <div className={isMobile ?"md-step-circle pt-2":"md-step-circle"}><span>{isMobile ?
                <img  src={img} style={{ height: '35px' ,width: '35px'}} />
                :
                <img src={img} />
            }</span></div>
            <div className="md-step-title text-sec">{step.title}</div>
            <div className="md-step-bar-right d-flex justify-content-around">
                <div ></div>
                <div ></div>
                <div ></div>
            </div>
        </div>
    });

    return (
        <div>
            {stepsc}
        </div>
    )

};

export default Stepper;