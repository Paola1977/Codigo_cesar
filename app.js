
var palabra_encriptada;  //VARIABLES GLOBALES
var numero_desplazamiento;  //VARIABLES GLOBALES

do {
  var answer = prompt("Indique 1) Cifrar - Indique 2) Descifrar - Indique 3) Salir");//Se pide una ocpion al usuario
  if(answer !="")//si se ingresa distinto a lo que se pide ya sea vacío o algún dato inválido leerá el alert
  {
    if(answer == "1")//opcion 1 cifrar
    {
      cifher()
    }
    else if(answer == "2")//opcion 2 Descifrar
    {
       Descifher()
    }
    else if(answer == "3")//opcion 3 terminar o salir
    {
       break;
    }
  alert("ingrese una opcion valida");
  }
} while (answer != "" || answer != "3");//cuando se cumple una de las opciones finaliza


//FUNCION PARA CIFRAR
function cifher()
{
	var str = prompt("Ingrese la palabra a cifrar: "); //SOLICITA INGRESO DE PALABRA A CIFRAR
	var desplaza = prompt("Ingrese desplazamiento: "); //SOLICITA INGRESO DEL DESPLAZAMIENTO
  numero_desplazamiento = desplaza;
	var encriptada = " "; //CREA STRING EN BLANCO PARA GUARDAR MENSAJE CIFRADO
	str = str.toLowerCase();  //PASA EL CONTENIDO DEL STRING A MINISCULAS
	for (var i = 0; i < str.length; i ++)
	{
    var c = str[i];
		if (c.charCodeAt(0) === 32)  //VALIDACION DE ESPACIOS EN BLANCO, NO LOS DEJA INGRESAR
		{
        var n = c.charCodeAt(0);
        alert("No se permiten espacios");
        encriptada="";
        break;
    }
    else if ((c.charCodeAt(0) >= 97) && (c.charCodeAt(0) <= 122)) //VALIDA EL CODIGO ASCII DE LAS LETRAS DEL STRING
		{
    		var n = c.charCodeAt(0); //OBTIENE EL VALOR ASCII DE LA LETRA
	  		var ascii = n + desplaza % 26
	  		if (ascii >= 123)
		    {
				    var resto = ascii - 123;
				    ascii = resto + 96;
	      }
	  		if (ascii <= 96)
		    {
	      		var resto = ascii - 96;
	      		ascii = resto + ascii;
	  		}
        resto = 0;
        encriptada += String.fromCharCode(ascii);
        palabra_encriptada = encriptada;
    }
  }
  alert(encriptada);
};


//FUNCION PARA DESCIFRAR

function Descifher()
numero_desplazamiento = desplaza;

{
  encriptada = palabra_encriptada;
  desplazamiento = numero_desplazamiento;
  var desencriptada = " "
  for (var i = 0; i < encriptada.length; i ++)  //OBTIENE EL LARGO DEL STRING ENCRIPTADA
	{
      var d = encriptada[i];  //PASA A LA  VARIABLE EL PRIMER VALOR DEL STRING
      if ((d.charCodeAt(0) >= 97) && (d.charCodeAt(0) <= 122))
		  {
          var d = d.charCodeAt(0);
	  		  var ascii = d - desplazamiento % 26
	  		  if (ascii >= 123)
			    {
				      var resto = ascii - 96;
				      ascii = resto + 123;
	  		  }
	  		  if (ascii <= 96)
			    {
	       			var resto = ascii + 122;
	       			ascii = resto - ascii;
	  		  }
          resto = 0;
          desencriptada += String.fromCharCode(ascii);
		   }
	}
  alert(desencriptada);
};
