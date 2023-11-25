import {applyMiddleware, createStore } from "redux";
import reducer from "./books/reducer";
import { composeWithDevTools} from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunkMiddleware)))

export default store;