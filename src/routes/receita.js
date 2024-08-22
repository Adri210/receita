  import React, { useEffect, useState } from 'react';
  import { useParams, Link, useNavigate } from 'react-router-dom';
  import '../styles/receita.css'; // Importando o CSS com classes únicas

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
      <div className="recipe-detail-container">
        <h1 className="recipe-title">{receita.titulo}</h1>
        <h2 className="recipe-subtitle">Ingredientes:</h2>
        <ul className="recipe-ingredients">
          {receita.ingredientes.map((ingrediente, index) => (
            <li key={index}>{ingrediente}</li>
          ))}
        </ul>
        <h2 className="recipe-subtitle">Modo de Preparo:</h2>
        <p className="recipe-preparation">{receita.modoDePreparo}</p>
        
        <br />
        <Link className="recipe-link recipe-link-back" to="/">
          Voltar para a lista de receitas
        </Link>
        <br />
        <Link className="recipe-link recipe-link-add" to="/NewReceita">
          Adicionar Nova Receita
        </Link>
        <br />

        <button className="recipe-delete-btn" onClick={handleDelete}>
          Excluir Receita
        </button>
      </div>
    );
  }

  export default RecipeDetail;
