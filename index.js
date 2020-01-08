const express = require("express");
const cors = require("cors");
require("./db/mongoose");
const serverRouter = require("./routes/serverPortRouter");

const app = express();
const PORT = process.env.PORT || 9008;

app.use(express.json());
app.use(cors());
app.use(serverRouter);

app.listen(PORT, () => console.log(`Backend on port ${PORT}`));
