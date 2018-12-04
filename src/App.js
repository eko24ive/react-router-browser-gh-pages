import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;

const AppRouter = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about/">About</Link>
          </li>
          <li>
            <Link to="/users/">Users</Link>
          </li>
        </ul>
      </nav>

      <Route path={`${process.env.PUBLIC_URL}/`} exact component={Index} />
      <Route path={`${process.env.PUBLIC_URL}/about/`} component={About} />
      <Route path={`${process.env.PUBLIC_URL}/users/`} component={Users} />
    </div>
  </Router>
);

export default AppRouter;