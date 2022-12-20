import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, FormControl, FormLabel, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { deleteDiaryPorId, listaDiarys } from "../server/ServerDiary";

function Diary() {

    const [diarys, setDiarys] = useState([]);

    async function cargarDiarys() {
        try {
            const res = await listaDiarys();
            setDiarys(res);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        cargarDiarys();
    }, []);

    async function deleteDiaryById(id) {
        let result = window.confirm("Seguro de Eliminar");
        if (result) {
            const response = await deleteDiaryPorId(id);
            alert(response);
            setDiarys(diarys.filter(diary => diary.id !== id));
        }

    }

    let contador = 0;

    return (
        <Container>
            <Row className="my-3">
                <Col><h2>Lista de Agendas</h2></Col>
                <Col xs={6}></Col>
                <Col>
                    <Link to="/agenda/form">
                        <Button variant="success">Registrar</Button>
                    </Link>

                </Col>
            </Row>


            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Id Agenda</th>
                    <th>Id Empleado</th>
                    <th>Fecha</th>
                    <th>Ver Detalle</th>
                    <th>Eliminar</th>
                </tr>
                </thead>
                <tbody>
                {
                    diarys.map((diary) => (
                        <tr key={diary.id}>
                            <td>{++contador}</td>
                            <td>{diary.id}</td>
                            <td>{diary.id_employee}</td>
                            <td>{diary.date_diary}</td>
                            <td><Link to={`/agenda/${diary.id}`}>Ver Detalle</Link></td>
                            <td><Button variant="danger" onClick={()=>deleteDiaryById(diary.id)}>Eliminar</Button></td>
                        </tr>
                    ))
                }
                </tbody>

            </Table>
        </Container>
    )
} export { Diary }