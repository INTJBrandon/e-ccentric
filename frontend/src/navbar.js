import {Navbar, Nav, Container} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export default function navigation(props) {
    return (
        <>
            <Navbar  bg="dark" variant="dark">
                <Container style={{ marginLeft: "0", paddingLeft: "1"}}>
                    <Navbar.Brand as={NavLink} to="/home">E-ccentric</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/charge">Start Charging</Nav.Link>
                        <Nav.Link as={NavLink} to="/transactions">Transactions</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}