/*
    Uma empresa decide dar um aumento de 30% aos funcionários com salários inferiores a R$ 500,00. Faça um programa que receba o salário do funionário e mostre o valor do salário reajustado ou uma mesagem caso ele não tenha direito ao aumento.
*/

let salario = parseFloat(prompt("Qual é o seu salário?"));
let salarioReajustado = salario + (salario * (30/100)) ;

if(salario <= 500){
    document.getElementById('info').innerHTML = (`Você tem direito ao aumento de 30%! Obaaa! Seu salário atual é ${salarioReajustado}`)
}

else if (salario > 500){
    document.getElementById('info').innerHTML = (`Você não tem direito ao aumento de 30%! Que pena!`)
}