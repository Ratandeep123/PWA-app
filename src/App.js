import logo from './logo.svg';
import './App.css';
import { Navbar, Nav } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
       <Navbar bg="dark" variant='dark'>
        <Navbar.Brand href="#home">navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#feature">Feature</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
       </Navbar>
    </div>
  );
}

export default App;
