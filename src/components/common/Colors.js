import React, { useContext, useState, useEffect } from "react";
import { PurchaseContext } from "../../context/PurchaseProvider";
//
class Colors extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: props.selected,
      colors: props.colors,
    };
  }
  handleClick = (e, index) => {
    this.setState({ selected: index });
    this.props.onClick(index);
  };

  render() {
    const colores = this.state.colors.map((color, index) => {
      let select = "color";
      if (index == this.state.selected) select = "color selected";
      return (
        <div key={"color" + index} className="d-block text-center px-2">
          <div
            className={`mx-0 ${select}`}
            onClick={(e) => this.handleClick(e, index)}
          >
            <div
              style={{ backgroundColor: color.color?.codigo ?? color.codigo }}
            ></div>
          </div>
          {index == this.state.selected && color.color && (
            <p className="nombre-color">{color.color?.nombre}</p>
          )}
        </div>
      );
    });

    return <div className=" d-flex align-items-center">{colores}</div>;
  }
}

function Colores(props) {
  const [selected, setSelected] = useState(props.selected);
  const [colors, setColors] = useState(props.colors);
  const handleClick = (e, index) => {
    setSelected(index);
    props.onClick(index);
  };
  useEffect(() => {
    setSelected(props.selected)
    setColors(props.colors)
  }, [props.selected, props.colors])
  const colores = colors.map((color, index) => {
    let select = "color";
    if (index == selected) select = "color selected";
    return (
      <div key={"color" + index} className="d-block text-center px-2">
        <div
          className={`mx-0 ${select}`}
          onClick={(e) => handleClick(e, index)}
        >
          <div
            style={{ background: `linear-gradient(${color.codigo} 50%,${color.codigo2} 50%)` }}
          ></div>
        </div>
        {index == selected && color.color && (
          <p className="nombre-color">{color.color?.nombre}</p>
        )}
      </div>
    );
  });

  return <div className="flex-wrap d-flex align-items-center">{colores}</div>;
}

export default Colores;
