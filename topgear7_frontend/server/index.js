const express = require('express');
const request = require('request');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/vehicle', (req, res) => {
  request(
    { url: 'http://api.prod.obanyc.com/api/siri/vehicle-monitoring.json?key=02e06296-1f9a-40a3-a94d-5a3d6ee09f2e' },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: err.message });
      }
      res.json(JSON.parse(body));
    }
  )
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
