
function myFunction() {
  document.getElementById("title").innerHTML = document.getElementById("Booktitle").value;
  document.getElementById("Subtitle").innerHTML = document.getElementById("booksubtitle").value;
  document.getElementById("year").innerHTML = document.getElementById("bookyear").value;
  document.getElementById("Publisher").innerHTML = document.getElementById("bookPublisher").value;
  document.getElementById("Author").innerHTML = document.getElementById("bookAuthor").value;

var x = document.getElementById("Background").value;
if(x=="red")
document.getElementById("book").style.backgroundImage = "url('red.jpg')";
else if(x=="brown")
document.getElementById("book").style.backgroundImage = "url('brown.jpg')";
else if(x=="blue")
document.getElementById("book").style.backgroundImage = "url('blue.jpg')";
else if(x=="orange")
document.getElementById("book").style.backgroundImage = "url('orange.jpg')";
}
