function login(){

const email =
document.getElementById("email").value;

const password =
document.getElementById("password").value;

fetch("/api/auth/login",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
email,
password
})

})

.then(res=>res.json())

.then(data=>{

if(data.success){

alert("Login Successful");

window.location.href="dashboard.html";

}else{

alert(data.message);

}

});

}