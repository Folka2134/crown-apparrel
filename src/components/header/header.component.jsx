import React from "react"
import { auth } from "../../firebase/firebase.utils.js"

import { Link } from "react-router-dom"

import { ReactComponent as Logo } from "../../assets/corwn.svg"
import "./header.styles.scss"

const Header = ({ currentUser }) => {
  return (
    <div className="header-container">
      <Link className="logo-container" to='/'>
        <Logo className="logo"/>
      </Link>
      <div className="options-container">
        <Link className="option" to="/shop">SHOP</Link>
        <Link className="option" to="/shop">CONTACT</Link>
        {
          currentUser ? (
          <div className="option" onClick={() => auth.signOut()}> SIGN OUT</div>
          ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
         )
        }
      </div>
    </div>
  )
}

export default Header