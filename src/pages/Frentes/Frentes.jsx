import React, { useEffect, useState } from 'react'
import { Row, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'
import apiDeputados from "../../service/apiDeputados"
import Menu from '../../Componentes/Menu'

const Frentes = () => {
    const [frentes, setFrente] = useState([])
    useEffect(() => {
        apiDeputados.get('frentes').then(resultado => {
            setFrente(resultado.data.dados)
        })
    }, [])

    return (
        <div>
            <Menu/>
            <h1 className='d-flex align-items-center justify-content-center mt-3'>FRENTES PARLAMENTARES</h1>

            <Row className="shadow-lg p-3 mb-5 bg-white rounded">
                <Table striped bordered hover md={2}>
                    <thead>
                        <tr>
                            <th>Detalhar</th>
                            <th>Título</th>
                            <th>Legislatura</th>
                        </tr>
                    </thead>
                    <tbody>

                        {frentes.map(item => (
                            <tr key={item}>
                                <td>
                                    <Link className="btn btn-success" to={item.id + '/membros'}><BsSearch />
                                    </Link>
                                </td>
                                <td>{item.titulo}</td>
                                <td>{item.idLegislatura}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Row>
        </div>
    )
}

export default Frentes