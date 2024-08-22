import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import '../styles/newReceita.css';
import { Alert } from 'bootstrap';

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
      modoDePreparo,
    };

    // Enviar a nova receita para o servidor
    fetch('http://localhost:5004/receitas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(novaReceita),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro ao adicionar a receita');
        }
        return response.json();
      })
      .then((data) => {
        navigate('/');
        Alert('receita adicionada com sucesso');
      })
      .catch((error) => {
        console.error('Erro:', error);
        setError(error.message);
      });
  };

  return (
    <div className="new-receita-container">
      <h1 className="new-receita-title">Adicionar Nova Receita</h1>
      {error && <p className="new-receita-error">{error}</p>}
      <form onSubmit={handleSubmit} className="new-receita-form">
        <div>
          <label className="new-receita-label">Título:</label>
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
            className="new-receita-input"
          />
        </div>
        <div>
          <label className="new-receita-label">Ingredientes (um por linha):</label>
          <textarea
            value={ingredientes}
            onChange={(e) => setIngredientes(e.target.value)}
            required
            className="new-receita-textarea"
          />
        </div>
        <div>
          <label className="new-receita-label">Modo de Preparo:</label>
          <textarea
            value={modoDePreparo}
            onChange={(e) => setModoDePreparo(e.target.value)}
            required
            className="new-receita-textarea"
          />
        </div>
        <button type="submit" className="new-receita-submit-btn">Adicionar Receita</button>
        <Link className="recipe-link-new" to="/">
        Voltar para a lista de receitas
      </Link>
      </form>
    </div>
  );
}

export default NewReceita;
