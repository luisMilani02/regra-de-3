// let n1 = document.getElementById("num1").value
// let n2 = document.getElementById("num2").value
// let n3 = document.getElementById("num3").value

// let n01 = document.getElementById("num01").value
// let n02 = document.getElementById("num02").value
// let n03 = document.getElementById("num03").value

function aviso() {
    alert("Antes de usar certifique-se de ler as instruções!")} 
setTimeout(aviso, 3000)

window.onload(function() {
    document.getElementById("num1").value = ""
    document.getElementById("num2").value = ""
    document.getElementById("num3").value = ""
    document.getElementById("num01").value = ""
    document.getElementById("num02").value = ""
    document.getElementById("num03").value = ""
})

function x1() {
    let n1 = document.getElementById("num1").value
    let n2 = document.getElementById("num2").value
    let n3 = document.getElementById("num3").value

    let result1 = n1 * n3;
    let r1 = result1 / n2;
    console.log(result1)
    console.log(r1)
    document.getElementById("resultado1").innerHTML = "Resultado = " + r1
}

function x2() {
    let n01 = document.getElementById("num01").value
    let n02 = document.getElementById("num02").value
    let n03 = document.getElementById("num03").value

    let result2 = n02 * n03;
    let r2 = result2 / n01;
    console.log(result2)
    console.log(r2)
    document.getElementById("resultado2").innerHTML = "Resultado = " + r2
}