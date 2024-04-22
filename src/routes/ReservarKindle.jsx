import axiosURL from '../axios/config'

import { useNavigate } from 'react-router-dom'

import { useState } from 'react'

//import { ToastContainer, toast } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css';


const ReservarKindle = () => {

  const navigate = useNavigate()

  const [idKindle, setIdKindle] = useState()
  const [nome, setNome] = useState()
  const [turma, setTurma] = useState()
  const [data, setData] = useState()
  const [horario_inicial, setHorario_inicial] = useState()
  const [horario_final, setHorario_final] = useState()

  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar se a data de início é menor que a data final
    if (data && horario_inicial && horario_final) {
      const inicio = new Date(`${data}T${horario_inicial}`);
      const fim = new Date(`${data}T${horario_final}`);

      if (inicio >= fim) {
        setError('A hora de início deve ser anterior à hora final da reserva.');
        return;
      }
    }

      await axiosURL.post('/kindle', 
      { idKindle, nome, turma, data, horario_inicial, horario_final })

      console.log('Reserva de sala criada')

      navigate('/')

  }

  return (

    <form onSubmit={(e) => handleSubmit(e)}>

      <div className="flex flex-col h-screen">
            
        {/* <!-- Card Container --> */}
        <div className="grid place-items-center mx-2 sm:my-auto">
            
          {/* <!-- Card --> */}
          <div className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 
                    px-6 py-10 my-6 sm:px-10 sm:py-6 
                    bg-white rounded-lg bg-white border-solid border-opacity-25 border-2 border-[#000]">
        
            {/* <!-- Card Title --> */}
            <h2 className="text-center mb-5 text-[1.5rem]/[2rem] lg:text-3xl font-semibold text-grey-darkest">
              Nova Reserva
            </h2>
        
            {/*<form className="mt-10" method="POST"> */}

              {/* <!-- ID Input --> */}
              <label htmlFor="idKindle" className="block capitalize font-semibold text-[1rem]/[1.5rem] lg:text-lg after:content-['*'] after:ml-0.5 after:text-red-500">ID Kindle</label>
              <input type="number" name="idKindle" min="1" max="4" placeholder="ID do Kindle" onChange={(e) => setIdKindle(e.target.value)} className="block w-full py-3 px-1 mt-2 mb-6
                            text-gray-800 appearance-none 
                            border-b-2 border-gray-100
                            focus:text-gray-500 focus:outline-none focus:border-gray-200"
                            required 
              />

              {/* <!-- Nome Input --> */}
              <label htmlFor="nome" className="block capitalize font-semibold text-[1rem]/[1.5rem] lg:text-lg after:content-['*'] after:ml-0.5 after:text-red-500">nome</label>
              <input type="text" name="nome" placeholder="Nome" onChange={(e) => setNome(e.target.value)} className="block w-full py-3 px-1 mt-2 mb-6 
              text-gray-800 appearance-none 
              border-b-2 border-gray-100
              focus:text-gray-500 focus:outline-none focus:border-gray-200"
              required 
              /> 

              {/* <!-- Turma Input --> */}
              <label htmlFor="turma" className="block capitalize font-semibold text-[1rem]/[1.5rem] lg:text-lg after:content-['*'] after:ml-0.5 after:text-red-500">Turma</label>
              <input type="text" name="turma" placeholder="Turma" onChange={(e) => setTurma(e.target.value)} className="block w-full py-3 px-1 mt-2 mb-6 
                            text-gray-800 appearance-none 
                            border-b-2 border-gray-100
                            focus:text-gray-500 focus:outline-none focus:border-gray-200"
              required 
              /> 

              {/* <!-- data Input --> */}
              <label htmlFor="data" className="block capitalize font-semibold text-[1rem]/[1.5rem] lg:text-lg after:content-['*'] after:ml-0.5 after:text-red-500">data</label>
              <input type="date" name="data" onChange={(e) => setData(e.target.value)} className="block w-full py-3 px-1 mt-2 mb-6 
                      text-gray-800 appearance-none 
                      border-b-2 border-gray-100
                      focus:text-gray-500 focus:outline-none focus:border-gray-200
                      placeholder:text-gray-500"
              required 
              />

              {/* <!-- horario inicial Input --> */}
              <label htmlFor="horario_inicial" className="block capitalize font-semibold text-[1rem]/[1.5rem] lg:text-lg after:content-['*'] after:ml-0.5 after:text-red-500">horário inicial</label>
              <input type="time" name="horario_inicial" onChange={(e) => setHorario_inicial(e.target.value)} className="block w-full py-3 px-1 mt-2 mb-6 
                          text-gray-800 appearance-none 
                          border-b-2 border-gray-100
                          focus:text-gray-500 focus:outline-none focus:border-gray-200"
              required 
              /> 

              {/* <!-- horario final Input --> */}
              <label htmlFor="horario_final" className="block capitalize font-semibold text-[1rem]/[1.5rem] lg:text-lg after:content-['*'] after:ml-0.5 after:text-red-500">horário final</label>
              <input type="time" name="horario_final" onChange={(e) => setHorario_final(e.target.value)} className="block w-full py-3 px-1 mt-2 mb-6 
                            text-gray-800 appearance-none 
                            border-b-2 border-gray-100
                            focus:text-gray-500 focus:outline-none focus:border-gray-200"
              required 
              />  

              {error && <p className="text-red-500">{error}</p>}

              {/* <!-- Buttton --> */}
              <button type="submit"
                            className="w-full py-3 mt-10 bg-[#09AFBD] rounded-lg
                            font-medium text-white uppercase
                            focus:outline-none hover:bg-[#078c97] hover:shadow-none">
                            Reservar Kindle
              </button>

            {/*</form> */}
          </div>

        </div>
      </div>        

    </form>


  )
  
} 

export default ReservarKindle