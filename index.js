'use strict'

/*Primero traemos los HTML a utilizar*/
const nombre = document.querySelector('#nombre');
const mail = document.querySelector('#email');
const contraseña = document.querySelector('#password');
const formulario = document.querySelector('#form');
const boton = document.querySelector('#boton');
const parrafo = document.querySelector('p');

/*Agregamos los eventos*/
/*Validamos al formulario*/
formulario.addEventListener('submit', e => { //Submit, cuando se envíe algo, sucederá..
    e.preventDefault() //Para evitar lo que venga por defecto.
    let alerta = '';
    let entrar = false;
    let regexEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;//Expresión regular para validar mail.

    /*Validamos el nombre*/
    if(nombre.value.length < 7) {
        alerta += `El nombre no es válido <br>`
        entrar = true
    }
    /*Testamos el value del mail*/
    console.log(regexEmail.test(mail.value));
    if (!regexEmail.test(mail.value)) {
        alerta += `El mail no es válido <br>`
        entrar = true 
    }

    /*Validamos la contraseña*/
    if (contraseña.value.length < 8) {
        alerta += `La contraseña no es válida <br>`
        entrar = true 
    }

    /*Creamos in HTML*/
    if (entrar) { //Si entrar en válido.
        parrafo.innerHTML = alerta;
    }
})







