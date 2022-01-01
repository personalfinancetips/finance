function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("include-html");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) { elmnt.innerHTML = this.responseText; }
          if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
};

function mobileNavbar() {
  var x = document.getElementById("navbar");
  if (x.className == "nav-align") {
    x.className += " responsive";
  } else {
    x.className = "nav-align";
  }
  return;
};

function makeList() {
  var heading = document.querySelectorAll("h1,h2");
  var list = document.getElementById("toc");
  for(var i=0; i<heading.length; i++) {
    var id = heading[i].id;
    console.log(id);
    let a = document.createElement("a");
    a.href = "#" + id;
    a.innerText = heading[i].innerText;
    console.log(a);
    let li = document.createElement("li");
    li.insertAdjacentElement("afterbegin", a);
    console.log(li);
    list.append(li);
  }
}