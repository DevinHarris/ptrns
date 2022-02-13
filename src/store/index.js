import { configureStore } from '@reduxjs/toolkit';
import searchSlice from "../components/searchSlice";

export default configureStore({
    reducer: {
        searchTerm: searchSlice
    } 
})