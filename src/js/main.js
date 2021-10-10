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