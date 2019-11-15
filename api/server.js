const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const Smurfs = require('../smurfs/smurfsModel')

const server = express()

server.use(express.json())
// server.use('/smurfs', Smurfs)


server.get('/', (req,res)=>{
    res.status(200).json({success:'The server is running normally', environment: process.env.DB_ENV})
})

server.get('/smurfs', (req,res)=>[
    Smurfs.getAll()
    .then(smurf=>{
        res.status(200).json(smurf)
    })
    .catch(err=>{
        res.status()
    })
])

server.post('/smurfs',(req,res)=>{
    console.log(req.body)
    Smurfs.insert(req.body)
    .then(count=>{
        console.log(count)
        res.status(201).json(count)
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({error:"this is an error"})
    })
})

server.delete('/smurfs/:id', (req,res)=>{
    Smurfs.remove(req.params.id)
    .then(count=>{
        console.log(count)
        res.status(200).json({success:'success!'})
    })
    .catch(err=>{
        res.status(500).json({error:"something went wrong"})
    })
})

module.exports = server;

