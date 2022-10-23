import "./style.scss";
const PRINT = (text) => {
  console.log(text);
};

/* data content */
const array = [];
const input = document.getElementById("inputFile");

input.addEventListener("change", recieveFile, false);

function recieveFile() {
  const reader = new FileReader();
  reader.onload = (event) => {
    if (reader.readyState === 2) {
      PRINT("Reader is successfully load!");
      textTransform(event.target.result);
      stringToArray(event.target.result);
    }
  };
  reader.readAsText(input.files[0]);
}

function stringToArray(string) {
  let text = string.split(/\r?\n/);
  for (let i = 0; i < text.length; i++) {
    array.push(Array.from(text[i], Number));
  }
  return array;
}

/* button content */

button.addEventListener("click", () => {
  input.click();
});

window.addEventListener(
  "mousemove",
  ({ clientX, clientY }) => {
    const dataContainer = document.querySelector(".data-container");
    const centerX = document.body.clientWidth / 2;
    const centerY = document.body.clientHeight / 2;

    const x = centerX - clientX;
    const y = centerY - clientY;

    const angle = ((Math.atan2(x, y) * 100) / Math.PI) * 2;
    dataContainer.style.setProperty("--startDeg", `${angle + 90}deg`);
  },
  false
);

/* text content */

const textDom = document.querySelector(".value");

function textTransform(text) {
  const alignText = text.split(/\r?\n/);

  for (let i = 0; i < alignText.length; i++) {
    const paragraph = document.createElement("p");
    paragraph.innerHTML = alignText[i];
    textDom.appendChild(paragraph);
  }
  textDom.style.display = "flex";
}
