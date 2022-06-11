import React, { useEffect, useState } from 'react'
import { Form, Row, Button } from 'react-bootstrap'
import apiDeputados from "../../service/apiDeputados"
import { Chart } from "react-google-charts";
import { useParams } from 'react-router-dom';
import Menu from '../../Componentes/Menu';

export const options = {
  title: "Gastos Total por Ano",
  chartArea: { width: "50%" },
  colors: ["#006600", "#1aff1a"],
  hAxis: {
    title: "Despesa Total",
    minValue: 0,
  },
  vAxis: {
    title: "Gastos",
  },
};

const Despesas = () => {
  const [deputados, setDeputados] = useState([])
  const [despesas, setDespesas] = useState(0)
  const [despesas2, setDespesas2] = useState(0)
  const [opcao, setOpcao] = useState('')
  const [opcao2, setOpcao2] = useState('')
  const [ano, setAno] = useState('2021')
  const anos = ['2018', '2019', '2020', '2021', '2022']
  const data = [
    ["DISPESA", "1º Deputado(a) ", "2º Deputado(a)"],
    ["DISPESAS", despesas, despesas2],
  ];
  let conta = []


  useEffect(() => {
    apiDeputados.get('deputados').then(resultado => {
      setDeputados(resultado.data.dados)
    })
  }, [])


  const comparar = async () => {
    try {
      await apiDeputados.get(`deputados/${opcao}/despesas?ano=${ano.length > 4 ? '2021' : ano}`).then(resultado => {
        // setDespesas(sumValues(resultado.data.dados)) 
        const anoFilter = ano.length > 4 ? '2021' : ano;
        setDespesas(sumValues(resultado.data.dados.filter(item => item.ano.toString() === anoFilter)))
        // console.log("resultado", resultado.data.dados)
      })
      await apiDeputados.get(`deputados/${opcao2}/despesas?ano=${ano.length > 4 ? '2021' : ano}`).then(resultado => {
        const anoFilter = ano.length > 4 ? '2021' : ano;
        setDespesas2(sumValues(resultado.data.dados.filter(item => item.ano.toString() === anoFilter)))
        console.log("resultado", resultado.data.dados)
      })
    } catch (err) {
    }
  }

  const sumValues = (dataArray) => {
    let value = 0;
    dataArray?.map(item => {
      value += item.valorDocumento;
    })
    return value;
  }

  return (
    <>
      <Menu />
      <Row  >
        <Form.Group className="col-sm mb3-" >
          <Form.Label> 01º Selecione o Deputado(a):</Form.Label>
          <Form.Select onChange={event => setOpcao(event.target.value)}>
            <option>Selecione o Deputado(a)</option>
            {deputados.map(item => (<option value={item.id}>{item.nome} - {item.siglaPartido}</option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group className="col-sm " >
          <Form.Label> 02º Selecione o Deputado(a):</Form.Label>
          <Form.Select onChange={event => setOpcao2(event.target.value)}>
            <option>Selecione o Deputado(a)</option>
            {deputados.map(item => (<option value={item.id}>{item.nome}-{item.siglaPartido}</option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group className="col-sm " >
          <Form.Label>Selecione o Ano:</Form.Label>
          <Form.Select onChange={event => setAno(event.target.value)}>
            <option>Selecione Ano</option>
            {anos.map((item) => (<option value={item}>{item}</option>
            ))}
          </Form.Select>
        </Form.Group>
        <div className='d-flex align-items-center justify-content-center mt-3'>
          <Button variant="success" onClick={comparar}>Comparar</Button>
        </div>
        <div>
          <h1>
            Gráfico
          </h1>
          <Chart
            chartType="BarChart"
            width="100%"
            height="400px"
            data={data}
            options={options}
          />
        </div>
      </Row>
    </>
  )
}

export default Despesas
