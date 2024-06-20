import { Route, Switch, Link } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import Login from "./pages/Login";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import Header from "./components/header/Header";
import { useState } from "react";

function App() {
  const [activeProfile, setActiveProfile] = useState(null);

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Header activeProfile={activeProfile} />
        </Route>
        <Route path="/login">
          <Header activeProfile={activeProfile} />
          <Login />
        </Route>
        <Route path="/welcome">
          <Welcome setActiveProfile={setActiveProfile} />
        </Route>
        <Route path="/home">
          <Header activeProfile={activeProfile} />
          <Home activeProfile={activeProfile} />
        </Route>
      </Switch>
      <div className="dev-navigation">
        <Link to="/">HomePage</Link>
        <Link to="/login">Login</Link>
        <Link to="/welcome">Welcome</Link>
        <Link to="/home">Home</Link>
      </div>
    </div>
  );
}

export default App;
