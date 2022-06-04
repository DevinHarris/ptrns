import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import newsApi from "../api/newsApi";
import Layout from "./Layout";
import NewsHeader from "./NewsHeader";
import SearchResults from "./SearchResults";

const App = () => {

    const [defaultNewsArticles, setDefaultNewsArticles] = useState([])
    // const searchTerm = useContext(SearchContext);
    // console.log(searchTerm.searchTerm);
    // const [searchTerm, setSearchTerm] = useState(''); 

    useEffect(() => {

        const getTopHeadlines = async () => {
            const { data } = await newsApi.get('/news/all');

            setDefaultNewsArticles(data.data.articles);

            console.log(data.data.articles);
        }

        getTopHeadlines();
    }, [])

    // const getSearchTerm = (term) => {
    //     // setSearchTerm(term)
    //     console.log(term);
    // }

    return (
                <BrowserRouter>
                    <Layout>
                        <Routes>
                            <Route path="/" element={<NewsHeader newsArticles={defaultNewsArticles} />} />
                            <Route path="/search" element={<SearchResults />}/>
                        </Routes>
                    </Layout>
                </BrowserRouter>
       
    )
}

export default App;