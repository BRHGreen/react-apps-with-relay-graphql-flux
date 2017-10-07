import { post } from 'jquery'
import ServerActions from './actions/ServerActions'

// 2. write API module which will use API endpoint defined in server.js

// 17. change the verb to post. change the enpoint to graphql and include the gql query in the endpoint. Change the arg in `ServerActions.receiveLinks` to get the correct data

let API = {
  fetchLinks() {
    console.log('1. In API');
    post('/graphql', {
    query: `{
      links {
        _id
        title
        url
      }
    }`
  }).done(resp => {
      ServerActions.receiveLinks(resp.data.links)
    })
  }
}

export default API
