import React from "react"
import { auth } from "../../firebase/firebase.utils.js"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

import CartIcon from "../cart-icon/cart-icon.component"
import CartDropDown from "../cart-dropdown/cart-dropdown.component.jsx"

import { ReactComponent as Logo } from "../../assets/corwn.svg"
import "./header.styles.scss"

const Header = ({ currentUser, hidden }) => {
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
        <CartIcon />
      </div>
       {hidden ? null : <CartDropDown />}
    </div>
  )
}

// REDUX STUFF
// We want to be able to pass our header component the "currentUser" property from our state
// With redux this state comes from our root reducer

// We create a function which receives state from the root reducer
// and creates a new object with this data
const mapStateToProps = ({user: {currentUser}, cart: { hidden }} ) => ({
  currentUser,
  hidden
})

// Connect is a higher order component (a fuction which takes a component as an arguement, and boosts it into a boosted component)
// This receives our state from "mapStateToProps" function which then passes it to the Header component

export default connect(mapStateToProps)(Header)