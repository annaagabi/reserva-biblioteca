import { Link } from 'react-router-dom'

import { Plus } from 'lucide-react'

const Reservavel = () => {

return (

  <div className="">


    {/* Kindles */}
    <div className="flex mb-7 items-center bg-white border-solid border-opacity-25 border-2 border-[#000] rounded-lg px-5 py-2 grid grid-cols-12">
    
      <p className="text-grey-darkest w-5/6 font-medium text-[1rem]/[1.5rem] lg:text-xl col-span-6">Reservas Kindles</p>

      <div className='grid grid-cols-5 gap-4 w-full flex items-right col-span-6'>

        <button className="inline-flex items-center justify-center rounded-full bg-[#09AFBD] py-1 font-medium text-[#fff] px-5 hover:cursor-pointer w-full col-span-3 text-[1rem]/[1.5rem] lg:text-xl "><Link to={`/reservar/kindle`}>Reservar</Link></button>

        <button className="inline-flex items-center justify-center rounded-full bg-[#FA4CAF] py-1 font-medium text-[#fff] px-5 hover:cursor-pointer w-full col-span-2"><Link to={`/detalhes/kindles`}><Plus color="white" size="1.25rem"/></Link></button>        
      </div>

    </div>

    {/* Salas */}
    <div className="flex mb-4 items-center bg-white border-solid border-opacity-25 border-2 border-[#000] rounded-lg px-5 py-2 grid grid-cols-12">
    
      <p className="text-grey-darkest w-5/6 font-medium text-[1rem]/[1.5rem] lg:text-xl  col-span-6">Reservas Salas</p>

      <div className='grid grid-cols-5 gap-4 w-full flex items-right col-span-6'>

        <button className="inline-flex items-center justify-center rounded-full bg-[#09AFBD] py-1 font-medium text-[#fff] px-5 hover:cursor-pointer w-full col-span-3 text-[1rem]/[1.5rem] lg:text-xl "><Link to={`/reservar/sala`}>Reservar</Link></button>

        <button className="inline-flex items-center justify-center rounded-full bg-[#FA4CAF] py-1 font-medium text-[#fff] px-5 hover:cursor-pointer w-full col-span-2"><Link to={`/detalhes/salas`}><Plus color="white" size="1.25rem"/></Link></button>        
      </div>

    </div>    
    


  </div>
  )

}

export default Reservavel