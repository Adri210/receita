import React, { useState, useEffect } from 'react';
import { getReceitas } from '../Api';
import { Link } from 'react-router-dom';
import '../styles/App.css';
import logo from '../styles/hero.png';


function Home() {
  const [receitas, setReceitas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getReceitas();
      setReceitas(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <div>
      <h1>Lista de Receitas</h1>
       <img src={logo}/>

      </div>
   
      {receitas.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        receitas.map((receita) => (
          <div key={receita.id}>
            <Link to = {`/receita/${receita.id}`} className='buttonReceita'>{receita.titulo}</Link>
          </div>

          
        ))
      )}
      <Link to="/NewReceita" className='button'>Adicionar Nova receita </Link>
    </div>
  );
}

export default Home;