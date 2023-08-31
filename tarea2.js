
const $procederMostrar = document.querySelector('#Proceder');

$procederMostrar.onclick = function(evento){
    const nombreDeUsuario = document.querySelector('#nombre').value
    const segundoNombre = document.querySelector('#segundo').value;
    const apellidoUsuario = document.querySelector('#apellido').value;
    const edadUsuario = Number(document.querySelector('#edad').value);

    document.querySelector('#textar').value = `Datos: ${nombreDeUsuario} ${segundoNombre} ${apellidoUsuario}, Edad: ${edadUsuario} años`;
    document.querySelector('h1').textContent = `Hola! ${nombreDeUsuario}`; 
    evento.preventDefault();
}