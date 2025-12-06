import '../styles/Services.css';

function Services() {
  const services = [
    { id: 1, name: 'Modelagem 3D', description: 'Criação de modelos digitais precisos.' },
    { id: 2, name: 'Fabricação de Moldes', description: 'Produção de moldes para diversas indústrias.' },
    { id: 3, name: 'Consultoria Técnica', description: 'Soluções personalizadas para projetos.' },
  ];

  return (
    <div className="services container">
      <h1>Nossos Serviços</h1>
      <div className="services-list">
        {services.map(service => (
          <div key={service.id} className="service-item">
            <h3>{service.name}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;