const BtnYes= document.querySelector("#BtnYes");
BtnYes.addEventListener("click",function(){
    alert("Tranquilo, guardaré tu secreto :v")
});

const BtnNo=document.querySelector("#BtnNo");
BtnNo.addEventListener("mouseover", function(){
    const randomX = parseInt(Math.random() * 100);
    const randomY = parseInt(Math.random() * 100);
    BtnNo.style.setProperty("top", randomY + "%");
    BtnNo.style.setProperty("left", randomX + "%");
    BtnNo.style.setProperty("transform", `translate(-${randomX}%,-${randomY}%)`);
});