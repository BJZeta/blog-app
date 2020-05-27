const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(cors());

app.get("/api", (req, res) => {
  res.json({ time: Date().toString() });
});

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
