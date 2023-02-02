const h1 = document.querySelector('h1')
const parrafo = document.querySelector('.parrafo')
const parrafopId = document.querySelector('#parrafoId')
const input1 = document.querySelector('#calculo1')
const input2 = document.querySelector('#calculo2')
const btnCalcular = document.querySelector('#btnCalcular')
const resultado = document.querySelector('#resultado')
const form = document.querySelector('#form')


form.addEventListener('submit', botonCalcular)

// function botonCalcular(event){
//     const sumaInputs= input1.value + input2.value;
//     event.preventDefault()

//     resultado.innerText= "Resultado es: "+ sumaInputs;  
// }


btnCalcular.addEventListener('click', botonCalcular)


function botonCalcular(event){
    const sumaInputs= input1.value + input2.value;

    resultado.innerText= "Resultado es: "+ sumaInputs;  

}




