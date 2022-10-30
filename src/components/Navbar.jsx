import airBNBLogo from '../images/airbnb-logo.svg';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={airBNBLogo} alt="AirBNB Logo" className="navbar--logo" />
    </nav>
  );
};

export default Navbar;
