import React, { Component } from 'react'
import Image from 'next/image'

class Feature extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const features = this.props.features.map((feature, index) => {
      let class1 = 'col-sm-12 my-auto order-1 pt-3 px-1'
      let class2 = 'col-sm-12 my-auto order-2 h-410'
      let row = 'col-6 px-0 mx-0 mb-3 space-between'
      if (index%2 === 0 ) {
        row = 'col-6 px-0 mx-0 mb-3 pr-4'
      }
      return <div className={row} key={index}>
        <div className={class2}>
          <Image
            className="d-block "
            src={feature.image}
            layout="fill" 
            objectFit="cover" 
          />
          <span></span>
        </div>
        <div className={class1}>
          <label className="title1">{feature.title}</label>
          <label className="subtitle2 mt-3">{feature.description}</label>
        </div>

      </div>
    });

    return (
      <div className="col-12 row px-0 mx-0">
        { features}
      </div>
    );
  }
}

export default Feature