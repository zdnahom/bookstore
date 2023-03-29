import { Link } from 'react-router-dom';

const Navigation = () => (
  <header className="header">
    <Link to="/" className="logo">BOOKSTORE CMS</Link>
    <nav className="nav">
      <ul className="navbar">
        <li><Link to="/" className="nav-link">BOOKS</Link></li>
        <li><Link to="/categories" className="nav-link">CATEGORIES</Link></li>
      </ul>
    </nav>
  </header>
);

export default Navigation;
