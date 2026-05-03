const { Messages } = require("openai/resources/chat/completions.js");

  /*The main java script ever made*/
  function changeThumbs(){
            let thumb1='<img src="https://m.media-amazon.com/images/I/71liTUApXsL._SL1500_.jpg">';
            let thumb2='<img src="https://tse1.mm.bing.net/th/id/OIP.4I7eGzr6kR5LniS12B9XYwHaEH?rs=1&pid=ImgDetMain&o=7&rm=3">';
            document.getElementById("thumb1").innerHTML= '<img src="https://m.media-amazon.com/images/I/71liTUApXsL._SL1500_.jpg" width="200px" height="200px"class="photo-img">';
            document.getElementById("thumb2").innerHTML= '<img src="https://tse1.mm.bing.net/th/id/OIP.VUy5nY3HExkcBANxLWemFAHaFj?rs=1&pid=ImgDetMain&o=7&rm=3" width="200px" height="200px" class="photo-img">';
        }     
   function backThumbs(){
            let thumb1= '<img src="https://tse1.mm.bing.net/th/id/OIP.4I7eGzr6kR5LniS12B9XYwHaEH?rs=1&pid=ImgDetMain&o=7&rm=3">';
            let thumb2= '<img src="https://tse4.mm.bing.net/th/id/OIP.huE3lZUzPlU-N-3wglw1OwHaFN?w=640&h=450&rs=1&pid=ImgDetMain&o=7&rm=3">';
            document.getElementById("thumb1").innerHTML= '<img src="https://tse1.mm.bing.net/th/id/OIP.4I7eGzr6kR5LniS12B9XYwHaEH?rs=1&pid=ImgDetMain&o=7&rm=3"width="200px" height="200px"class="photo-img">';
            document.getElementById("thumb2").innerHTML= '<img src="https://tse4.mm.bing.net/th/id/OIP.huE3lZUzPlU-N-3wglw1OwHaFN?w=640&h=450&rs=1&pid=ImgDetMain&o=7&rm=3"width="200px" height="200px"class="photo-img">'; 
        } 
        
            function revealContent(){
                alert("Are you sure you want to continue?");
                let content=`<a href="real_scripting.html">GO</a>`;
                document.getElementById('content').innerHTML =`<a style="color:brown;" href="real_scripting.html"class="btn">GO</a><p style="color:white;">Continue to Black Dwarf</p> `; 
            }
            function agreement(){
                let words= document.getElementById('myWords').value;
                document.getElementById('result').innerHTML= `<span style="color:red; font-weight: bold; font-size:clamp(10px,4vw,35px);">&nesear;</span><br/>` + words;
            }
            function arePhotos() {
  const input = document.getElementById('makeGallery');
  const display = document.getElementById('display');
  display.innerHTML = ""; // clear previous gallery

  for (let file of input.files) {
    const url = URL.createObjectURL(file); // create temporary link
    const img = document.createElement("img");
    img.src = url;
    img.style.width = "200px";
    img.style.height = "200px";
    img.style.margin = "10px";
    display.appendChild(img);
  }
}
// ifs in it
function adultUse(){
    let years=18;
    let Message;
    let age=document.getElementById("numbers").value;
    if (age>18){
       message= alert('you are allowed to use this site!');
    }
    else if (age<18){
        message= alert('you are pretty young to use this site!');
    }
    else {message= alert('you are welcome!')};
    
    document.getElementById("allowMe").innerHTML="approved=" + age;
}
