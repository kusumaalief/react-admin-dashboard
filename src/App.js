import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

import "./app.scss"
import Home from "./pages/home/Home";
import Users from "./pages/users/Users";

import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import UserDetail from "./pages/users/UserDetail";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar/>
        <div className="main-container">
          <Sidebar/>
          <div className="main--content">
            <Switch>
              <Route exact path="/">
                <Home/>
              </Route>

              <Route path="/users">
                <Users/>
              </Route>

              <Route path="/user/:userId">
                <UserDetail/>
              </Route>

            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
