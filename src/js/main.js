"use strict";
import 'bootstrap';

const contentTable = document.querySelector(".note-table");
const contentTableArchive = document.querySelector(".note-table-main");
const contentTableCurent = document.querySelector(".note-table-archive");
const switchArchive = document.querySelector(".toArchive");

switchArchive.addEventListener("click", (e) => {
    contentTableArchive.classList.toggle('tbody-hidden');
    contentTableCurent.classList.toggle('tbody-hidden');
    switchArchive.classList.toggle('active');
    console.log("### tbales")
});