import axios from 'axios'

const axiosURL = axios.create({
    baseURL: 'https://biblioteca-reserva.vercel.app'
})

export default axiosURL