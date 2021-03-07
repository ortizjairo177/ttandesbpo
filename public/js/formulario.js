const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	usuario: /[A-Z\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

function check(e) {
	tecla = (document.all) ? e.keyCode : e.which;
	// Patron de entrada, en este caso solo acepta numeros y letras
	patron = /[A-Z&$() -,:=.]/;
	tecla_final = String.fromCharCode(tecla);
	return patron.test(tecla_final);
}  

const campos = {
	usuario: false,
	nombre: false,
	password: false,
	correo: false,
	celular: false
}



const validarFormulario = (e) => {
	switch (e.target.name) {
		case "usuario":
            if(expresiones.usuario.test(e.target.value)){
                document.getElementById('grupo_usuario').classList.add('formulario_grupo-correcto');
               

            } else {
                document.getElementById('grupo_usuario').classList.add('formulario_grupo-incorrecto');
            }
			
		break;
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "password":
			validarCampo(expresiones.password, e.target, 'password');
			validarPassword2();
		break;
		case "password2":
			validarPassword2();
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'celular');
		break;
	}
}

/* const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById('grupo__${campo}').classList.remove('formulario_grupo-incorrecto');
		document.getElementById('grupo__${campo}').classList.add('formulario_grupo-correcto');
		document.querySelector('#grupo__${campo} i').classList.add('fa-check-circle');
		document.querySelector('#grupo__${campo} i').classList.remove('fa-times-circle');
		document.querySelector('#grupo__${campo} .formulario__input-error').classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo_${campo}`).classList.add('formulario_grupo-incorrecto');
		document.getElementById(`grupo_${campo}`).classList.remove('formulario_grupo-correcto');
		document.querySelector(`#grupo_${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo_${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo_${campo} .formulario__input-error`).classList.add('formulario_input-error-activo');
		campos[campo] = false;
	}
} */

/* const validarPassword2 = () => {
	const inputPassword1 = document.getElementById('password');
	const inputPassword2 = document.getElementById('password2'); */

	/* if(inputPassword1.value !== inputPassword2.value){
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos['password'] = false;
	} else {
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos['password'] = true;
	}
} */

/* inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
}); */

/* formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	const terminos = document.getElementById('terminos');
	if(campos.usuario && campos.nombre && campos.password && campos.correo && campos.telefono && terminos.checked ){
		formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
}); */