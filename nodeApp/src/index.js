import express from 'express';
import MongoDBConnect from "./config/mongoConnect.js";
import cors from 'cors';
import router from './routes/route.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({
    exposedHeaders: 'Location', origin: 'http://localhost:3000', // Replace this with your allowed origin
    credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', router);

MongoDBConnect();


const arr = Array(10).map((item) => {
    console.log(item)
})


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});