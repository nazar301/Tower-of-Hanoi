// button selecttion for 3 disks
let buttonThree = document.querySelector(".BSelectThree").addEventListener("click", () => {
  document.getElementById("one").style.display="initial";
  document.getElementById("two").style.display="initial";
  document.getElementById("three").style.display="initial";
  document.getElementById("four").remove()
  document.getElementById("five").remove()
  document.getElementById("six").remove()
  document.getElementById("seven").remove()
  document.getElementById("eight").remove()
  document.getElementById("nine").remove()
  document.getElementById("ten").remove()

  
});
// button selection for 5 disk
let buttonFive = document.querySelector(".BSelectFive").addEventListener("click", () => {
  document.getElementById("one").style.display="initial";
  document.getElementById("two").style.display="initial";
  document.getElementById("three").style.display="initial";
  document.getElementById("four").style.display="initial";
  document.getElementById("five").style.display="initial";
  document.getElementById("six").remove()
  document.getElementById("seven").remove()
  document.getElementById("eight").remove()
  document.getElementById("nine").remove()
  document.getElementById("ten").remove()

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


// drag and drop function
function allowDrop(ev) {
  ev.preventDefault();
  // prevent drop into other disks
  if ( ev.target.getAttribute("draggable") == "true") {
    ev.dataTransfer.dropEffect = "none"
  };
  
 

}


function toggleDrop() {
  let left = document.querySelector("#left")
  let center = document.querySelector("#center")
  let right = document.querySelector("#right")
  // console.log(center)
  
 
  let lchildren = Array.from(left.children)
  let children = Array.from(center.children)
  let rchildren = Array.from(right.children)
 
  let lChild = $(lchildren).first()
  let cChild = $(children).first()
  let rChild = $(rchildren).first()
  console.log(lChild.text())
  console.log(rChild.text())
  console.log(cChild.text())
  

  for (let i = 0; i < children.length; i++) {
    //  console.log(left.children)
    if(i === 0) {
      children[i]?.setAttribute("draggable", true)
    } else {
      children[i]?.setAttribute("draggable", false)
      children[i].style.userSelect = "none"
    }
  }

  for (let i = 0; i < rchildren.length; i++) {
    // console.log()
    if(i === 0) {
      rchildren[i]?.setAttribute("draggable", true)
    } else {
      rchildren[i]?.setAttribute("draggable", false)
    }
  }

  for (let i = 0; i < lchildren.length; i++) {
    // console.log()
    if(i === 0) {
      lchildren[i]?.setAttribute("draggable", true)
      // console.log(lchildren[i])
    } else {
      lchildren[i]?.setAttribute("draggable", false)
      // console.log(lchildren[i])
    }

  }
    


  // check win
  if (children.length === 0 && lchildren.length === 0) {
    alert("won")
  } else {
      // console.log("keep going")
  }
  if (rchildren.length === 0 && lchildren.length === 0) {
    alert("won")
  } else {
      // console.log("keep going")
  }

}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
  // console.log(ev.target.parentElement.id)
  ev.dataTransfer.setData("column", ev.target.parentElement.id);
  
  // console.log(ev.target.innerText)
 
  if (ev.target.parentElement.index != 1 ) {
    
    // select first child available in the parent div
// console.log(ev.target.parentElement)
  }
  
  // if ( ev.target.innerText == cChild.text()) {
  //   console.log("works")
  // } else {
  //   console.log("illigal move")
  // // StopEvent(ev)
  // }

}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  let column = ev.dataTransfer.getData("column")
  let diskTarget = document.getElementById(data).innerHTML
  
 
  let left = document.querySelector("#left")
  let center = document.querySelector("#center")
  let right = document.querySelector("#right")
  // console.log(center)
  let children = Array.from(center.children)
  let rchildren = Array.from(right.children)
  let lchildren = Array.from(left.children)

  let lChild = $(lchildren).first()
  let rChild = $(rchildren).first()
  let cChild = $(children).first()
  console.log(lChild.text())
  console.log(rChild.text())
  console.log(cChild.text())



  console.log(diskTarget)
  
  console.log(ev.target)

  if (column === ev.target.id){
    return;
  }
  
  
    if ((ev.target.id === "center" && (diskTarget <= cChild.text()) ||(ev.target.id ==="center" && children == 0))) {
      console.log("works")

  } else  if ((ev.target.id === "right" && (diskTarget < rChild.text())) || (ev.target.id ==="right" && rchildren == 0)){ 
      console.log("new")
  }else  if ((ev.target.id === "left" && (diskTarget < lChild.text())) || (ev.target.id ==="left" && lchildren == 0)){ 
    console.log("new")
  
    }else {

      console.log("illigal move")
          return false;
    }

  
    //  || ((diskTarget < rChild.text()) || rchildren == 0) || ((diskTarget < lChild.text()) || lchildren == 0)
  // for (let i = 0; i < rchildren.length; i++) {
  //   if ( (diskTarget < rChild.text()) || rchildren == 0 ) {
  //     console.log("works")
  //    } else {
  //     console.log("illigal move")
  //     return false;
  //   }
  // }
    // if ( (diskTarget < rChild.text()) || rchildren == 0 ) {
    //     console.log("works")
    //    } else {
    //     console.log("illigal move")
    //     StopEvent(ev)
    // }
    
    // if ( (diskTarget < lChild.text()) || lchildren == 0 ) {
    //       console.log("works")
    //      } else {
    //       console.log("illigal move")
    //       StopEvent(ev)
    // }
      

  ev.target.prepend(document.getElementById(data));
  // console.log(data)
  // console.log(column)
  toggleDrop()
  
  
}




// possible way to select sizing to prevent movement

// const size = (document.querySelector("#one").value)
// console.log(size)
// const sizeOne = document.querySelector("#one")
// const width = sizeOne.innerHTML
// if (width == 1){
// // console.log(width)} else { console.log("no")}
// }

// for (var i=0; i<width.length; i++){ 
//    parseFloat(width[i].innerHTML);
//    if (width == 1){
//     console.log(width)} else { console.log("no")}
//   // console.log(width)
// }
// // console.log(width)

  
  
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
//   if (container.hasChildNodes()) {
//     let children = container.childNodes;
  
//     for (let i = 0; i < children.length; i++) {
//       console.log(container.childNodes)
      
// }
//   };
