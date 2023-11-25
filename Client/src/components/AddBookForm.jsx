import { useState } from 'react';
import { useDispatch } from 'react-redux';
import addBookThunk from '../redux/books/thunk/addBookThunk';

function AddBookForm() {
  const dispatch = useDispatch();


    
  const [input, setInput] = useState({
    name: '',
    author: '',
    thumbnail: '',
    price: '',
    rating: '',
    featured: false,
  });

  const handleForm = (e) => {
    e.preventDefault();

      console.log(e.target.elements);
      
      dispatch(addBookThunk(input))
  };

  const inputHandler = (fieldName, e) => {
    switch (fieldName) {
      case 'name':
        setInput({ ...input, [fieldName]: e.target.value });
        break;
      case 'author':
        setInput({ ...input, [fieldName]: e.target.value });
        break;
      case 'thumbnail':
        setInput({ ...input, [fieldName]: e.target.value });
        break;
      case 'price':
        setInput({ ...input, [fieldName]: Number(e.target.value) });
        break;
      case 'rating':
        setInput({ ...input, [fieldName]: Number(e.target.value) });
        break;
      case 'featured':
        setInput((prev) => {
          return { ...input, [fieldName]: !prev.featured };
        });
        break;
      default:
        setInput({ ...input, [fieldName]: e.target.value });
    }
  };

    console.log("input fields value: ", input);

  return (
    <div>
      <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
        <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
        <form className="book-form" onSubmit={(e) => handleForm(e)}>
          <div className="space-y-2">
            <label htmlFor="name">Book Name</label>
            <input
              onChange={(e) => inputHandler('name', e)}
              required
              className="text-input"
              type="text"
              id="input-Bookname"
                          name="name"
                          value={input?.name}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="author">Author</label>
            <input
              onChange={(e) => inputHandler('author', e)}
              required
              className="text-input"
              type="text"
              id="input-Bookauthor"
                          name="author"
                          value={input?.author}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="thumbnail">Image Url</label>
            <input
              onChange={(e) => inputHandler('thumbnail', e)}
              required
              className="text-input"
              type="text"
              id="input-Bookthumbnail"
                          name="thumbnail"
                          value={input?.thumbnail}
            />
          </div>

          <div className="grid grid-cols-2 gap-8 pb-4">
            <div className="space-y-2">
              <label htmlFor="price">Price</label>
              <input
                onChange={(e) => inputHandler('price', e)}
                required
                className="text-input"
                type="number"
                id="input-Bookprice"
                              name="price"
                              value={input?.price}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="rating">Rating</label>
              <input
                onChange={(e) => inputHandler('rating', e)}
                required
                className="text-input"
                type="number"
                id="input-Bookrating"
                name="rating"
                min="1"
                              max="5"
                              value={input?.rating}
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              onChange={(e) => inputHandler('featured', e)}
              id="input-Bookfeatured"
              type="checkbox"
              name="featured"
                          className="w-4 h-4"
                          checked={input?.featured}
            />
            <label htmlFor="featured" className="ml-2 text-sm">
              {' '}
              This is a featured book{' '}
            </label>
          </div>

          <button type="submit" className="submit" id="submit">
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddBookForm;
