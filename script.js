let main = document.querySelector("#input-text");
let currentValue = 0;

let inc = document.querySelector("#inc-1");
let resetValue = document.querySelector("#reset");
let dec = document.querySelector("#dec-1");

inc.addEventListener("click", () => {
    currentValue++;
    main.textContent = currentValue;
})
dec.addEventListener("click", ()=>{
    currentValue--;
    main.textContent = currentValue;
})

resetValue.addEventListener("click", ()=>{
    currentValue = 0;
    main.textContent = currentValue;
})