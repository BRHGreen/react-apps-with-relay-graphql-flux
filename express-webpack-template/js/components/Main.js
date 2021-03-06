import React from "react";
import API from '../API'
import LinkStore from '../stores/LinkStore'

// 11. create a function to get the data from the store to be called in initial state and `onChange`
let _getAppState = () => {
  return { links: LinkStore.getAll() }
}

export default class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = _getAppState()
    this.onChange = this.onChange.bind(this)
  }

// 3. import API module and call it on componentDidMount
componentDidMount () {
  API.fetchLinks()
  // 12. call the `LinkStore`
  LinkStore.on('change', this.onChange)
}
componentWillUnmount () {
  LinkStore.removeListener('change', this.onChange)
}
onChange () {
  console.log('4. In the View');
  this.setState(_getAppState())
}

  render() {
    let content = this.state.links.map(link => {
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
