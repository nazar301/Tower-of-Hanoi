
// let moves = document.querySelector('.moves').val

// const selectTopDisc = document.querySelector(".box.selected") 

  //  let discSelector = document.querySelectorAll(".box").addEventListener("click" (
  //   discSelector.onclick = function(){
  //     select.target.pop(":nth-child") 
  //     console.log("here")
  //   }
  

    // discSelector.onclick = function () {
    //   slect.target.append ()
    // }
  
  
    
    
//     click on the next pole to change the location

    
// block out movement so bottom disk cant be moved if it has something on top
// block stacking to prevent movement of bigger disk over small disk
// event listeners for the disk
// set a difficulty from 3 to 10 disks disable the others depending on choice



// drag function /movement

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
// let buttonFive = document.querySelector(".BSelectFive").addEventListener("click", () => {
//   document.getElementById("one").style.display="initial";
//   document.getElementById("two").style.display="initial";
//   document.getElementById("three").style.display="initial";
//   document.getElementById("four").style.display="initial";
//   document.getElementById("five").style.display="initial";
//   document.getElementById("six").style.display="none";
//   document.getElementById("seven").style.display="none";
//   document.getElementById("eight").style.display="none";
//   document.getElementById("nine").style.display="none";
//   document.getElementById("ten").style.display="none";
// });
// let buttonTen = document.querySelector(".BSelectTen").addEventListener("click", () => {
//   document.getElementById("one").style.display="initial";
//   document.getElementById("two").style.display="initial";
//   document.getElementById("three").style.display="initial";
//   document.getElementById("four").style.display="initial";
//   document.getElementById("five").style.display="initial";
//   document.getElementById("six").style.display="initial";
//   document.getElementById("seven").style.display="initial";
//   document.getElementById("eight").style.display="initial";
//   document.getElementById("nine").style.display="initial";
//   document.getElementById("ten").style.display="initial";
// });
let box = document.querySelector(".box")
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  let target = ev.target
  ev.dataTransfer.setData("text", ev.target.id);
  console.log(ev.dataTransfer)
  if(target != [0]) {
    // stop drag 
    // console.log(target)
  }
  // if(box.length > 1){
  //   target.disk[0]
  //   console.log(target.disk[0])
  // }; 

}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  // console.log(ev.target)
  
}


let boxSample = document.getElementsByClassName('box');
child = boxSample.children;
// console.log(child)


// const movables = document.querySelectorAll(".disk")
// const container = document.querySelectorAll(".box")
// movables.forEach(movable => { 
//   console.log(movable)
//   movable.addEventListener('dragstart', () => {
//  console.log('moved')
//   }),
//   movable.addEventListener('dragend', () => {
//     console.log('stoped')
//   })
// })

// container.forEach(container => {
//    container.addEventListener('dragover', e => {
//      e.preventDefault()
     
//     //  const movable = document.querySelector(".disk")
//      container.prepend(movables)
//    })
// })






