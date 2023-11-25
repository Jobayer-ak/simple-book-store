/* eslint-disable no-unused-vars */
// fetch all books from server

import { loaded } from "../actions";

const fetchBooks = async(dispatch, getState) => {
    const response = await fetch("http://localhost:5000/books");
    const books = await response.json();

    dispatch(loaded(books))
}

export default fetchBooks