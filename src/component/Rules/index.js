import './index.css'
import Popup from 'reactjs-popup'

export const Rules = () => (
  <Popup trigger={<button type="button">RULES</button>} position="center" modal>
    <img
      className="popup-element"
      src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
      alt="rules"
    />
  </Popup>
)
export default Rules
