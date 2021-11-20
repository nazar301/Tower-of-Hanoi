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



// drag and drop function
function allowDrop(ev) {
  ev.preventDefault();
  
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
  
 
  if (boxLeft.hasChildNodes()) {
    let children = boxLeft.childNodes;
  
    for (let i = 0; i < children.length; i++) {
      // console.log(boxLeft.childNodes)

}; 
}
  }
  
  if (boxCenter.hasChildNodes()) {
    let children = boxCenter.childNodes;
  
    for (let i = 0; i < children.length; i++) {
      // console.log(boxCenter.childNodes)
      
}
  };
  if (boxRight.hasChildNodes()) {
    let children = boxRight.childNodes;
  
    for (let i = 0; i < children.length; i++) {
      // console.log(boxRight.childNodes)
      
}
  };

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.prepend(document.getElementById(data));
  // console.log(ev.target)
  
}






