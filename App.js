import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="AppUser">
      <header className="headerUser">
        <nav className="navbarUser">
          <nav className="logopicuserhome">
            <a href="/homepage">
              <img className="userHome" src={logo} alt="logo" />
            </a>
          </nav>
          <ul className="nav-menu-home">
            <li className="nav-item-home">
              <a href="/" className="nav-link-home">
                Look at list
              </a>
            </li>
            <li className="nav-item-home">
              <a href="/" className="nav-link-home">
                Add to List
              </a>
            </li>
            <li className="nav-item-home">
              <button className="button-nav-link" onClick={handleLogout}>
                {" "}
                Sign Out{" "}
              </button>
            </li>
          </ul>
        </nav>
      </header>

      {/*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>REEEEEEEEEE HELP</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>


      */}
    </div>
  );
}

export default App;
