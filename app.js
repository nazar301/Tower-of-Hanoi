// button selecttion for 3 disks
let buttonThree = document.querySelector(".BSelectThree").addEventListener("click", () => {
  document.getElementById("one").style.display="initial";
  document.getElementById("two").style.display="initial";
  document.getElementById("three").style.display="initial";
  document.getElementById("four").style.display="none";
  document.getElementById("five").style.display="none";
  document.getElementById("six").style.display="none";
  document.getElementById("seven").style.display="none";
  document.getElementById("eight").style.display="none";
  document.getElementById("nine").style.display="none";
  document.getElementById("ten").style.display="none";

  
});
// button selection for 5 disk
let buttonFive = document.querySelector(".BSelectFive").addEventListener("click", () => {
  document.getElementById("one").style.display="initial";
  document.getElementById("two").style.display="initial";
  document.getElementById("three").style.display="initial";
  document.getElementById("four").style.display="initial";
  document.getElementById("five").style.display="initial";
  document.getElementById("six").style.display="none";
  document.getElementById("seven").style.display="none";
  document.getElementById("eight").style.display="none";
  document.getElementById("nine").style.display="none";
  document.getElementById("ten").style.display="none";
});
// button selection for all
let buttonTen = document.querySelector(".BSelectTen").addEventListener("click", () => {
  document.getElementById("one").style.display="initial";
  document.getElementById("two").style.display="initial";
  document.getElementById("three").style.display="initial";
  document.getElementById("four").style.display="initial";
  document.getElementById("five").style.display="initial";
  document.getElementById("six").style.display="initial";
  document.getElementById("seven").style.display="initial";
  document.getElementById("eight").style.display="initial";
  document.getElementById("nine").style.display="initial";
  document.getElementById("ten").style.display="initial";
});

// containers for disks 
let boxLeft = document.querySelector("#left")
let boxCenter = document.querySelector("#center")
let boxRight = document.querySelector("#right")
let container = document.querySelectorAll(".box")



// drag and drop function
function allowDrop(ev) {
  ev.preventDefault();
  // prevent drop into other disks
  if ( ev.target.getAttribute("draggable") == "true") {
    ev.dataTransfer.dropEffect = "none"
  };
  
 

}
let c = document.body.children
console.log(c)

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
  
  
  // if (container.length >= 1) {
  //   $(ev.target).find(":first-child")
  //   console.log("true") 
  //   console.log($(ev.parent).find(":first-child"))
  // }
 
//   if (boxLeft.hasChildNodes()) {
//     let children = boxLeft.childNodes;
  
//     for (let i = 0; i < children.length; i++) {
//       // console.log(boxLeft.childNodes)

// }; 
// }
  
  
//   if (boxCenter.hasChildNodes()) {
//     let children = boxCenter.childNodes;
  
//     for (let i = 0; i < children.length; i++) {
//       // console.log(boxCenter.childNodes)
      
// }
//   };
//   if (boxRight.hasChildNodes()) {
//     let children = boxRight.childNodes;
  
//     for (let i = 0; i < children.length; i++) {
//       // console.log(boxRight.childNodes)
      
// }
//   };
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.prepend(document.getElementById(data));
  // console.log(ev.target)
  
}

const size = (document.querySelector("#one").value)
console.log(size)
const sizeOne = document.querySelector("#one")
const width = sizeOne.innerHTML
if (width == 1){
console.log(width)} else { console.log("no")}


for (var i=0; i<width.length; i++){ 
   parseFloat(width[i].innerHTML);
   if (width == 1){
    console.log(width)} else { console.log("no")}
  console.log(width)
}
console.log(width)