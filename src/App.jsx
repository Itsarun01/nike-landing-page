import "./App.css";
import logo from "./assets/brand_logo.png";

function App() {
  return (
    <>
      <nav>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <ul className="nav-list">
          <li className="nav-link">
            <a href="http://">Menu</a>
            <a href="http://">Location</a>
            <a href="http://">About</a>
            <a href="http://">Contact</a>
          </li>
        </ul>
        <button>Login</button>
      </nav>
    </>
  );
}

export default App;
