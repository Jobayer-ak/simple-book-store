/* eslint-disable no-unused-vars */
import { LOADEDBOOKS } from "./actionTypes";
import initialState from "./initialState ";

// reducer 
const nextBookId = (todos) => {
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
    return maxId + 1;
};
  

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADEDBOOKS:
            return action.payload;
        
    
        default:
            return state;
    }
}

export default reducer;