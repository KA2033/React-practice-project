import React from "react";
import { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "..//UI/Button";
import ErroModal from "..//UI/ErrorModal";

const AddUser = (props) => {
  const [enterdUsername, SetenteredUsername] = useState("");
  const [enterdAge, SetenteredAge] = useState("");

  const AddUserHandler = (event) => {
    event.preventDefault();
    if (enterdUsername.trim().length === 0 || enterdAge.trim().length === 0) {
      return;
    }
    if (+enterdAge < 1) {
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

  return (
    <div>
      <ErroModal
        title="An error occrred"
        message="something went wrong"
      ></ErroModal>
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
