// const express = require('express')
import {express} from 'express'
import {cors} from 'cors'
import { MongoClient } from 'mongodb';
const app = express()
const port = 3000;
app.use(express.json());
app.use(cors)
// const cors = require('cors')

//  sxvN6cYeWepNeoqP
const users =  {
  name: 'mojahid', 
  age: 17,
}

const client = new MongoClient('mongodb+srv://mojahid:sxvN6cYeWepNeoqP@cluster0.fznxf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

const run = async ()=> {
  await client.connect();
  const db = client.db('Express')
  const userCollection =db.collection('user')
  const result =  await userCollection.insertOne({
    name: 'mojahid',
    age: 17,
  })
  console.log(result)
  console.log('the client is connected')
}
run()

app.get('/', (req, res) => {

  res.send('this is express conceptual session')
})
app.get('/users', (req, res) => {
  res.send(users)
})
app.post('/users', (req, res) => {
  res.send(users)
})

app.delete('/users/:id', (req, res) => {
  // res.send(users)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
