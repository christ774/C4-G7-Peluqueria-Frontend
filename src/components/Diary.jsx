import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { listaDiarys } from "../server/ServerDiary.jsx";

function Diary() {

    const [diarys, setDiarys] = useState([]);

    async function listarDiarys() {
        try {
            const res = await listaDiarys();
            setDiary(res);
        } catch (error) {
            console.log(error)
        }

    };
    useEffect(() => {
        listarDiarys()
    }, [setDiarys]);
    const fecha = new Date();


    return (

        <Container className="my-3">
            <Row>
                {
                    diarys.filter(diary=>diary.fecha>fecha.toISOString()).map((diary) => (
                        <Col  key={diary.id}>
                            <Card
                                text={diary.fecha}
                                style={{ width: '18rem' }}
                                className="mb-2"
                            >
                                <Card.Header>Fecha diary: {diary.fecha.slice(0,10)}</Card.Header>
                                <Card.Body>
                                    <Card.Title>{} </Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Link to={`/diary/${diary.id}`}><Button variant="primary">Ver Detalle</Button></Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
            </Row>

        </Container>
    )

}
export { Diary }