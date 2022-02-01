import React from 'react';
import SearchResults from "./components/SearchResults";

const SearchContext = React.createContext({
    searchTerm: ''
});

export default SearchContext;