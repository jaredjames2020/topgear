const express = require('express');
const request = require('request');

const app = express();

const MTA = process.env.REACT_APP_MTA_API_KEY;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/vehicle', (req, res) => {
  request(
    { url: MTA },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: err.message });
      }
      res.json(JSON.parse(body));
    }
  )
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
