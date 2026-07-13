function addTask() {
  const input = document.getElementById("task");

  if (input.value.trim() === "") return;

  const li = document.createElement("li");
  li.innerHTML = `${input.value}<span onclick="this.parentElement.remove()">✖</span>`;

  document.getElementById("list").appendChild(li);

  input.value = "";
}