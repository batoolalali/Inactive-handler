


// window.addEventListener("focus", visibilitychanged);
// window.addEventListener("blur", blur);





// const visibilityDiv = document.getElementById("visibilitychange");
const blurDiv = document.getElementById("blur");
const stateDiv = document.getElementById("state");

let prevState = document.visibilityState;

document.onvisibilitychange = function () {

    let prevState= document.visibilityState;
    let pEl2 = document.createElement("p");
    stateDiv.appendChild(pEl2);
    pEl2.textContent = `State is ${document.visibilityState}`


    if (document.visibilityState === 'hidden' && prevState!="hidden")  {
        // here I should send to mij
        blur()
    }
};


// function visibilitychanged() {
//     let pEl = document.createElement("p");
//     visibilityDiv.appendChild(pEl);
//     pEl.textContent = `Visibility has been changed at ${new Date()}`
// }

function blur() {
    let pEl = document.createElement("p");
    blurDiv.appendChild(pEl);
    pEl.textContent = `the session ended at: ${new Date()}`
}