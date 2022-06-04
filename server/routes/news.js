import express from 'express';
import fetch from 'node-fetch';
const Router = express.Router();

Router.get('/news/all', async (req, res) => {

    try {
        const newsData = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWSAPI_KEY}`) 
        const response = await newsData.json();
        
        console.log(response);

        res.status(200).json({
            data: response
        })

    } catch (err) {
        res.status(500).json({
            errorMessage: `Sorry, there was an error ${err}`
        })
    }
})

Router.get('/news/search', async (req, res) => {

    const { q } = req.query;
    console.log(q);

    try {

        const newsSearchData = await fetch(`https://newsapi.org/v2/everything?q=${q}&apiKey=${process.env.NEWSAPI_KEY}`);
        const response = await newsSearchData.json();

        res.status(200).json({
            data: response
        })

    } catch(err) {
        res.status(500).json({
            errorMessage: `Sorry, there was an error ${err}`
        })
    }
})

export default Router;