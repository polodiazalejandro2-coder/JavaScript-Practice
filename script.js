// Exercise 1 Comparador de Textos -->
const boton = document.getElementById('compareBtn');
boton.addEventListener('click', compareStrings);
function compareStrings() {
    const text1 = document.getElementById('text1').value;
    const text2 = document.getElementById('text2').value;
    const result = document.getElementById('result');

    if (text1 === text2) {
        result.textContent = "Los textos son iguales.";
    } else {
        result.textContent = "Los textos son diferentes.";
    }
}
// Exercise 2 Contador de letras -->
const countBtn = document.getElementById('countBtn');
countBtn.addEventListener('click', countLetters);
function countLetters() {
    const text = document.getElementById('textToCount').value;
    const countResult = document.getElementById('countResult');
    countResult.textContent = `El texto tiene ${text.length} letras.`;
}
// Exercise 3 Raiz Cuadrada -->
const sqrtBtn = document.getElementById('sqrtBtn');
sqrtBtn.addEventListener('click', calculateSqrt);
function calculateSqrt() {
    const number = parseFloat(document.getElementById('numberInput').value);
    const sqrtResult = document.getElementById('sqrtResult');

    if (number < 0) {
        sqrtResult.textContent = "No se puede calcular la raíz cuadrada de un número negativo.";
    } else {
        sqrtResult.textContent = `La raíz cuadrada de ${number} es ${Math.sqrt(number)}.`;
    }
}
// Exercise 4 Cambio de color -->
// Exercise 5 Altura y ancho de una imagen -->
// Exercise 6 Gestion de los pedidos de una cafeteria -->