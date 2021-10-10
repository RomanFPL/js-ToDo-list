"use strict";
import 'bootstrap';

const contentTable = document.querySelector(".note-table");
const contentTableArchive = document.querySelector(".note-table-archive");
const contentTableCurent = document.querySelector(".note-table-main");
const switchArchive = document.querySelector(".toArchive");
const addRowBtn = document.querySelector(".add-btn");
const addRowRow = document.querySelector(".table-add-row")


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

const cuerentTask = [
    {
        name: "Pet the cat",
        date: "10/01/2021",
        category: "Random Thought",
        content: "Find a cat, catch it, pet it",
        dates: null,
    },
    {
        name: "Feed ducks",
        date: "10/05/2021",
        category: "Random Thought",
        content: "Take some breadcrumbs, find ducks, feed them",
        dates: null,
    },
    {
        name: "Pick raspberry",
        date: "10/08/2021",
        category: "Task",
        content: "Go to the garden, and pick it",
        dates: null,
    },
    {
        name: "Build the house",
        date: "10/09/2021",
        category: "Task",
        content: "Call to the builder teem in 10/10/2021",
        dates: "10/10/2021",
    },
];

const generateContent = () => {
    const fillRowUp = (item) => {
        const row = document.createElement("tr");
        row.innerHTML = `
        <th scope="row">${item.name}</th>
        <td>${item.date}</td>
        <td>${item.category}</td>
        <td>${item.content}</td>
        <td>${item.dates}</td>
        <td>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="onIcon mx-1 bi bi-pencil-square" viewBox="0 0 16 16">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="onIcon mx-1 bi bi-save green" viewBox="0 0 16 16">
                <path d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="onIcon mx-1 bi bi-trash red" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
            </svg>
            </td>
        `
        return row;
    }

    cuerentTask.map( row  => contentTableCurent.append(fillRowUp(row)));
}

generateContent();