import React, { useEffect, useContext } from "react";
import { StorageInconcertContext } from "../context/StorageFormInconcert";
const WithClearInconcert = (props) => {
  const { children } = props;
  const {
    resetCotizacion,
    resetTestDrive,
    resetContactoAgencia,
    resetCotizacionRepuesto,
    resetAgendarCita,
  } = useContext(StorageInconcertContext);

  useEffect(() => {
    window.addEventListener(
      "message",
      (event) => {
        console.log(event.origin);
        if (
          event.origin !== "https://chat1-cls4-dal.i6.inconcertcc.com" &&
          event.origin !== "http://chat1-cls4-dal.i6.inconcertcc.com"
        ) {
          return;
        } else {
          if (event.data) {
            if (event.data.length > 1) {
              if (event.data[1] == "SHOW_CHAT_RESPONSE") {
                resetCotizacion,
                  resetTestDrive,
                  resetContactoAgencia,
                  resetCotizacionRepuesto,
                  resetAgendarCita;
              }
            }
          }
        }
      },
      false
    );
  }, []);
  return <>{children}</>;
};
export default WithClearInconcert;
