import generateImage from "./general.js";

let generateList = (parent) => {
    let lista = document.createElement('ul');
    parent.appendChild(lista);
    return lista;
}

let generateListItem = (parent, src) => {
    let li = document.createElement('li');
    let img = generateImage(src);
    li.appendChild(img);
    parent.appendChild(li);
    return li;
}

export {generateList, generateListItem}