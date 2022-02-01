import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import newsApi from "../api/newsApi";
import Layout from "./Layout";
import NewsHeader from "./NewsHeader";
import SearchResults from "./SearchResults";

const App = () => {

    const [defaultNewsArticles, setDefaultNewsArticles] = useState([])
    const [searchTerm, setSearchTerm] = useState(''); 

    useEffect(() => {
        console.log('loaded!')

        const getTopHeadlines = async () => {
            const { data } = await newsApi.get('/top-headlines?country=us');

            setDefaultNewsArticles(data.articles);
        }

        getTopHeadlines();
    }, [])

    const getSearchTerm = (term) => {
        // setSearchTerm(term)
        console.log(term);
    }

    return (
        <Layout>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<NewsHeader newsArticles={defaultNewsArticles} />}>
                    { searchTerm ? <Navigate replace to="/search" /> : null }
                </Route>
                <Route path="/search" element={<SearchResults getSearchTerm={getSearchTerm} />} />
            </Routes>
            </BrowserRouter>
        </Layout>
       
    )
}

export default App;