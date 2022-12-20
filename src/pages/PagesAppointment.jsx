
import React from "react";
import { Container } from "react-bootstrap";
import { Appointment } from "../components/Appointment.jsx";

function PagesAppointment() {
    return(
        <Container>
            <h1>Agendas de Citas</h1>
            <Appointment/>
        </Container>
    )
}export{PagesAppointment}