const Horarios = () => {

  return (

    <div className="h-100 w-full flex items-center justify-center font-sans         flex-wrap">

      <div className="pt-9 lg:w-7/6 lg:max-w-3xl">
        <div className="mb-8">
          <h1 className="text-grey-darkest text-center text-[1.5rem]/[2rem] font-semibold">Horário de Atendimento da Biblioteca</h1>
        </div>

        

          <div className="flex mb-9 items-center bg-white border-solid border-opacity-25 border-2 border-[#000] rounded-lg px-1 py-5">

            <div className='grid grid-cols-7 gap-9 w-full flex items-right'>

              <span className="inline-flex items-center justify-center rounded-full bg-[#75D194] py-1 text-[2rem]/[2.5rem]  text-[#fff] px-5 hover:cursor-pointer w-full col-span-3">Aberta </span>
              <p>Segunda-feira: 12h30 às 21h30</p>
              <p>Terça a sexta-feira: 9h às 21h30</p>
              <p>Aos Sábados das 9h às 13h</p>
              
              <span className="inline-flex items-center justify-center rounded-full bg-[#F04245] py-1 text-[2rem]/[2.5rem]  text-[#fff] px-5 hover:cursor-pointer w-full col-span-3">Fechada</span>
              <p>Segunda-feira: 18h às 19h</p>
              <p>Terça a sexta-feira: 12h15 às 13h15</p>
              <p>Aos Sábados depois da 13h</p>
              <p>Domingos</p>
              
            </div>
          </div>                     
                     

     </div>
    
    </div>

  )

}

export default Horarios