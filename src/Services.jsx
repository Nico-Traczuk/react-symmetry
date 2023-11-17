export function Services() {
    return( 
        <main className="bg-emerald-100 my-10 py-10">
            <h1 className="font-bold text-3xl">Nuestros Servicios</h1>
            
            <div className="pricingCard flex flex-col  items-center md:items-stretch md:flex-row md:justify-center my-20 gap-5">
                <div className="card text-white border-2 border-black  max-w-fit bg-slate-700 rounded-2xl shadow-xl shadow-zinc-400 duration-200 hover:scale-105 flex flex-col justify-between">
                <div className="flex flex-col">
                    <h1 className="font-bold flex flex-col text-xl">Servicio Web <span>Portfolio</span> </h1>
                    <p className="font-bold text-cyan-400 text-4xl">$40.000</p>
                    <h2 className="border-b-2 border-teal-200 text-center pb-2 font-bold text-green-400 md:pb-4">HTML CSS JS</h2>
                </div>
                  
                    <ul className="text-justify flex flex-col gap-10 mt-5 italic ">

                        <li className="border-b-2 border-teal-200 pb-2">1 Página</li>
                        <li className="border-b-2 border-teal-200 pb-2">4 Secciones</li>
                        <li className="border-b-2 border-teal-200 pb-2">Formulario de contacto</li>

                    </ul>
                    <button className=" border-2 border-black rounded px-4 py-2 bg-cyan-600 mt-5">Ir a contacto</button>
                </div>

                <div className=" border-2 border-black text-white card bg-slate-700 rounded-2xl shadow-xl shadow-zinc-400 duration-200 hover:scale-105 flex flex-col justify-between">
                    <div>
                        <h1 className="font-bold flex flex-col text-xl">Servicio Web <span>Profesional</span> </h1>
                        <p className="font-bold text-cyan-400 text-4xl">$90.000</p>
                        <h2 className="border-b-2 border-teal-200 text-center pb-4 font-bold text-green-400">HTML CSS JS</h2>
                    </div>
                    <ul className="text-justify mt-5 flex flex-col gap-4 italic ">

                        <li className="border-b-2 border-teal-200 pb-2">4 Páginas</li>
                        <li className="border-b-2 border-teal-200 pb-2">4 Secciones</li>
                        <li className="border-b-2 border-teal-200 pb-2">Mapa</li>
                        <li className="border-b-2 border-teal-200 pb-2">Galería</li>
                        <li className="border-b-2 border-teal-200 pb-2">Productos</li>
                        <li className="border-b-2 border-teal-200 pb-2">Formulario de contacto</li>
                    </ul>
                    <button className="mt-2 border-2 border-black rounded px-4 py-2 bg-cyan-600">Ir a contacto</button>
                </div>

                <div className="card border-2 border-black text-white max-w-fit bg-slate-700 rounded-2xl shadow-xl shadow-zinc-400 duration-200 hover:scale-105 flex flex-col" >
                    <div>
                        <h1 className="font-bold flex flex-col text-xl">Servicio Web <span>Carrito de compras</span> </h1>
                        <p className="font-bold text-cyan-400 text-4xl">$150.000</p>
                        <h2 className="border-b-2 border-teal-200 text-center pb-4 font-bold text-green-400">HTML CSS JS</h2>
                    </div>
                    <ul className="text-justify mt-5 flex flex-col gap-4 italic ">

                        <li className="border-b-2 pb-2">Carrito de Compras</li>
                        <li className="border-b-2 pb-2">4 Páginas</li>
                        <li className="border-b-2 pb-2">4 Secciones</li>
                        <li className="border-b-2 pb-2">Galeria</li>
                        <li className="border-b-2 pb-2">Mapa</li>
                        <li className="border-b-2 pb-2">Productos</li>
                        <li className="border-b-2 pb-2">Formulario de contacto</li>
                    </ul>
                    <button className="mt-2 border-2 border-black rounded px-4 py-2 bg-cyan-600 hover:bg-cyan-100">Ir a contacto</button>
                </div>
            </div>

        </main>
    )
}