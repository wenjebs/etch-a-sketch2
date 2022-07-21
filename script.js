let size = 16;
let randomRgb = 0;
const container = document.querySelector(".container");
container.setAttribute('draggable',false);


createContainer()


// box creation fxn
function createContainer() {
    //initilisation column
    let row = document.createElement("div");
    row.setAttribute('draggable',false);
    row.classList.add('row');
    container.appendChild(row);

    for (i = 0; i <= size-1; i++) {
        let div = document.createElement("div");
        div.classList.add('box');
        div.style.width = `${800/size - 1}px`;
        div.style.height = `${800/size - 1}px`;
        div.setAttribute('draggable',false);
        row.appendChild(div);
    }
    
    for (i = 0; i <= size-2; i++) {
        let row = document.querySelector(".row");
        row.setAttribute('draggable',false);
        container.appendChild(row.cloneNode(true));
    }
    //add hover event toeverybox for every new box created
    addHoverEvent();
    // return boxnode so that becomes global and updates for every new box
    return boxNodeList = document.querySelectorAll(".box")
}

//the hover fxn
function addHoverEvent() {
    let boxNodeList = document.querySelectorAll(".box")

    boxNodeList.forEach(box => {
        //mousedown means cfm over the box
        box.addEventListener('mousedown', () => {
            box.style.backgroundColor = `rgb(${randomRgbNumber()},${randomRgbNumber()},${randomRgbNumber()})`
        }),   
        // incase got drag for now cause idk how remove
        box.addEventListener('dragover', () => {
            box.style.backgroundColor = `rgb(${randomRgbNumber()},${randomRgbNumber()},${randomRgbNumber()})`
        })
        //  mouseover + check if the left mouse button is clciked
        box.addEventListener('mouseover', (event) => {
            if (event.buttons == 1) {
                event.target.style.backgroundColor = `rgb(${randomRgbNumber()},${randomRgbNumber()},${randomRgbNumber()})`
            }
        });
    })
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
    


//random rgb number fxn
function randomRgbNumber() {
    randomRgb = Math.floor(Math.random() * 256);
    return randomRgb;
}
