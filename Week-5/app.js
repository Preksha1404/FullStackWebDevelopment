const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
var users = [];

app.post('/user', (req, res) => {
    const { id, name, age } = req.body;
    if (!id || !name || !age) {
        return res.status(400).json("Please enter proper details!");  
    }
    const newData = { id, name, age};
    users.push(newData);
    res.status(201).json("Data entered successfully!");
});

app.get('/user', (req, res) => {
    res.status(200).json(users);
});

app.get('/user/:id', (req, res) => {
    const idNo = req.params.id;
    const data = users.find((x) => x.id == idNo);
    if (!data) {
        return res.status(404).json("User not found");
    }
    res.status(200).json(data);
});

app.put('/user/:id', (req, res) => {
    const idy = req.params.id;
    const { newName } = req.body;
    if (!newName) {
        return res.status(400).json("Enter a valid new name");
    }
    const userIndex = users.findIndex((x) => x.id === idy);
    if (userIndex === -1) {
        return res.status(404).json("User not found");
    }
    users[userIndex].name = newName;
    res.status(200).json("Username updated successfully");
});

app.delete('/user/:id', (req, res) => {
    const idy = req.params.id;
    const userIndex = users.findIndex((x) => x.id === idy);
    if (userIndex === -1) {
        return res.status(404).json("User not found");
    }
    users.splice(userIndex, 1);
    res.status(200).json("User deleted successfully");
});

app.listen(port, () => {
    console.log(`Server is running on port no ${port}`);
});