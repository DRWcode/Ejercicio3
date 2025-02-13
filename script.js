document.getElementById("conversionForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let valor = document.getElementById("valor").value;
    let conversion = document.getElementById("conversion").value;
    let resultadoTexto = document.getElementById("resultado");

    if (valor === "" || isNaN(valor) || valor <= 0) {
        alert("Error: Ingrese un número válido mayor a 0");
        resultadoTexto.innerText = "";
        return;
    }

    let resultado;
    switch (conversion) {
        case "km-m":
            resultado = `${valor} km = ${valor * 1000} metros`;
            break;
        case "m-cm":
            resultado = `${valor} m = ${valor * 100} centímetros`;
            break;
        case "ft-in":
            resultado = `${valor} ft = ${valor * 12} pulgadas`;
            break;
        case "yd-in":
            resultado = `${valor} yarda = ${valor * 36} pulgadas`;
            break;
        default:
            resultado = "Conversión no válida";
    }

    resultadoTexto.innerText = resultado;
});