import React,{Component} from "react";
import {Navbar,Nav} from "react-bootstrap";
import {Link} from "react-router-dom";


class Nabvar extends Component{
    render()
    { return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="intro">
            <Navbar.Brand href="/">LOGO</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link 
              as={Link}
              to="/home">Home</Nav.Link>
              <Nav.Link 
              as={Link}
              to="/task">Tasks</Nav.Link>
              <Nav.Link 
              as={Link}
              to="/user">User</Nav.Link>
              </Nav>
          </Navbar>
        );
    }
};
export default Nabvar;
