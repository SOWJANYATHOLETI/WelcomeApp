// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {
    isSubscribed: true,
  }

  onTextChange = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  getButtonText = () => {
    const {isSubscribed} = this.state

    return isSubscribed ? 'Subscribe' : 'Subscribed'
  }

  render() {
    const buttonText = this.getButtonText()

    return (
      <div className="app-container">
        <div className="component-container">
          <h1 className="heading">Welcome</h1>
          <p className="description">Thank you! Happy Learning</p>
          <button className="button" type="button" onClick={this.onTextChange}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}
export default Welcome
