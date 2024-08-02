import React, { useEffect, useState ,useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import { ID } from "appwrite";
import { RegistrationContext } from "../context/RegistrationContext";
import { AuthContext } from "../context/AuthContext";
import { account } from "../lib/auth";
import { FormControl } from "@mui/material";
import { Button, Card } from "@mui/material";
import PasswordField from "./PasswordField";
import EmailField from "./EmailField";

function Form({ name }) {
  //getting the state from context api
  const { passwordCorrect, emailCorrecct, email, password ,clearFields} =
    useContext(RegistrationContext);
  const { authStatus, setAuthStatus } = useContext(AuthContext);
  //hook for managing the page effectively
  const [submission, setSubmission] = useState(null);
  const [submissionText, setSubmissionText] = useState(name);
  const [error, setError] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  //react-router-dom navigate to redirect users
  const navigate = useNavigate();

  const navigateToAccount = () => {
    navigate("/account");
  };

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      setSubmissionText("In Process");
      setSubmission(true);
      
      let responce = await account.createEmailPasswordSession(
        email,
        password
      );
      if (responce) {
          setAuthStatus(true);
          setSubmission(false);
          navigateToAccount();
        }
    } catch (error) {
      setError(true);
      setErrorMessage(error.message || "An unknown error occurred");
    } finally {
      setSubmissionText(name);
      clearFields()
    }
  };

  const handleRegistration = async () => {
    try {
      setSubmissionText("In Process");
      setSubmission(true);

        const nameReg = email.replace("@gmail.com", "");
        const userAccount = await account.create(
          ID.unique(),
          email,
          password,
          nameReg
        );
        if (userAccount) {
          setAuthStatus(true);
          setSubmission(false);

          navigateToAccount();
        } else {
          return userAccount;
        }
    } catch (error) {
      setError(true);
      setErrorMessage(error.message || "An unknown error occurred");
    }
    finally{
      setSubmissionText(name)
      clearFields()
    }
  };

  return (
    <Card className="flex flex-col items-center justify-center m-[5rem] gap-5 w-[30rem] px-24 py-10">
      <h2 className="text-2xl font-semibold">{name}</h2>
      {error ? (
        <p className="text-sm italic text-red-500 font-semibold">
          {errorMessage}
        </p>
      ) : null}
      <FormControl>
        <EmailField />
        <PasswordField />
        <Button
          onClick={name === "Login" ? handleLogin : handleRegistration}
          disabled={!passwordCorrect && !emailCorrecct && submission == true}
          style={{ marginTop: "2rem", width: "150px", height: "35px" }}
          variant="outlined"
        >
          {submissionText}
        </Button>
        <div className="mt-2 text-blue-600 underline">
          {
            name==="Register"?(<Link to="/LoginMenu/Login">login here?</Link>):(<Link to="/LoginMenu/Register">Register here?</Link>)
          }
        </div>
      </FormControl>
    </Card>
  );
}

export default Form;
