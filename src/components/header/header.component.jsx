import React from "react"

import { Link } from "react-router-dom"

import { ReactComponent as Logo } from "../../assets/corwn.svg"
import "./header.styles.scss"

const Header = () => {
  return (
    <div className="header-container">
      <Link className="logo-container" to='/'>
        <Logo className="logo"/>
      </Link>
      <div className="options-container">
        <Link className="option" to="/shop">SHOP</Link>
        <Link className="option" to="/shop">CONTACT</Link>
      </div>
    </div>
  )
}

export default Header