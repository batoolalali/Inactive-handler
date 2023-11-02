


// window.addEventListener("focus", visibilitychanged);
// window.addEventListener("blur", blur);

document.onvisibilitychange = function () {
    if (document.visibilityState === 'hidden') {
        // here I should send to mij
        blur()
    }
};


// const visibilityDiv = document.getElementById("visibilitychange");
const blurDiv = document.getElementById("blur");



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