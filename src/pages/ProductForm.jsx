import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { saveProduct } from "../server/ServerProduct.jsx";
import { useNavigate } from "react-router-dom";



function ProductForm(){

    const navigate = useNavigate();
    function returntoProduct(){
        navigate("/product")
    }

    const [product, setProduct] = useState({
        
        service:"",
        cost:"",
        durationService:"",
        idClient:""
    });

    function handleChange({target}){
        setProduct({
            ...product,
            [target.name]:target.value
        });
    };

    async function handleSubmit(e){
        e.preventdefault();
        const response = await saveProduct(product);
        alert(response);
        returntoProduct;
    }

    return (
        <Container>
            <h2>Registrar Producto</h2>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col xs="auto" className="my-1">
                        <Form.label1>Servicio</Form.label1>
                        <Form.Control
                        required
                        type = "text"
                        name="service"
                        onChange={handleChange}
                        />
                    </Col>
                    <Col xs="auto" className="my-1">
                    <Form.label1>Costo</Form.label1>
                        <Form.Control
                        required
                        type = "number"
                        name="cost"
                        onChange={handleChange}
                        />
                    </Col>
                    <Col xs="auto" className="my-1">
                    <Form.label1>Duración servicio</Form.label1>
                        <Form.Control
                        required
                        type = "number"
                        name="durationService"
                        onChange={handleChange}
                        />
                    </Col>
                    <Row>
                    </Row>
                    <Col xs="auto" className="my-1">
                    <Form.label1>ID Cliente</Form.label1>
                        <Form.Control
                        required
                        type = "text"
                        name="idClient"
                        onChange={handleChange}
                        />
                    </Col>
                </Row>
                <Row></Row>
                <Row>
                    <Col md={{span:3, offset:3}}> <Button variant="success" type="submit">Guardar</Button></Col>
                </Row>
            </Form>
            <Row xs={2} md={4} lg={6} className="my-3">
                <Col><Button onClick={returntoProduct}>Volver</Button> </Col>
            </Row>
        </Container>
    )
}export {ProductForm}