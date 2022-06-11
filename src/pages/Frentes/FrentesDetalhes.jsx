import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Menu from '../../Componentes/Menu'
import apiDeputados from "../../service/apiDeputados"

const FrentesDetalhes = () => {
    const params = useParams()
    const [detalhes, setDetalhes] = useState([])

    useEffect(() => {
        apiDeputados.get('frentes/' + params.id + '/membros').then(resultado => {
            setDetalhes(resultado.data.dados)
        })
    }, [params])

    return (
        <div>
            <Menu/>
            <h1 className='d-flex align-items-center justify-content-center mt-3'>QUEM SÃO OS DEPUTADOS</h1>
            <Row>
                {detalhes.map(item => (
                    <Col key={item.id} md={2} className="mb-2" >
                        <Card className="shadow-lg p-3 mb-5 bg-white rounded">
                            <Card.Img variant="top" src={item.urlFoto} />
                            <Card.Body>
                                <Card.Title>{item.nome}</Card.Title>
                                <Card.Text><strong>Partido: </strong>{item.siglaPartido}</Card.Text>
                                <Card.Text><strong>Função: </strong>{item.titulo}</Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default FrentesDetalhes