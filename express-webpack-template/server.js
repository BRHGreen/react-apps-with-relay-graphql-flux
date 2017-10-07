import express from 'express';
// 13. (start of graphql module) import schema. This is now what will hit our API
import GrpahQLHTTP from 'express-graphql'
import schema from './data/schema'
import {MongoClient} from 'mongodb';

const MONGO_URL = process.env.PLURALSIGHT_MONGO_1

let app = express();

app.use(express.static('public'));

let db;

MongoClient.connect(MONGO_URL, (err, database) => {
  if (err) throw err;
  db = database;
  // 14. move the gql endpoint into the `.connect` method
  app.use('/graphql', GrpahQLHTTP({
    // 15. pass the db var into the schema. This is how we can access it in `schema.js`
    schema: schema(db),
    graphiql: true
  }))
  app.listen(3000, () => console.log('listening on port 3000'))
});

// 18. get rid of previous endpoint to ensure you are now using the gql endpoint.
