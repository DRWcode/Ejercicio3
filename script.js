document.getElementById("conversionForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let valor = document.getElementById("valor").value;
    let conversion = document.getElementById("conversion").value;
    
    if (valor === "" || isNaN(valor) || valor <= 0) {
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Ingrese un número válido mayor a 0",
        });
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

    Swal.fire({
        icon: "success",
        title: "Conversión Exitosa",
        text: resultado,
    });
});
