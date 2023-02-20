const cont = document.getElementById("container");

for (x = 0; x < 256; x++) {
  const div = document.createElement("div");
  div.setAttribute("class", "div");

  document.getElementById("container").appendChild(div);
}
