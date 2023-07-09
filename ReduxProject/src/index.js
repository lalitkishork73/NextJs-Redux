import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/route.js';
import path from 'path';
import MongoDataBase from './config/mongoConnect.js'
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

MongoDataBase();
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', router)

if (process.env.NODE_ENV == "production") {

    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})