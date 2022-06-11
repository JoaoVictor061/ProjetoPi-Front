import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './pgprinc.css';
import Subtitulo from './Subtitulo';
import 'animate.css';

const Inicio = (props) => {
  return (
    <Container>
          <div className=''>
            <div className="d-grid position-absolute top-50 start-50 translate-middle " >
              <Button variant="" size="lg" className='botaoprinc'>
               <Link to="/Tela2" ><h1 className='deputadoprinc'>DEPUTADOS</h1></Link>
              </Button>
              <br/>
              {props.texto && <Subtitulo/> }
            </div>            
          </div>
    </Container>
  )
}

export default Inicio
