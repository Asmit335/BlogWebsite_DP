import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">MyBlog</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link
            to="/"
            className={location.pathname === '/' ? 'active-link' : ''}
          >
            Home
          </Link>
        </li>
      
        <li>
          <Link
            to="/about"
            className={location.pathname === '/about' ? 'active-link' : ''}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={location.pathname === '/contact' ? 'active-link' : ''}
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            to="/create"
            className={location.pathname === '/create' ? 'active-link' : ''}
          >
            Create Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
