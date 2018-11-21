import React from "react";
import User from './User';
import { connect } from "react-redux";

class UsersList extends React.Component {
  render() {
    return (
      <div>
      Users List:
        <table className="todo-items table table-borderless">
          <tbody>
            {this.props.users.map(item => {
              return <User 
                key={`user-item-${item.id}`} 
                data={item} />;
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default connect(state => ({
    users: state.users
  }))(UsersList);
