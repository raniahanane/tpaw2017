function validation (){
	var v ;
	if (document.getElementById("nom").value==""){
		v+="la saisie du nom est obligatoire"		
	}
	if (document.getElementById("pr�nom").value==""){
		v+="la saisie du pr�nom est obligatoire";		
	}
	if (document.getElementById("date de naissance").value==""){
		v+="la saisie du date de naissance est obligatoire";		
	}
	if (document.getElementById("date de naissance").value==""){
		v+="la saisie du date de naissance est obligatoire";		
	}
	if (document.getElementById("date de naissance").value==""){
		v+="la saisie du date de naissance est obligatoire";		
	}
	document.getElementById("error").innerHTML=v;
}