import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import api from '../services/api';
import '../styles/Contact.css';

function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      await api.post('/contact', data);
      toast.success('Mensagem enviada com sucesso!');
      reset();
    } catch (error) {
      toast.error('Erro ao enviar mensagem.');
      console.error(error);
    }
  };

  return (
    <div className="contact container">
      <h1>Contato</h1>
      <section className="contact-info">
        <h3>Nossas Informações</h3>
        <p>Email: contato@modelacaoapp.com</p>
        <p>Telefone: (11) 1234-5678</p>
      </section>
      <section className="contact-form">
        <h3>Fale Conosco</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="name">Nome</label>
            <input
              id="name"
              {...register('name', { required: 'Nome é obrigatório' })}
            />
            {errors.name && <span>{errors.name.message}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              {...register('email', {
                required: 'Email é obrigatório',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Email inválido',
                },
              })}
            />
            {errors.email && <span>{errors.email.message}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensagem</label>
            <textarea
              id="message"
              {...register('message', { required: 'Mensagem é obrigatória' })}
            ></textarea>
            {errors.message && <span>{errors.message.message}</span>}
          </div>
          <button type="submit">Enviar</button>
        </form>
      </section>
    </div>
  );
}

export default Contact;