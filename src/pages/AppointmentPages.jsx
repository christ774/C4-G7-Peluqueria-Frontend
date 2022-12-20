import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { findDiaryById, saveDiary } from "../server/ServerDiary.jsx";

function AppointmentPages() {

    const { id } = useParams();

    const [diary, setdiary] = useState({});
    const [horaRadio, setHoraRadio]= useState("");

    useEffect(() => {
        findDiaryById(id).then(data => {
            setdiary(data);
        })
    }, []);

    const handleSelect = (e) =>{
        setHoraRadio(e.target.value);
    };

    async function handleSubmit(){
        if (horaRadio!=="") {
            diary.citas.push({hora:horaRadio,id_employee:""});
            saveDiary(diary);

        }else{
            alert("Seleccione un Horario")
        }

    }

    const franjaHoraria = ["8:00", "8:30", "9:00", "9:30", "10:00", "10:30", "11:00"];


    return (
        <Container className="my-3">

            <Row>
                <Col>
                    <p>Fecha Cita: </p>
                    <h3>{diary.date_diary}</h3>
                </Col>
                <Col>
                    <p>nombre del Empleado:</p>
                    <h4>{diary.name_employee}</h4>
                </Col>
                <Col>
                    <p>Especialidad del Empleado:</p>
                    <h4>{diary.specialty}</h4>
                </Col>
            </Row>
            <Row className="my-3">
                <Col xs lg="2">
                    Horarios Disponibles:
                </Col>
                <Col md="auto">
                    {
                        franjaHoraria.map((hora) => (
                            <Form.Check className="my-3"
                                        key={hora}
                                        label={hora + " AM"}
                                        type="radio"
                                        name="hora"
                                        value={hora}
                                        onChange={handleSelect}
                            />
                        ))
                    }

                </Col>
                {/* <Col xs lg="2">
                <Form.Label>N° de Identificación del Paciente</Form.Label>
                <Form.Control/>
                </Col> */}
            </Row>
            <Row>
                <Col>
                    <Button variant="success" onClick={()=>handleSubmit()}>Registrar Cita</Button>
                </Col>
            </Row>

        </Container>
    )
} export { AppointmentPages }