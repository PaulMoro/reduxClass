/*  Vamos a hacer el registro por medio de un componente */
/* red 1 Lo primero es hacer el llamado de hook del estado para 
comenzar a manipularlo */
import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import '../assets/styles/components/Register.scss'


const Register = () => {
	/* red 2 Hacemos la configuracion de nuestro estado, inicializando 
	el nombre (qeu va a ser form en esta oportunidad) y la funcion qeu modifica
	al estado (que en esta oportunidad es el setValues); e inicializando el 
	estado con un objeto con elementos vacios */
	const [form, setValues] = useState({
		email: '',
		name: '',
		password: '',
	});
/* red 3 creamos un funcion, que como parametro será un evento y llamara
la funcion que modifica el estado, en ella llamamos el estado primero y 
despues al input que tenga el mismo nombre en el estado, se le va a otrogar 
el valor que se le agrego en el input.
Caracteristicas de los input */
	const handleInput = event => {
		setValues({
			...form,
			[event.target.name]: event.target.value
		})
	};

	/* red 4 Esta funcion lo qeu hace es recetiar el Submit por default que 
	en html un form, es de crucial importancia */
	const handleSubmit = event => {
		event.preventDefault();
		/* este console.log es para debugiar, es una mala practica */
		console.log(form);
	}

	return(
		<section className='register'>
			<section className='register__container'>
				<h2>Regístrate</h2>
				{/* Le asignamos al form su funcion para recetearlo */}
				<form className='register__container--form' onSubmit={handleSubmit}>
					{/* a cada imput le asignamos su nombre en el estado y la funcion
					que le brindara datos al este */}
					<input
					  name='name'
					  className='input'
					  type='text'
					  placeholder='Nombre'
						onChange={handleInput}
					/>
					<input
					  name='email'
					  className='input'
					  type='text'
					  placeholder='Correo'
						onChange={handleInput}
					/>
					<input
					  name='password'
					  className='input'
					  type='password'
					  placeholder='Contraseña'
						onChange={handleInput}
					/>
					<button className='button'>Registrarme</button>
				</form>
				<Link to="/login">
					Iniciar Sesión
				</Link>
				<a href=''>Iniciar sesión</a>
			</section>
		</section>
)};

export default Register;