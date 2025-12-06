import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/Navbar.css';

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="container">
        <h1>Tecnousi Modelagem</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Serviços</Link></li>
          <li><Link to="/portfolio">Portfólio</Link></li>
          <li><Link to="/quote">Orçamento</Link></li>
          <li><Link to="/contact">Contato</Link></li>
          {user ? (
            <>
              <li><Link to={user.role === 'admin' ? '/admin' : '/my-account'}>
                {user.role === 'admin' ? 'Admin' : 'Minha Conta'}
              </Link></li>
              <li><button onClick={logout}>Sair</button></li>
            </>
          ) : (
            <>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Registro</Link></li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;