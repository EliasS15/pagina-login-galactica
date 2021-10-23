function Validar(){
	//declarar las variables
	var U,C;
	//recuperar los datos
	U=document.getElementById("usuario").value;
	C=document.getElementById("pass").value;
	//validar los datos
	if (U=="Elías"&&C=="12345") {
		alert("Usuario y contraseña correctos");
		window.open("PesoGalactico.html");
		document.getElementById("usuario").value="";
		document.getElementById("pass").value="";
	}
	else{
		alert("usuario y contraseña incorrectos, verifique sus datos")
		document.getElementById("usuario").value="";
		document.getElementById("pass").value="";
	}
}
