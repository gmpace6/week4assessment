const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getNonCompliment } = require('./controller')

app.get("/api/compliment", getCompliment)
app.get("/api/nonCompliment", getNonCompliment)

app.listen(4000, () => console.log("Server running on 4000"));