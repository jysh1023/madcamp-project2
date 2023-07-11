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

app.get('/api', (req, res) => {
  res.json([
    {
      name: '하늘보리',
      date: '2024-05-23',
      quantity: 1,
      category: 'drink',
    },
    {
      name: '구운계란',
      date: '2023-07-12',
      quantity: 1,
      category: 'egg',
    },
  ]);
});

app.post('/api/create', (req, res) => {
  const {name, date, quantity, category} = req.body;
  console.log(name);
});

app.listen(port, () => {
  console.log('Server is running on port ${port}');
});
