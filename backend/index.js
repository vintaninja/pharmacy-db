const express = require("express");
const cors = require("cors");
require("./db/config");
const User = require("./db/User");
const Prescription = require("./db/Prescription")
const app = express();

app.use(express.json());
app.use(cors());

app.post("/register", async (req, resp) => {
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password
    resp.send(result);
});

app.post("/login", async (req, resp) => {
    if (req.body.password && req.body.email) {
        let user = await User.findOne(req.body).select("-password");
        if (user) {
            resp.send(user)
        } else {
            resp.send({ result: "User Does Not Exist" })
        }
    } else {
        resp.send({ result: "User Does Not Exist" })
    }
});

app.post("/add-prescription", async (req, resp) => {
    let prescription = new Prescription(req.body);
    let result = await prescription.save();
    resp.send(result);

})

app.get("/prescriptions", async (req, resp) => {
    const prescriptions = await Prescription.find();
    if (prescriptions.length > 0) {
        resp.send(prescriptions)
    } else {
        resp.send({result:"Prescription not found."})
    }
})

app.listen(3001);