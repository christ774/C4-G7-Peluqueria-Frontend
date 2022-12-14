import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Menu() {
    return(
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Peluqueria-C4G7</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/" className="nav-link">Inicio</NavLink>
                        <NavLink to="/agenda" className="nav-link">Agendas</NavLink>
                        <NavLink to="/cliente" className="nav-link">Cliente</NavLink>
                        <NavLink to="/empleado" className="nav-link">Empleado</NavLink>
                        <NavLink to="/citas" className="nav-link">Citas</NavLink>
                        <NavLink to="/product" className="nav-link">Servicio</NavLink>


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export {Menu}