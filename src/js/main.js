"use strict";
import 'bootstrap';

const contentTable = document.querySelector(".note-table");
const contentTableArchive = document.querySelector(".note-table-main");
const contentTableCurent = document.querySelector(".note-table-archive");
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
        name: "Bild the house",
        date: "10/09/2021",
        category: "Task",
        content: "Call to the builder teem in 10/10/2021",
        dates: "10/10/2021",
    },
];