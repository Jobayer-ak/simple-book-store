import { deleted } from '../actions';

const deleteBookThunk = (bookId) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`http://localhost:5000/books/${bookId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
      });

      console.log('response from deleted: ', response);
      dispatch(deleted(bookId));
    } catch (err) {
      console.log(err);
    }
  };
};

export default deleteBookThunk;
