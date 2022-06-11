import { useEffect, useState } from 'react'
import { Bar, BarChart, CartesianGrid, Label, LabelList, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import Menu from "../../Componentes/Menu"
import apiDeputados from "../../service/apiDeputados"


const Numpartido = () => {
  const [deputados, setDeputados] = useState([]);

  useEffect(() => {

    apiDeputados.get('https://dadosabertos.camara.leg.br/api/v2/deputados?ordem=ASC&ordenarPor=nome').then(resultado => {
      setDeputados(resultado.data.dados)
    })

  }, [])

  let partido = (deputados.map(item => (
    item.siglaPartido
  )))

  const filtropartido = partido.filter(function (ele, pos) {
    return partido.indexOf(ele) == pos;
  })

  let resultados = [];
  filtropartido.forEach(uPartido => {
    partido.forEach(name => {
      if (name == uPartido) {
        resultados[uPartido] = (resultados[uPartido] > 0 ? resultados[uPartido] : 0) + 1
      }
    })
  })

  const partidos = Object.keys(resultados)
  const valores = Object.values(resultados)

  // console.log(partidos, valores);

  const data = []

  partidos.map((item, i) => {
    data.push({ "Partido": item, "Quantidade": valores[i] })
  })

  return (
    <div>
      <Menu />
      <div className='grafico'>
        <BarChart width={2250} height={850} data={data}>
          <CartesianGrid />
          <XAxis dataKey="Partido" position="insideBottom" >
            <Label offset={0} position="insideBottom" />
          </XAxis>
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Quantidade" fill="green">
            <LabelList dataKey="name" position="insideBottom" angle="" />
          </Bar>
        </BarChart>
      </div>
    </div>
  )
}

export default Numpartido