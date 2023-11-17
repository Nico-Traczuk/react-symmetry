

export function Header() {
    return(
        <header className="mt-10">
            <nav className='flex flex-col items-center gap-10 md:gap-0  md:flex-row md:justify-around'>
                <div className='flex items-center gap-2 flex-col md:flex-row md:gap-5'>
                    <a href="../index.html">
                        <img className='h-28  md:h-20' src="../src/img/logo-2.png" alt="logo-symmetry" />
                    </a>

                    <div className="flex flex-col">
                        <span className='text-5xl uppercase text-cyan-400 font-bold tracking-widest logo-title md:text-3xl'>Symmetry</span>
                        <span className='text-2xl uppercase text-cyan-400 font-bold tracking-wide logo-title md:text-md'>Consultora web</span>
                    </div>
                </div>
                
                <ul className='flex flex-col gap-5 mt-10 md:mt-0 md:flex-row '>
                    <a href="#"><li className='font-bold uppercase'>Inicio</li></a>
                    <a href="#"><li className='font-bold uppercase'>Quienes somos</li></a>
                    <a href="#"><li className='font-bold uppercase'>Servicios</li></a>
                    <a href="#"><li className='font-bold uppercase'>Contactos</li></a>

                </ul>
            </nav>
        </header>
    )
}