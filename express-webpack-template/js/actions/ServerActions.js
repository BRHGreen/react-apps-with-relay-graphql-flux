import AppDispatcher from '../AppDispatcher'
import { ActionTypes } from '../Constants'

// 4. create server actions. AppDispatcher is using flux dispatcher
let ServerActions = {
  receiveLinks(links) {
    // 7. call the flux dispatcher. At this point you can console.log the call
    console.log('2. In ServerActions');
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVE_LINKS,
      links
    })
  }
}

export default ServerActions
