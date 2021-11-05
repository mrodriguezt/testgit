import React,{useEffect,useState,forwardRef,useImperativeHandle} from 'react'
import styles from './Loader.module.css';
import { useRouter } from "next/router";
 const  Loader =  forwardRef((props, ref) =>{
    const [show,setShow] = useState(true);
    useImperativeHandle(ref,()=>{
        return {
            showLoader:(mostrar)=>setShow(mostrar)
        }
    });
    const router = useRouter();
    
    useEffect(()=>{


        let content= document.getElementById('content-template');
        content.classList.add('overflow-hidden');

        document.body.classList.add('overflow-hidden');

        let botonChat = document.getElementsByClassName('webchatContainer')[0];

        botonChat?.classList?.add('open-menu-mobile');

        window.addEventListener('load', (event) => {
            setShow(false);
            let content= document.getElementById('content-template');
            content.classList.remove('overflow-hidden');
    
            document.body.classList.remove('overflow-hidden');

            let botonChat = document.getElementsByClassName('webchatContainer')[0];
            botonChat?.classList?.remove('open-menu-mobile');
             
           
        });

        const handleStart = (url) =>{
            console.log("handleStart");
            let content= document.getElementById('content-template');
            content.classList.add('overflow-hidden');
    
            document.body.classList.add('overflow-hidden');
            setShow(true) ;
            let botonChat = document.getElementsByClassName('webchatContainer')[0];

            botonChat?.classList?.add('open-menu-mobile');

        };
        const handleComplete =
        (url) =>{
             console.log("handleComplete");
            let content= document.getElementById('content-template');
            content.classList.remove('overflow-hidden');
    
            document.body.classList.remove('overflow-hidden');
            
            let botonChat = document.getElementsByClassName('webchatContainer')[0];
            botonChat?.classList?.remove('open-menu-mobile');
           setShow(false); 

        };
        
        
         

       

        router.events.on('routeChangeStart', handleStart)
        router.events.on('routeChangeComplete', handleComplete)
        router.events.on('routeChangeError', handleComplete)
        return () => {
            router.events.off('routeChangeStart', handleStart)
            router.events.off('routeChangeComplete', handleComplete)
            router.events.off('routeChangeError', handleComplete)
        }


    },[]);
    return (
        <div className={`${styles.background} ${show ? '':'d-none'}`}>
            <div className={`${styles.loader} la-3x`}>
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
        </div>
    )
});



export default Loader;