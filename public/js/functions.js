/* alert('aca llego') */


 var separador = document.getElementById('separadorMiles');

separador.addEventListener('input', (e) => {
    var entrada = e.target.value.split(','),
      parteEntera = entrada[0].replace(/\./g, ''),
      parteDecimal = entrada[1],
      salida = parteEntera.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
      
    e.target.value = salida + (parteDecimal !== undefined ? ',' + parteDecimal : '');
}, false);



/* variable para detener tiempo activo de la pagina? */

var inicio;
function ini() {
    inicio = setTimeout('location="/"',10000);
            
}
function parar() {
    clearTimeout(inicio);
    inicio = setTimeout('location="/"',10000); //  5 minutos        
}  


//no funciona este script desde aqui solo desde app.blade
setTimeout(function () { 

    // Closing the alert 
    $('.alert').alert('close'); 
}, 2000); 


function check(e) {   // en el input aplicarse onclick="return check(event);"
	tecla = (document.all) ? e.keyCode : e.which;
	// Patron de entrada, en este caso solo acepta numeros y letras
	patron = /[A-Z&$() -,:=.]/;
	tecla_final = String.fromCharCode(tecla);
	 return patron.test(tecla_final);
}  

function nextFocus(inputF, inputS) {
	document.getElementById(inputF).addEventListener('keydown', function(event) {
	  if (event.keyCode == 13)  {
		document.getElementById(inputS).focus();
		
	  }
	});
  }     

  $(document).ready(function()
  {	  
  $("#Mensajeform").blur(function(){
	$("#Mensajeform").hide();
  }); 
})    


function ocultarmsjform(){
	$("#Mensajeform").hide();
	$("#Mensaje-usuario").hide();
	$("#Mensaje-nombre").hide();
	$("#Mensaje-password").hide();
	$("#Mensaje-cel").hide();
	document.getElementById('grupo_usuario').classList.remove('formulario_grupo-incorrecto');
	document.getElementById('grupo_nombre').classList.remove('formulario_grupo-incorrecto'); 
	document.getElementById('grupo_password').classList.remove('formulario_grupo-incorrecto');
	document.getElementById('grupo_celular').classList.remove('formulario_grupo-incorrecto');      


}


 function largocaracteres(){
      
    nombre=$('#usuario').val();
     //Comprobamos la longitud de caracteres
    if (nombre.length>6){
     $("#Mensaje").hide ();
	  document.getElementById('grupo_usuario').classList.remove('formulario_grupo-incorrecto');  
	      document.getElementById('grupo_usuario').classList.add('formulario_grupo-correcto');        
       document.querySelector('grupo_usuario i').classList.remove('cancel');   
	   document.querySelector('grupo_usuario i').classList.add('check_circle_outline'); 
	 
    }
    else {
      $("#Mensaje").show ();    
      $("#Mensaje").html("El nombre debe ser completo y minimo 6 caracteres");  
      document.getElementById('grupo_usuario').classList.add('formulario_grupo-incorrecto');      
    }
  }
  

 function validar(){
	var usuario, nombre, password, email, celular, expresion;

	usuario = document.getElementById("usuario").value;
    nombre = document.getElementById("nombre").value;
	password = document.getElementById("password").value;
    email =  document.getElementById("email").value;
	celular = document.getElementById("celular").value;
	 
	expresion = /\w+@\w+\.+[A-Z]/; 

	if(usuario === "" || nombre === "" || password === "" || email === "" || celular === ""){

		$("#Mensajeform").show ();    
		$("#Mensajeform").html("Válide los campos obligatorios *");  
		return false;
	 	
	}
	else if (usuario.length<6  ) {
		$("#Mensaje-usuario").show ();    
		$("#Mensaje-usuario").html("El usuario minimo 6 caracteres");  
		document.getElementById('grupo_usuario').classList.add('formulario_grupo-incorrecto');  
		return false;
	}
	else if (nombre.length>30 ) {
		$("#Mensaje-nombre").show ();    
		$("#Mensaje-nombre").html("El nombre es muy largo");
		document.getElementById('grupo_nombre').classList.add('formulario_grupo-incorrecto');   
		return false;
	}
	
	else if (password.length>15 ) {
		$("#Mensaje-password").show ();    
		$("#Mensaje-password").html("La clave es muy largo"); 
		document.getElementById('grupo_password').classList.add('formulario_grupo-incorrecto');   
		return false;
	}

	else if (celular.length<10 ) {
		$("#Mensaje-cel").show ();    
		$("#Mensaje-cel").html("El Celular tiene 10 digitos"); 		
	 	document.getElementById('grupo_celular').classList.add('formulario_grupo-incorrecto');   
		return false;
	}

	else if (isNaN(celular)) { /* el telefono deber ser numerico */
		$("#Mensaje-cel").show ();    
		$("#Mensaje-cel").html("El telefono solo números");  
		document.getElementById('grupo_celular').classList.add('formulario_grupo-incorrecto'); 
		return false;
	}

	else if (!expresion.test(email) ) { /* cuando no se cumpla el email */		    
		return false;
	}
			
 }


/* formulario contact  index*/
/* const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	usuario: /[A-Z\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
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

 */