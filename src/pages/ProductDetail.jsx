import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { deleteProductById, findProductById, saveProduct } from "../server/ServerProduct.jsx";


function ProductDetail() {

    const [disabled, setDisable] = useState(true);
    const [product, setProduct] = useState({})

    const { id } = useParams();

    const navigate = useNavigate();
    function retornarPage() {
        navigate("/servicios")
    }

    useEffect(() => {
        findProductById(id)
            .then(data => {
                setProduct(data);
            })
    }, [id])

    async function eliminarProduct(id) {
        let respuesta = window.confirm("Seguro de Eliminar?");
        if (respuesta) {
            const response = await deleteProductById(id);
            alert(response);
            retornarPage();
        }
    };

    function handleChange({ target }) {
        setProduct({
            ...product,
            [target.name]: target.value
        });
    };

    async function handleSubmit(e) {
        e.preventDefault();
        const response = await saveProduct(product);
        alert(response);
        retornarPage()
    }

    return (
        <Container>
            <Row>
                <Form.Label>Id</Form.Label>
                <Col><Form.Control defaultValue={product.id} disabled /></Col>
                <Col md="auto"></Col>
                <Col xs lg="2">
                    <Button variant="danger" onClick={() => eliminarProduct(product.id)} >Eliminar</Button>
                </Col>
            </Row>

            <Form className="mt-5" onSubmit={handleSubmit}>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="servicio">
                        <Form.Label>Servicio</Form.Label>
                        <Form.Control defaultValue={product.service} disabled={disabled}
                                      name="service"
                                      type="text"
                                      required
                                      onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="costo">
                        <Form.Label>Costo</Form.Label>
                        <Form.Control defaultValue={product.cost} disabled={disabled}
                                      name="cost"
                                      type="number"
                                      required
                                      onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group as={Col} controlId="duracion">
                        <Form.Label>Duración</Form.Label>
                        <Form.Control defaultValue={product.durationService} disabled={disabled}
                                      name="durationService"
                                      type="number"
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
export { ProductDetail }