import { useEffect, useState } from 'react';
import AddBookForm from './AddBookForm';
import { useSelector, useDispatch } from 'react-redux';
import fetchBooksThunk from '../redux/books/thunk/fetchBooksThunk';
import Card from './Card';

function BookContainer() {
  const [isUpdate, setIsUpdate] = useState(false);

  const books = useSelector((state) => state);

  const dispatch = useDispatch();

  console.log("status update: ", isUpdate);

  useEffect(() => {
    dispatch(fetchBooksThunk);
  }, [dispatch]);

  return (
    <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
      <div className="order-2 xl:-order-1">
        <div className="flex items-center justify-between mb-12">
          <h4 className="mt-2 text-xl font-bold">Book List</h4>

          <div className="flex items-center space-x-4">
            <button className="filter-btn active-filter" id="lws-filterAll">
              All
            </button>
            <button className="filter-btn" id="lws-filterFeatured">
              Featured
            </button>
          </div>
        </div>
        <div className="lws-bookContainer gap-4">
          {/* Book Card */}
          {books.length >= 1
            ? books?.map((book, index) => (
                <Card setIsUpdate={setIsUpdate} book={book} key={index} />
              ))
            : 'No Book Found'}
        </div>
      </div>
      {/* Add Book Form */}
      <AddBookForm isUpdate={isUpdate} setIsUpdate={setIsUpdate} />
    </div>
  );
}

export default BookContainer;
