import { added } from '../actions';

const addBookThunk = (bookInfo) => {
  const bodyData = {
    author: bookInfo.author,
    name: bookInfo.name,
    featured: bookInfo.featured,
    price: bookInfo.price,
    rating: bookInfo.rating,
    thumbnail: bookInfo.thumbnail,
  };
  return async (dispatch) => {
    const response = await fetch('http://localhost:5000/books', {
      method: 'POST',
      body: JSON.stringify(bodyData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const book = await response.json();

    dispatch(added(book));
  };
};

export default addBookThunk;
