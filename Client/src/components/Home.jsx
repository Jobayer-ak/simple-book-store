import { useEffect, useState } from 'react';
import AddBookForm from './AddBookForm';
import { useSelector, useDispatch } from 'react-redux';
import fetchBooksThunk from '../redux/books/thunk/fetchBooksThunk';
import Card from './Card';
import Navbar from './Navbar';

function Home() {
  const dispatch = useDispatch();
  const [isUpdate, setIsUpdate] = useState(false);
  const [filterBook, setFilterbook] = useState(false);
  const [searchText, setSearchText] = useState('');

  const books = useSelector((state) => state);

  console.log('status update: ', isUpdate);

  useEffect(() => {
    dispatch(fetchBooksThunk);
  }, [dispatch]);

  // filtering books
  const handlefilterBook = (book) => {
    // console.log("filter handler; ", book);
    if (filterBook) {
      return book.featured;
    } else {
      return true;
    }
  };

  // searching books by book name
  const searchFilterHandler = (book) => {
    if (searchText) {
      return book.name.toLowerCase().includes(searchText?.toLowerCase());
    }
    return true;
  };

  return (
    <>
      <Navbar setSearchText={setSearchText} />
      <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
        <div className="order-2 xl:-order-1">
          <div className="flex items-center justify-between mb-12">
            <h4 className="mt-2 text-xl font-bold">Book List</h4>

            <div className="flex items-center space-x-4">
              <button
                className="filter-btn filter-btn focus:bg-sky-500"
                id="lws-filterAll"
                onClick={() => setFilterbook(false)}
              >
                All
              </button>
              <button
                className="filter-btn focus:bg-sky-500"
                id="lws-filterFeatured"
                onClick={() => setFilterbook(true)}
              >
                Featured
              </button>
            </div>
          </div>
          <div className="lws-bookContainer gap-4">
            {/* Book Card */}
            {books.length >= 1
              ? books
                  ?.filter(handlefilterBook)
                  .filter(searchFilterHandler)
                  .map((book, index) => (
                    <Card setIsUpdate={setIsUpdate} book={book} key={index} />
                  ))
              : 'No Book Found'}
          </div>
        </div>
        {/* Add Book Form */}
        <AddBookForm isUpdate={isUpdate} setIsUpdate={setIsUpdate} />
      </div>
    </>
  );
}

export default Home;
