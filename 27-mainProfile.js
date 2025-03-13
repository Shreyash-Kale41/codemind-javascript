const heading1 = document.querySelector("#head1");
heading1.style.color = "blue";

const heading2 = document.querySelector("h2");
heading2.style.color = "red";

const list2 = document.querySelector("#li2");
list2.remove();

const projectDesc = document.createTextNode("Project Description");
const paraElement = document.createElement("p");
paraElement.appendChild(projectDesc);

const footer = document.querySelector("footer");
footer.appendChild(paraElement);
