var lado, base, altura, radio, opcion, resultado;
const PI=3.14156;
opcion = parseInt(prompt("Seleccione el tipo de figura al que le quiere encontrar el area: 1. Cuadrado 2. Triangulo 3. Circulo"));
switch (opcion) {
    case 1:
        lado = parseInt(prompt("Ingrese el valor del lado en cm"))
        resultado = lado*lado;
        alert("El area del Cuadrado es igual a: " +resultado + "Centrimetros Cuadrados")
        break;
    case 2:
        base = parseInt(prompt("Ingrese el valor de la base en cm"))
        altura = parseInt(prompt("Ingrese el valor de la altura en cm"))
        resultado = (base*altura)/2;
        alert("El area del Triangulo es igual a: " +resultado + "Centrimetros Cuadrados")
        break;
    case 3:
        radio = parseInt(prompt("Ingrese el valor del radio en cm"))
        resultado = radio*radio*PI;
        alert("El area del Circulo es igual a: " +resultado + "Centrimetros Cuadrados")
        break;

    default:
        alert ("La Opcion escogida no es valida")
        break;
}
/*Codigo para encontrar areas de figuras*/