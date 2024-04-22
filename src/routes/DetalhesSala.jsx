import axiosURL from '../axios/config'

import { useState, useEffect } from 'react'

import moment from 'moment'

const DetalhesSalas = () => {

   const [salas, setSalas] = useState([])
  const getSala1 = async () => {

    try {

      const response = await axiosURL.get('/salagrupo')

      const data = response.data;
      
      setSalas(data);

  } catch (error) {
    console.error(error)
  }

}

  // quando a pagina carregar 
  useEffect(() => {

    getSala1()

  }, []) // carregado apenas uma vez

  return (

    <div className="h-100 w-full flex items-center justify-center font-sans         flex-wrap">

      <div className="pt-6 lg:w-5/6 lg:max-w-2xl">
        <div className="mb-8">
          <h1 className="text-grey-darkest text-center text-[1.5rem]/[2rem] lg:text-3xl font-semibold">Reservas das Salas</h1>
        </div>
          
        {/* Cards das salas */}
        {salas.length === 0 ? (<p>Carregando...</p>) : (salas.map((sala) => (

          <div className="flex mb-7 items-center bg-white border-solid border-opacity-25 border-2 border-[#000] rounded-lg px-5 py-2 sm:mx-10 md:mx-0">

          <p className="text-grey-darkest w-2/5 font-medium text-[1rem]/[1.5rem] lg:text-lg">{sala.idSala === 1 ? 'Sala de Estudo em Grupo' : 'Sala de Criatividade'}</p>

            <div className='grid grid-cols-6 gap-4 w-full flex items-right'>
              <span className="inline-flex items-center justify-center rounded-full bg-[#09AFBD] py-1 text-[1rem]/[1.5rem]  text-[#fff] px-5 hover:cursor-pointer w-full col-span-2">ID: {sala.idSala}</span>
              <span className="inline-flex items-center justify-center rounded-full bg-[#09AFBD] py-1 text-[1rem]/[1.5rem]  text-[#fff] px-5 hover:cursor-pointer w-full col-span-4">Data: {moment(sala.data).format('DD/MM/YYYY')}</span>

              <span className="inline-flex items-center justify-center rounded-full bg-[#75D194] py-1 text-[1rem]/[1.5rem]  text-[#fff] px-5 hover:cursor-pointer w-full col-span-3">Horário Inicial: {sala.horario_inicial}</span>
              <span className="inline-flex items-center justify-center rounded-full bg-[#75D194] py-1 text-[1rem]/[1.5rem]  text-[#fff] px-5 hover:cursor-pointer w-full col-span-3">Horário Final: {sala.horario_final}</span>

              <span className="inline-flex items-center justify-center rounded-full bg-[#FA4CAF] py-1 text-[1rem]/[1.5rem]  text-[#fff] px-5 hover:cursor-pointer w-full col-span-4">Nome: {sala.nome}</span>
              <span className="inline-flex items-center justify-center rounded-full bg-[#FA4CAF] py-1 text-[1rem]/[1.5rem]  text-[#fff] px-5 hover:cursor-pointer w-full col-span-2">Turma: {sala.turma}</span>

              <span className="inline-flex items-center justify-center rounded-full bg-[#F04245] py-1 text-[1rem]/[1.5rem]  text-[#fff] px-5 hover:cursor-pointer w-full col-span-3">Quant. de Pessoas: {sala.qtd_pessoas}</span>
              <span className="inline-flex items-center justify-center rounded-full bg-[#F04245] py-1 text-[1rem]/[1.5rem]  text-[#fff] px-5 hover:cursor-pointer w-full col-span-3">Motivo: {sala.motivo}</span>
            </div>
          </div>    

        )))}              


      </div>
    
    </div>

  )
}


export default DetalhesSalas
