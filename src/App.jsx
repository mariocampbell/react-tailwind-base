import React from 'react'
import IsoMarioCampbell from './assets/images/iso-mario-campbell.svg'

const App = () => {
    return(
        <div className='h-screen flex justify-center items-center'>
            <div className='flex flex-col items-center'>
                <a href="http://mariocampbell.com.ar" target='_blank'><img className='w-16' src={ IsoMarioCampbell } alt="isotipo Mario Campbell"/></a>
                <p className='text-gray-600 pt-2'>
                    <a href="https://www.behance.net/mariocampbell" target='_blank'><i className="p-2 fab hover:text-white transition-colors duration-300 ease-in-out fa-behance"></i></a>
                    <a href="https://www.linkedin.com/in/mario-campbell-18845924/" target='_blank'><i className="p-2 fab hover:text-white transition-colors duration-300 ease-in-out fa-linkedin-in"></i></a>
                    <a href="https://codepen.io/mariocampbell" target='_blank'><i className="p-2 fab hover:text-white transition-colors duration-300 ease-in-out fa-codepen"></i></a>
                    <a href="https://github.com/mariocampbell" target='_blank'><i className="p-2 fab hover:text-white transition-colors duration-300 ease-in-out fa-git"></i></a>
                    </p>
                <a  href="http://mariocampbell.com.ar" target='_blank'><h1 className='uppercase text-white text-3xl text-center'>Mario Campbell</h1></a>
                <p className='text-gray-700 text-sm pt-6'>Proyecto base creado con <a className='uppercase font-semibold hover:text-white transition-colors duration-300 ease-in-out' href="https://webpack.js.org/" target='_blank'>Webpack</a> - <a className='uppercase font-semibold hover:text-white transition-colors duration-300 ease-in-out' href="https://es.reactjs.org/" target='_blank'>React js</a> - <a className='uppercase font-semibold hover:text-white transition-colors duration-300 ease-in-out' href="https://tailwindcss.com/" target='_blank'>Tailwind Css</a></p>
            </div>
        </div>    
    )
}

export default App