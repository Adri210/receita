import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function RecipeDetail() {
  const { id } = useParams();
  const [receita, setReceita] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5004/receitas/${id}`) // Corrigido para a porta correta
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro ao buscar receita');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Dados recebidos:', data); // Verifique o formato dos dados recebidos

        if (data && data.id === parseInt(id, 10)) {
          setReceita(data);
        } else {
          setError('Receita não encontrada');
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Erro:', error);
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

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
      <Link to="/">Voltar para a lista de receitas</Link>
      <br />
      <Link to="/NewReceita">Adicionar Nova Receita</Link>
    </div>
  );
}

export default RecipeDetail;
