import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

import "./app.scss"
import Home from "./pages/home/Home";
import Users from "./pages/Users/Users";

import { BrowserRouter as Router,Switch,Route } from "react-router-dom";

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
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;