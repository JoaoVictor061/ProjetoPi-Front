import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom'
import Menu from "../../Componentes/Menu"
import apiDeputados from "../../service/apiDeputados"

function DeputadosDetalhes() {
  const params = useParams()
  const [deputado, setDeputado] = useState();

  useEffect(() => {
    apiDeputados.get("https://dadosabertos.camara.leg.br/api/v2/deputados/" + params.id).then(resultado => {
      setDeputado(resultado.data.dados)
    })
  }, [])

  return (
    <div>
      {!deputado && <h1>Carregando...</h1>}
      {deputado &&
        <>
        <Menu/>
          <Row>
            <Col>
              <img src={"https://www.camara.leg.br/internet/deputado/bandep/" + deputado.id + ".jpg"} />
            </Col>
            <Col md={6}>
              <h6>Nome Civil: {deputado.nomeCivil}</h6>
              <h6>Data de Nascimento: {deputado.dataNascimento}</h6>
              <h6>Munincípio de Nascimento: {deputado.municipioNascimento}</h6>
            </Col>
          </Row>
        </>
      }
    </div>
  )
}

export default DeputadosDetalhes