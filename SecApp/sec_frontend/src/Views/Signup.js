import React , { Component } from "react";
import { Form, Button, Container, Col, Card, ButtonGroup } from "react-bootstrap";


class Signup extends Component{
    render(){
        return(
            <Container>
                <Col md={{ span: 6, offset: 3 }}>
                    <Card>
                        <Form className="loginForm">
                            <Form.Group controlId="formBasicUser" className="userName">
                                <Form.Label>User Name</Form.Label>
                                <Form.Control placeholder="Enter User Name"/>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail"className="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Email" />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword" className="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group controlId="formBasicFirstName" className="firstname">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control placeholder="First Name" />
                            </Form.Group>
                            <Form.Group controlId="formBasicLastName" className="lastname">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control placeholder="Last Name" />
                            </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                        </Form>
                    </Card>
                </Col>
            </Container>
        )
    }
    apiHandler(){
        const user = {};
        const CreateUser = document.querySelector('.loginForm');
        CreateUser.addEventListener('submit' , (e) => {
            e.preventDefault();
            user = {
                LoginName: CreateUser.querySelector('.username').value,
                Email: CreateUser.querySelector('.email').value,
                PasswordHash: CreateUser.querySelector('.password').value,
                FirstName: CreateUser.querySelector('.firstname').value,
                LastName: CreateUser.querySelector('.lastname').value
            }
        })
        function post (path, data) {
            return window.fetch(path, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
        }
        post('/createUser', user)
    }
}
export default Signup;
