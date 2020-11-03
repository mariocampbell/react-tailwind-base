import React from 'react'
import { Logo } from '../../components'

const Home = () => {
    return(
        <div className='h-screen flex flex-col justify-center items-center'>
            <Logo />
            <p className='text-gray-700 text-sm pt-6'>Proyecto base creado con <a className='uppercase font-semibold hover:text-white transition-colors duration-300 ease-in-out' href="https://webpack.js.org/" target='_blank'>Webpack</a> - <a className='uppercase font-semibold hover:text-white transition-colors duration-300 ease-in-out' href="https://es.reactjs.org/" target='_blank'>React js</a> - <a className='uppercase font-semibold hover:text-white transition-colors duration-300 ease-in-out' href="https://tailwindcss.com/" target='_blank'>Tailwind Css</a></p>
        </div>
    )
}

export default Home
