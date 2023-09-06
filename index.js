let sizes=[10,15,22,28,9,27];
let colors=["red","green","blue","pink","yellow"];
const changeStyle=()=>
{

   let b= Math.floor(Math.random() * colors.length) ;
   let f= Math.floor(Math.random() * colors.length) ;
  

   document.getElementById("div1").style.backgroundColor=colors[b];
   document.getElementById("t1").style.color=colors[f];
   document.getElementById("t2").style.color=colors[f];
   let  s = Math.floor(Math.random() * sizes.length);

   document.getElementById("t1").style.fontSize = sizes[s];
   document.getElementById("t2").style.fontSize = sizes[s];

   


}