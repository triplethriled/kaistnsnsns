const http = require('http');

const express = require('express');
const cors = require('cors');
//const port = process.env.PORT || 8000;
const port = 8000
const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(cors());
app.use('/static', express.static('public')); 

app.listen(port, () => console.log(`Server up and running on port ${port}.`));

const db = require("./models");
const user = require('./models/user');
const User = db.User;
const Form = db.Form;
app.get("/", async (req, res) => {  
    // const form = await Form.create({
    //     userId: 4,
    //     title: "Haha"
    // })
    const user = await User.findOne({
        include: Form,
        order: [['createdAt','DESC']]
    })
    res.json({ message: "Welcome to our application.", user:  user});
});

app.get("/courses", async (req, res) => {
//   const courses = await db.Course.findAll({})
//   res.json({ message: "Welcome to our application.", courses:  courses});
});