import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/board" className="nav-link">
        Board
      </Link>
    </nav>
  );
};

export default NavigationBar;
