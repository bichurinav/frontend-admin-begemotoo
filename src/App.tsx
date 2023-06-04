import { Outlet, useLocation } from "react-router-dom";
import "./App.scss";

function App() {
  const location = useLocation();

  return (
    <div className={location.pathname === "/auth" ? "App App--auth" : "App"}>
      <header className="App-header">
        <div className="container container--center">
          <header>
            <h1 className="logo">
              Admin Panel <span>Begemotoo</span>
            </h1>
          </header>
          <div className="content mt-4">
            <Outlet />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
