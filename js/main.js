



// document.getElementById("imgs1").onclick = function(){
//       document.querySelector(".bg").style= "display: block; background-color: rgba(0, 0, 0, 0.529);  width: 100%; height: 100%;"
//     document.querySelector(".img1").style="display:block;  left: 320px;    bottom:    100px; transform: scale(1.9); "

//    }
//    document.getElementById("imgs2").onclick = function(){
//     document.querySelector(".img2").style="display:block; position: absolute; left: 320px;   bottom:    100px;   transform: scale(1.9);  "
//    }
//    document.getElementById("imgs3").onclick = function(){
//     document.querySelector(".img3").style="display:block; position: absolute; left: 320px;   bottom:    100px; transform: scale(1.1) "
//    }
//    document.getElementById("imgs4").onclick = function(){
//     document.querySelector(".img4").style="display:block; position: absolute; left: 320px;  bottom:    100px; transform: scale(1.1) "
//    }
//    document.getElementById("imgs5").onclick = function(){
//     document.querySelector(".img5").style="display:block; position: absolute; left: 320px;   bottom:    100px; "
//    }
//    document.getElementById("imgs6").onclick = function(){
//     document.querySelector(".img6").style="display:block; position: absolute;  left: 320px;  bottom:    100px; "
//    }
//    document.getElementById("imgs7").onclick = function(){
//     document.querySelector(".img7").style="display:block; position: absolute;  left: 320px;   bottom:    100px; "
//    }
//    document.getElementById("imgs8").onclick = function(){
//     document.querySelector(".img8").style="display:block; position: absolute;  left: 320px;   bottom:    100px; "
//    }
//    document.getElementById("imgs9").onclick = function(){
//     document.querySelector(".img9").style="display:block; position: absolute;  left: 320px;   bottom:    100px; "
//    }
//    document.getElementById("imgs11").onclick = function(){
//     document.querySelector(".img11").style="display:block; position: absolute;  left: 320px;   bottom:    100px; "
//    }
//    document.getElementById("imgs9").onclick = function(){
//     document.querySelector(".img9").style="display:block; position: absolute;  left: 320px;   bottom:    100px; "
//    }
//    document.getElementById("imgs12").onclick = function(){
//     document.querySelector(".img12").style="display:block; position: absolute;  left: 320px;   bottom:    100px; "
//    }
  

//    document.getElementById("portfolio").onclick = function(){
//        document.querySelector(".img").style = "display: block;"
//    }
//    document.getElementById("portfolio2").onclick = function(){
//        document.querySelector(".web-design").style = ("display: block")
//        document.querySelector(".photography").style = ("display: none")
//        document.querySelector(".product-design").style = ("display: none")
//    }
//    document.getElementById("portfolio3").onclick = function(){
//     document.querySelector(".product-design").style = ("display: block")
//     document.querySelector(".photography").style = ("display: none")
//     document.querySelector(".web-design").style = ("display: none")
// }
// document.getElementById("portfolio4").onclick = function(){
//     document.querySelector(".photography").style = ("display: block")
//     document.querySelector(".web-design").style = ("display: none")
//     document.querySelector(".product-design").style = ("display: none")
// }
// document.getElementById("btn").onclick = function(){
//     document.getElementById("in").innerHTML = document.getElementById("input").value;
//     document.getElementById("in").style="background-color: green; border-radius: 50% ;width: 300px; height: 300px; text-align: center; "
// }.style.display = "block"


// let imgs = document.getElementsByClassName("img");

// let imgs1 = document.getElementsByClassName("img1");


// for(let i=0; i<imgs.length; i++){
//   // console.log(imgs.length);

//   imgs[i].onclick = function(){
//     for(let a=0; a<imgs.length; a++){
      
//       if(i == a){

//       }else{
//         imgs1[a].classList.remove("show")
//       }
//     }
//     imgs1[i].classList.toggle("show")
//   }
// }

$(".gallery").magnificPopup({
  delegate: "a",
  type: "image",
  gallery:{
    enabled: true

  }
})