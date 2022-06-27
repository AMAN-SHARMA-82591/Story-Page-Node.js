const express = require('express');
const axios = require('axios');
const app = express();



app.get('/', (req, res) => {
  axios.get('https://jsonplaceholder.typicode.com/photos?print=pretty')
    .then((response) => {
      data = response.data;
      let newData = [];
      data.forEach(value => {
        const {id, title, url} = value;
        const formattedData = {id: id, description: title, url: url};
        newData.push(formattedData);
      })
      res.json(newData);
    })
    .catch(console.error);
})

app.listen(5000, () => {
  console.log('Server is Running');
})
