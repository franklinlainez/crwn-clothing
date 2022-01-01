import React, { useState } from "react";
import { connect } from "react-redux";
import {
  emailSignInStart,
  googleSignInStart,
} from "../../redux/user/user.actions";
import CustomButton from "../custom-buttom/custom-buttom.component";
import FormInput from "../form-input/form-input.component";
import { SignInContainer, Title, ButtonsContainer } from "./sign-in.styles.jsx";

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = userCredentials;

    emailSignInStart(email, password);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignInContainer>
      <Title>I already have an account</Title>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          handleChange={handleChange}
          type="email"
          value={email}
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          handleChange={handleChange}
          value={password}
          required
          label="password"
        />
        <ButtonsContainer>
          <CustomButton type="submit">Sign In</CustomButton>

          <CustomButton
            type="button"
            isGoogleSignIn
            onClick={googleSignInStart}
          >
            Sign In With Google
          </CustomButton>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
