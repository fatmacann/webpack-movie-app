import _ from "lodash";

document.getElementById("button1").addEventListener("click", function () {
  const el = document.getElementById("header");
  el.innerHTML = "Hey i have updated the code !";

  const listItems = ["Betüş", "perihan", "Dudu"];
  const ul = document.getElementById("personList");
  _.forEach(listItems, function (item) {
    const tempEl = document.createElement("li");
    tempEl.innerHTML = item;
    ul.appendChild(tempEl);
  });
});
