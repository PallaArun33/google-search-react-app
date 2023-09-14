// Write your code here
import './index.css'

import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {inputElement: ''}

  onEventChange = event => {
    this.setState({inputElement: event.target.value})
  }

  itemsDeleted = suggestion => {
    this.setState({inputElement: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {inputElement} = this.state
    const searchResults = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(inputElement.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          className="image"
          alt="google logo"
        />
        <div className="search-container">
          <div className="input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png "
              className="icon"
              alt="search icon"
            />
            <input
              type="search"
              className="search-input"
              placeholder="Search Google"
              onChange={this.onEventChange}
              value={inputElement}
            />
          </div>
          <ul className="ul-item">
            {searchResults.map(eachItem => (
              <SuggestionItem
                key={eachItem.id}
                suggestionItems={eachItem}
                itemsDeleted={this.itemsDeleted}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
