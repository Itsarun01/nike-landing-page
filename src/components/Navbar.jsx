import logo from "../assets/brand_logo.png";

const Navbar = () => {
  return (
    <>
      <nav className="container">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <ul className="nav-list">
          <li className="nav-link">
            <a href="http://">Menu</a>
          </li>
          <li className="nav-link">
            <a href="http://">Location</a>
          </li>

          <li className="nav-link">
            <a href="http://">About</a>
          </li>
          <li className="nav-link">
            <a href="http://">Contact</a>
          </li>
        </ul>
        <button>Login</button>
      </nav>
    </>
  );
};

export default Navbar;
