import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import newsApi from "../api/newsApi";
import SearchContext from '../searchContext';
import Layout from "./Layout";
import NewsHeader from "./NewsHeader";
import SearchResults from "./SearchResults";

const App = () => {

    const [defaultNewsArticles, setDefaultNewsArticles] = useState([])
    const searchTerm = useContext(SearchContext);
    // console.log(searchTerm.searchTerm);
    // const [searchTerm, setSearchTerm] = useState(''); 

    useEffect(() => {
        console.log('loaded!')

        const getTopHeadlines = async () => {
            const { data } = await newsApi.get('/top-headlines?country=us');

            setDefaultNewsArticles(data.articles);
        }

        getTopHeadlines();
    }, [])

    // const getSearchTerm = (term) => {
    //     // setSearchTerm(term)
    //     console.log(term);
    // }

    return (
            <Layout>
                <BrowserRouter>
                <Routes>
                    <Route path="/" element={<NewsHeader newsArticles={defaultNewsArticles} />} />
                </Routes>
                </BrowserRouter>
            </Layout>
       
    )
}

export default App;