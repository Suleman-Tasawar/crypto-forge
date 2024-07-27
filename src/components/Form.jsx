import { Button, Card } from "@mui/material";
import React, { useState } from "react";
import { useNavigate,Navigate } from "react-router-dom";
import { ID } from "appwrite";
import { RegistrationContext } from "../context/RegistrationContext";
import { useContext } from "react";
import { account } from "../lib/auth";
import { FormControl } from "@mui/material";
import PasswordField from "./PasswordField";
import EmailField from "./EmailField";

function Form({ name }) {
  const { passwordCorrect, emailCorrecct, email, password } =
    useContext(RegistrationContext);
  const [submission, setSubmission] = useState(null);
  const [submissionText, setSubmissionText] = useState(name);
  const [error, setError] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const  navigateToAccount= ()=>{
    navigate("/account");
  }

  const handleLogin = async () => {
    try {
      setSubmissionText("In Process");
      setSubmission(true);
      let responce = await account.createEmailPasswordSession(email, password);
      localStorage.setItem("auth", JSON.stringify(true));
      setSubmission(false);
      setSubmissionText(name);
      navigateToAccount()
      console.log("works here")
    } catch (error) {
      setError(true);
      setErrorMessage(error.message || "An unknown error occurred");
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
        const isAuthenticated = true;
        localStorage.setItem("authStatus", JSON.stringify(isAuthenticated));
        setSubmission(false);
        setSubmissionText(name);
        navigateToAccount()
      } else {
        return userAccount;
      }
    } catch (error) {
      setError(true);
      setErrorMessage(error.message || "An unknown error occurred");
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
      </FormControl>
    </Card>
  );
}

export default Form;
