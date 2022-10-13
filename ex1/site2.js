const container2 = document.getElementById("container2");

const u = document.createElement("u");
u.innerHTML  = "Moshe with JS"

const span = document.createElement("span");
span.appendChild(u);

const h1 = document.createElement("h1");
h1.appendChild(span);

container2.appendChild(h1);