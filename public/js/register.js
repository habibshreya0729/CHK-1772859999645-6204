function register(){

const name =
document.getElementById("name").value;

const email =
document.getElementById("email").value;

const password =
document.getElementById("password").value;

if(!name||!email||!password){
alert("Please fill all fields!");
return;
}

fetch("/api/auth/register",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
name,
email,
password
})

})

.then(res=>res.json())
.then(data=>{

alert(data.message);

if(data.success){
window.location.href="login.html";
}

})
.catch(error=>{
alert("Registration failed. Please try again.");
});

}