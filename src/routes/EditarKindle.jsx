import axiosURL from '../axios/config'

//import { useNavigate } from 'react-router-dom'

import { useState, useEffect } from 'react';

import moment from 'moment';

import './StyleNovaReservaKindle.css'
//import { ToastContainer, toast } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css';


const EditarKindle = () => {

    const [reservas, setReservas] = useState([]);
    // const [reservaSelecionada, setReservaSelecionada] = useState(null);
    const [editedReserva, setEditedReserva] = useState(null);
  
    useEffect(() => {
      const fetchReservas = async () => {
        try {
          const response = await axiosURL.get('/kindle');
          setReservas(response.data);
        } catch (error) {
          console.error('Erro ao buscar reservas de kindles:', error);
        }
      };
  
      fetchReservas();
    }, []);
  
    const handleDelete = async (_id) => {
      try {
        await axiosURL.delete(`/kindle/${_id}`);
        setReservas(prevReservas => prevReservas.filter(reserva => reserva._id !== _id));
        console.log(`Reserva com ID ${_id} foi deletada.`);
      } catch (error) {
        console.error('Erro ao deletar reserva:', error);
      }
    };
    const handleEdit = (id) => {
      const reserva = reservas.find((r) => r._id === id);
      setEditedReserva({ ...reserva });
    };
    const handleSave = async () => {
      try {
        const reserva = { ...editedReserva };
        await axiosURL.patch(`/kindle/${reserva._id}`, reserva);
        setReservas(reservas.map((r) => (r._id === reserva._id ? reserva : r)));
        setEditedReserva(null);
      } catch (error) {
        console.error('Failed to save reserva:', error);
      }
    };
    
    const handleCancel = () => {
      setEditedReserva(null);
    };
    
    // const handleEdit = (_id) => {
    //   setReservaSelecionada(_id);
    //   console.log(`Editar reserva com ID ${_id}`);
    // };
  
    return (
      <div>
        <h2>Reservas de Kindles</h2>
        <ul>
        {reservas.map((reserva) => (
            <li key={reserva.idKindle}>
              {editedReserva && editedReserva._id === reserva._id ? (
                <>
                  <strong>ID Kindle:</strong> <input type="text" value={editedReserva.idKindle} onChange={e => setEditedReserva({ ...editedReserva, idKindle: e.target.value })} /><br />
                  <strong>Nome:</strong> <input type="text" value={editedReserva.nome} onChange={e => setEditedReserva({ ...editedReserva, nome: e.target.value })} /><br />
                  <strong>Turma:</strong> <input type="text" value={editedReserva.turma} onChange={e => setEditedReserva({ ...editedReserva, turma: e.target.value })} /><br />
                  <strong>Data:</strong> <input type="date" value={moment(editedReserva.data).format('YYYY-MM-DD')} onChange={e => setEditedReserva({ ...editedReserva, data: e.target.value })} /><br />
                  <strong>Horário Inicial:</strong> <input type="time" value={editedReserva.horario_inicial} onChange={e => setEditedReserva({ ...editedReserva, horario_inicial: e.target.value })} /><br />
                  <strong>Horário Final:</strong> <input type="time" value={editedReserva.horario_final} onChange={e => setEditedReserva({ ...editedReserva, horario_final: e.target.value })} /><br />
                  <button onClick={handleSave}>Salvar</button>
                  <button onClick={handleCancel}>Cancelar</button>
                </>
              ) : (
                <>
                  <strong>ID Kindle:</strong> {reserva.idKindle}<br />
                  <strong>Nome:</strong> {reserva.nome}<br />
                  <strong>Turma:</strong> {reserva.turma}<br />
                  <strong>Data:</strong> {moment(reserva.data).format('DD/MM/YYYY')}<br />
                  <strong>Horário Inicial:</strong>{' '}
                  {moment(reserva.horario_inicial, 'HH:mm').format('HH:mm')}
                  <br />
                  <strong>Horário Final:</strong>{' '}
                  {moment(reserva.horario_final, 'HH:mm').format('HH:mm')}
                  <br />
                  <button onClick={() => handleDelete(reserva._id)}>Deletar</button>
                  <button onClick={() => handleEdit(reserva._id)}>Editar</button>
                </>
              )}
          {/* {reservas.map((reserva) => (
            <li key={reserva.idKindle}>
              <strong>ID Kindle:</strong> {reserva.idKindle}<br />
              <strong>Nome:</strong> {reserva.nome}<br />
              <strong>Turma:</strong> {reserva.turma}<br />
              <strong>Data:</strong> {reserva.data}<br />
              <strong>Horário Inicial:</strong> {reserva.horario_inicial}<br />
              <strong>Horário Final:</strong> {reserva.horario_final}<br />
              <button onClick={() => handleEdit(reserva._id)}>Editar</button>
              <button onClick={() => handleDelete(reserva._id)}>Deletar</button>
              {reservaSelecionada === reserva._id && <EditarReservaKindle idReserva={reserva._id} />}
              <hr /> */}
            </li>
          ))}
        </ul>
      </div>
    );
  };

export default EditarKindle