/* eslint-disable no-case-declarations */
/* eslint-disable no-unused-vars */
import { ADDBOOK, DELETEBOOK, LOADEDBOOKS, UPDATEBOOK } from './actionTypes';
import initialState from './initialState ';

// reducer
const nextBookId = (todos) => {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
};

const reducer = (state = initialState, action) => {
  const copiedState = [...state];
  const { type, payload } = action;
  console.log("payload: ", payload);
  switch (type) {
    case LOADEDBOOKS:
      return payload;

    case ADDBOOK:
      return [...state, {...payload}]

    case UPDATEBOOK:
      return copiedState.map(book => book.id === payload.id ? { ...payload } : book)

    case DELETEBOOK:
      return copiedState.filter(book => book.id !== payload)
    
    default:
      return state;
  }
};

export default reducer;
