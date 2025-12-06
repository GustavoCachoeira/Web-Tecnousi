import { useEffect, useState } from 'react';
import api from '../services/api';
import '../styles/Home.css';

function Home() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    api.get('/')
      .then(response => setMessage(response.data.message))
      .catch(error => console.error('Erro:', error));
  }, []);

  return (
    <div className="home container">
      <h1>{message}</h1>
      <section className="banner">
        <h2>Bem-vindo à Modelação App</h2>
        <p>Soluções personalizadas para suas necessidades de modelagem.</p>
      </section>
      <section className="overview">
        <h3>Sobre Nós</h3>
        <p>Somos uma empresa especializada em modelagem 3D e produção de moldes de alta qualidade.</p>
      </section>
    </div>
  );
}

export default Home;