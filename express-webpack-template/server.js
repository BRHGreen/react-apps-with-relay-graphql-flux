import express from 'express';
// 13. (start of graphql module) import schema. This is now what will hit our API
import GrpahQLHTTP from 'express-graphql'
import schema from './data/schema'
import {MongoClient} from 'mongodb';

const MONGO_URL = process.env.PLURALSIGHT_MONGO_1

let app = express();

app.use(express.static('public'));

app.use('/graphql', GrpahQLHTTP({
  schema,
  graphiql: true
}))

let db;

MongoClient.connect(MONGO_URL, (err, database) => {
  if (err) throw err;
  db = database;
  app.listen(3000, () => console.log('listening on port 3000'))
});

// 1. create API endpoint
app.get('/data/links', (req, res) => {
  db.collection('links').find({}).toArray((err, links) => {
    if (err) throw err;
    res.json(links);
  })
})
