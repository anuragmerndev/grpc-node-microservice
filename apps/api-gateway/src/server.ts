import express from 'express';
import { fetchData } from './grpcClient';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
   const data = await fetchData();
   console.log(data);
   console.log("hello");
   res.json(data);
});

app.listen(8000, () => {
    console.log('Server is running on port 8000');
});