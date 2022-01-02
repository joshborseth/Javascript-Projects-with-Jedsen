const container = document.getElementById("container");
colors = ["red", "green", "yellow", "blue", "pink", "purple"];

function addColor() {
  for (let i = 0; i < 247; i++) {
    let randColor = Math.floor(Math.random() * colors.length);
    //creating squares
    let square = document.createElement("div");
    container.appendChild(square);
    square.classList.add("square");

    //adding square colors
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = colors[randColor];
    });

    //removing square colors
    square.addEventListener("mouseout", () => {
      square.style.backgroundColor = "#333";
    });
  }
}

addColor();
