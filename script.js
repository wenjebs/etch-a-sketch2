let size = 16;

const container = document.querySelector(".container");


createContainer()

function createContainer() {
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

    addHoverEvent();
}

function addHoverEvent() {
    let boxNodeList = document.querySelectorAll(".box")

    boxNodeList.forEach(box => {
        box.addEventListener('mouseover', () => {
            box.style.backgroundColor = 'yellow'
        })
    });
}

let boxNodeList = document.querySelectorAll(".box")
let resetBtn = document.querySelector(".resetButton")
    
resetBtn.addEventListener('click', () => {
    boxNodeList.forEach(box => {
        box.style.backgroundColor = ''
    })
})

function resizeBox() {
    //ask for size
    size = parseInt(prompt("Enter size of grid!"));
    //remove boxes
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    };
    //make new box
    createContainer();
}

