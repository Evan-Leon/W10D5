import { combineReducers } from "redux";
import todosReducer from "./todos_reducer.js";
import stepReducer from "./step_reducer.js";

const rootReducer = combineReducers({
    todos: todosReducer,
    steps: stepReducer,
})





export default rootReducer;



// const rootReducer = (state, action) => {
//     return {
//         todos: todosReducer(state.todos, action),
//     }
// }