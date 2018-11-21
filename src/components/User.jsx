import React from "react";
import { connect } from "react-redux";
import { updateUser } from "../actions";

class User extends React.Component {
  handleInputKeyUp(e) {
    // Remove focus, when the [Enter] key is pressed
    if (e.keyCode === 13) {
      e.target.blur();
    }
  }

  render() {
    const user = this.props.data;

    return (
      <tr>
        <td>
          <input
            type="text"
            value={user.name}
            onChange={e => {
              this.props.updateUser(user.id, e.target.value);
            }}
          />
        </td>
      </tr>
    );
  }
}

export default connect(
    state => ({}),
    {
      updateUser
    }
  )(User);
