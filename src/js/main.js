"use strict";
import 'bootstrap';
import { getRegExpValue, togleElemClassAsArr, generateContent } from './modules/fn';
import {tasksList, definedCategories } from './modules/starterDate';


const contentTableArchive = document.querySelector(".note-table-archive");
const contentTableCurent = document.querySelector(".note-table-main");
const switchArchive = document.querySelector(".toArchive");
const addRowBtn = document.querySelector(".add-btn");
const sumTable = document.querySelector(".summary-table tbody");
const rowForm = document.querySelector(".modal-form")
const modalInputs = document.querySelectorAll('.form-row-value');
const btnSave = document.querySelector(".btn-form-save");
const btnClose = document.querySelector(".btn-form-close");
const xClose = document.querySelector(".x-close");

generateContent(contentTableCurent, tasksList, 1);
generateContent(contentTableArchive, tasksList, 0);


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
})


addRowBtn.addEventListener("click", () => {
    const date = new Date();
    modalInputs[1].value=`${date.getFullYear()}-${date.getMonth()<10 ? "0"+date.getMonth() : date.getMonth()}-${date.getDate()<10 ? "0"+date.getDate() : date.getDate()}`
})

contentTableArchive.addEventListener("click", (e) => {
    tasksList[tasksList.findIndex(item => item.id === e.target.closest("tr").getAttribute("data-id"))].status = 1;
    generateContent(contentTableCurent, tasksList, 1);
    generateContent(contentTableArchive, tasksList, 0);
    generateSummary();
})

contentTableCurent.addEventListener("click", (e) => {
    e.target.classList.contains("icon-archive") && (tasksList[tasksList.findIndex(item => item.id === e.target.closest("tr").getAttribute("data-id"))].status = 0);
    generateContent(contentTableCurent, tasksList, 1);
    generateContent(contentTableArchive, tasksList, 0);
    generateSummary();
})

contentTableCurent.addEventListener("click", (e) => {
    e.target.classList.contains("icon-delete") && (tasksList.splice(tasksList.findIndex(item => item.id === e.target.closest("tr").getAttribute("data-id")),1));
    generateContent(contentTableCurent, tasksList, 1);
    generateContent(contentTableArchive, tasksList, 0);
    generateSummary();
})

contentTableCurent.addEventListener("click", (e) => {
    if(e.target.classList.contains("icon-edit")){
        const {id, name, date, category, content, dates} = tasksList[tasksList.findIndex(item => item.id === e.target.closest("tr").getAttribute("data-id"))];
        addRowBtn.click();
        modalInputs[0].value = name;
        modalInputs[1].value = date;
        modalInputs[2].value = definedCategories.indexOf(category)+1;
        modalInputs[3].value = content;
        modalInputs[4].value = dates;
        rowForm.setAttribute("data-id",id)
    }
    generateContent(contentTableCurent, tasksList, 1);
    generateContent(contentTableArchive, tasksList, 0);
    generateSummary();
})

const generateSummary = () => {
    const summaryData = [...new Set(tasksList.map(row => row.category))].map(unique => {
        const uniqueData = {
            name: unique,
            act: tasksList.reduce((acc, val) => {return val.category === unique && val.status === 1 ? ++acc : acc},0),
            arc: tasksList.reduce((acc, val) => {return val.category === unique && val.status === 0 ? ++acc : acc},0),
        }
        return uniqueData;
    })
    const fillRow = (item) => {
        const row = document.createElement("tr");
        row.innerHTML = `
                        <th scope="row">${item.name}</th>
                        <td>${item.act}</td>
                        <td>${item.arc}</td>
                        `
        return row;
    }
    sumTable.innerHTML = "";
    summaryData.map(row => sumTable.append(fillRow(row)));
}

generateSummary()

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

        generateContent(contentTableArchive, tasksList, 1);
        generateContent(contentTableCurent, tasksList, 0);
        generateSummary();
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