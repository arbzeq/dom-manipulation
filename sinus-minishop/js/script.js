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

let homeLink = document.querySelector("body > header > nav > a:first-of-type");

homeLink.classList.add("active");
homeLink.className += " active2";
homeLink.classList.add("active3");

let logoElement = document.querySelector("body > header > img:first-of-type");
//logoElement.classList.remove("logo");

let headerNav = document.querySelector("body > header > nav:first-of-type");
//console.log(headerNav.children);
//console.log(headerNav.childNodes);
let newElement = document.createElement("a");
newElement.innerText = "New";

//headerNav.insertBefore(newElement, headerNav.children[0]);
//headerNav.children[0].insertAdjacentElement("afterend",newElement)
//headerNav.appendChild(newElement);

let mainElement = document.querySelector("main");
//console.log(mainElement);

var newArticleElement = document.createElement("article");
newArticleElement.classList.add("art-4")
newArticleElement.innerHTML = `
    <figure><img src="img/hoodie-forrest.png" alt="hoodie"></figure>
    <h2>Sinus Hoodie</h2>
    <h3>Forrest</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolores.</p>
    <button>buy</button>
`

mainElement.appendChild(newArticleElement);


let headerImageElement = document.getElementsByClassName("logo");

headerImageElement[0].addEventListener('click', (ev) => {
    console.log("Found ya");
})


let articleElements = document.querySelectorAll("body > main > article");

articleElements.forEach(article => {
    article.addEventListener('click', (ev) => {
        
        let articleH3Text = article.getElementsByTagName("H3")[0].innerText;
    console.log(`Hi, I'm article ${articleH3Text}`);
    });
    
})
