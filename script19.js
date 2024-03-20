console.log("19) Create a function that displays the current date and time in a specific format.");

function getCurrentDatenTime(){
    const currentDate = new Date();
    return currentDate.toLocaleString();
}

console.log(getCurrentDatenTime());