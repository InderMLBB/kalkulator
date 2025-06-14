let result = document.getElementById("result");
let sidebar = document.getElementById("sidebar");
document.getElementById("menu-toggle").onclick = () => {
  sidebar.classList.toggle("active");
};

function append(value) {
  result.value += value;
}

function clearResult() {
  result.value = "";
}

function backspace() {
  result.value = result.value.slice(0, -1);
}

function calculate() {
  try {
    let expression = result.value.replace(":", "/");
    let total = eval(expression);
    localStorage.setItem(Date.now(), result.value + " = " + total);
    result.value = total;
  } catch {
    result.value = "Error";
  }
}

function toggleTheme() {
  document.body.classList.toggle("dark");
}
