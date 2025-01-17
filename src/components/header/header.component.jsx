import "./header.style.scss";
import { ReactComponent as Logo } from "../../assets/icon.svg";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.util";

const Header = ({ currentUser }) => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo"></Logo>
    </Link>
    <div className="options">
      <Link to="/shop" className="option">
        SHOP
      </Link>
      <Link to="/contact" className="option">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          LOGOUT
        </div>
      ) : (
        <Link to="/signin" className="option">
          LOGIN
        </Link>
      )}
    </div>
  </div>
);

export default Header;
