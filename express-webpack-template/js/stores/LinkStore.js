import AppDispatcher from '../AppDispatcher'
import { ActionTypes } from '../Constants'
import { EventEmitter } from 'events'

// 8. create store using the flux dispatcher and an event library

let _links = []
class LinkStore extends EventEmitter {
  constructor(props) {
    super(props)

    AppDispatcher.register(action => {
      switch (action.actionType) {
        case ActionTypes.RECEIVE_LINKS:
        // you can console.log data at this point
        console.log('3. in Store');
          _links = action.links
          this.emit('change')
          break;
        default:
          // do nothing
      }
    })
  }
  // 9. create a method to be used in the `Main` component to fetch the data
  getAll() {
    return _links
  }
}

export default new LinkStore()
