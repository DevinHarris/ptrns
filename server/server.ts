import express, { Express, Request, Response } from 'express';
import path from 'path';
const app: Express = express();
import cors from 'cors';
const PORT: string | number = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

app.get('/', async (req: Request, res: Response):Promise<void>  => {

    res.status(200).json({
        message: 'working'
    })

})

app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
})