import generateImage from "./general.js";
export {generateTable, generateTableRow, generateTableItem}
let generateTable = (parent) => {
    let table = document.createElement('table');
    parent.appendChild(table);
    return table;
}

let generateTableRow = (parent) => {
    let tr = document.createElement('tr');
    parent.appendChild(tr);
    return tr;
}

let generateTableItem = (parent, src) => {
    let td = document.createElement('td');
    let img = generateImage(src);
    td.appendChild(img);
    parent.appendChild(td);
    return td;
}