function Calcular(){
			//declarar variables
			var m,g,Pe;
			//recuperar los valores
			m=parseFloat(document.getElementById("Ma").value);
			g=parseFloat(document.getElementById("Gra").value);
			//realizar la operacion
			Pe=(m*g)/9.81;
			//Mostrar el resultado
			document.getElementById("Peso").value=Pe;
		} 
	function Borrar(){
			document.getElementById("Ma").value="";
			document.getElementById("Gra").value="";
			document.getElementById("Peso").value="";
		}