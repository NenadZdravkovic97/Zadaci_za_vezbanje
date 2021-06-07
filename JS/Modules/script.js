import generateImage from './modules/general.js';
import {generateList, generateListItem} from './modules/list.js'
import {generateTable, generateTableRow, generateTableItem} from './modules/table.js'



let listDiv = document.querySelector("#listDiv");
let tableDiv = document.querySelector('#tableDiv')

// let img = generateImage('img/1.jpg');
// document.body.appendChild(img);

let lista = generateList(listDiv);

generateListItem(lista, 'img/1.jpg');
generateListItem(lista, 'img/2.jpg');
generateListItem(lista, 'img/3.jpg');

let table = generateTable(tableDiv);
let tr = generateTableRow(table);
let td = generateTableItem(tr, 'img/1.jpg');
tr = generateTableRow(table);
td = generateTableItem(tr, 'img/2.jpg');
tr = generateTableRow(table);
td = generateTableItem(tr, 'img/3.jpg');










