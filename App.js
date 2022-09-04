import "./App.css";

function App() {
  return (
    <div className="AppUser">
      <header className="headerUser">
        <nav className="navbarUser">
          <ul className="nav-menu-home">
            <li className="nav-item-home">
              {/*   <button className="button-nav-link"  onClick={handleLogout}  >  */}
              <button className="button-nav-link"> Sign Out </button>
            </li>
          </ul>
        </nav>
      </header>

      {
        // END OF NAVBAR }
      }
      <div className="clickTable"></div>
      <table>
        <tr>
          <th>CLICK OPTIONS </th>
        </tr>
        <tr>
          <td>ADD</td> <td> LOOKUP</td>
        </tr>
        <tr>
          <td>REMOVE</td>
          <td>SOMETHING</td>
        </tr>
      </table>
    </div>
  );
}

export default App;
