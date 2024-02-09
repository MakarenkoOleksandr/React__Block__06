import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Navigation = () => (
  <nav>
    <ul className="list">
      <li>
        <NavLink to="/" exact activeClassName="active">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" activeClassName="active">
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" activeClassName="active">
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink to="/profile" activeClassName="active">
          Profile
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
