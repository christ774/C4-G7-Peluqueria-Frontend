import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { deleteClientById, findClientById, saveClient } from "../server/ServerClient.jsx";

function ClientDetail() {

    const [disabled, setDisable] = useState(true);
    const [client, setClient] = useState({})

    const { id } = useParams();

    const navigate = useNavigate();
    function retornarPage() {
        navigate("/cliente")
    }

    useEffect(() => {
        findClientById(id)
            .then(data => {
                setClient(data);
            })
    }, [id])

    async function eliminarClient(id) {
        let respuesta = window.confirm("Seguro de Eliminar?");
        if (respuesta) {
            const response = await deleteClientById(id);
            alert(response);
            retornarPage();
        }
    };

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
        retornarPage()
    }

    return (
        <Container>
            <Row>
                <Form.Label>Id</Form.Label>
                <Col><Form.Control defaultValue={client.id} disabled /></Col>
                <Col md="auto"></Col>
                <Col xs lg="2">
                    <Button variant="danger" onClick={() => eliminarClient(client.id)} >Eliminar</Button>
                </Col>
            </Row>

            <Form className="mt-5" onSubmit={handleSubmit}>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="nombreyapellido">
                        <Form.Label>Nombre y Apellido</Form.Label>
                        <Form.Control defaultValue={client.nombreyapellido} disabled={disabled}
                                      name="nombreyapellido"
                                      type="text"
                                      required
                                      onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="cedula">
                        <Form.Label>Cedula</Form.Label>
                        <Form.Control defaultValue={client.cedula} disabled={disabled}
                                      name="cedula"
                                      type="number"
                                      required
                                      onChange={handleChange}
                        />
                   
                    </Form.Group>
                    <Form.Group as={Col} controlId="correo">
                        <Form.Label>Correo</Form.Label>
                        <Form.Control defaultValue={client.correo} disabled={disabled}
                                      name="correo"
                                      type="text"
                                      required
                                      onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group as={Col} controlId="telefono">
                        <Form.Label>Telefono</Form.Label>
                        <Form.Control defaultValue={client.telefono} disabled={disabled}
                                      name="telefono"
                                      type="number"
                                      required
                                      onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group as={Col} controlId="direccion">
                        <Form.Label>Dirrecion</Form.Label>
                        <Form.Control defaultValue={client.direccion} disabled={disabled}
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
export {ClientDetail}