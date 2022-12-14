import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { saveProduct } from "../server/ServerProduct.jsx";

function ProductForm() {

    const navigate = useNavigate();
    function returntoProduct(){
        navigate("/product")
    }

    const [product, setProduct] = useState({
        
        service: "",
        cost: "",
        durationService: "",
        idClient: ""
    });

    function handleChange({target}){
        setProduct({
            ...product,
            [target.name]: target.value
        });
    };

    async function handleSubmit(e){
        e.preventDefault();
        const response = await saveProduct(product);
        alert(response);
        returntoProduct();
    }

    return (
        <Container>
            <h1>Registrar Servicio</h1>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col xs="auto" className="my-1">
                        <Form.Label>Servicio</Form.Label>
                        <Form.Control
                        required
                        type="text"
                        name="service"
                        onChange={handleChange}
                        />
                    </Col>
                    <Col xs="auto" className="my-1">
                    <Form.Label>Costo</Form.Label>
                        <Form.Control
                        required
                        type="number"
                        name="cost"
                        onChange={handleChange}
                        />
                    </Col>
                    <Col xs="auto" className="my-1">
                    <Form.Label>Duración servicio</Form.Label>
                        <Form.Control
                        required
                        type="number"
                        name="durationService"
                        onChange={handleChange}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col xs="auto" className="my-1">
                    <Form.Label>ID Cliente</Form.Label>
                        <Form.Control
                        required
                        type="text"
                        name="idClient"
                        onChange={handleChange}
                        />
                    </Col>
                </Row>
                <Row>

                </Row>
                <Row>
                    <Col md={{span:3, offset:3}}> <Button variant="success" type="submit">Guardar</Button></Col>
                </Row>
            </Form>
            <Row xs={2} md={4} lg={6} className="my-3">
                <Col><Button onClick={returntoProduct}>Volver</Button> </Col>
            </Row>
        </Container>
    )
}
export {ProductForm}