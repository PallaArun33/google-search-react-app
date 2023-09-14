// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionItems, itemsDeleted} = props
  const {suggestion} = suggestionItems

  const onDelete = () => {
    itemsDeleted(suggestion)
  }

  return (
    <li className="list-item">
      <p className="para">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow"
        onClick={onDelete}
      />
    </li>
  )
}

export default SuggestionItem
