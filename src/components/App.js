import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import newsApi from "../api/newsApi";
import Layout from "./Layout";
import NewsHeader from "./NewsHeader";

const App = () => {

    const [defaultNewsArticles, setDefaultNewsArticles] = useState([])

    useEffect(() => {
        console.log('loaded!')

        const getTopHeadlines = async () => {
            const { data } = await newsApi.get('/top-headlines?country=us');

            setDefaultNewsArticles(data.articles);
        }

        getTopHeadlines();
    }, [])

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