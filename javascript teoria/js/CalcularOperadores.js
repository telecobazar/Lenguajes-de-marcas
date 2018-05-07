function CalcularOperadores () 
{
	/* Cambiar el texto de un elemento con 
	ID= Resultado del documento HTML
	*/
	var miParrafo;
	var valor;

	miParrafo = document.getElementById('Resultado');

	valor = 12+20;
	miParrafo.innerHTML += "sumando los numeros 12 y 20 =" + valor + "<br>";
}