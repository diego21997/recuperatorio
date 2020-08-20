/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones,
validando los datos ingresados. 
nombre del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el nombre de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
{
	let nombreTitular;
	let nombreTitularMasIngresado;
	let lugar;
	let temporada;
	let cantPersonas = 0;
	let lugarBariloche = 0;
	let lugarSalta = 0;
	let lugarCataratas = 0;
	
	let acumuladorInvierno = 0;
	let acumuladorPersonas = 0;
	let nombreMasPasajeros;
	let promedioPersonas;
	let respuesta = "si"

	let flagMasPasajeros = 0;

	do
	{
		do
		{
			nombreTitular = prompt("Ingrese nombre del titular: ").toUpperCase();

		}while(!(isNaN(nombreTitular)));

		do 
		{
			lugar = prompt("Ingrese destino (bariloche, cataratas, salta)").toLowerCase();

		}while(lugar != "bariloche" && lugar != "cataratas" && lugar != "salta");

		do
		{
			temporada = prompt("Ingrese temporada (invierno,verano,primavera,otoño)").toLowerCase();

		}while(temporada != "invierno" && temporada != "verano" && temporada != "primavera" && temporada != "otoño");

		do 
		{
			cantPersonas = prompt("Ingrese cantidad de personas que viajan: ");
			cantPersonas = parseInt(cantPersonas);

		}while(cantPersonas < 0);

		switch(lugar) 
		{
			case "bariloche":
				lugarBariloche++;
				break;

			case "salta":
				lugarSalta++;
				break;

			case "cataratas":
				lugarCataratas++;
				break;	

		}

		if(flagMasPasajeros == 0 || cantPersonas > sexoMasPasajeros)
		{
			nombreMasPasajeros = cantPersonas;
			nombreTitularMasIngresado = nombreTitular;
			flagMasPasajeros = 1;

		}

		if(temporada == "invierno") 
		{
			acumuladorPersonas++;
			acumuladorInvierno += cantPersonas;

		}


		respuesta = prompt("Desea agregar mas? (si/no)")

	}while(respuesta == "si");

		promedioPersonas = acumuladorInvierno / acumuladorPersonas;

		document.write("Promedio de personas que viajan en invierno: " + promedioPersonas + "<br>")

		if(lugarCataratas > lugarSalta && lugarCataratas > lugarBariloche) 
		{
			document.write("Lugar mas elegido: Cataratas" + "<br>");
			
			
		}
		else if(lugarSalta > lugarCataratas && lugarSalta > lugarBariloche) 
		{
			document.write("Lugar mas elegido: Salta" + "<br>");
		}
		else if(lugarBariloche > lugarCataratas && lugarBariloche > lugarSalta)
		{
			document.write("Lugar mas elegido: Bariloche" + "<br>");
		}

		else 
		{
			document.write("Hay empate" + "<br>");
		}

		document.write("Nombre del titular con mas pasajeros: " + nombreTitularMasIngresado + "<br>");
	}