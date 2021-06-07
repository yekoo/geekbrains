
const sections = [    
    {
        id:"dateDiff",
        name:"Date difference"
    },
    {
        id:"stepwatch",
        name:"Step watch"
    },
    {
        id:"timer",
        name:"Timer"
    }
];
let header = document.querySelector("header");
console.log(header);
const linksList = document.createElement("ul");
for(let itm of sections){
    console.log(itm);
    linksList.insertAdjacentHTML('beforeend', `<li><a href="#${itm.id}">${itm.name}</a></li>`);
}
header.appendChild(linksList);
