import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "../Pages.css"

const Menu = () => {
  return (
    <div>
      <Navbar variant="dark" id="barratop" expand="lg" >
        <Navbar.Brand href="/"><img src="https://www.camara.leg.br/tema/assets/images/logo-brand-camara-desktop.png" alt="" className="imagemtopo" /></Navbar.Brand>
        <Container>
          <Nav className="me-auto">
            <Link className="nav-link botaotopo" to="/informacoespessoais">Informações Pessoais </Link>
            <Link className="nav-link botaotopo" to="/despesas">Despesas </Link>
            <Link className="nav-link botaotopo" to="/eventos">Eventos </Link>
            <Link className="nav-link botaotopo" to="/frentes">Frentes </Link>
            <Link className="nav-link botaotopo" to="/partidos">Partidos </Link>
            <Link className="nav-link botaotopo" to="/discursos">Discursos </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Menu
