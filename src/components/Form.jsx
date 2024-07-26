import { Button, Card } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ID } from "appwrite";
import Alert from "@mui/material/Alert";
import PasswordField from "./PasswordField";
import EmailField from "./EmailField";
import { RegistrationContext } from "../context/RegistrationContext";
import { useContext } from "react";
import { account } from "../lib/auth";

function Form({ name }) {
  const { passwordCorrect, emailCorrecct } = useContext(RegistrationContext);
  const { email, password } = useContext(RegistrationContext);
  const [submission, setSubmission] = useState(null);
  const [submissionText, setSubmissionText] = useState(name);
  const [error, setError] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      setSubmissionText("In Process");
      setSubmission(true);
      let responce = await account.createEmailPasswordSession(email, password);
      localStorage.setItem("auth", true);
      setSubmission(false);
      setSubmissionText(name);
      navigate('/account');
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
        navigate('/account');
      } else {
        return userAccount;
      }
    } catch (error) {
      setError(true);
      setErrorMessage(error.message || "An unknown error occurred");
    }
  };

  return (
    <Card className="flex flex-col items-center justify-center m-[5rem] gap-5 w-[30rem] p-[5rem] pt-0">
      <h2 className="text-2xl font-semibold">{name}</h2>
      <EmailField />
      <PasswordField />
      <Button
        onClick={name === "Login" ? handleLogin : handleRegistration}
        disabled={!passwordCorrect && !emailCorrecct && submission == true}
        style={{ marginTop: "2rem" }}
        variant="outlined"
      >
        {submissionText}
      </Button>
      {submission ? (
        <Alert variant="filled" severity="success">
          {name} sucess
        </Alert>
      ) : null}
    </Card>
  );
}

export default Form;
