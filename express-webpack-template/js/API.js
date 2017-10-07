import { get } from 'jquery'
import ServerActions from './actions/ServerActions'

// 2. write API module which will use API endpoint defined in server.js
let API = {
  fetchLinks() {
    console.log('1. In API');
    get('/data/links').done(resp => {
      ServerActions.receiveLinks(resp)
    })
  }
}

export default API
