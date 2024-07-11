// Code here!

document.querySelector(".art-1 > h3").innerText = "Potato";

document.querySelector("header > nav > a:first-child").innerText = "Start";

document.querySelector("footer > section > article:first-child > a:nth-of-type(3)").innerText = "Mail Us";

let all_elements = document.getElementsByClassName("art-2")[0];

//console.log([...all_elements.children]);
[...all_elements.children].forEach((child) => {
    if(child.tagName == "P") {
        child.textContent = "Changing this";
    };
});

document.querySelector("main > article:last-of-type > button").style.color = "orange";

document.querySelector("main > article:last-of-type > figure").style.backgroundColor = "pink";

document.querySelector("footer > section > article:nth-of-type(2) > p")
    .innerText = 
    "Ny adress \n Plogvägen 8 \n 223 22 Helsinke";

let allPTags = document.getElementsByTagName("p");


for(p of allPTags){
    p.style.color = "#25BE5D";
}


let allButtons = document.getElementsByTagName("button");

for(button of allButtons){
    button.innerText = "add  to cart";
}

