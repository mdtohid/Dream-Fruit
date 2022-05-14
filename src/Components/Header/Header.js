import {Navbar, Nav, Container} from 'react-bootstrap';

const Header = () => {
  
    return (
        
        <Navbar collapseOnSelect sticky='top' expand="lg" bg="dark" variant="dark">
        <Container >
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#fruitItem">Fruit Item</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
        
    );
};

export default Header;