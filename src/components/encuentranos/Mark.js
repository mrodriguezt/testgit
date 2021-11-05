import React, { Component } from 'react';
import { Marker } from "react-google-maps"

class Mark extends React.PureComponent {
  constructor(props) {
    super(props);
    //this.handleMouseMove = this.handleMouseMove.bind(this);
    let icon="/images/icons/markmap.png"
    if(props.selected)icon="/images/icons/markmapbig.png"

    this.state = {
      index: props.index,
      isMarkerShown: props.visible,
      selected: props.selected,
      lat: props.lat, 
      lng: props.lng,
      icon: icon
    }
  }

  componentDidMount() {
    
  }

  handleMarkerClick = () => {
    //this.setState({ isMarkerShown: false })
    if(!this.state.selected)this.setState({ selected: true})
    else this.setState({ selected: false})
    
    this.props.onClickMark(this.state.index, this.state.selected) 
  }

  render() {
    return (
      <Marker
        onClick={this.handleMarkerClick}
        position={{ lat: this.state.lat, lng: this.state.lng }}
        visible={this.state.isMarkerShown}
        icon={this.state.icon}
      >
        {this.props.children}
      </Marker>
    )
  }
}

export default Mark;