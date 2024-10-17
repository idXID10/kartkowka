const body = document.querySelector("body")
const div = document.createElement("div")
const btn = document.createElement("button")
const btn2 = document.createElement("button")
const btnval = document.createTextNode("green")
const btnval2 = document.createTextNode("red")
body.appendChild(div)
body.appendChild(btn)
body.appendChild(btn2)
btn.appendChild(btnval)
btn2.appendChild(btnval2)
div.style.height = "250px"
div.style.width = "250px"

btn.addEventListener("click", function greeny(){
div.style.backgroundColor = "green"
})
btn2.addEventListener("click", function redy(){
div.style.backgroundColor = "red"
})    


const inpt = document.createElement("input")
const btn3 = document.createElement("button")
const div2 = document.createElement("div")
const btnval3 = document.createTextNode("nowy paragraf")
body.appendChild(div2)
div2.appendChild(inpt)
div2.appendChild(btn3)
btn3.appendChild(btnval3)
div2.style.height = "250px"
div2.style.width = "250px"
div2.style.border = "1px solid black"
btn3.addEventListener("click", function addPar(){
    let newP = document.createElement("p")
    newP.textContent = inpt.value
    div2.appendChild(newP)
})

const btn4 = document.createElement("button")
const inpt2 = document.createElement("input")
const inpt3 = document.createElement("input")
const btnval4 = document.createTextNode("stwórz div")
body.appendChild(btn4)
body.appendChild(inpt2)
body.appendChild(inpt3)
btn4.appendChild(btnval4)
btn4.addEventListener("click", function makediv(){
    let ex3div = document.createElement("div")
    ex3div.style.border = "1px solid"
    ex3div.style.height = inpt2.value + "px"
    ex3div.style.width = inpt3.value + "px"
    body.appendChild(ex3div)
})