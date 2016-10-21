$(document).ready(function(){
$("#bouton").click(function (){                   
      if($("#Name").val()==""){
      $("#Mymodel").modal();
      }   
      if($("#Prenom").val()==""){
     $("#Mymodel").modal();
      }
   
     if($("#Date de naissance").val()==""){
     $("#Mymodel").modal();
      }
   
        if($("#Email").val()==''){
      $("#Mymodel").modal();
      }
           if($("#Adresse").val()==""){
      $("#Mymodel").modal(); 
      }  
      if($("#Name").val()=="rania"){
      $("#Mymodel2").modal();
      }   
      if($("#Prenom").val()=="hanane"){
     $("#Mymodel2").modal();
      }
   
     if($("#Date de naissance").val()=="08/10/1993"){
     $("#Mymodel2").modal();
      }
   
        if($("#Email").val()=='layounerania@gmail.com'){
      $("#Mymodel2").modal();
      }
           if($("#Adresse").val()=="Avenue des champs elysees Paris"){
      $("#Mymodel2").modal(); 
      }	  
   });
 });