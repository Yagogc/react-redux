import API from "../utils/api";
import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  ADD_GOAL,
  REMOVE_GOAL,
  RECEIVE_DATA
} from "./Types";

export const addTodoAction = todo => {
  return {
    type: ADD_TODO,
    todo
  };
};

export const handleAddTodo = (name, cb) => {
  return dispatch => {
    return API.saveTodo(name)
      .then(todo => {
        dispatch(addTodoAction(todo));
        cb();
      })
      .catch(() => {
        alert("An error ocurred please try again");
      });
  };
};
export const removeTodoAction = id => {
  return {
    type: REMOVE_TODO,
    id
  };
};

export const handleDeleteTodo = todo => {
  return dispatch => {
    dispatch(removeTodoAction(todo.id));
    return API.deleteTodo(todo.id).catch(() => {
      dispatch(addTodoAction(todo));
      alert("An error occurred. Try again.");
    });
  };
};
export const toggleTodoAction = id => {
  return {
    type: TOGGLE_TODO,
    id
  };
};

export const handleToggleTodo = id => {
  return dispatch => {
    dispatch(toggleTodoAction(id));
    return API.saveTodoToggle(id).catch(() => {
      alert("An error ocurred, try again.");
      dispatch(toggleTodoAction(id));
    });
  };
};

export const addGoalAction = goal => {
  return {
    type: ADD_GOAL,
    goal
  };
};

export const handleAddGoal = (name, cb) => {
  return dispatch => {
    return API.saveGoal(name)
      .then(goal => {
        dispatch(addGoalAction(goal));
        cb();
      })
      .catch(() => {
        alert("An error ocurred please try again");
      });
  };
};

export const removeGoalAction = id => {
  return {
    type: REMOVE_GOAL,
    id
  };
};
export const handleDeleteGoal = goal => {
  return dispatch => {
    dispatch(removeGoalAction(goal.id));
    return API.deleteGoal(goal.id)
      .then(() => {
        console.log("todo removed from db");
      })
      .catch(() => {
        dispatch(addGoalAction(goal));
        alert("An error ocurred please try again");
      });
  };
};

export const receiveDataAction = (todos, goals) => {
  return {
    type: RECEIVE_DATA,
    todos,
    goals
  };
};
