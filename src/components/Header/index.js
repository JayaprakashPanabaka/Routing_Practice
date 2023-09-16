// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <>
    <nav className="nav-container">
      <div className="logo-container">
        <img
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          alt="wave"
        />
        <span className="logo-text">Wave</span>
      </div>

      <div>
        <ul className="nav-items">
          <li>
            <Link className="li" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="li" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="li" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    {/* <h1>Header</h1> */}
  </>
)

export default Header
