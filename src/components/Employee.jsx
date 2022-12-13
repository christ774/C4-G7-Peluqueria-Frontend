import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { deleteEmployeeById, listaEmployees } from "../server/ServerEmployee.jsx";

function Employee() {

    const [listEmployee, setListaEmployee] = useState([]);

    async function listarEmployees() {
        try {
            const res = await listaEmployees();
            setListaEmployee(res);
        } catch (error) {

        }
    }
    useEffect(() => {
        listarEmployees();
    }, [setListaEmployee]);


    async function eliminarEmployee(id) {
        let result = window.confirm("Seguro de Eliminar");
        if (result) {
            const res = await deleteEmployeeById(id);
            alert(res);
            setListaEmployee(listEmployee.filter(employee => employee.id !== id))
        }

    }


    let contadorEmployees = 0;


    return (
        <Container>
            <Row className="my-3">
                <Col><h2>Empleado</h2></Col>
                <Col xs={6}></Col>
                <Col><Link to="/employee/form"><Button variant="success">Registrar</Button></Link></Col>
            </Row>
            <Table striped bordered hover >
                <thead>
                <tr>
                    <th>#</th>
                    <th>Nombre y Apellido</th>
                    <th>Cedula</th>
                    <th>Especialidad</th>
                    <th>Correo</th>
                    <th>Telefono</th>
                    <th>Direccion</th>
                    <th>Ver Detalle</th>
                    <th>Eliminar</th>
                </tr>
                </thead>
                <tbody >
                {
                    listEmployee.map((employee) => (
                            <tr key={employee.id}>
                                <td>{++contadorEmployees}</td>
                                <td>{employee.name_surname}</td>
                                <td>{employee.identification}</td>
                                <td>{employee.specialty}</td>
                                <td>{employee.email}</td>
                                <td>{employee.phoneNumber}</td>
                                <td>{employee.address}</td>

                                <td><Link to={`/employee/${employee.id}`}>Ver Detalle</Link></td>
                                <td ><Button variant="danger" onClick={() => eliminarEmployee(employee.id)}>Eliminar</Button></td>
                            </tr>
                        )

                    )
                }
                </tbody>
            </Table>
        </Container>
    )
}
export { Employee }