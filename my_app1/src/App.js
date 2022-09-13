import logo from "./logo.svg";
import "./App.css";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";
import { useState } from "react";

// function App() {
//   return <div className="App"></div>;
// }
const App = () => {
  const [UsersList, SetUsersList] = useState([]);

  const AddUserHandler = (uName, uAge) => {
    SetUsersList((prevUserList) => {
      return [
        ...prevUserList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={AddUserHandler}></AddUser>
      <UserList users={UsersList}></UserList>
    </div>
  );
};

export default App;
