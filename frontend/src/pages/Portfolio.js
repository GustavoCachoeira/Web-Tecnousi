import { useEffect, useState } from 'react';
import api from '../services/api';
import '../styles/Portfolio.css';

function Portfolio() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    api.get('/portfolio')
      .then(response => setItems(response.data))
      .catch(error => console.error('Erro ao carregar portfólio:', error));
  }, []);

  return (
    <div className="portfolio container">
      <h1>Portfólio</h1>
      <div className="portfolio-grid">
        {items.map(item => (
          <div key={item.id} className="portfolio-item">
            <img src={`http://localhost:5000/${item.imagePath}`} alt={item.title} loading="lazy" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;