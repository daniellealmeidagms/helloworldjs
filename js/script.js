// OLÁ, MUNDO!

function mostrarnome() {
    let nome = prompt("Qual o seu nome?")
    alert("Olá, " + nome)
}

// CALCULADORA

function soma(n1, n2) {
    alert(n1 + n2)
}

function subtracao(n1, n2) {
    alert(n1 - n2)
}

function multiplicacao(n1, n2) {
    alert(n1 * n2)
}

function divisao(n1, n2) {
    alert(n1 / n2)
}

// EXERCÍCIOS

// 1) Crie uma função que calcule a área de um círculo com base no valor do raio informado pelo usuário.

function calculocirculo1() {
    let raio = parseFloat(prompt("Raio: "))
    let area = Math.PI * Math.pow(raio, 2)
    alert("Área: " + area)
}

function calculocirculo2() {
    const pi = 3.14
    let raio = prompt("Raio: ")
    let area = 3.14 * raio * raio
    alert("Área: " + area)
}

// 2) Calcular a hipotenusa de um triângulo-retângulo a partir dos valores dos catetos informados pelo usuário.

function hipotenusa1() {
    let co, ca, h
    h = Math.sqrt(
        Math.pow(co = prompt(), 2) +
        Math.pow(ca = prompt(), 2)
    )
    alert(h)
}

function hipotenusa2() {
    let co = prompt()
    let ca = prompt()
    h = Math.sqrt(co * co + ca * ca)
    alert(h)
}

// 3) Converter um valor em reais para dolares

function conversaoMoedas() {
    // Entrada
    let reais = prompt("Informe um valor em reais")
    let cotacao = prompt("Informe a cotação atual do dolar")
    // Processamento
    let dolares = reais / cotacao
    // Saída
    alert(dolares.toFixed(2))
}

// 4) Converter uma temperatura em graus Celsius informado pelo usuário para graus Fahrenheit.
// fahrenheit = (celsius * 1.8) + 32

function conversaoTemperatura() {
    // ENTRADA
    let celsius = prompt("Informe a temperatura em graus Celsius: ")
    // PROCESSAMENTO
    let fahrenheit = (celsius * 1.8) + 32
    // SAÍDA
    alert(fahrenheit)
}

// 5) Converta uma velocidade informada pelo usuário em km/h para m/s
// mSegundo = kmHora / 3.6

function conversaoVelocidade() {
    // ENTRADA
    let kmhora = prompt("Informe o valor em km/h: ")
    // PROCESSAMENTO
    let mSegundo = kmhora / 3.6
    // SAÍDA
    alert(mSegundo.toFixed(2))
}

// 6) Calcular a média aritimética entre as três notas de um aluno informadas pelo usuário

function media() {
    let n1 = parseInt(prompt("Informe a primeira nota: "))
    let n2 = parseInt(prompt("Informe a segunda nota: "))
    let n3 = parseInt(prompt("Informe a terceira nota: "))
    let media = (n1 + n2 + n3) / 3
    alert(media.toFixed(2))
}

function teste(num) {
    alert(num.toFixed(0))
}

// 7) Obter as duas raízes de uma equação do segundo grau a partir dos valores de A, B e C informados pelo usuário (fórmula de Bhaskara).

// x1 = - b + raiz_quadrada(b²-4ac) / 2a
// x2 = - b - raiz_quadrada(b²-4ac) / 2a

function bhaskara() {
    // ENTRADA
    let a = prompt("Informe o valor do termo A: ")
    let b = prompt("Informe o valor do termo B: ")
    let c = prompt("Informe o valor do termo C: ")
    // PROCESSAMENTO
    let delta = (b ** 2) - 4 * a * c
    let x1 = (-1 * b + (Math.sqrt(delta))) / (2 * a)
    let x2 = (-1 * b - (Math.sqrt(delta))) / (2 * a)
    // SAÍDA
    alert("X1: " + x1.toFixed(1) + " X2: " + x2.toFixed(1))
}