import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { deleteProductById, listaProducts } from "../server/ServerProduct.jsx";

function Product() {

    const [listProduct, setListaProduct] = useState([]);

    async function listarProduct() {
        try {
            const res = await listaProducts();
            setListaProduct(res);
        } catch (error) {

        }
    }
    useEffect(() => {
        listarProduct();
    }, [setListaProduct]);


    async function eliminarProduct(id) {
        let result = window.confirm("Seguro de Eliminar");
        if (result) {
            const res = await deleteProductById(id);
            alert(res);
            setListaProduct(listProduct.filter(product => product.id !== id))
        }
    }

    let contadorProduct = 0;


    return (
        <Container>
            <Row className="my-3">
                <Col><h2>Servicios</h2></Col>
                <Col xs={6}></Col>
                <Col><Link to="/servicios/form"><Button variant="success">Registrar</Button></Link></Col>
            </Row>
            <Table striped bordered hover >
                <thead>
                <tr>
                    <th>#</th>
                    <th>Servicios</th>
                    <th>Costo</th>
                    <th>Duración</th>
                    <th>Ver Detalle</th>
                    <th>Eliminar</th>
                </tr>
                </thead>
                <tbody >
                {
                    listProduct.map((product) => (
                            <tr key={product.id}>
                                <td>{++contadorProduct}</td>
                                <td>{product.service}</td>
                                <td>{product.cost}</td>
                                <td>{product.durationService}</td>
                                
                                <td><Link to={`/servicios/${product.id}`}>Ver Detalle</Link></td>
                                <td ><Button variant="danger" onClick={() => eliminarProduct(product.id)}>Eliminar</Button></td>
                            </tr>
                        )

                    )
                }
                </tbody>
            </Table>
        </Container>
    )
}
export { Product }