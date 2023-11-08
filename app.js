

// mij VARs
let start = new Date().getTime();
let data = [];
let reported = [];
let sessionAddress = { City: 'Amman', State: 'Amman Governorate', Country: 'JO', County: '' }


// let google =window.google 
// let maps= window.google.maps



// Parse the JSON string back into a JavaScript object


// window.addEventListener("focus", visibilitychanged);
// window.addEventListener("blur", blur);

/**** testing *****/
const btn = document.getElementById("btn");
btn.addEventListener("click", handleClick);

function handleClick() {
    let obj = {
        reported: true,
        reportedTime: new Date(),
        reportedBy: "B"
    }

    reported.push(obj)

}


const btnReportIt = document.getElementById("report-it");
btnReportIt.addEventListener("click", handleClickbtnReportIt);

function handleClickbtnReportIt() {
    let obj = {
        reported: true,
        reportedTime: new Date(),
        reportedBy: "L"
    }

    reported.push(obj)

}
/**** testing *****/





// testing VARs
const blurDiv = document.getElementById("blur");
const stateDiv = document.getElementById("state");


// event VARS
let prevState = document.visibilityState;

document.onvisibilitychange = function () {

    /****testing *****/
    let pEl2 = document.createElement("p");
    stateDiv.appendChild(pEl2);
    pEl2.textContent = `State is ${document.visibilityState}`
    /**** testing *****/

    if (document.visibilityState === 'hidden' && prevState != "hidden") {
        sessionEnd()
    }
    prevState = document.visibilityState;

};




function sessionEnd() {

    /**** testing *****/
    let pEl = document.createElement("p");
    blurDiv.appendChild(pEl);
    pEl.textContent = `the session ended at: ${new Date()}`
    /**** testing *****/



    /**** mij request *****/
    const end = new Date().getTime();
    const totalTime = (end - start) / 1000;

    let mijObj = {
        date: new Date(),
        reported: reported,
        sessionAddress: sessionAddress,
        duration: totalTime
    }

    // Convert the object to a JSON string
    let jsonString = JSON.stringify(mijObj);

    // Save the JSON string to local storage
    localStorage.setItem('myObject', jsonString);

    if (location.href.includes("github"))
        location.pathname = '/Inactive-handler/data.html'
    else
        location.pathname = '/data.html'



}