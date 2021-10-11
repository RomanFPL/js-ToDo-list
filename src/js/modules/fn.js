"use strict"

const toogleElemClassAsArr = (arrElem, arrCssClass) => {
    arrElem.forEach((x,y) => x.classList.toggle(arrCssClass[y]));
} 

const getRegExpValue = (field, event) => {
    const regex = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/gm;
    field.value = event.target.value.split(" ").reduce((acc, word) => {
        if(word.match(regex) !== null){
            acc.push(word.match(regex));
        }
        return acc;

    }, []).join(", ")
}

export {
    toogleElemClassAsArr,
    getRegExpValue
}

