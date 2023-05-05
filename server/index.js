const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getNonCompliment, getSuperpower } = require('./controller')

app.get("/api/compliment", getCompliment)
app.get("/api/nonCompliment", getNonCompliment)
app.get("/api/superpower", getSuperpower)

app.listen(4000, () => console.log("Server running on 4000"));