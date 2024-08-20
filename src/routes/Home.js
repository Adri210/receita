import React, { useState, useEffect } from 'react';
import { getReceitas } from '../Api';
import { Link } from 'react-router-dom';

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
      <h1>Lista de Receitas</h1>
      {receitas.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        receitas.map((receita) => (
          <div key={receita.id}>
            <Link to = {`/receita/${receita.id}`}>{receita.titulo}</Link>
          </div>

          
        ))
      )}
      <Link to="/NewReceita">Adicionar Nova receita </Link>
    </div>
  );
}

export default Home;