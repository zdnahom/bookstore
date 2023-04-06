import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Navigation = () => (
  <header className="header">
    <nav className="nav">
      <ul className="navbar">
        <Link to="/" className="logo">BOOKSTORE CMS</Link>
        <li><Link to="/" className="nav-link">BOOKS</Link></li>
        <li><Link to="/categories" className="nav-link">CATEGORIES</Link></li>
      </ul>
      <div className="oval">
        <FontAwesomeIcon icon={faUser} className="profile" />
      </div>
    </nav>
  </header>
);

export default Navigation;
