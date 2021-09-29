import React from "react";
import { Switch, Route } from "react-router-dom";
import { auth } from "./firebase/firebase.utils.js";

import HomePage from "./pages/homepage/homepage.component.jsx";
import ShopPage from "./pages/shop/shop.component.jsx";
import SignInAndRegisterPage from "./pages/signin-register/signin-register.component.jsx";
import Header from "./components/header/header.component.jsx";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndRegisterPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
