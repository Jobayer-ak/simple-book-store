import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from './Card';
import fetchBooks from '../redux/books/thunk/fetchBooks';

function CardList() {
  const books = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks);
  }, [dispatch]);

  //   console.log(books);
  return (
    <div className="grid grid-cols-2 gap-4">
      {books?.map((book, index) => (
        <Card key={index} book={book} />
      ))}
    </div>
  );
}

export default CardList;
