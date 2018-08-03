import API from "goals-todos-api";

export const ADD_GOAL = "ADD_GOAL";
export const REMOVE_GOAL = "REMOVE_GOAL";

const addGoal = goal => {
  return {
    type: ADD_GOAL,
    goal
  };
};

export const handleAddGoal = (name, cb) => {
  return dispatch => {
    return API.saveGoal(name)
      .then(goal => {
        dispatch(addGoal(goal));
        cb();
      })
      .catch(() => {
        alert("An error ocurred please try again");
      });
  };
};

const removeGoal = id => {
  return {
    type: REMOVE_GOAL,
    id
  };
};
export const handleDeleteGoal = goal => {
  return dispatch => {
    dispatch(removeGoal(goal.id));
    return API.deleteGoal(goal.id)
      .then(() => {
        console.log("todo removed from db");
      })
      .catch(() => {
        dispatch(addGoal(goal));
        alert("An error ocurred please try again");
      });
  };
};
