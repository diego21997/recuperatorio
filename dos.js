/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más liviano de los sólidos
*/function mostrar()
{
  let marcaProd;
	let precioProd;
	let pesoProd; // en kg
	let tipoProd;
	let pesoTotal = 0;
	let masCaro = 0;
	let marcaMasCaraLiq;
	let masLiviano = 0;
	let marcaMasLivianaSol;
	let respuesta = "si"

	let flagCaro = 0;
	let flagLiviano = 0;

	do 
	{
		do
		{
			marcaProd = prompt("Ingrese marca:  ").toLowerCase();
		
		}while(isNaN(marcaProd) == false);

		do
		{
			precioProd = prompt("Ingrese precio:   ");
			precioProd = parseFloat(precioProd);

		}while(precioProd <= 0);

		do 
		{
			pesoProd =  prompt("Ingrese peso en kilogramos:    ");
			pesoProd = parseFloat(pesoProd);
		
		}while(pesoProd <= 0);

		do
		{
			tipoProd = prompt("Ingrese el tipo de producto :(solido/liquido)").toLowerCase();


		}while(tipoProd != "solido" && tipoProd != "liquido");

		pesoTotal = pesoTotal + pesoProd;

		switch(tipoProd)
		{
			case "liquido":

				if(flagCaro == 0 || precioProd > masCaro) 
				{
					masCaro = precioProd;
					marcaMasCaraLiq = marcaProd;
					flagCaro = 1;
				}
				break;

			case "solido":
				if(flagLiviano == 0 || pesoProd < masLiviano) 
				{
					masLiviano = pesoProd;
					marcaMasLivianaSol = marcaProd;
					flagLiviano = 1;
				}
				break;	

		}		




respuesta= prompt("Desea ingresar otro?: ");

	}while(respuesta == "si");

		console.log("Peso total: " + pesoTotal);

	if(flagCaro != 0)
	{
	
		console.log("Liquido mas caro: " + marcaMasCaraLiq + " con $" + masCaro);
	}
	else
	{
		console.log("No se ingresaron liquidos");
	}
	if(flagLiviano != 0)
	{	
		console.log("Solido mas liviano: " + marcaMasLivianaSol + " con " + masLiviano + "kg");

	}
	else 
	{
		console.log("No se ingresaron solidos");
	}		

}