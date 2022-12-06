import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../assets/logo_kruger_negro.png"
function NavbarKruger() {
    return (
        <Navbar bg="light bg-opacity-75" expand="lg" className='' >
            <Container className=''>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Brand className='img-container'>
                    <img className='img-fluid' width={100} src={logo} />
                </Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarKruger;