import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

function RecipeDetail() {
  const { id } = useParams();
  const [receita, setReceita] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5004/receitas/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro ao buscar receita');
        }
        return response.json();
      })
      .then((data) => {
        setReceita(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Erro:', error);
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  const handleDelete = () => {
    fetch(`http://localhost:5004/receitas/${id}`, {
      method: 'DELETE',
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Erro ao excluir receita');
      }
      // Redirecionar para a lista de receitas após exclusão
      navigate('/');
    })
    .catch((error) => {
      console.error('Erro:', error);
      setError(error.message);
    });
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!receita) {
    return <p>Receita não encontrada!</p>;
  }

  return (
    <div>
      <h1>{receita.titulo}</h1>
      <h2>Ingredientes:</h2>
      <ul>
        {receita.ingredientes.map((ingrediente, index) => (
          <li key={index}>{ingrediente}</li>
        ))}
      </ul>
      <h2>Modo de Preparo:</h2>
      <p>{receita.modoDePreparo}</p>
      <button onClick={handleDelete}>Excluir Receita</button>
      <br />
      <Link to="/">Voltar para a lista de receitas</Link>
      <br />
      <Link to="/NewReceita">Adicionar Nova Receita</Link>
    </div>
  );
}

export default RecipeDetail;
