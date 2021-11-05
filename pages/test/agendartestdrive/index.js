import React from "react";
import { useRouter } from "next/router";
import GeneralLayout from "../../../layouts/GeneralLayout";
// Forms
import ScheduleTestDrive from "../../../src/components/forms/ScheduleTestDrive";
import ScheduleTallerForm from "../../../src/components/forms/ScheduleTaller";
import ModalMessage from "../../../src/components/common/ModalMessage";
import LoaderForm from "../../../src/components/common/LoaderForm";

export default function form() {
  const [textModal, setTextModal] = React.useState(
    "Estamos presentando inconvenientes, por favor vuelva a intentarlo en unos minutos."
  );
  const [modal, setModal] = React.useState(false);
  const [showLoader, setShowLoader] = React.useState(false);
  const router = useRouter();
  const { form } = router.query;
  return (
    <GeneralLayout toTop={false}>
      <div className="container">
        <div className=" mx-lg-5 px-lg-5 my-4 mx-3">
          <div className=" mx-lg-5 px-lg-5">
            <div className="mx-lg-5 px-lg-5">
              {
                //Tesdrive
                //form == "agendartestdrive" && (
                  <>
                    <h1>Test Drive</h1>
                    <ScheduleTestDrive
                      showModal={(bol) => setModal(bol)}
                      showLoader={(bol) => setShowLoader(bol)}
                      setTextModal={(text) => setTextModal(text)}
                    />
                  </>
                //)
              }
              {
                /*Agendar Cita Taller
                form == "agendarcitataller" && (
                  <>
                    <h1>Agendar Cita Taller</h1>
                    <ScheduleTallerForm
                      showModal={(bol) => setModal(bol)}
                      showLoader={(bol) => setShowLoader(bol)}
                      setTextModal={(text) => setTextModal(text)}
                    />
                  </>
                )*/
              }
            </div>
          </div>
        </div>
      </div>
      <ModalMessage
        text={textModal}
        show={modal}
        onClick={(bol) => setModal(bol)}
      />
      <LoaderForm show={showLoader} />
    </GeneralLayout>
  );
}
