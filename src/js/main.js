"use strict";
import 'bootstrap';
import tasksList from './modules/starterDate';

const contentTable = document.querySelector(".note-table");
const contentTableArchive = document.querySelector(".note-table-archive");
const contentTableCurent = document.querySelector(".note-table-main");
const switchArchive = document.querySelector(".toArchive");
const addRowBtn = document.querySelector(".add-btn");
const addRowRow = document.querySelector(".table-add-row");
const sumTable = document.querySelector(".summary-table");


switchArchive.addEventListener("click", (e) => {
    contentTableArchive.classList.toggle('tbody-hidden');
    contentTableCurent.classList.toggle('tbody-hidden');
    switchArchive.classList.toggle('active');
    addRowBtn.classList.toggle("unvisible")
    console.log("### tbales")
});

addRowBtn.addEventListener("click", () => {
    addRowRow.classList.toggle("active");
    addRowBtn.innerText = addRowRow.classList.contains("active") ? "Cancel" : "Add a row";
})

const generateContent = () => {
    const fillRowUp = (item) => {
        const row = document.createElement("tr");
        row.setAttribute("data-id", item.id)
        row.innerHTML = `
        <th scope="row">${item.name}</th>
        <td>${item.date}</td>
        <td>${item.category}</td>
        <td>${item.content}</td>
        <td>${item.dates}</td>
        <td>
            ${item.status ? `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="icon-edit onIcon mx-1 bi bi-pencil-square" viewBox="0 0 16 16">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="icon-archive onIcon mx-1 bi bi-save green" viewBox="0 0 16 16">
                <path d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="icon-delete onIcon mx-1 bi bi-trash red" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
            </svg>
            `:
            `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="icon-unarchive bi bi-arrow-up-square onIcon mx-1 orange" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 9.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
            </svg>
            `}
            </td>
        `
        return row;
    }
    contentTableCurent.innerHTML = "";
    contentTableArchive.innerHTML = "";
    tasksList.map( row  => row.status && contentTableCurent.append(fillRowUp(row)));
    tasksList.map( row  => !row.status && contentTableArchive.append(fillRowUp(row)));
}

try{
    contentTableArchive.addEventListener("click", (e) => {
        console.log(e.target.classList.contains("icon-unarchive"));
        console.log(e.target.closest("tr").getAttribute("data-id"));
        console.log(tasksList[tasksList.findIndex(item => item.id === e.target.closest("tr").getAttribute("data-id"))].status = 1);
        generateContent();
    })
} catch {

}

contentTableCurent.addEventListener("click", (e) => {
    e.target.classList.contains("icon-archive") && (tasksList[tasksList.findIndex(item => item.id === e.target.closest("tr").getAttribute("data-id"))].status = 0);
    generateContent();
})

contentTableCurent.addEventListener("click", (e) => {
    e.target.classList.contains("icon-delete") && (tasksList.splice(tasksList.findIndex(item => item.id === e.target.closest("tr").getAttribute("data-id")),1));
    generateContent();
})


generateContent();

let r = (Math.random() + 1).toString(36).substring(4);
console.log("random", r);
