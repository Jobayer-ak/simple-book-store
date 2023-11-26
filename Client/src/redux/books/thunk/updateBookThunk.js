/* eslint-disable no-dupe-keys */
import { updated } from '../actions';

const updateBookThunk = (bookInfo) => {
  

  return async (dispatch) => {
    const response = await fetch(`http://localhost:5000/books/${bookInfo.id}`, {
      method: 'PATCH',
      body: JSON.stringify(bookInfo),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const updatedBook = await response.json();

    dispatch(updated(updatedBook));
  };
};

export default updateBookThunk;
