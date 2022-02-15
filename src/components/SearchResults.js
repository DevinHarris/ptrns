import React from 'react';
import { useSelector } from "react-redux";
import NewsHeader from "./NewsHeader";

const SearchResults = () => {

    const { searchTerm } = useSelector(state => state.searchTerm);
    const { stories } = useSelector(state => state.stories)

    console.log(stories)

    return (
        <div className="search-results">
           <h1>{ `Searching for: ${ searchTerm } stories`}</h1>
           {
               stories.articles ? <NewsHeader newsArticles={stories.articles} /> : null
           }
        </div>
    )
}

export default SearchResults;