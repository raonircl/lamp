const on= document.getElementById("on");
const off= document.getElementById("off");
const lamp= document.getElementById("lamp");

    function isLampBrk() {
        return lamp.src.indexOf("quebrada") > -1;           
    }    
    function lampOn() {
        if (!isLampBrk ()){
        lamp.src="./img/ligada.jpg";
        document.getElementById("fundo").style.background = "white"
        }        
    }
    function lampOff() {
        if(!isLampBrk ()){
        lamp.src="./img/desligada.jpg"
        document.getElementById("fundo").style.background = "black"
        document.getElementById("lpCor").style.color = "white"
        }
    }
    function lampBrk() {
        lamp.src="./img/quebrada.jpg"
        document.body.style.backgroundImage = "url('img/QNWp.gif')";
        document.getElementById("lpCor").style.color = "white"
    }
    on.addEventListener ("click", lampOn);
    off.addEventListener ("click", lampOff);
    lamp.addEventListener ("mouseover", lampOn);
    lamp.addEventListener ("mouseleave", lampOff);
    lamp.addEventListener ("dblclick", lampBrk)