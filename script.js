document.getElementById("conversionForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let tipo = document.getElementById("tipoConversion").value;
    let valor = parseFloat(document.getElementById("valor").value);
    let resultadoTexto = "";
    let resultadoDiv = document.getElementById("resultado");
    
    if (isNaN(valor) || valor <= 0) {
        resultadoTexto = "Por favor, ingrese un número válido mayor a 0.";
        resultadoDiv.classList.add("alert-danger");
        resultadoDiv.classList.remove("alert-info");
    } else {
        resultadoDiv.classList.remove("alert-danger");
        resultadoDiv.classList.add("alert-info");
        
        switch (tipo) {
            case "km-m":
                resultadoTexto = `${valor} km equivalen a ${valor * 1000} m`;
                break;
            case "m-cm":
                resultadoTexto = `${valor} m equivalen a ${valor * 100} cm`;
                break;
            case "ft-in":
                resultadoTexto = `${valor} ft equivalen a ${valor * 12} pulgadas`;
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
