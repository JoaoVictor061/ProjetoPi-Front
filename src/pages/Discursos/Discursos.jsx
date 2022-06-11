import React, { useEffect, useState } from 'react'
import { Form, Row, Container, Button } from 'react-bootstrap'
import apiDeputados from "../../service/apiDeputados"
import { Chart } from "react-google-charts";
import Menu from "../../Componentes/Menu"

function Discurso() {

  const [deputados, setDeputados] = useState([]);
  const [dataid, setDataId] = useState([]);
  const [qnt, setQnt] = useState(0);

  const data = [
    ["Discurso", "", ""],
    ["Total de Discursos", qnt, 50],
  ];

  const options = {
    title: "Discursos de Deputados",
    chartArea: { width: "50%" },
    colors: ["#006600", ""],
    hAxis: {
      title: "Total de Discursos",
      minValue: 0,
    },
    vAxis: {
      title: "Discursos",
    },
  };

  useEffect(() => {
    apiDeputados.get('deputados').then(resultado => {
      setDeputados(resultado.data.dados);
    })
  }, [])

  const pesquisar = async () => {
    try {
      await apiDeputados.get(`https://dadosabertos.camara.leg.br/api/v2/deputados/${dataid}/discursos?ordenarPor=dataHoraInicio&ordem=ASC`).then(resultado => {
        const data = resultado.data.dados
        setDataId(data);
        setQnt(data.length)
      })
    } catch (err) {
    }
  }

  return (
    <>
      <div>
        <Menu />
      </div>
      <Container>
        <h1>Discurso de Deputados</h1>
        <Row  >
          <Form.Group className="mb-3">
            <Form.Label>Selecione o Deputado(a)</Form.Label>
            <Form.Select onChange={event => setDataId(event.target.value)}>
              <option>Selecione o Deputado(a)</option>
              {deputados.map(item => (<option value={item.id}>{item.nome} - {item.siglaPartido}</option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Button variant="outline-success" onClick={pesquisar}>Pesquisar</Button>
          </Form.Group>
        </Row>
        <h1>
          Grafico de Discursos
        </h1>
      </Container>
      <div>
        <Chart
          chartType="BarChart"
          width="100%"
          height="400px"
          data={data}
          options={options}
        />
      </div>
    </>
  )
}
export default Discurso