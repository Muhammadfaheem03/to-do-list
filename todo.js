let inputs = document.getElementById("td");
let text = document.querySelector(".text");

function Add(){

if(inputs.value == ""){
    alert("please enter task")
}
else{
    let newEle = document.createElement("ul");
    newEle.innerHTML=`${inputs.value}<ion-icon
    name="logo-delete"></ion-icon>`;
    text.appendChild(newEle);
    inputs.value="";
}





}





