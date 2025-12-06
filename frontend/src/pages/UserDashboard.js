import { useEffect, useState } from 'react';
import api from '../services/api';
import '../styles/UserDashboard.css';

function UserDashboard() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    api.get('/quotes/my-quotes')
      .then(response => setQuotes(response.data))
      .catch(error => console.error('Erro ao carregar orçamentos:', error));
  }, []);

  return (
    <div className="user-dashboard container">
      <h1>Minha Conta</h1>
      <h2>Minhas Solicitações de Orçamento</h2>
      {quotes.length === 0 ? (
        <p>Nenhuma solicitação encontrada.</p>
      ) : (
        <div className="quotes-list">
          {quotes.map(quote => (
            <div key={quote.id} className="quote-item">
              <h3>{quote.service}</h3>
              <p><strong>Descrição:</strong> {quote.description || 'N/A'}</p>
              <p><strong>Status:</strong> {quote.status}</p>
              <p><strong>Data:</strong> {new Date(quote.createdAt).toLocaleDateString()}</p>
              {Array.isArray(quote.filePaths) && quote.filePaths.length > 0 ? (
                <div>
                  <strong>Arquivos:</strong>
                  <ul>
                    {quote.filePaths.map((file, index) => (
                      <li key={index}>
                        <a href={`http://localhost:5000/${file}`} target="_blank" rel="noopener noreferrer">
                          Arquivo {index + 1}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <p>Nenhum arquivo</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default UserDashboard;