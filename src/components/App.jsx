import React from "react";
import Header from "./Header";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
import ToDoFilter from "./ToDoFilter";
import UsersList from "./UsersList";
import FriendsList from "./FriendsList";

class App extends React.Component {
  render() {
    return (
      <div className="container">
      <table>
          <tbody>
          <tr>
              <td>
              <UsersList />
              </td>
              <td>
              <FriendsList />
              </td>
          </tr>
          </tbody>
      </table>
        
        
        <Header tagline="Here are all the next tasks." />
        <ToDoForm />
        <ToDoFilter />
        <ToDoList />
      </div>
    );
  }
}

export default App;
