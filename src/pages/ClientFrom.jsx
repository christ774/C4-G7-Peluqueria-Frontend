import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { saveClient } from "../server/ServerClient.jsx";

function ClientFrom() {

    const navigate = useNavigate();
    function returnToClients() {
        navigate("/cliente")
    }

    const [client, setClient] = useState({
        name_surname: "",
        identification: "",
        email: "",
        phoneNumber: "",
        address: ""

    });

    function handleChange({ target }) {
        setClient({
            ...client,
            [target.name]: target.value
        });
    };

    async function handleSubmit(e) {
        e.preventDefault();
        const response = await saveClient(client);
        alert(response);
        returnToClients();

    }

    return (
        <Container>
            <h1>Registrar Cliente</h1>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col xs="auto" className="my-1">
                        <Form.Label>Nombre y Apellido</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="name_surname"
                            onChange={handleChange}
                        />
                    </Col>
                    <Col xs="auto" className="my-1">
                        <Form.Label>Cedula</Form.Label>
                        <Form.Control
                            required
                            type="number"
                            name="identification"
                            onChange={handleChange}
                        />
                    </Col>

                </Row>
                <Row>
                    <Col xs="auto" className="my-1">
                        <Form.Label>Correo</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="email"
                            onChange={handleChange}
                        />
                    </Col>
                    <Col xs="auto" className="my-1">
                        <Form.Label>Telefono</Form.Label>
                        <Form.Control
                            required
                            type="number"
                            name="phoneNumber"
                            onChange={handleChange}
                        />
                    </Col>
                    <Col xs="auto" className="my-1">
                        <Form.Label>Direccion</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="address"
                            onChange={handleChange}
                        />
                    </Col>
                </Row>
                <Row >

                </Row>
                <Row>
                    <Col md={{ span: 3, offset: 3 }}><Button variant="success" type="submit">Guardar</Button></Col>
                </Row>

            </Form>
            <Row xs={2} md={4} lg={6} className="my-3">
                <Col> <Button onClick={returnToClients}>Volver</Button></Col>
            </Row>
        </Container>
    )
}
export { ClientFrom }