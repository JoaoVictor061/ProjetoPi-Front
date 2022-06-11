import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import apiDeputados from "../../service/apiDeputados"
import { MapBrazil } from 'react-brazil-map'
import { Link } from 'react-router-dom'
import Menu from '../../Componentes/Menu'

function InformacoesPessoais() {
  const [deputados, setDeputados] = useState([])
  const [distrito, setDistrito] = useState('')

  useEffect(() => {
    apiDeputados.get(`https://dadosabertos.camara.leg.br/api/v2/deputados?siglaUf=${distrito}&ordem=ASC&ordenarPor=nome`).then(resultado => {
      setDeputados(resultado.data.dados)
    })
  }, [distrito])

  return (
    <div>
      <Menu/>
      <h1>Deputados</h1>
      <Row>
        <Col xs={12} md={8}>
          <MapBrazil onChange={setDistrito} width={500} height={500} />
        </Col>
        {deputados.map(item => (
          <Col xs={6} md={2} className="mb-3" key={item.id}>
            <Card>
              <Card.Img variant="bottom" src={"https://www.camara.leg.br/internet/deputado/bandep/" + item.id + ".jpg"} />
              <Card.Body>
                <Card.Title>{item.nome}</Card.Title>
                <Link className="btn btn-success" to={'/deputado/' + item.id}>Mais detalhes</Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default InformacoesPessoais