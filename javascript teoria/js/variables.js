function CambiarTexto() 
{
	/* Cambiar el texto de un elemento con 
	ID= Resultado del documento HTML
	*/
	var miParrafo;
	var precio = 22.65;

	miParrafo = document.getElementById('Resultado');
	// miParrafo.innerHTML +="Texto Cambiado";
	precio = precio+12;
	miParrafo.innerHTML +="El precio es" + precio +"<br>"+
	"El doble del precio es " +(precio*2) +"<br>";
}