import { signOut } from 'firebase/auth';
import {Navbar, Nav, Container} from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';


const Header = () => {
  const [user2] = useAuthState(auth);

    const handleSignOut = () =>{
        signOut(auth);
    }
  
    return (
        
        <Navbar collapseOnSelect sticky='top' expand="lg" bg="dark" variant="dark">
        <Container >
        <Navbar.Brand as={Link} to="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link href="#fruitItem">Fruit Item</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="about">About</Nav.Link>
            {
                user2 && <>
                <Nav.Link as={Link} to="manageItem">Manage Item</Nav.Link>
                <Nav.Link as={Link} to="myItem">My Item</Nav.Link>
                </>
            }
            {
                user2 ?
                    <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>sign out</button>
                :
                <Nav.Link as={Link} to="login">
                Login
            </Nav.Link>}
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;