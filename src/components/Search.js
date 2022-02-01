import React, { useState } from 'react';
import { connect } from 'react-redux';
import { searchAction } from '../actions'


const Search = ({ term, searchAction }) => {

    const onSearchTerm = (term) => {
        searchAction(`here's your search term ${term}`)
    }

    console.log(term);

    return (
        <div className="search">
            <input type="text" onChange={(e) => onSearchTerm(e.target.value)} className="search__input" placeholder="Search the biggest news stories" />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        term: state.term
    }
}

export default connect(mapStateToProps, {
    searchAction
})(Search);