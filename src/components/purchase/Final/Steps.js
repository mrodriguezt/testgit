import React, { useState, useContext, useEffect } from "react";
import { PurchaseContext } from "../../../context/PurchaseProvider";
import { useMediaQuery } from "react-responsive";

function Stepper({isMobile}) {

  const steps = [
    {
      title: "Configuración",
      icon: "/images/icons/config.png",
      icon2: "/images/icons/config.png",
      path: "./Steps/Step1.js",
    },
    {
      title: "Tus Datos",
      icon: "/images/icons/user.png",
      icon2: "/images/icons/user-g.png",
      path: "./Steps/Step2.js",
    },
    {
      title: "Lo Tengo",
      icon: "/images/icons/listo.png",
      icon2: "/images/icons/listo-g.png",
      path: "./Steps/StepFinal.js",
    },
  ];
  const mediaquery = useMediaQuery({ maxWidth: 464 });
  const [stepsList, setStepd] = useState(steps);
  const [activeStep, setActive] = useState(2);
  const [isMovile, setisMobile] = useState(true);

  useEffect(() => {
    if (mediaquery !== isMobile) {
      setisMobile(mediaquery);
    }
  }, [mediaquery]);

  const stepsc = stepsList.map((step, index) => {
    let step_class = "md-step pl-2";
    if (index == activeStep) step_class = "md-step active pl-2";
    if (index < activeStep) step_class = "md-step active done pl-2";

    let img = step.icon;
    if (step_class == "md-step pl-2") img = step.icon2;

    return (
      <div key={"step" + index} className={step_class}>
        <div className={isMobile ? "md-step-circle pt-2" : "md-step-circle"}>
          <span>
            {isMobile ? (
              <img src={img} style={{ height: "35px", width: "35px" }} />
            ) : (
              <img src={img} />
            )}
          </span>
        </div>
        <div className="md-step-title text-sec">{step.title}</div>
        <div className="md-step-bar-right d-flex justify-content-around">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  });

  return <div>{stepsc}</div>;
}

export default Stepper;
