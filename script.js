document.getElementById("conversionForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let tipo = document.getElementById("tipoConversion").value;
    let valorString = document.getElementById("valor").value; // Obtener el valor como cadena primero
    let valor = parseFloat(valorString); // Luego parsear

    let resultadoTexto = "";
    let resultadoDiv = document.getElementById("resultado");

    if (isNaN(valor) || valor <= 0) {
        resultadoTexto = "Por favor, ingrese un número válido mayor a 0.";
        resultadoDiv.classList.add("alert-danger");
        resultadoDiv.classList.remove("alert-info");
        document.getElementById("valor").classList.add("is-invalid"); // Resaltar input
    } else {
        resultadoDiv.classList.remove("alert-danger");
        resultadoDiv.classList.add("alert-info");
        document.getElementById("valor").classList.remove("is-invalid"); // Remover resaltado

        switch (tipo) {
            case "km-m":
                resultadoTexto = `${valor} kilómetros equivalen a ${valor * 1000} metros`;
                break;
            case "m-cm":
                resultadoTexto = `${valor} metros equivalen a ${valor * 100} centímetros`;
                break;
            case "ft-in":
                resultadoTexto = `${valor} pies equivalen a ${valor * 12} pulgadas`;
                break;
            case "yard-in":
                resultadoTexto = `${valor} yardas equivalen a ${valor * 36} pulgadas`;
                break;
            default:
                resultadoTexto = "Seleccione una opción válida.";
        }
    }

    resultadoDiv.textContent = resultadoTexto;
    resultadoDiv.style.display = "block";
});