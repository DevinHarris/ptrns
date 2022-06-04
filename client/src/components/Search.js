import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchStories } from "./storiesSlice";


const Search = ({ term }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // const [searchTerm, setSearchTerm] = useState('')

    const handleOnSearch = (term) => {

        dispatch({ type: 'search/getSearchTerm', payload: term });
        dispatch(fetchStories(term));
        
        if (term) {
            navigate("/search", { replace: true })
        }
    }

    // console.log(searchSlice.actions.getSearch());


    return (
            <div className="search">
                <input type="text" onChange={(e) => handleOnSearch(e.target.value)} className="search__input" placeholder="Search the biggest news stories" />
            </div>
    )
}

export default Search;