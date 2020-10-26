import React from 'react'
import Tailwindcss from './assets/images/tailwindcss-logo.png'
import ReactLogo from './assets/images/react-logo.svg'

const App = () => {
    return(
        <div class="max-w-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div class="sm:flex sm:items-center px-6 py-4">
                <div
                class="flex items-center justify-center sm:flex-col sm:w-24 sm:border sm:border-gray-500 sm:rounded-full"
                >
                    <img
                    class="block sm:mx-auto mx-0 flex-shrink-0 h-16 sm:h-12"
                    src={ Tailwindcss }
                    alt="Tailwind CSS Logo"
                    />
                <img
                    class="block sm:mx-auto mx-0 flex-shrink-0 h-16 sm:h-12"
                    src={ ReactLogo }
                    alt="React Logo"
                />
                </div>

                <div class="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
                <p class="text-xl leading-tight">Tailwind CSS & React JS</p>
                <p class="text-sm leading-tight text-gray-600">
                    With custom webpack configuration!
                </p>
                <div class="mt-4">
                    <button
                    class="text-purple-500 hover:text-white hover:bg-purple-500 border border-purple-500 text-xs font-semibold rounded-full px-4 py-1 leading-normal"
                    >
                    GO
                    </button>
                </div>
                </div>
            </div>
        </div>

    )
}

export default App