function validation (){
	var v ;
	var w;
	if (document.getElementById("Nom").value==""){
		v="la saisie du nom est obligatoire"		
	}
	else if (document.getElementById("Nom").value.length<5){
		v="le champ doit contenir en moins 5 caractères"
	}
	else{
		w="Bonjour"
	}
	if (document.getElementById("Prénom").value==""){
		v+="la saisie du prénom est obligatoire";		
	}
	else if (document.getElementById("Prénom").value.length<5){
		v="le champ doit contenir en moins 5 caractères"
	}
	else{
		w="Bonjour"
	}
	if (document.getElementById("anniversaire").value==""){
		v+="la saisie du date de naissance est obligatoire";		
	}
		else if (document.getElementById("anniversaire").value.length<5){
		v="le champ doit contenir en moins 5 caractères"
	}
	else{
		w="Bonjour"
	}
	if (document.getElementById("adresse").value==""){
		v+="la saisie du date de adresse est obligatoire";		
	}
	else if (document.getElementById("adresse").value.length<5){
		v="le champ doit contenir en moins 5 caractères"
	}
	else{
		w="Bonjour"
	}
	if (document.getElementById("user_mail").value==""){
		v+="la saisie du date de e_mail est obligatoire";		
	}
		else if (document.getElementById("user_mail").value.length<5){
		v="le champ doit contenir en moins 5 caractères"
	}
	else{
		w="Bonjour"
	}
	document.getElementById("error").innerHTML=v;
	document.getElementById("resultat").innerHTML=w;
}