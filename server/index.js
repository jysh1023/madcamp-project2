// import connectDB from './db/connectdb';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
const port = process.env.port || 8000;
// const db_url = process.env.db_url || 'mongodb://localhost:27017';

// connectDB(db_url);

app.get('/api/', (req, res) => {
  res.send({
    name: '하늘보리',
    date: '2024-05-23',
    quantity: 1,
    category: 'fruit',
  });
});

app.listen(port, () => {
  console.log('Server is running on port ${port}');
});
