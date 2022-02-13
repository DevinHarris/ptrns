import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchSlice, getSearch } from "./searchSlice";


const Search = ({ term }) => {

    const dispatch = useDispatch();

    // const [searchTerm, setSearchTerm] = useState('')

    const handleOnSearch = (term) => {

        dispatch(getSearch(term));
    }

    // console.log(searchSlice.actions.getSearch());


    return (
            <div className="search">
                <input type="text" onChange={(e) => handleOnSearch(e.target.value)} className="search__input" placeholder="Search the biggest news stories" />
            </div>
    )
}

export default Search;