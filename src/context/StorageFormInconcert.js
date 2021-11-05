import React, { createContext, useState, useEffect } from "react";
//import useLocalStorageState from "use-local-storage-state";
import useSessionstorage from "@rooks/use-sessionstorage";
export const StorageInconcertContext = createContext();

export default function StorageFormInconcert({ children }) {
  const initialValueCotizacion = {
    cm: "",
    cv: "",
    cc: "",
    cp: "",
    ctpa: "",

    cn: "",
    cta: "",
    cte: "",
    ce: "",
  };
  const initialValueTestDrive = {
    tm: "",
    tv: "",
    ti: "",
    tn: "",
    tap: "",
    tt: "",
    td: "",
    te: "",
    tag: "",
    tc: "",
    tf: "",
    th: "",
    tac: "",
    tcu: ""
  };

  const initialValueRepuesto = {
    ctr: "",
    ctrm: "",
    ctra: "",
    ctrn: "",
    ctrl: "",
    ctrc: "",
    ctre: "",
    ctrt: "",
  };

  const initialValueContacto = {
    cci: "",
    cco: "",
    cna:"",
    ci: "",
    cno: "",
    ccr: "",
    ctl: "",
    cpl: "",
  };

  const initialValueCita = {
    acg: "",
    acn: "",
    aca: "",
    acc: "",
    act: "",
    agf: "",
    agh: ""
  };

  const [cotizacionCar, saveCotizacionInconcert] = useSessionstorage(
    "cotizacionCar",
    initialValueCotizacion
  );
  const resetCotizacion = () => {
    saveCotizacionInconcert(initialValueCotizacion);
  };

  const [cotRepuesto, saveCotizacionRepuesto] = useSessionstorage(
    "cotRepuesto",
    initialValueRepuesto
  );
  const resetCotizacionRepuesto = () => {
    saveCotizacionRepuesto(initialValueRepuesto);
  };

  const [contactoAgencia, saveContactoAgencia] = useSessionstorage(
    "contactoAgencia",
    initialValueContacto
  );
  const resetContactoAgencia = () => {
    saveContactoAgencia(initialValueContacto);
  };

  const [testDrive, saveTestDrive] = useSessionstorage(
    "testDriveInconcert",
    initialValueTestDrive
  );
  const resetTestDrive = () => {
    saveTestDrive(initialValueTestDrive);
  };

  const [agendarCita, saveAgendarCita] = useSessionstorage(
    "agendarCita",
    initialValueCita
  );
  const resetAgendarCita = () => {
    saveAgendarCita(initialValueCita);
  };

  return (
    <StorageInconcertContext.Provider
      value={{
        cotRepuesto,
        saveCotizacionRepuesto,
        resetCotizacionRepuesto,
        contactoAgencia,
        saveContactoAgencia,
        resetContactoAgencia,
        testDrive,
        saveTestDrive,
        resetTestDrive,
        agendarCita,
        saveAgendarCita,
        resetAgendarCita,
        cotizacionCar,
        saveCotizacionInconcert,
        resetCotizacion,
        initialValueCotizacion,
        initialValueTestDrive,
        initialValueRepuesto,
        initialValueContacto,
      }}
    >
      {children}
      <form id="inconcert_TptFVX2xLy">
        <input
          type="hidden"
          id="ctr"
          name="ctr"
          value={cotRepuesto?.ctr}
        ></input>
        <input
          type="hidden"
          id="ctrm"
          name="ctrm"
          value={cotRepuesto?.ctrm}
        ></input>
        <input
          type="hidden"
          id="ctra"
          name="ctra"
          value={cotRepuesto?.ctra}
        ></input>
        <input
          type="hidden"
          id="ctrn"
          name="ctrn"
          value={cotRepuesto?.ctrn}
        ></input>
        <input
          type="hidden"
          id="ctrc"
          name="ctrc"
          value={cotRepuesto?.ctrc}
        ></input>
        <input
          type="hidden"
          id="ctre"
          name="ctre"
          value={cotRepuesto?.ctre}
        ></input>
        <input
          type="hidden"
          id="ctrt"
          name="ctrt"
          value={cotRepuesto?.ctrt}
        ></input>

        <input type="hidden" id="cci" name="cci" value={contactoAgencia?.cci} />
        <input type="hidden" id="cco" name="cco" value={contactoAgencia?.cco} />
        <input type="hidden" id="ci" name="ci" value={contactoAgencia?.ci} />
        <input type="hidden" id="cno" name="cno" value={contactoAgencia?.cno} />
        <input type="hidden" id="ccr" name="ccr" value={contactoAgencia?.ccr} />
        <input type="hidden" id="ctl" name="ctl" value={contactoAgencia?.ctl} />
        <input type="hidden" id="cpl" name="cpl" value={contactoAgencia?.cpl} />

        <input type="hidden" id="tm" name="tm" value={testDrive?.tm} />
        <input type="hidden" id="tv" name="tv" value={testDrive?.tv} />
        <input type="hidden" id="ti" name="ti" value={testDrive?.ti} />
        <input type="hidden" id="tn" name="tn" value={testDrive?.tn} />
        <input type="hidden" id="tap" name="tap" value={testDrive?.tap} />
        <input type="hidden" id="tt" name="tt" value={testDrive?.tt} />
        <input type="hidden" id="te" name="te" value={testDrive?.te} />
        <input type="hidden" id="tag" name="tag" value={testDrive?.tag} />
        <input type="hidden" id="tc" name="tc" value={testDrive?.tc} />
        <input type="hidden" id="tf" name="tf" value={testDrive?.tf} />
        <input type="hidden" id="th" name="th" value={testDrive?.th} />
        <input type="hidden" id="tac" name="tac" value={testDrive?.tac} />
        <input type="hidden" id="td" name="td" value={testDrive?.td} />

        <input type="hidden" id="cm" name="cm" value={cotizacionCar?.cm} />
        <input type="hidden" id="cv" name="cv" value={cotizacionCar?.cv} />
        <input type="hidden" id="cc" name="cc" value={cotizacionCar?.cc} />
        <input type="hidden" id="cp" name="cp" value={cotizacionCar?.cp} />
        <input
          type="hidden"
          id="ctpa"
          name="ctpa"
          value={cotizacionCar?.ctpa}
        />
        <input type="hidden" id="cn" name="cn" value={cotizacionCar?.cn} />
        <input type="hidden" id="cta" name="cta" value={cotizacionCar?.cta} />
        <input type="hidden" id="cte" name="cte" value={cotizacionCar?.cte} />
        <input type="hidden" id="ce" name="ce" value={cotizacionCar?.ce} />

        <input type="hidden" id="ag" name="ag" value={agendarCita?.ag} />
        <input type="hidden" id="agf" name="agf" value={agendarCita?.agf} />
        <input type="hidden" id="agh" name="agh" value={agendarCita?.agh} />
      </form>
    </StorageInconcertContext.Provider>
  );
}
