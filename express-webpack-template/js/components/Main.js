import React, { PropTypes } from "react";
import API from '../API'
import LinkStore from '../stores/LinkStore'

// 11. create a function to get the data from the store to be called in initial state and `onChange`
let _getAppState = () => {
  return { links: LinkStore.getAll() }
}

class Main extends React.Component {
  // 20. put static propTypes/defaultProps within the class
  static propTypes = {
    limit: React.PropTypes.number
  }
  static defaultProps = {
    limit: 3
  }
// 21. move state out of constructor. make onChange a property. remove constructor
  state = _getAppState()

// 3. import API module and call it on componentDidMount
componentDidMount () {
  API.fetchLinks()
  // 12. call the `LinkStore`
  LinkStore.on('change', this.onChange)
}
componentWillUnmount () {
  LinkStore.removeListener('change', this.onChange)
}
onChange = () => {
  console.log('4. In the View');
  this.setState(_getAppState())
}

  render() {
    let content = this.state.links.slice(0, this.props.limit).map(link => {
      return(
      <li key={link._id}>
        <a href={link.url}>{link.url}</a>
      </li>
      )
    })
    return (
      <div>
        <h3>Links new</h3>
        <ul>
          {content}
        </ul>
      </div>
    )
  }
}

export default Main
