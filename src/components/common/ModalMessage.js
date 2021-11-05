import React, { useState, useEffect } from "react"
import { Modal, Button } from "react-bootstrap"

function ModalMessage(props) {
    const [show, setShow] = useState(false);

    const handleShow = (showNew) => {
        setShow(showNew);
        if (props.onClick) props.onClick(showNew)
    }

    useEffect(() => {
        setShow(props.show);
    }, [props.show]);

    return (
        <Modal show={show} onHide={() => handleShow(false)} className="modal-message">
            <Modal.Header closeButton>
                <Modal.Title>
                    <img
                        src="/logo.png"
                        height="25"
                        className="d-inline-block align-top"
                        alt="Suzuki"
                    />
                </Modal.Title>
            </Modal.Header>
            <Modal.Body
                dangerouslySetInnerHTML={{
                    __html: props.text
                }}/>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => handleShow(false)}>
                    Cerrar
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalMessage;