// let count =  9
// function clickCount() {
//     clickCount = count + 3
// }

// console.log(clickCount())

// let countEl = document.getElementById("count-el")
// console.log(countEl)


// let count = 9

// function incrementCount() {
//     count =+ 1
//    countEl.innerText = count
// }
 
let saveEl = document.getElementById("save-el")           
let countEl = document.getElementById("count-el")     

let count = 0

function increment(){
    count += 1
    countEl.textContent = count
   
}

function save(){
    let countStr = count + "-"
    saveEl.textContent += countStr 
    countEl.textContent = 0
    count = 0

} 