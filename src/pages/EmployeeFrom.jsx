import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { saveEmployee } from "../server/ServerEmployee.jsx";

function EmployeeFrom() {

    const navigate = useNavigate();
    function returnToEmployees() {
        navigate("/empleado")
    }

    const [employee, setEmployee] = useState({
        name_surname: "",
        identification: "",
        specialty: "",
        email: "",
        phoneNumber: "",
        address: ""

    });

    function handleChange({ target }) {
        setEmployee({
            ...employee,
            [target.name]: target.value
        });
    };

    async function handleSubmit(e) {
        e.preventDefault();
        const response = await saveEmployee(employee);
        alert(response);
        returnToEmployees();

    }

    return (
        <Container>
            <h1>Registrar Empleado</h1>
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
                    <Col xs="auto" className="my-1">
                        <Form.Label>Especialidad</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="specialty"
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
                <Col> <Button onClick={returnToEmployees}>Volver</Button></Col>
            </Row>
        </Container>
    )
}
export { EmployeeFrom }