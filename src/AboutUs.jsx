export function AboutUs () {
    return (

        <section>
            <div>
                <h1 className="text-center font-bold text-4xl mt-10 md:mt-20">Acerca de Nosotros</h1>
                <h3 className="title mt-5 px-8 md:px-0">Nos comprometemos con la creacion de experiencias visuales excepcionales con funcionalidades intuitivas</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2  gap-20 mt-10 mx-auto md:max-w-4xl p-8 md:p-0">
                <div className="col-auto">
                    <h2 className="font-bold mb-5 text-xl">Nuestra misión</h2>
                    <div className="font text-justify text-md">
                        <p className="mb-5">En Symmetry, nuestra misión es simple pero ambiciosa. Proporcionar <span className="italic text-cyan-400 font-bold">soluciones</span> de diseño web modernas y completamente profesionales.</p>
                        <p>Creemos que cada <span className="italic text-cyan-400 font-bold">proyecto</span> es una nueva oportunidad para explotar nuestra creatividad y funcionalidad. Tu visión es nuestro punto de partida, trabajaremos mano a mano para transformar las ideas con una destacada presencia en linea.</p>
                    </div>
                </div>
                <div>
                    <h2 className="font-bold mb-5 text-xl ">Nuestra historia</h2>
                    <div className="font text-justify text-md">
                        <p className="mb-5">Symmetry nació de la visión compartida de un <span className="italic text-cyan-400 font-bold ">grupo</span> de apasionados diseñadores y desarrolladores web que soñaban con ir más allá de las convenciones. </p>
                        <p className="mb-5">En <span className="italic text-cyan-400 font-bold">Symmetry</span> cada línea de código, cada elemento visual, importa. Nos sumergimos en cada proyecto con la convicción de que la diferencia está en los detalles.</p>
                        <p>Cada píxel importa. Cada transición, cada interacción, es una nueva oportunidad para cautivar a la audiencia.</p>
                    </div>
                </div>
                <div className="md:col-span-2">
                    <h2 className="text-justify font-bold text-xl">Areas a las cuales queremos apuntar</h2>
                    <div className="text-justify">
                        <ul className="flex flex-col gap-4 mt-5">
                            <li><span className="italic text-cyan-300 font-bold">Diseño Moderno e Innovador:</span> Buscamos constantemente inspiración en las últimas tendencias del diseño web</li>
                            <li><span className="italic text-cyan-300 font-bold">Profesionalismo Excepcional:</span> Nos comprometemos a ofrecer un servicio profesional desde la concepción hasta la implementación. Cada detalle cuenta, y trabajamos incansablemente para garantizar que tu presencia en línea.</li>
                            <li><span className="italic text-cyan-300 font-bold">Adaptabilidad Absoluta:</span> Reconocemos la diversidad de dispositivos utilizados por los usuarios hoy en día. Nuestro objetivo es crear diseños web completamente adaptables, asegurando una experiencia fluida y consistente.</li>
                        </ul>
                    </div>
                </div>
            </div>

            
        </section>

    )
}