import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const [signOut, loading1, error1] = useSignOut(auth);
    console.log(user);
    return (
        <Navbar sticky='top' collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    
                    <Nav>
                        <Nav.Link as={Link} to="/inventory:/id">Manage Item</Nav.Link>
                    </Nav>

                    {user ?
                        <Nav>
                            <Nav.Link as={Link} to="/myItem">My Item</Nav.Link>
                            <Nav.Link as={Link} to="/addItem">Add Item</Nav.Link>
                            <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                            <Nav.Link as={Link} eventKey={2} onClick={async () => await signOut()}>
                                Logout
                            </Nav.Link>
                        </Nav>
                        :
                        <Nav>
                            <Nav.Link as={Link} eventKey={2} to="/login">
                                Login
                            </Nav.Link>
                        </Nav>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;