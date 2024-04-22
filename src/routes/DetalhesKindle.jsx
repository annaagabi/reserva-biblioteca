import axiosURL from '../axios/config'

import { useState, useEffect } from 'react'

import moment from 'moment'

const DetalhesKindles = () => {

   const [kindles, setKindles] = useState([])
  const getKindle = async () => {

    try {

      const response = await axiosURL.get('/kindle')

      const data = response.data;
      
      setKindles(data);

  } catch (error) {
    console.error(error)
  }

}

  // quando a pagina carregar 
  useEffect(() => {

    getKindle()

  }, []) // carregado apenas uma vez

  return (

    <div className="h-100 w-full flex items-center justify-center font-sans         flex-wrap">

      <div className="pt-6 lg:w-5/6 lg:max-w-2xl">
        <div className="mb-8">
          <h1 className="text-grey-darkest text-center text-[1.5rem]/[2rem] lg:text-3xl font-semibold">Reservas dos Kindles</h1>
        </div>
          
        {/* Cards dos kindles */}
        {kindles.length === 0 ? (<p>Carregando...</p>) : (kindles.map((kindle) => (

          <div className="flex mb-7 items-center bg-white border-solid border-opacity-25 border-2 border-[#000] rounded-lg px-5 py-2 sm:mx-10 md:mx-0">
          <p className="text-grey-darkest w-2/5 font-medium text-[1rem]/[1.5rem] lg:text-lg">
            {kindle.idKindle === 1 ? 'Kindle 1'
            : kindle.idKindle === 2 ? 'Kindle 2'
            : kindle.idKindle  === 3 ? 'Kindle 3'
            : 'Kindle 4'}</p>

            <div className='grid grid-cols-6 gap-4 w-full flex items-right'>
              <span className="inline-flex items-center justify-center rounded-full bg-[#09AFBD] py-1 text-[1rem]/[1.5rem]  text-[#fff] px-5 hover:cursor-pointer w-full col-span-2">ID: {kindle.idKindle}</span>
              <span className="inline-flex items-center justify-center rounded-full bg-[#09AFBD] py-1 text-[1rem]/[1.5rem]  text-[#fff] px-5 hover:cursor-pointer w-full col-span-4">Data: {moment(kindle.data).format('DD/MM/YYYY')}</span>

              <span className="inline-flex items-center justify-center rounded-full bg-[#75D194] py-1 text-[1rem]/[1.5rem]  text-[#fff] px-5 hover:cursor-pointer w-full col-span-3">Horário Inicial: {kindle.horario_inicial}</span>
              <span className="inline-flex items-center justify-center rounded-full bg-[#75D194] py-1 text-[1rem]/[1.5rem]  text-[#fff] px-5 hover:cursor-pointer w-full col-span-3">Horário Final: {kindle.horario_final}</span>

              <span className="inline-flex items-center justify-center rounded-full bg-[#FA4CAF] py-1 text-[1rem]/[1.5rem]  text-[#fff] px-5 hover:cursor-pointer w-full col-span-4">Nome: {kindle.nome}</span>
              <span className="inline-flex items-center justify-center rounded-full bg-[#FA4CAF] py-1 text-[1rem]/[1.5rem]  text-[#fff] px-5 hover:cursor-pointer w-full col-span-2">Turma: {kindle.turma}</span>
            </div>
          </div>    

        )))}              


      </div>
    
    </div>

  )
}


export default DetalhesKindles
