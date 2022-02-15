import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import searchSlice from "../components/searchSlice";
import storiesSlice from "../components/storiesSlice";

export default configureStore({
    reducer: {
        searchTerm: searchSlice,
        stories: storiesSlice
    },
    // middleware: [applyMiddleware(thunk)]
})