const express = require("express");
const app = express();
app.get("/", (req, resp)=>{resp.send("app running")});
app.listen(3001);
