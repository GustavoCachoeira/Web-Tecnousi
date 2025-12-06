import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import api from '../services/api';
import '../styles/Quote.css';

function Quote() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('service', data.service);
    formData.append('description', data.description);
    for (let file of data.files) {
      formData.append('files', file);
    }

    try {
      console.log('Enviando solicitação:', data);
      const response = await api.post('/quotes', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      console.log('Resposta do servidor:', response.data);
      toast.success('Solicitação enviada com sucesso!');
      reset();
    } catch (error) {
      console.error('Erro ao enviar solicitação:', error.response?.data || error.message);
      toast.error('Erro ao enviar solicitação. Faça login ou tente novamente.');
    }
  };

  return (
    <div className="quote container">
      <h1>Solicitar Orçamento</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="service">Serviço</label>
          <select
            id="service"
            {...register('service', { required: 'Serviço é obrigatório' })}
          >
            <option value="">Selecione um serviço</option>
            <option value="Modelagem 3D">Modelagem 3D</option>
            <option value="Fabricação de Moldes">Fabricação de Moldes</option>
            <option value="Consultoria Técnica">Consultoria Técnica</option>
          </select>
          {errors.service && <span>{errors.service.message}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="description">Descrição</label>
          <textarea
            id="description"
            {...register('description')}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="files">Arquivos (jpg, png, pdf)</label>
          <input
            id="files"
            type="file"
            multiple
            accept=".jpg,.jpeg,.png,.pdf"
            {...register('files', { required: 'Pelo menos um arquivo é obrigatório' })}
          />
          {errors.files && <span>{errors.files.message}</span>}
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Quote;