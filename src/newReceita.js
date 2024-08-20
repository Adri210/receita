import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NewReceita = () => {
  const [titulo, setTitulo] = useState('');
  const [ingredientes, setIngredientes] = useState('');
  const [modoDePreparo, setModoDePreparo] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Função para criar a nova receita
  const createReceita = async (e) => {
    e.preventDefault();

    const novaReceita = {
      titulo,
      ingredientes: ingredientes.split('\n'), // Ingredientes como array
      modoDePreparo
    };

    try {
      const response = await axios.post('http://localhost:5004/receitas', novaReceita);
      console.log('Receita criada com sucesso!', response.data);

      // Redireciona para a página inicial após a criação
      navigate('/');
    } catch (err) {
      console.error('Erro ao criar a receita:', err);
      setError('Erro ao criar a receita. Tente novamente.');
    }
  };

  return (
    <div>
      <h2>Inserir Nova Receita</h2>
      <form onSubmit={createReceita}>
        <div>
          <label htmlFor="titulo">Título</label>
          <input
            type="text"
            name="titulo"
            placeholder="Digite o título"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="ingredientes">Ingredientes</label>
          <textarea
            name="ingredientes"
            placeholder="Digite os ingredientes (um por linha)"
            value={ingredientes}
            onChange={(e) => setIngredientes(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="modoDePreparo">Modo de Preparo</label>
          <textarea
            name="modoDePreparo"
            placeholder="Digite o modo de preparo"
            value={modoDePreparo}
            onChange={(e) => setModoDePreparo(e.target.value)}
            required
          />
        </div>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <button type="submit">Criar Receita</button>
      </form>
    </div>
  );
};

export default NewReceita;
