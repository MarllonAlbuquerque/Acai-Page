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





let text2 = document.getElementById('txt2');
let text1 = document.getElementById('txt1');
let text3 = document.getElementById('txt3');
let v1 = true;
let v2 = true;
let v3 = true;

function teste1(){
  if(v1==true){
    text2.style.visibility='hidden';
    text3.style.visibility='hidden';
    text2.style.height='1px';
    text3.style.height='1px';
    text1.style.height='300px';
    v1=false;
  }else if(v1==false){
    text2.style.visibility='inherit';
    text3.style.visibility='inherit';
    text2.style.height='60px';
    text3.style.height='60px';
    text1.style.height='60px';
    v1=true;
  }
  
  
}


function teste2(){
  if(v2==true){
    text3.style.visibility='hidden';
    text3.style.height='1px';
    text2.style.height='300px';
    v2=false;
  }else if(v2==false){
    text3.style.visibility='inherit';
    text3.style.height='60px';
    text2.style.height='60px';
    v2=true;

  }
  
}

function teste3(){
  if(v3==true){
    text3.style.height='300px';
    v3=false;
  }else if(v3==false){
    text3.style.height='60px';
    v3=true;
  }
}
