import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {createBrowserRouter, RouterProvider, Route} from 'react-router-dom'

// páginas
import Home from './routes/Home.jsx'
import Horarios from './routes/Horarios.jsx'
import ReservarSala from './routes/ReservarSala.jsx'
import ReservarKindle from './routes/ReservarKindle.jsx'
import DetalhesSalas from './routes/DetalhesSala.jsx'
import DetalhesKindles from './routes/DetalhesKindle.jsx'
import Gerenciar from './routes/GerenciarReservas.jsx'
import GerenciarKindle from './routes/GerenciarKindle.jsx'
// import GerenciarSala from './routes/GerenciarSala.jsx'
import EditarKindle from './routes/EditarKindle.jsx'
//import EditarSala from './routes/EditarSala'

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/horario",
        element: <Horarios />,
      },
      {
        path: "/reservar/sala",
        element: <ReservarSala />,
      },
      {
        path: "/reservar/kindle",
        element: <ReservarKindle />,
      },
      {
        path: "/detalhes/salas",
        element: <DetalhesSalas />,
      },
      {
        path: "/detalhes/kindles",
        element: <DetalhesKindles />,
      },
      {
        path: "/gerenciar",
        element: <Gerenciar />,
      },
      {
        path: "/gerenciar/kindle",
        element: <GerenciarKindle />,
      },
      // {
      //   path: "/gerenciar/sala",
      //   element: <GerenciarSala />,
      // },
      {
        path: "/editar/kindle",
        element: <EditarKindle />,
      },
      // {
      //   path: "/editar/sala",
      //   element: <EditarSala />,
      // },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
