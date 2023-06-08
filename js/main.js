 var section =document.getElementById("about");
var div =document.createElement("div");
 section.appendChild(div)
 div.classList.add("container");


 var image =document.createElement("img");
 div.appendChild(image);
 image.classList.add("imgs");
 image.src ="image/team-1.jpg";

 var head =document.createElement("h1");
 head.classList.add("head");
 div.appendChild(head);
 head.innerHTML ="Walter White";

 var para =document.createElement("p");
 para.classList.add("para");
 div.appendChild(para);
 para.innerHTML ="Chief Executive Officer";

 var para1 =document.createElement("p");
 para1.classList.add("para1");
div.appendChild(para1);
 para1.innerHTML ="Velit aut quia fugit et et. Dolorum ea voluptate vel tempore tenetur ipsa quae aut. Ipsum exercitationem iure minima enim corporis et voluptate."


 