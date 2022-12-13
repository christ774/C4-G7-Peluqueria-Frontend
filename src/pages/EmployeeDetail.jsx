import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { deleteEmployeeById, findEmployeeById, saveEmployee } from "../server/ServerEmployee.jsx";

function EmployeeDetail() {

    const [disabled, setDisable] = useState(true);
    const [employee, setEmployee] = useState({})

    const { id } = useParams();

    const navigate = useNavigate();
    function retornarPage() {
        navigate("/empleado")
    }

    useEffect(() => {
        findEmployeeById(id)
            .then(data => {
                setEmployee(data);
            })
    }, [id])

    async function eliminarEmployee(id) {
        let respuesta = window.confirm("Seguro de Eliminar?");
        if (respuesta) {
            const response = await deleteEmployeeById(id);
            alert(response);
            retornarPage();
        }
    };

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
        retornarPage()
    }

    return (
        <Container>
            <Row>
                <Form.Label>Id</Form.Label>
                <Col><Form.Control defaultValue={employee.id} disabled /></Col>
                <Col md="auto"></Col>
                <Col xs lg="2">
                    <Button variant="danger" onClick={() => eliminarEmployee(employee.id)} >Eliminar</Button>
                </Col>
            </Row>

            <Form className="mt-5" onSubmit={handleSubmit}>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="nombreyapellido">
                        <Form.Label>Nombre y Apellido</Form.Label>
                        <Form.Control defaultValue={employee.nombreyapellido} disabled={disabled}
                                      name="nombreyapellido"
                                      type="text"
                                      required
                                      onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="cedula">
                        <Form.Label>Cedula</Form.Label>
                        <Form.Control defaultValue={employee.cedula} disabled={disabled}
                                      name="cedula"
                                      type="number"
                                      required
                                      onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group as={Col} controlId="especialidad">
                        <Form.Label>Especialidad</Form.Label>
                        <Form.Control defaultValue={employee.especialidad} disabled={disabled}
                                      name="especialidad"
                                      type="text"
                                      required
                                      onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group as={Col} controlId="correo">
                        <Form.Label>Correo</Form.Label>
                        <Form.Control defaultValue={employee.correo} disabled={disabled}
                                      name="correo"
                                      type="text"
                                      required
                                      onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group as={Col} controlId="telefono">
                        <Form.Label>Telefono</Form.Label>
                        <Form.Control defaultValue={employee.telefono} disabled={disabled}
                                      name="telefono"
                                      type="number"
                                      required
                                      onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group as={Col} controlId="direccion">
                        <Form.Label>Dirrecion</Form.Label>
                        <Form.Control defaultValue={employee.direccion} disabled={disabled}
                                      name="direccion"
                                      type="text"
                                      required
                                      onChange={handleChange}
                        />
                    </Form.Group>

                </Row>
                <Row>
                    <Col md={{ span: 3, offset: 3 }}><Button variant="success" type="submit">Guardar</Button></Col>
                    <Col md={{ span: 3, offset: 3 }}><Button variant="warning" onClick={() => setDisable(!disabled)}>Editar</Button></Col>
                </Row>


            </Form>
            <Button variant="primary" type="button" onClick={retornarPage}>
                Volver
            </Button>
        </Container>

    )

}
export { EmployeeDetail }