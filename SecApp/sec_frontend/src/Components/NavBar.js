import React from 'react';
import { Navbar, Form, Button, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class AppNav extends React.Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand >Navbar</Navbar.Brand>
                <Nav classname="mr-auto">
                    <LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
                    <LinkContainer to="/store"><Nav.Link>Store</Nav.Link></LinkContainer>
                </Nav>
                <Form inline>
                    <LinkContainer to="/login"><Button variant="outline-info">Login</Button></LinkContainer>
                </Form>
            </Navbar>
        )
    }
}
export default AppNav;