import { Link } from 'react-router-dom'

const Gerenciar = () => {

return (

  <div className="h-100 w-full flex items-center justify-center font-sans        flex-wrap">

  <div className="pt-6 sm:max-w-screen-sm lg:w-5/6 lg:max-w-2xl">
    <div className="mb-8">
      <h1 className="text-grey-darkest text-center text-[1.5rem]/[2rem] lg:text-3xl font-semibold">Gerenciar Reservas</h1>
    </div>

  <div className="">


    {/* Kindles */}
    <div className="flex mb-7 items-center bg-white border-solid border-opacity-25 border-2 border-[#000] rounded-lg px-5 py-2 grid grid-cols-12">
    
      <p className="text-grey-darkest w-5/6 font-medium text-[1rem]/[1.5rem] lg:text-xl col-span-8">Reservas Kindles</p>

      <div className='grid grid-cols-5 gap-4 w-full flex items-right col-span-4'>

        <button className="inline-flex items-center justify-center rounded-full bg-[#09AFBD] py-1 font-medium text-[#fff] px-5 hover:cursor-pointer w-full col-span-6 text-[1rem]/[1.5rem] lg:text-xl "><Link to={`/gerenciar/kindle`}>Gerenciar</Link></button>
      </div>   

    </div>

    {/* Salas */}
    <div className="flex mb-4 items-center bg-white border-solid border-opacity-25 border-2 border-[#000] rounded-lg px-5 py-2 grid grid-cols-12">
    
      <p className="text-grey-darkest w-5/6 font-medium text-[1rem]/[1.5rem] lg:text-xl  col-span-8">Reservas Salas</p>

      <div className='grid grid-cols-5 gap-4 w-full flex items-right col-span-4'>

        <button className="inline-flex items-center justify-center rounded-full bg-[#09AFBD] py-1 font-medium text-[#fff] px-5 hover:cursor-pointer w-full col-span-6 text-[1rem]/[1.5rem] lg:text-xl "><Link to={`/gerenciar/sala`}>Gerenciar</Link></button>

      </div> 

    </div>    
    


  </div>

  </div>
    
    </div>
  )

}

export default Gerenciar