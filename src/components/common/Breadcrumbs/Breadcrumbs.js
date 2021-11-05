import React from "react";
import Link from 'next/link'
class Breadcrumbs extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    const routes = this.props.routes.map((route, index, { length }) => {
      let icon = ">"
      if (index + 1 === length) icon = ""

      return <div className="breadcrumb" key={"bread"+index}>
        <Link href={route.path}>
          <a className="subtitle">
            {route.title}
          </a>
        </Link>
        <span>{icon}</span>
      </div>
    });

    return (
      <div className={`m-0 px-md-5 col-12 ${this.props.paddingSeparador} header-breadcrumb`} >
        <div className="row col-12 mx-0 px-lg-5 pt-1">
            {routes}
        </div>
      </div>
    )
  }
}
Breadcrumbs.defaultProps = {
  paddingSeparador: 'py-md-4'
};
export default Breadcrumbs;