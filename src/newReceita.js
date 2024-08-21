import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NewReceita() {
  const [titulo, setTitulo] = useState('');
  const [ingredientes, setIngredientes] = useState('');
  const [modoDePreparo, setModoDePreparo] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const novaReceita = {
      titulo,
      ingredientes: ingredientes.split('\n'), // Quebra os ingredientes em uma lista
      modoDePreparo
    };

    // Enviar a nova receita para o servidor
    fetch('http://localhost:5004/receitas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(novaReceita)
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Erro ao adicionar a receita');
      }
      return response.json();
    })
    .then((data) => {
      // Redirecionar para a página de detalhes da receita recém-adicionada
      navigate('/');
    })
    .catch((error) => {
      console.error('Erro:', error);
      setError(error.message);
    });
  };

  return (
    <div>
      <h1>Adicionar Nova Receita</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Título:</label>
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Ingredientes (um por linha):</label>
          <textarea
            value={ingredientes}
            onChange={(e) => setIngredientes(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Modo de Preparo:</label>
          <textarea
            value={modoDePreparo}
            onChange={(e) => setModoDePreparo(e.target.value)}
            required
          />
        </div>
        <button type="submit">Adicionar Receita</button>
      </form>
    </div>
  );
}

export default NewReceita;
