const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();


app.use(cors());
app.use(express.static('../FrontEnd'));
app.use(express.json({limit: '1mb'}))

app.get('/topStories', (req, res) => {
  axios.get('https://jsonplaceholder.typicode.com/photos?print=pretty')
    .then((response) => {
      data = response.data;
      let newData = [];
      data.slice(0, 100).forEach(value => {
        const {id, title, url} = value;
        const formattedData = {id: id, description: title, url: url};
        newData.push(formattedData);
      })
      res.json(newData);
    })
    .catch(console.error);
});

app.get('/bestStories', (req, res) => {
  axios.get('https://jsonplaceholder.typicode.com/photos?print=pretty')
  .then((response) => {
    data = response.data;
    let newData = [];
    data.slice(100, 200).forEach(value => {
      const {id, title, url} = value;
      const formattedData = {id: id, description: title, url: url};
      newData.push(formattedData);
    });
    res.json(newData);
  })
  .catch(console.error);
})

app.get('/newStories', (req, res) => {
  axios.get('https://jsonplaceholder.typicode.com/photos?print=pretty')
  .then((response) => {
    data = response.data;
    let newData = [];
    data.slice(200, 300).forEach(value => {
      const {id, title, url} = value;
      const formattedData = {id: id, description: title, url: url};
      newData.push(formattedData);
    });
    res.json(newData);
  })
  .catch(console.error);
})

app.get('/allStories', (req, res) => {
  axios.get('https://jsonplaceholder.typicode.com/photos?print=pretty')
  .then((response) => {
    data = response.data;
    let newData = [];
    data.slice(0, 500).forEach(value => {
      const {id, title, url} = value;
      const formattedData = {id: id, description: title, url: url};
      newData.push(formattedData);
    });
    res.json(newData);
  })
  .catch(console.error);
})

app.listen(5000, () => {
  console.log('Server is Running');
})


app.post('/topStories', (req, res) => {
  const storyId = req.body;
  const url = `https://jsonplaceholder.typicode.com/photos/${storyId.postId}`
axios.get(url).then(response => {
  const collectedData = response.data;
  res.json({
    status: 'Success',
    id: collectedData.id,
    url: collectedData.url,
    title: collectedData.title
  })
});
})