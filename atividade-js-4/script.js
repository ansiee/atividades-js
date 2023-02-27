/*
    Faça um script para efetuar o índice de massa corporal
*/

let peso = prompt("Qual é o seu peso?");
let altura = prompt("Qual é a sua altura?");
let imc

imc = peso / (altura*altura)

document.getElementById('info').innerHTML = `O seu Índice de massa corporal é ${imc} `;