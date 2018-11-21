import { combineReducers } from "redux";
import * as actions from "../actions";
import uuid from "uuid/v4";

function users(state = actions.filters.ALL, action) {
    switch (action.type) {
      case actions.UPDATE_USER:
        return state.map((item) => {
            if (item.id !== action.id) {
              // This isn't the item we care about - keep it as-is
              return item;
            }

            // Otherwise, this is the one we want - return an updated value
            return {
              ...item,
              name: action.name
            }
        });

      default:
        return state;
    }
  }

function filter(state = actions.filters.ALL, action) {
  switch (action.type) {
    case actions.SET_FILTER:
      return action.filter;
    default:
      return state;
  }
}

function toDoItems(state = {}, action) {
  switch (action.type) {
    case actions.ADD_TODO:
      const id = uuid();

      return {
        ...state,
        [id]: {
          uuid: id,
          text: action.text,
          done: false
        }
      };
    case actions.UPDATE_TODO_TEXT:

      return {
        ...state,
        [action.uuid]: {
          ...state[action.uuid],
          text: action.text
        }
      };
    case actions.TOGGLE_TODO:
      return {
        ...state,
        [action.uuid]: {
          ...state[action.uuid],
          done: !state[action.uuid].done
        }
      };
    case actions.REMOVE_TODO:
      let nextState = { ...state };
      delete nextState[action.uuid];

      return nextState;
    default:
      return state;
  }
}

const appReducer = combineReducers({
  filter,
  toDoItems,
  users
});

export default appReducer;
