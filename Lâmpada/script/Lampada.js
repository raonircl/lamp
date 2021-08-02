const onOff= document.getElementById("on/off");
const lamp= document.getElementById("lamp");
  
    function isLampBrk() {
        return lamp.src.indexOf("quebrada") > -1;           
    }
    function lampOnOff() {
        if (onOff.textContent == "Ligar") {
            lampOn();
            onOff.textContent = "Desligar";
        }else {
            lampOff();
            onOff.textContent = "Ligar"
        }  
    }    
    function lampOn() {
        if (!isLampBrk ()){
            lamp.src="./img/ligada.jpg";
                document.getElementById("fundo").style.background = "white"
                    document.getElementById("lpCor").style.color = "black"
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
            document.body.style.backgroundImage = "url('img/QNWp.gif')"
                document.getElementById("lpCor").style.color = "white"
    }
    onOff.addEventListener ("click", lampOnOff);
    lamp.addEventListener ("mouseover", lampOn);
    lamp.addEventListener ("mouseleave", lampOff);
    lamp.addEventListener ("dblclick", lampBrk)