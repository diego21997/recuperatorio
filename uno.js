/*
1)De 5  personas que ingresan al hospital se deben tomar y
validar los siguientes datos.
nombre , temperatura, sexo y edad.
a)informar la cantidad de personas de cada sexo.
b)la edad promedio en total
c)la mujer con más temperatura(si la hay)
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	let nombrePersona;
	let tempPersona;
	let sexoPersona;
	let edadPersona;
	let acumEdad = 0;
	let promedioEdad;
	let cantHom = 0;
	let cantMuj = 0;
	let mujerMasTemperatura = 0;
	let nombreMujerMasTemperatura;
	let iterPersona = 0;

	let flagTemp = 0;

	for(let i = 0; i < 5; i++)
	{
		alert("Persona n° " + ++iterPersona);

		do
		{
			nombrePersona = prompt("Ingrese el nombre de la persona: ").toLowerCase();

		}while(isNaN(nombrePersona) == false);

		do
		{
			tempPersona = prompt("Ingrese la temperatura de la persona: ");
			tempPersona = parseFloat(tempPersona);

		}while(tempPersona < 34 || tempPersona > 43);

		do 
		{
			sexoPersona = prompt("Ingrese sexo de la persona: ");

		}while(sexoPersona != "masculino" && sexoPersona != "femenino");

		do 
		{
			edadPersona = prompt("Ingrese la edad: ");
			edadPersona = parseInt(edadPersona);
		
		}while(edadPersona < 0 || edadPersona > 100);

		acumEdad = acumEdad + edadPersona;

		switch(sexoPersona)
		{
			case "masculino":
				cantHom++;
				break;
			case "femenino":
				cantMuj++;
				if(flagTemp == 0 || tempPersona > mujerMasTemperatura) 
				{
					mujerMasTemperatura = tempPersona;
					nombreMujerMasTemperatura = nombrePersona;
					flagTemp = 1;
				}				
				break;	
		}



	



	}

	promedioEdad = acumEdad / 5;

	console.log("cantidad de hombres: " + cantHom + " cantidad de mujeres: " + cantMuj);
	console.log("Edad promedio: " + promedioEdad);

	if (flagTemp != 0)
	{	
		console.log("Mujer con mas temperatura: " + nombreMujerMasTemperatura + " con " + mujerMasTemperatura);
	}
	else
	{
		console.log("No se ingresaron mujeres");
	}



}