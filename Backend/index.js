const express = require("express");
const app = express();
const cors = require("cors");
const request = require("request");
require("dotenv").config();

app.use(cors());
app.use(express.json());

app.get("/movies", async (req, res) => {
  const options = {
    method: "GET",
    url: "https://imdb236.p.rapidapi.com/imdb/top-box-office",
    headers: {
      "x-rapidapi-key": process.env.API_KEY,
      "x-rapidapi-host": "imdb236.p.rapidapi.com",
    },
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    res.json(JSON.parse(body));
  });
});

app.listen(3000, () => {
  console.log("This server is running on port 3000");
});
