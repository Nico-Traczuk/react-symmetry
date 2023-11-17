

export function Hero() {
    return (
        <div className="relative flex flex-col-reverse py-16 mt-12 lg:pt-0 lg:flex-col lg:pb-0 md:mt-20 ">
          <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
            <svg
              className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
              viewBox="0 0 100 100"
              fill="currentColor"
              preserveAspectRatio="none slice"
            >
              <path d="M50 0H100L50 100H0L50 0Z" />
            </svg>
            <img
              className="hidden md:block object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
            />
          </div>
          <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
            <div className="mb-16 lg:my-40 lg:max-w-lg ">
            
              <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none ">
                Todo lo que puedes 
                <br className="block" />
                imaginar es {''}
                <span className="inline-block text-cyan-400 ">
                    real
                </span>
              </h2>
              <p className=" mb-5 text-base text-gray-700 md:text-lg flex flex-col title">
                  <span className="text-sm  mb-5 font">La simplicidad es la clave de un gran diseño web</span>
                  Sitios web totalmente responsivos y adaptables a cualquier dispositivo
              </p>
              <div className="flex justify-center md:gap-5">
                <a
                  href="#form"
                  className="inline-flex items-center justify-center h-12 px-6 mr-6 font-bold text-md tracking-wide text-cyan-400 transition duration-200 rounded shadow-lg border-2 border-cyan-400  hover:bg-cyan-400 hover:text-white focus:shadow-outline focus:outline-none"
                >
                  Contacto
                </a>
                <a
                  href="/"
                  aria-label=""
                  className="inline-flex items-center font-bold text-md text-gray-800  transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                  Seguir leyendo
                </a>
              </div>
            </div>
          </div>
        </div>
      );
}