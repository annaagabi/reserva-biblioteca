import "./Navbar.css"

import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="2xl:px-16 px-8 bg-[#09AFBD] flex flex-wrap items-center 2xl:py-0 py-2">
    <div className="flex-1 flex justify-between items-center">
      
    <a href="/" className="flex font-medium text-[2.5rem]/[2rem]">
        <div className="mt-3 text-white pb-5">BIBLIOTECA</div>
      </a>

    </div>
    <label htmlFor="menu-toggle" className="cursor-pointer 2xl:hidden block">
      <svg
        className="fill-current text-white"
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 20 20"
      >
        <title>menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
      </svg>
    </label>
    <input className="hidden" type="checkbox" id="menu-toggle" />
    <div className="hidden 2xl:flex 2xl:items-center 2xl:w-auto w-full" id="menu">
      <nav>
        <ul className="text-xl text-center items-center gap-x-5 pt-4 md:gap-x-4 2xl:text-2xl 2xl:flex  2xl:pt-0">
          <li className="py-2 2xl:py-0">
            <Link to={`/horario`}
              className="text-[#fff] text-[1.5rem]/[2rem] font-semibold transition duration-0 hover:opacity-90">
              Horário
            </Link>
          </li>
          <li className="py-2 2xl:py-0">
            <Link to={`/gerenciar`}
              className="text-[#fff] text-[1.5rem]/[2rem] font-semibold transition duration-0 hover:opacity-90">
              Gerenciar Reservas
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </nav>
  )
}

export default Navbar