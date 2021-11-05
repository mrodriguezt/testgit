import React,{useEffect,useState,forwardRef,useImperativeHandle} from 'react'
import styles from './Loader.module.css';
import { useRouter } from "next/router";
import  { Modal, Button }  from "react-bootstrap";
function LoaderForm(props){
    const [show, setShow] = useState(false);

    const handleShow = (showNew) =>{
        setShow(showNew);
        if(props.onClick)props.onClick(showNew)
    }

    useEffect(() => {

        let modal = document.getElementsByName("LoaderForm");
        if (modal.length > 0 && modal) {
            modal.forEach((m)=>{
                m.childNodes[0].classList.remove("modal-content")
            });
        }
        setShow(props.show);
    }, [props.show,show]);

    return (
        <Modal id="LoaderForm" name="LoaderForm" show={show}  onHide={()=>handleShow(true)} centered>
            <div className={` ${styles.loader}${''} la-3x`}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </Modal>
    )
};

export default LoaderForm;