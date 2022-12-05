/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Axios from "axios";
/*
Axios is a library it easier to send async HTTP requests and 
helps us perform CRUD operations (Create , Read, Update, Delete)
*/

import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  //MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";

export default RegistrationTest;

function RegistrationTest() {
  const [justifyActive, setJustifyActive] = useState("tab1");

  const handleJustifyClick = (value) => {
    
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  //const FORM = document.getElementById("form");
  const NAME = document.getElementById("name");
  const USERNAME = document.getElementById("username");
  const EMAIL = document.getElementById("email");
  const PASSWORD = document.getElementById("password");
  const LOGINEMAIL = document.getElementById("loginemail");
  const LOGINPASSWORD = document.getElementById("loginpassword");

  const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");
    errorDisplay.innerText = message;
    inputControl.classList.add("error");
    inputControl.classList.remove("success");
  };

  const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");
    errorDisplay.innerText = "";
    inputControl.classList.add("success");
    inputControl.classList.remove("error");
  };

  const validateEmail=EMAIL =>{
    const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return mailformat.test(String(EMAIL).toLowerCase());
  }

  const validateSignup = () => {
    const nameValue = NAME.value.trim();
    const usernameValue = USERNAME.value.trim();
    const emailValue = EMAIL.value.trim();
    const passwordValue = PASSWORD.value.trim();

    if (nameValue === "") {
      setError(NAME, "Name is required");
    } else {
      setSuccess(NAME);
    }

    if (usernameValue === "") {
      setError(USERNAME, "Username is required");
    } else {
      setSuccess(USERNAME);
    }

    if (emailValue === "") {
      setError(EMAIL, "Email is required");
    } else if (!validateEmail(emailValue)) {
      setError(EMAIL, "Invalid email");
    } else {
      setSuccess(EMAIL);
    }

    if (passwordValue === "") {
      setError(PASSWORD, "Password is required");
    } else {
      setSuccess(PASSWORD);
    }
  };

  const validateLogin = () => {
    const loginEmailValue =LOGINEMAIL.value.trim();
    const loginPasswordValue = LOGINPASSWORD.value.trim();
  
    if (loginEmailValue === "") {
      setError(LOGINEMAIL, "Email is required");
    } else {
      setSuccess(LOGINEMAIL);
    }

    if (loginPasswordValue === "") {
      setError(LOGINPASSWORD, "Password is required");
    } else {
      setSuccess(LOGINPASSWORD);
    }
  };
  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-100">
      <MDBTabs
        pills
        justify
        className="mb-3 d-flex flex-row justify-content-between"
      >
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleJustifyClick("tab1")}
            active={justifyActive === "tab1"}
          >
            Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleJustifyClick("tab2")}
            active={(justifyActive === "tab2")}
          >
            Sign up
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane show={justifyActive === "tab1"}>
          <div className="text-center mb-3">
            <p>Log in with:</p>

            <div
              className="d-flex justify-content-between mx-auto"
              style={{ width: "40%" }}
            >
              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#1266f1" }}
              >
                <MDBIcon fab icon="facebook-f" size="sm" />
              </MDBBtn>

              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#1266f1" }}
              >
                <MDBIcon fab icon="twitter" size="sm" />
              </MDBBtn>

              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#1266f1" }}
              >
                <MDBIcon fab icon="google" size="sm" />
              </MDBBtn>

              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#1266f1" }}
              >
                <MDBIcon fab icon="github" size="sm" />
              </MDBBtn>
            </div>

            <p className="text-center mt-3">or:</p>
          </div>

          <form action="/">
            <div className="input-control">
              <label >Email</label>
              <input id="loginemail" type="email" name="email" ></input>
              <div className="error"></div>
            </div>

            <div className="input-control">
              <label >Password</label>
              <input id="loginpassword" type="password" name="password"></input>
              <div className="error"></div>
            </div>
          </form>

          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox
              name="flexCheck"
              value=""
              id="flexCheckDefault"
              label="Remember me"
            />
            <a href="!#">Forgot password?</a>
          </div>

          <MDBBtn className="mb-4 w-100" onClick={validateLogin}>
            Log in
          </MDBBtn>
          <p className="text-center">
            Not a member?{" "}
            <a
              onClick={() => handleJustifyClick("tab2")}
              active={justifyActive === "tab2"}
            >
              Sign up
            </a>
          </p>
        </MDBTabsPane>

        <MDBTabsPane show={justifyActive === "tab2"}>
          <div className="text-center mb-3">
            <p>Sign up with:</p>

            <div
              className="d-flex justify-content-between mx-auto"
              style={{ width: "40%" }}
            >
              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#1266f1" }}
              >
                <MDBIcon fab icon="facebook-f" size="sm" />
              </MDBBtn>

              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#1266f1" }}
              >
                <MDBIcon fab icon="twitter" size="sm" />
              </MDBBtn>

              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#1266f1" }}
              >
                <MDBIcon fab icon="google" size="sm" />
              </MDBBtn>

              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#1266f1" }}
              >
                <MDBIcon fab icon="github" size="sm" />
              </MDBBtn>
            </div>

            <p className="text-center mt-3">or:</p>
          </div>
          <form >
            <div className="input-control">
              <label >Name</label>
              <input id="name" type="text" name="name"></input>
              <div className="error"></div>
            </div>

            <div className="input-control">
              <label>Username</label>
              <input id="username" type="text" name="username"></input>
              <div className="error"></div>
            </div>

            <div className="input-control">
              <label>Email</label>
              <input id="email" type="email" name="email"></input>
              <div className="error"></div>
            </div>

            <div className="input-control">
              <label>Password</label>
              <input id="password" type="password" name="password"></input>
              <div className="error"></div>
            </div>
          </form>

          <div className="d-flex justify-content-center mb-4">
            <MDBCheckbox
              name="flexCheck"
              id="flexCheckDefault"
              label="I have read and agree to the terms"
            />
          </div>

          <MDBBtn className="mb-4 w-100" onClick={validateSignup}>
            Sign up
          </MDBBtn>
        </MDBTabsPane>
      </MDBTabsContent>
    </MDBContainer>
  );
}
