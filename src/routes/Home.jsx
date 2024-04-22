import Reservavel from '../components/Reservavel'

const Home = () => {

return (

  <div className="h-100 w-full flex items-center justify-center font-sans        flex-wrap">

    <div className="pt-6 sm:max-w-screen-sm lg:w-5/6 lg:max-w-2xl">
      <div className="mb-8">
        <h1 className="text-grey-darkest text-center text-[1.5rem]/[2rem] lg:text-3xl font-semibold">Reserváveis</h1>
      </div>

      {/* componentes reservas kindles e salas */}
      <Reservavel></Reservavel>

    </div>
    
  </div>

  )
  
}

export default Home
