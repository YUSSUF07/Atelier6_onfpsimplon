var eye1=document.querySelector("#eye1");
var eye2=document.querySelector("#eye2");
var pass=document.querySelector("#pass-field");

eye1.addEventListener("click",function(){
	eye1.style.display="none";
	eye2.style.display="block";
	pass.type="text";
});
eye2.addEventListener("click",function(){
	eye2.style.display="none";
	eye1.style.display="block";
	pass.type="password";
});