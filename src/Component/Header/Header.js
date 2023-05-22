import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../img/logoTitle.png';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const [signOut, loading1, error1] = useSignOut(auth);

    const navigate = useNavigate();
    const logout=async()=>{
        await signOut();
        navigate('/login');
    }

    return (
        <Navbar sticky='top' collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img src={logo} className='me-2' alt="" srcset="" />
                    Dream Fruit</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    </Nav>
                    
                    <Nav>
                        <Nav.Link as={Link} to="/inventory:/id">Manage Item</Nav.Link>
                    </Nav>

                    {user ?
                        <Nav>
                            <Nav.Link as={Link} to="/myItem">My Item</Nav.Link>
                            <Nav.Link as={Link} to="/addItem">Add Item</Nav.Link>
                            <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                            <Nav.Link as={Link} eventKey={2} onClick={logout}>
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