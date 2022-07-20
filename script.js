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
    // return boxnode so that becomes global and updates for every new box
    return boxNodeList = document.querySelectorAll(".box")
}

function addHoverEvent() {
    let boxNodeList = document.querySelectorAll(".box")

    boxNodeList.forEach(box => {
        box.addEventListener('mouseover', () => {
            box.style.backgroundColor = 'yellow'
        })
    });
}

// the reset fxn
let resetBtn = document.querySelector(".resetButton")
resetBtn.addEventListener('click', resetBox)
function resetBox() {
    boxNodeList.forEach(box => {
    box.style.backgroundColor = ''})
    }

//the resize fxn
let sizeBtn = document.querySelector(".sizeButton")
sizeBtn.addEventListener('click', resizeBox)
function resizeBox() {
    //ask for size
    size = parseInt(prompt("Enter size of grid!"));
    if (size > 64) {
        alert('too big :0');
        return;
    }
    //remove boxes
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    };
    //make new box
    return createContainer();
}
    



