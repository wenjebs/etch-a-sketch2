let size = 16;

const container = document.querySelector(".container");
let row = document.createElement("div");
row.classList.add('row');
container.appendChild(row);

for (i = 0; i <= size-1; i++) {
    let div = document.createElement("div");
    div.classList.add('box');
    row.appendChild(div);
}

for (i = 0; i <= size-2; i++) {
    let row = document.querySelector(".row");
    container.appendChild(row.cloneNode(true));
}

let boxNodeList = document.querySelectorAll(".box")

boxNodeList.forEach(box => {
    box.addEventListener('mouseover', () => {
        box.style.backgroundColor = 'yellow'
    })
});