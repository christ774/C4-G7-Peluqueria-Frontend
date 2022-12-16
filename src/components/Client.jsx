import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { deleteClientById, listaClients } from "../server/ServerClient.jsx";

function Client() {

    const [listClient, setListaClient] = useState([]);

    async function listarClients() {
        try {
            const res = await listaClients();
            setListaClient(res);
        } catch (error) {

        }
    }
    useEffect(() => {
        listarClients();
    }, [setListaClient]);

    async function eliminarClient(id) {
        let result = window.confirm("Seguro de Eliminar");
        if (result) {
            const res = await deleteClientById(id);
            alert(res);
            setListaClient(listClient.filter(client => client.id !== id))
        }

    }


    let contadorClients = 0;
    
    return (
        <Container>
            <Row className="my-3">
                <Col><h2>Cliente</h2></Col>
                <Col xs={6}></Col>
                <Col><Link to="/client/form"><Button variant="success">Registrar</Button></Link></Col>
            </Row>
            <Table striped bordered hover >
                <thead>
                <tr>
                    <th>#</th>
                    <th>Nombre y Apellido</th>
                    <th>Cedula</th>
                    <th>Correo</th>
                    <th>Telefono</th>
                    <th>Direccion</th>
                    <th>Ver Detalle</th>
                    <th>Eliminar</th>
                </tr>
                </thead>
                <tbody >
                {
                    listClient.map((client) => (
                            <tr key={client.id}>
                                <td>{++contadorClients}</td>
                                <td>{client.name_surname}</td>
                                <td>{client.identification}</td>
                                <td>{client.email}</td>
                                <td>{client.phoneNumber}</td>
                                <td>{client.address}</td>

                                <td><Link to={`/client/${client.id}`}>Ver Detalle</Link></td>
                                <td ><Button variant="danger" onClick={() => eliminarClient(client.id)}>Eliminar</Button></td>
                            </tr>
                        )

                    )
                }
                </tbody>
            </Table>
        </Container>
    )
}
export { Client }
