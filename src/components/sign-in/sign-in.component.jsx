import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {signInWithGoogle} from "../../firebase/firebase.utils";

import "./sign-in.styles.scss";

import {getAuth, signInWithEmailAndPassword} from "firebase/auth";

const auth = getAuth();
const email = "";
const password = "";

signInWithEmailAndPassword(auth, email, password)
  .then(userCredential => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch(error => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  // handleSumbit = async event => {
  //   event.preventDefault();
  //
  //   const {email, password} = this.state;
  //
  //   try {
  //     await auth.signInWithEmailAndPassword(email, password);
  //     this.setState({email: "", password: ""});
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  handleChange = event => {
    const {value, name} = event.target;

    this.setState({[name]: value});
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account </h2>
        <span>Sign in with your email and password</span>

        <form onSumbit={this.handleSumbit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="email"
            placeholder="Email"
            required
          />
          <FormInput
            name="password"
            type="password"
            handleChange={this.handleChange}
            value={this.state.password}
            label="password"
            placeholder="Password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit"> Sign In </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              {" "}
              Sign In with Google{" "}
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
