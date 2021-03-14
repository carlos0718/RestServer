require('dotenv').config();

const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/user',(req,res) => {
    const users = [
        {
            id : 1,
            name : 'Fernando'
        },
        {
            id : 2,
            name : ' Carlos'
        }
    ]
    res.json(users)
})

app.post('/user',(req,res) => {
    const user = req.body;
    user.id = 12345;
    const result = {
        message : 'User create',
        user,
    }
    res.status(201).json(result);
})

app.put('/user/:id',(req,res) => {
    const { id } = req.params;
    const user = req.body;
    user.id = id;
    const result = {
        message : 'User update',
        user
    }
    res.json(result);
})

app.patch('/user',(req,res) => {
    const result = {
        message : 'User create with patch'
    }
    res.json(result);
})

app.delete('/user/:id',(req,res) => {
    const { id } = req.params;
    const result = {
        message : `User with id: ${id} deleted`
    }
    res.json(result)
})

app.listen(port,() => {
    console.log(`App started port: ${port}`);
});