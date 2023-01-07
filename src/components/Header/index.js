import {Link} from 'react-router-dom'
import './index.css'

const Header = () => {
  const onClickMenuButton = () => {
    console.log('menu button triggered')
  }
  return (
    <ul className="header">
      <Link to="/" className="nav-link">
        <h3 className="title">
          COVID19<span className="title-span">INDIA</span>
        </h3>
      </Link>
      <div className="menu-button-container">
        <button
          type="button"
          className="menu-button"
          onClick={onClickMenuButton}
        >
          <img
            alt="menu-icon"
            className="menu-icon"
            src="https://res.cloudinary.com/dti4rul7e/image/upload/v1665511606/Covid19%20Dashboard%20-%20React%20JS%20Mini%20Project/menu-icon_pxfsun.svg"
          />
        </button>
      </div>
      <div className="menu-section">
        <li>
          <Link to="/" className="nav-link">
            <p className="menu-content">Home</p>
          </Link>
        </li>
        <li>
          <Link to="/vaccination" className="nav-link">
            <p className="menu-content">Vaccination</p>
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-link">
            <p className="menu-content">About</p>
          </Link>
        </li>
      </div>
    </ul>
  )
}

export default Header