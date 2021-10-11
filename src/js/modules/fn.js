"use strict"

const toogleElemClassAsArr = (arrElem, arrCssClass) => {
    arrElem.forEach((x,y) => x.classList.toggle(arrCssClass[y]));
} 

export {
    toogleElemClassAsArr
}

