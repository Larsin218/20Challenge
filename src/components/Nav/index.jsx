import { Link } from "react-router-dom";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav({ currentPage }) {
  const pages = ["portfolio", "contact", "resume"];

  return (
    <nav>
      <div className="nav">
        <h4
          className={`${currentPage === "/" && "navActive"}`}
          key="about"
        >
          <Link className="navText" to="/">About</Link>
        </h4>
        {pages.map((Page) => (
          <h4
            className={`${currentPage === `/${Page}` && "navActive"}`}
            key={Page}
          >
            <Link className="navText" to={`/${Page}`}>{capitalizeFirstLetter(Page)}</Link>
          </h4>
        ))}
      </div>
    </nav>
  );
}

export default Nav;
