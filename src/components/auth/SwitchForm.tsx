import React, { useState } from "react";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";

type flagShow = Boolean;

export default function SwitchForm() {
  const [showForm, setShowForm] = useState<flagShow>(true);

  const showLoginFormHandler = () => {
    setShowForm(true);
  };

  const showSignupFormHandler = () => {
    setShowForm(false);
  };

  return (
    <>
      {showForm ? (
        <LoginForm showSignupFormHandler={showSignupFormHandler} />
      ) : (
        <SignupForm showLoginFormHandler={showLoginFormHandler} />
      )}
    </>
  );
}
