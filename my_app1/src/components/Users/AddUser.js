import React from "react";
import { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "..//UI/Button";
import ErroModal from "..//UI/ErrorModal";

const AddUser = (props) => {
  const [enterdUsername, SetenteredUsername] = useState("");
  const [enterdAge, SetenteredAge] = useState("");
  const [error, setError] = useState();

  const AddUserHandler = (event) => {
    event.preventDefault();
    if (enterdUsername.trim().length === 0 || enterdAge.trim().length === 0) {
      setError({ title: "Input Error", message: "Enter valid input value" });
      return;
    }
    if (+enterdAge < 1) {
      setError({ title: "Input Error Age", message: "Enter valid Age value" });
      return;
    }
    props.onAddUser(enterdUsername, enterdAge);
    SetenteredAge("");
    SetenteredUsername("");
  };

  const UsernamechangeHandler = (event) => {
    SetenteredUsername(event.target.value);
  };
  const AgechangeHandler = (event) => {
    SetenteredAge(event.target.value);
  };
  const Errorhandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErroModal
          title={error.title}
          message={error.message}
          onConfirm={Errorhandler}
        ></ErroModal>
      )}
      <Card className={classes.input}>
        <form onSubmit={AddUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enterdUsername}
            onChange={UsernamechangeHandler}
          />
          <label htmlFor="age">Age(Years)</label>
          <input
            id="age"
            type="number"
            value={enterdAge}
            onChange={AgechangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
