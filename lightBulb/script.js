const change = document.getElementById("change")
const changeLight = document.getElementById("button")

function switchImages(){
if(change.src.match("images/on.png")){
change.src = "images/off.png";
document.body.style.backgroundColor = "pink";
document.body.style.marginBlock = "10px 20px";
document.style.backgroundColor = "orange"
}else{
    change.src = "images/on.png";
}
}

changeLight.addEventListener("click",switchImages)







