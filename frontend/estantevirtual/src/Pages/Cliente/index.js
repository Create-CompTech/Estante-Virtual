import React, { useState, useEffect } from 'react';
import Header from '../../components/header';
import { Link } from 'react-router-dom';
import './index.css';


import ConsultarEbooks from '../../services/ConsultarEbooks';
const api = new ConsultarEbooks();



function Inicial(props) {

  const [ebooks, setEbooks] = useState([]);

  const ebooksPorGenero = async (e) => {
    
    const resp = await api.EbooksPorGenero();
    setEbooks(resp);    
    console.log(ebooks);
  }

  useEffect(() => {
    ebooksPorGenero();
  }, []);

  return (
    <div className="InicialCliente">  
      <Header /> 
    </div>   
    );
}

export default Inicial;