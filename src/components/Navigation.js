import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Navigation = () => (
  <header className="header">
    <nav className="nav">
      <ul className="navbar">
        <NavLink to="/" className="logo">BOOKSTORE CMS</NavLink>
        <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : 'nav-link')}>BOOKS</NavLink></li>
        <li><NavLink to="/categories" className={({ isActive }) => (isActive ? 'active-link' : 'nav-link')}>CATEGORIES</NavLink></li>
      </ul>
      <div className="oval">
        <FontAwesomeIcon icon={faUser} className="profile" />
      </div>
    </nav>
  </header>
);

export default Navigation;
