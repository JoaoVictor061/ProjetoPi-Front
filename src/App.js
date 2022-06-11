import 'bootstrap/dist/css/bootstrap.min.css';
import Inicio from "./pages/TelaInicial/Inicio"
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Tela2 from "./pages/TelaInicial/Tela2"
import Numpartido from "./pages/Numerodepartidos/Numpartido"
import Frentes from './pages/Frentes/Frentes';
import FrentesDetalhes from './pages/Frentes/FrentesDetalhes';
import Discurso from './pages/Discursos/Discursos';
import Eventos from './pages/Eventos/Eventos';
import InformacoesPessoais from './pages/InformaçõesPessoais/InformacoesPessoais';
import DeputadosDetalhes from './pages/InformaçõesPessoais/DeputadosDetalhes';
import Despesas from './pages/Despesas/Despesas';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Inicio texto={true} />} />
          <Route path='/Tela2' element={<Tela2 />} />
          <Route path='/partidos' element={<Numpartido />} />
          <Route path='/frentes' element={<Frentes />} />
          <Route path='/frentes/:id/membros' element={<FrentesDetalhes />} />
          <Route path='/discursos' element={<Discurso />} />
          <Route path='/eventos' element={<Eventos />} />
          <Route path='/informacoespessoais' element={<InformacoesPessoais />} />
          <Route path='/informacoespessoais' element={<InformacoesPessoais />} />
          <Route path='/deputado/:id' element={<DeputadosDetalhes />} />
          <Route path='/despesas' element={<Despesas />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
