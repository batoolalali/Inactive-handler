
let inactivityTimeout;
const inactivityDuration = 30000; // 0.5 minute (in milliseconds)

let inactiveDivEl = document.getElementById("inactive");
let activeDivEl = document.getElementById("active");


let pEl = document.createElement("p");
activeDivEl.appendChild(pEl);

function resetInactivityTimer() {

    clearTimeout(inactivityTimeout);
    inactivityTimeout = setTimeout(handleInactive, inactivityDuration)
    pEl.textContent = `last activity at ${new Date()}`
}







function handleInactive() {
    // User is inactive, perform the desired action (e.g., log them out)
    let pEl = document.createElement("p");
    inactiveDivEl.appendChild(pEl);
    pEl.textContent = `was inactive at ${new Date()}`

}

// Reset the inactivity timer on user interaction events
document.addEventListener("mousemove", resetInactivityTimer);
document.addEventListener("keydown", resetInactivityTimer);
document.addEventListener("DOMMouseScroll", resetInactivityTimer);
document.addEventListener("mousewheel", resetInactivityTimer);
document.addEventListener("mousedown", resetInactivityTimer);
document.addEventListener("touchstart", resetInactivityTimer);
document.addEventListener("touchmove", resetInactivityTimer);
document.addEventListener("focus", resetInactivityTimer);

// Start the inactivity timer
resetInactivityTimer();

