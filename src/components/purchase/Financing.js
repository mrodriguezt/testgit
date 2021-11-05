import {useContext} from "react"
import {Animated} from "react-animated-css";
import { useMediaQuery } from 'react-responsive'
import Breadcrumbs from '../common/Breadcrumbs'
import Galleryproduct from '../common/Galleryproduct.js'
import Processheader from '../purchase/Processheader.js'
import Stepcontainer from '../purchase/Stepcontainer.js'
import { PurchaseContext } from "../../context/PurchaseProvider"

function Financing(props){
    const { headerSteps, saveHeader } = useContext(PurchaseContext)/*Context*/
    const isMobile = useMediaQuery({ maxWidth: 464 })
    const handleChange = (value) =>saveHeader(true)

    const routes = [
      {
        path: '/',
        title: 'Inicio'
      },
      {
        path: '#',
        title: 'Financiamiento'
      }
    ]    
    

    let header=null
    if ((isMobile) && (headerSteps)) {
      header= <Processheader isMobile={isMobile}/>
    } else {
      header= <Breadcrumbs routes={ routes }/>
    }
        
    return (<div className="bg-white pb-4">
            {header}          

            <div className="container  ">
              <div className="row ">
                  {((isMobile) && (headerSteps)) &&
                  <div className="col-12">
                    <Breadcrumbs routes={ routes }/>
                  </div>
                  }

                  <div className="col-lg-6 col-md-12 col-sm-12 m-auto">
                    {headerSteps &&
                    <Animated animationIn="fadeIn" animationOut="zoomOutDown" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                      <Galleryproduct />
                    </Animated>}

                    {!headerSteps &&
                    <img src="/images/silueta_card.png" className="img-fluid mt-sm-2"/>}
                  </div>
                  <div className="col ml-lg-4">
                    <div className="row process">

                    {((!isMobile) && (headerSteps)) &&
                      <Animated animationIn="slideInDown" animationOut="zoomOutDown" animationInDuration={400} animationOutDuration={400} isVisible={true}>
                      <Processheader/>
                      </Animated>
                    }                      
                      <Stepcontainer />
                    </div>
                  </div>                
              </div>
            </div>
          </div>
    )
}

export default Financing