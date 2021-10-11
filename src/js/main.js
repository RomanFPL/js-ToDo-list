"use strict";
import 'bootstrap';
import { getRegExpValue, togleElemClassAsArr, generateContent, generateSummaryTable, gatCurenDate, editRowById } from './modules/fn';
import {tasksList, definedCategories } from './modules/starterDate';


const contentTableArchive = document.querySelector(".note-table-archive");
const contentTableCurent = document.querySelector(".note-table-main");
const sumTable = document.querySelector(".summary-table tbody");

const switchArchive = document.querySelector(".toArchive");
const addRowBtn = document.querySelector(".add-btn");

const rowForm = document.querySelector(".modal-form")
const modalInputs = document.querySelectorAll('.form-row-value');
const btnSave = document.querySelector(".btn-form-save");
const btnClose = document.querySelector(".btn-form-close");
const xClose = document.querySelector(".x-close");

const updateTables = () => {
    generateContent(contentTableCurent, tasksList, 1);
    generateContent(contentTableArchive, tasksList, 0);
    generateSummaryTable(sumTable, tasksList);
}

updateTables();

switchArchive.addEventListener("click", (e) => {
    const togleElem = [
        contentTableArchive,
        contentTableCurent,
        addRowBtn,
        switchArchive
    ];
    
    const toggleClass = [
        "tbody-hidden",
        "tbody-hidden",
        "unvisible",
        "active",
    ];

    togleElemClassAsArr(togleElem, toggleClass);
});

btnClose.addEventListener("click", () => {
    rowForm.setAttribute("data-id", "0");
    rowForm.reset();
})

xClose.addEventListener("click", () => {
    rowForm.setAttribute("data-id", "0");
    rowForm.reset();
});

addRowBtn.addEventListener("click", () => {
    modalInputs[1].value  =gatCurenDate();
})

contentTableArchive.addEventListener("click", (e) => {
    tasksList[tasksList.findIndex(item => item.id === e.target.closest("tr").getAttribute("data-id"))].status = 1;
    updateTables();
})

contentTableCurent.addEventListener("click", (e) => {
    e.target.classList.contains("icon-archive") && (tasksList[tasksList.findIndex(item => item.id === e.target.closest("tr").getAttribute("data-id"))].status = 0);
    updateTables();
})

contentTableCurent.addEventListener("click", (e) => {
    e.target.classList.contains("icon-delete") && (tasksList.splice(tasksList.findIndex(item => item.id === e.target.closest("tr").getAttribute("data-id")),1));
    updateTables();
})

contentTableCurent.addEventListener("click", (e) => {
    e.target.classList.contains("icon-edit") && (editRowById(e, tasksList, modalInputs, rowForm, addRowBtn));
    updateTables();
})

btnSave.addEventListener("click", () => {
    if(modalInputs[0].value && modalInputs[2].value && modalInputs[3].value){
        const rowData = {};
            rowData.status = 1;
            modalInputs.forEach(x => {
                rowData[x.name] = x.value
            }) 
            rowData.category = definedCategories[rowData.category-1];
            if(rowForm.getAttribute("data-id")==="0"){
                rowData.id = (Math.random() + 1).toString(36).substring(4);
                tasksList.push(rowData);
            } else {
                const index = tasksList.findIndex(item => item.id === rowForm.getAttribute("data-id"))
                tasksList[index] = {...tasksList[index],...rowData}
        }

        updateTables();
        rowForm.setAttribute("data-id", "0");
        rowForm.reset();
        btnClose.click();
    } else {
        alert('The "Name","Category" and "Content" fields should contain some text!')
    }
})

modalInputs[3].addEventListener("input", (e) => {
    getRegExpValue(modalInputs[4], e)
});