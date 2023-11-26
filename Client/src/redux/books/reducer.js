/* eslint-disable no-case-declarations */
/* eslint-disable no-unused-vars */
import { LOADEDBOOKS, UPDATEBOOK } from './actionTypes';
import initialState from './initialState ';

// reducer
const nextBookId = (todos) => {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
};

const reducer = (state = initialState, action) => {
  const copiedState = [...state];
  const { type, payload } = action;
  switch (type) {
    case LOADEDBOOKS:
      return payload;

    case UPDATEBOOK:
      return copiedState.map(book => book.id === payload.id ? { ...payload } : book)

    default:
      return state;
  }
};

export default reducer;
