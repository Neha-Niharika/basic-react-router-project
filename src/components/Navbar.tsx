import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        MyApp
      </Link>
      <div className="navbar-nav">
        <Link to="/" className="nav-item nav-link">
          Home
        </Link>
        <Link to="/about" className="nav-item nav-link">
          About
        </Link>
        <Link to="/contact" className="nav-item nav-link">
          Contact
        </Link>
      </div>
    </nav>
  );
}
export default Navbar;
