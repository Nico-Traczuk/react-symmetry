
import {useState} from "react";



export function Form() {
	
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [message, setMessage] = useState('')
	const [alert, setAlert] = useState('')


	const handleClick = (e) => {

		e.preventDefault()
		
		if(name === '' || email === ''|| message === '') {


			setAlert(true)
		} else {
			setAlert(false)
		}


		

	}



    return(
        <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
	<div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
		<div className="py-6 md:py-0 md:px-6">
			<h1 className="text-4xl font-bold">Contacto</h1>
			<p className="pt-2 pb-4 title">Llene el formulario para que nos contactemos</p>
			<div className="space-y-4 flex flex-col items-center  text-xl md:text-md">
				
				<p className="flex items-center mt-10">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
					</svg>
					<span className="font-bold font italic">+54 1123917872</span>
				</p>
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
						<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
					</svg>
					<span className="font-bold font italic">consultora@symmetryweb.net</span>
				</p>
				<p className="flex items-center">
				<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24" className="w-5 h-5 mr-2 sm:mr-6">
					<path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z">

					</path>
					</svg>
					<span className="font-bold font italic">symmetry.web</span>
					

				</p>
			</div>
		</div>
		<form  
			className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 font italic" 
			method="POST" 
			id="form"
			onSubmit={handleClick}
		>
			<label className="block">
				<span className="mb-1">Full name</span>
				<input 
					type="text" 
					placeholder="Ingrese su nombre" 
					id="name" 
					className="block p-2 w-full border-2 rounded-md shadow-sm focus:ring focus:ri focus:ri border-black " 
					onChange={(e) => setName(e.target.value)}
				/>
			</label>
			<label className="block">
				<span className="mb-1">Email address</span>
				<input 
					type="email" 
					placeholder="ingrese@tuemail.com" 
					id="email" 
					className="block p-2 w-full border-2 rounded-md shadow-sm focus:ring focus:ri focus:ri border-black" 
					onChange={(e) => setEmail(e.target.value)}
				/>
			</label>
			<label className="block">
				<span className="mb-1">Message</span>
				<textarea 
					rows="3" 
					id="message" 
					className="block p-2 w-full rounded-md border-2 focus:ring focus:ri focus:ri border-black"
					onChange={(e) => setMessage(e.target.value)}
				></textarea>
			</label>
			<button 
				type="submit" 
				className="self-center px-8 py-3 bg-cyan-400 text-lg rounded focus:ring hover:ring focus:ri dark:bg-violet-400 dark:text-gray-900 focus:ri hover:ri"

				>Submit</button>
		</form>

		{alert && <div className="font-bold" >Complete los campos</div>}
	</div>

</section>
    )
}