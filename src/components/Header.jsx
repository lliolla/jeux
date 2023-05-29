import { NavLink } from "react-router-dom";

const Header = ({ title }) => {
  return (
    <header>
      <h1> {title}</h1>
      <div className="button quit">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          QUITTER
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
