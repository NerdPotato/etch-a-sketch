const gridContainer = document.querySelector('.grid-container');
const resetBtn = document.querySelector('.reset-button');
let horizontalBoxNum = prompt('grid dimension')
gridContainer.style.cssText += 'grid-template-columns: repeat(' + horizontalBoxNum + ', 1fr);';

for (i = 0; i < (horizontalBoxNum * horizontalBoxNum); i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    gridContainer.appendChild(box);
    box.addEventListener('mouseover', ()=> {
        box.classList.add('black');
    });
    resetBtn.addEventListener('click', ()=> {
        box.classList.remove('black');
    });
}

