import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../../assets/logoautomat.jpg';


function BasicExample() {
  return (
    <Navbar bg="light" expand="lg" className='navigation'>
      <Container>
      <Navbar.Brand href="/adminHome">
            <img
              src={Logo} 
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/stock">Stock del día</Nav.Link>
            <Nav.Link href="/consumos">Consumos del día</Nav.Link>
            <Nav.Link href="/historicos">Informe de historicos</Nav.Link>
            <Nav.Link href="/costos">Informe de costos</Nav.Link>
            <Nav.Link href="/parametros">Parametros</Nav.Link>
            <Nav.Link href="#link">Otros</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;