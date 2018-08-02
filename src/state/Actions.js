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
export const removeTodoAction = id => {
  return {
    type: REMOVE_TODO,
    id
  };
};
export const toggleTodoAction = id => {
  return {
    type: TOGGLE_TODO,
    id
  };
};
export const addGoalAction = goal => {
  return {
    type: ADD_GOAL,
    goal
  };
};
export const removeGoalAction = id => {
  return {
    type: REMOVE_GOAL,
    id
  };
};

export const receiveDataAction = (todos, goals) => {
  return {
    type: RECEIVE_DATA,
    todos,
    goals
  };
};
