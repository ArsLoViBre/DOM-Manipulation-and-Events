const body = document.body;

const p1 = document.createElement("p");
p1.textContent = "Hey I'm red!";
p1.setAttribute("style", "color: red");
body.appendChild(p1);

const h3 = document.createElement("h3");
h3.textContent = "I'm blue h3!";
h3.setAttribute("style", "color: blue");

const div = document.createElement("div");
div.setAttribute("style", "border-style: solid; border-color: black; background-color: pink;");

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";

const p2 = document.createElement("p");
p2.textContent = "ME TOO!";

div.appendChild(h1);
div.appendChild(p2);
body.appendChild(div);