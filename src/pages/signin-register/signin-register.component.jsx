import React from "react"

import SignIn from "../../components/signin/signin.component.jsx"
import SignUp from "../../components/sign-up/sign-up.component.jsx"

import "./signin-register.styles.scss"

const SignInAndRegisterPage = () => {
  return (
    <div className="signin-register-container">
      <SignIn />
      <SignUp/>
    </div>
  )
}

export default SignInAndRegisterPage