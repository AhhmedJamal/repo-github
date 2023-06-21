let repos = document.getElementById("repos");
let myXHR = new XMLHttpRequest();

myXHR.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let data = JSON.parse(this.responseText);
    getData(data);
  }
};
myXHR.open("GET", "https://api.github.com/users/AhhmedJamal/repos");
myXHR.send();

// get data from api
function getData(data) {
  for (let i = 1; i < data.length; i++) {
    // create item is repo
    let div = document.createElement("div");
    div.setAttribute("id", "repo");
    let linkG = document.createElement("a");
    let linkV = document.createElement("a");
    let box = document.createElement("div");

    // add attribute to item
    linkG.setAttribute("class", "github");
    linkV.setAttribute("class", "demo");
    linkG.innerHTML = " GitHub";
    linkV.innerHTML = "Demo";
    box.setAttribute("class", "box");

    linkG.setAttribute("href", data[i].html_url);
    linkV.setAttribute(
      "href",
      `https://ahhmedjamal.github.io/${data[i].name}/`
    );
    if (
      data[i].name == "Bloc-News" ||
      data[i].name == "ToDo" ||
      data[i].name == "e-commerce-soskon"
    ) {
      linkV.removeAttribute("href");
      div.style.display = "none";
    }
    div.innerHTML = data[i].name;
    box.appendChild(linkV);
    box.appendChild(linkG);
    div.appendChild(box);

    // add div to page
    repos.appendChild(div);
  }
  let count = document.getElementById("count");
  count.innerHTML += data.length - 4;
}
