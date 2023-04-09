import logo from "./logo.svg";
import "./App.css";
import { Navbar, Nav } from "react-bootstrap";
import Home from './Home';
import About from './About';
import User from './User';
import {
  Link,
  BrowserRouter as Router,
  Route,
  Routes,
  Switch
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <Router>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>
            <Link to="/">Navbar</Link>
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/about">About</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/user">User</Link>
            </Nav.Link>
          </Nav>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </Navbar>
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />}  />
          <Route path="user" element={<User />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
