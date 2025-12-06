import { useEffect, useState } from 'react';
import api from '../services/api';
import { toast } from 'react-toastify';
import '../styles/AdminDashboard.css';

function AdminDashboard() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    api.get('/quotes')
      .then(response => setQuotes(response.data))
      .catch(error => console.error('Erro ao carregar orçamentos:', error));
  }, []);

  const updateStatus = async (id, status) => {
    try {
      console.log('Atualizando status:', id, status);
      const response = await api.put(`/quotes/${id}`, { status });
      console.log('Resposta do servidor:', response.data);
      setQuotes(quotes.map(q => q.id === id ? { ...q, status } : q));
      toast.success('Status atualizado com sucesso!');
    } catch (error) {
      console.error('Erro ao atualizar status:', error.response?.data || error.message);
      toast.error('Erro ao atualizar status.');
    }
  };

  return (
    <div className="admin-dashboard container">
      <h1>Painel de Administração</h1>
      <h2>Solicitações de Orçamento</h2>
      {quotes.length === 0 ? (
        <p>Nenhuma solicitação encontrada.</p>
      ) : (
        <table className="quotes-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Usuário</th>
              <th>Serviço</th>
              <th>Descrição</th>
              <th>Status</th>
              <th>Data</th>
              <th>Arquivos</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {quotes.map(quote => (
              <tr key={quote.id}>
                <td>{quote.id}</td>
                <td>{quote.user?.name} ({quote.user?.email})</td>
                <td>{quote.service}</td>
                <td>{quote.description || 'N/A'}</td>
                <td>{quote.status}</td>
                <td>{new Date(quote.createdAt).toLocaleDateString()}</td>
                <td>
                  {Array.isArray(quote.filePaths) && quote.filePaths.length > 0 ? (
                    <ul>
                      {quote.filePaths.map((file, index) => (
                        <li key={index}>
                          <a href={`http://localhost:5000/${file}`} target="_blank" rel="noopener noreferrer">
                            Arquivo {index + 1}
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : 'Nenhum'}
                </td>
                <td>
                  <select
                    value={quote.status}
                    onChange={e => updateStatus(quote.id, e.target.value)}
                  >
                    <option value="pendente">Pendente</option>
                    <option value="em análise">Em Análise</option>
                    <option value="aprovado">Aprovado</option>
                    <option value="rejeitado">Rejeitado</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default AdminDashboard;