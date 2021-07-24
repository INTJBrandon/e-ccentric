import {Navbar, Nav, Container} from 'react-bootstrap'

export default function navigation(props) {
    return (
        <>
            <Navbar  bg="dark" variant="dark">
                <Container style={{ marginLeft: "0", paddingLeft: "1"}}>
                    <Navbar.Brand href="/home">E-ccentric</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/charge">Start Charging</Nav.Link>
                        <Nav.Link href="/transactions">Transactions</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}