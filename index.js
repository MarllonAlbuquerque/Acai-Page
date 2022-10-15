let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
    nextImage();
},2000)

function nextImage(){
    count++;
    if(count>3){
        count = 1;
    }
    document.getElementById("radio"+count).checked = true;
    
}



let card = document.getElementById('card');
let card2 = document.getElementById('card2');
let x = true;
let y = true;
let z = true;
let w = true;
 function exe(){
    if(x==true){
      card.style.backgroundColor = "rgb(0, 208, 0)";
      card.style.height = "300px";
      card.style.width = "300px";
      x = false;  
    }else if(x==false){
      card.style.backgroundColor = "rgba(0, 208, 0, 0)";
      card.style.height = "54px";
      card.style.width = "200px";
      x=true;

    }
    
      
}

function exe2(){
    if(z==true){
        card2.style.backgroundColor = "rgb(0, 208, 0)";
        card2.style.height = "300px";
        card2.style.width = "300px";
        z = false;  
      }else if(z==false){
        card2.style.backgroundColor = "rgba(0, 208, 0, 0)";
        card2.style.height = "54px";
        card2.style.width = "200px";
        z=true;
  
      } 
}
function exe3(){
    if(y==true){
        card3.style.backgroundColor = "rgb(0, 208, 0)";
        card3.style.height = "300px";
        card3.style.width = "300px";
        y = false;  
      }else if(y==false){
        card3.style.backgroundColor = "rgba(0, 208, 0, 0)";
        card3.style.height = "54px";
        card3.style.width = "200px";
        y=true;
  
      }  
}
function exe4(){
    if(w==true){
        card4.style.backgroundColor = "rgb(0, 208, 0)";
        card4.style.height = "300px";
        card4.style.width = "300px";
        w = false;  
      }else if(w==false){
        card4.style.backgroundColor = "rgba(0, 208, 0, 0)";
        card4.style.height = "54px";
        card4.style.width = "200px";
        w=true;
  
      }  
}
