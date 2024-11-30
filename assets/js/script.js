/*               Desafio 1              */

const imageBorder = document.querySelector('#image-border');

//Hacer la funcion que al apretar agregar borde

imageBorder.addEventListener('click',()=>{
    if (imageBorder.style.border == '') {
        imageBorder.style.border = 'solid 2px red';
    }
    else{
        imageBorder.style.border = '';
    }
})

//------------------------------------------------------------------------------------//

/*               Desafio 2              */


const inp1 = document.getElementById('inp-1');
const inp2 = document.getElementById('inp-2');
const inp3 = document.getElementById('inp-3');

let contador = document.getElementById('contador');

inp1.addEventListener('input',()=>{
    contador.innerHTML = Number(inp1.value) +  Number(inp2.value) + Number(inp3.value);
    if (contador.innerHTML >= 10) {
        contador.style.color = 'red';
    }else{
        contador.style.color = 'black';

    }
})
inp2.addEventListener('input',()=>{
    contador.innerHTML = Number(inp1.value) +  Number(inp2.value) + Number(inp3.value); 
    if (contador.innerHTML >= 10) {
        contador.style.color = 'red';
    }else{
        contador.style.color = 'black';

    }
})
inp3.addEventListener('input',()=>{
    contador.innerHTML = Number(inp1.value) +  Number(inp2.value) + Number(inp3.value);
    if (contador.innerHTML >= 10) {
        contador.style.color = 'red';
    }else{
        contador.style.color = 'black';

    }
})

const comprar = document.getElementById('comprar');

comprar.addEventListener('click', ()=>{
    if (contador.innerHTML >= 10) {
        alert('No puedes comprar');
    }else{
        alert(`Felicidades compraste ${contador.innerHTML}`);
    }
})

//------------------------------------------------------------------------------------//

/*               Desafio 3              */


const verificar = document.getElementById('verificar');

verificar.addEventListener('click', ()=>{
    const select1 = document.getElementById('select-1');
    const select2 = document.getElementById('select-2');
    const select3 = document.getElementById('select-3');
    contraseña = document.getElementById('password');


    const resultado = select1.value + select2.value + select3.value;

    if (resultado == 911) {
        contraseña.innerHTML = 'password 1 correcto'
    }
    else if(resultado == 714){
        contraseña.innerHTML = 'password 2 correcto'

    }
    else{
        contraseña.innerHTML = 'password incorrecto'
    }
})