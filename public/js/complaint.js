function submitComplaint(){

const name =
document.getElementById("name").value;

const department =
document.getElementById("department").value;

const description =
document.getElementById("description").value;

fetch("/api/complaints/create",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
name,
department,
description
})

})

.then(res=>res.json())

.then(data=>{

alert("Complaint Submitted Successfully");

});

}