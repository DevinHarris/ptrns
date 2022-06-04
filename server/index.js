import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
const app = express();
import cors from 'cors';
const PORT = process.env.PORT || 5000;
import newsRouter from './routes/news.js';

dotenv.config({ path: './config/.env' });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

app.get('/', (req, res) => {

    res.status(200).json({
        message: 'working'
    })

})

app.use(newsRouter);

app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
})