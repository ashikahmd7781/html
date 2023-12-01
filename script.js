// Responsive navigation menu
{
  let icon=document.getElementsByClassName("icon");
  let para=document.getElementById("p1");
  let para1=document.getElementById("p2");
  let para2=document.getElementById("p3");
  icon[0].addEventListener("click",function(){
      para.textContent="Log in";
      para1.textContent="Contact";
      para2.textContent="About";
  })
  icon[0].addEventListener('click', () => {
    document.getElementsByClassName('icon').classList.add('closed');
  });
}


// change text on button click
{
let btn = document.getElementById('btn');
btn.addEventListener('click', function () {
    document.getElementById('para').innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus odit vitae id sit alias, aut ducimus ut aperiam velit necessitatibus ipsam qui commodi facere voluptatum quidem accusamus. Vero, voluptatibus at?";
  });
}


//  creating a to-do list
{
  function  addli()
  {
   let add =document.getElementById("add").value,
      listNode=document.getElementById("list"),
      liNode= document.createElement("LI"),
      addNode=document.createTextNode(add); 

      liNode.appendChild(addNode);
      listNode.appendChild(liNode);
  }
}


//image slideshow
{

  let img1 = document.getElementById('img1');
  let img2 = document.getElementById('img2');
  let img3 = document.getElementById('img3');
  let img4 = document.getElementById('img4');
  
  let images = [img1, img2, img3, img4];
  
  let i = 0;
  
  let left = document.getElementById('left-arrow');
  left.addEventListener('click', function(event) {
      event.preventDefault()
      if (i > 0) {
          i = i - 1;
          updateZIndex();
      }
  });
  
  let right = document.getElementById('right-arrow');
  right.addEventListener('click', function(event) {
      event.preventDefault()
      if (i < images.length - 1) {
          i = i + 1;
          updateZIndex();
      }
  });
  
  function updateZIndex() {
      for (let j = 0; j < images.length; j++) {
          images[j].style.zIndex = (j === i) ? 4 : 3;
      }
  }
  
  }