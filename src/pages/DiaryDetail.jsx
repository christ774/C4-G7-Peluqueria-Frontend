import React, { useEffect } from "react";
import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { findDiaryById, saveDiary } from "../server/ServerDiary.jsx";

function DiaryDetail() {

    const { id } = useParams();

    const navigate = useNavigate();

    function returnToClients() {
        navigate("/agenda")
    }

    const [diary, setDiary] = useState({});
    const [appointment, setAppointment] = useState([]);
    const [especialidades, setEspecialidades] = useState([]);
    const [fecha, setFecha] = useState("");
    const [horaRadio, setHoraRadio] = useState("");

    useEffect(() => {
        findDiaryById(id).then(data => {
            setDiary(data);
            setAppointment(data.appointment)
            setEspecialidades(data.especialidadMedico);
            setFecha(data.fecha)
        });
    }, [id]);

    const handleSelect = (e) => {
        setHoraRadio(e.target.value);
    }

    async function handleSubmit() {
        if (horaRadio !== "") {
            diary.appointment.push({ hora: horaRadio, id_client: "" });
            saveDiary(diary);
            alert("Cita agendada")
            returnToClients()

        } else {
            alert("Selecciona un horario")
        }
    }

    let horarios = ["08:00-08:30", "08:30-09:00", "09:00-09:30", "09:30-10:00", "10:00-10:30", "10:30-11:00"]
    let horariosOcupado = [];
    appointment.map((appointment) => (
        horariosOcupado.push(appointment.hora)
    ))

    return (
        <Container className="my-3">
            <Row>
                <Col >
                    <p>Fecha Agenda</p>
                    <h3>{fecha.slice(0, 10)}</h3>
                </Col>
                <Col>
                    <p>Nombre del Empleado</p>
                    <h2>{agenda.nombreMedico}</h2>
                </Col>
                <Col>
                    <p>Especialidades del Empleado</p>
                    <ul>
                        {
                            especialidades.map((especialidad) => (
                                <li key={especialidad}>{especialidad}</li>
                            ))
                        }
                    </ul>
                </Col>
            </Row>
            <Row xs={2} md={4} lg={6} >
                <Col xs lg="2">
                    Horarios disponibles:
                </Col>
                <Col md="auto">
                    {
                        horarios.map((hora) => (
                            <Form.Check className="my-3"
                                        key={hora}
                                        type="radio"
                                        label={hora}
                                        name="hora"
                                        value={hora}
                                        onChange={handleSelect}
                                        disabled={horariosOcupado.includes(hora) ? true : false}
                            />
                        ))
                    }
                </Col>
            </Row>
            <Row xs={2} md={4} lg={6}>
                <Col>
                    <Button onClick={() => returnToClients()}>Regresar</Button>
                </Col>
                <Col>
                    <Button variant="success" onClick={() => handleSubmit()}>Registrar Cita</Button>
                </Col>
            </Row>
        </Container>
    )
}
export { DiaryDetail }