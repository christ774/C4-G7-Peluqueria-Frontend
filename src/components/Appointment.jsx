
import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { listaDiarys } from "../server/ServerDiary.jsx";

function Appointment() {

    const [diarys, setDiarys] = useState([]);

    async function listDiarys() {
        try {
            const response = await listaDiarys();
            setDiarys(response);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(()=>{
        listDiarys()
    },[]);

    const fechaActual = new Date();

    return(
        <Row className="my-3">
            {
                diarys.filter(diary=>diary.date_diary>fechaActual.toISOString()).map((diary)=>(
                    <Col key={diary.id}>
                        <Card style={{ width: '18rem' }}
                              className="mb-2"
                        >
                            <Card.Body>
                                <Card.Title>{diary.date_diary}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Agenda Disponible</Card.Subtitle>
                                <Card.Text>
                                 por favor apreciado cliente agenda su cita en horario correpondiente
                                </Card.Text>
                                <Link to={`/agenda/citas/${diary.id}`}>Agendar Cita</Link>
                            </Card.Body>
                        </Card>
                    </Col>

                ))}
        </Row>
    )
}export{Appointment}