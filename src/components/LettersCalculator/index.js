// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {count: ''}

  countOfLetters = event => {
    this.setState({count: event.target.value})
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <div className="bg-container">
          <div>
            <h1 className="heading">Calculate the Letters you enter</h1>
            <label htmlFor="label-text">Enter the phrase</label>
            <input
              type="text"
              id="label-text"
              placeholder="Enter the phrase"
              onChange={this.countOfLetters}
            />

            <div className="card">
              <p className="letters-count">No.of letters: {count.length}</p>
            </div>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              alt="letters calculator"
              className="image"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
