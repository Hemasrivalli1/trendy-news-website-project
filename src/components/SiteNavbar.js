import { Link } from "react-router-dom";

function SiteNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Trendy News
        </Link>

        <div className="navbar-nav">
          <Link className="nav-link" to="/">
            Home
          </Link>

          <Link className="nav-link" to="/about">
            About
          </Link>

          <Link className="nav-link" to="/contact">
            Contact
          </Link>

          <Link className="nav-link" to="/news">
            News
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default SiteNavbar;