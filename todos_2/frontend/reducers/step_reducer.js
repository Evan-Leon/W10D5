import {RECEIVE_STEP, RECEIVE_STEPS, REMOVE_STEP} from "../actions/step_actions";

const initialSteps = {
    1: {
      id: 1,
      title: "get soap",
      todo_id: 1,
      done: false
    },
    2: {
      id: 2,
      title: "wash me car",
      todo_id: 1,
      done: true
    }
  };

const stepReducer = (state = initialSteps, action) => {

    Object.freeze(state);
    let nextState = {};
    switch (action.type) {
        case RECEIVE_STEPS:
            action.steps.forEach(step => {
                nextState[step.id] = step;
            })
            return nextState;
        case RECEIVE_STEP:
            nextState = Object.assign({}, state);
            nextState[action.step.id] = action.step;  
            return nextState;
        case REMOVE_STEP:
            nextState = Object.assign({}, state);
            delete nextState[action.step.id];
            return nextState;
        default:
          return state;
      }
    };

    export default stepReducer;