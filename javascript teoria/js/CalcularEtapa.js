function CalcularEtapa() {
	
	var campoEdad,
		campoResultado,
		valorEdad;

	campoResultado = document.getElementById('Resultado');
	campoEdad = document.getElementById('Edad');
	valorEdad = campoEdad.value;

	if((valorEdad>=0)&&(valorEdad<13))
		campoResultado.innerHTML += "Eres infantil"+"<br>";
	else if((valorEdad>12)&&(valorEdad<17))
		campoResultado.innerHTML += "Ya eres adolescente"+"<br>";
	else if((valorEdad>17)&&(valorEdad<23))
		campoResultado.innerHTML += "esta es tu etapa de juvetud"+"<br>";
	else if((valorEdad>=23)&&(valorEdad<123))
		campoResultado.innerHTML += "esta es tu etapa adulta"+"<br>";
	else if(valorEdad>=123)
		campoResultado.innerHTML += "Nadie vive tanto tiempo listillo"+"<br>";
	else 
		campoResultado.innerHTML += "deja de intentar hacerte el graciosillo con los valores introducidos"+"<br>";

}