import React from "react";
import User from './User';
import { connect } from "react-redux";

class FriendsList extends React.Component {
  render() {
    return (
      <div>
      Friends List:
        <table className="todo-items table table-borderless">
          <tbody>
            {this.props.users.map(item => {
              return <User 
                updateUserName={this.updateUserName} 
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
  }))(FriendsList);
