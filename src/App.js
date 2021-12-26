import React from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router";
import { createStructuredSelector } from "reselect";
import "./App.css";
import Header from "./components/header/header.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shoppage.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.actions";
class App extends React.Component {
  unsuscribeFromAuth = null;

  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }

  componentWillUnmount() {
    this.unsuscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            path="/signin"
            render={() => {
              return this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateTopProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateTopProps, mapDispatchToProps)(App);
