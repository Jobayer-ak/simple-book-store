// action creator

import { ADDBOOK, DELETEBOOK, LOADEDBOOKS, UPDATEBOOK } from './actionTypes';

export const loaded = (books) => {
  return {
    type: LOADEDBOOKS,
    payload: books,
  };
};

export const added = (bookInfo) => {
  return {
    type: ADDBOOK,
    payload: bookInfo,
  };
};

export const updated = (bookInfo) => {
  return {
    type: UPDATEBOOK,
    payload: bookInfo,
  };
};

export const deleted = (bookId) => {
  return {
    type: DELETEBOOK,
    payload: bookId,
  };
};
