import express from 'express';
// 13. (start of graphql module) import schema. This is now what will hit our API
import GrpahQLHTTP from 'express-graphql'
import schema from './data/schema'
import {MongoClient} from 'mongodb';

const MONGO_URL = process.env.PLURALSIGHT_MONGO_1

let app = express();

app.use(express.static('public'));

// 22. use `await` on connect, put in IIFE and set in npm start script
(async () => {
  let db = await MongoClient.connect(MONGO_URL)
  app.use('/graphql', GrpahQLHTTP({
    // 15. pass the db var into the schema. This is how we can access it in `schema.js`
    schema: schema(db),
    graphiql: true
  }))
  app.listen(3000, () => console.log('listening on port 3000'))
})()

// 18. get rid of previous endpoint to ensure you are now using the gql endpoint.
