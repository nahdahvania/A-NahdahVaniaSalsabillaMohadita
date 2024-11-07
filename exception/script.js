// 1 error
function divide(a, b) {
    try {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error("Input harus berupa angka.");
        }
        
        if (b === 0) {
            throw new Error("Tidak bisa membagi dengan nol.");
        }
        return a / b;
    } catch (error) {

        console.error("Error:", error.message);
    }
}

console.log(divide(20, 5));

// 2 callback
function myFirst(callback){
    myDisplayer("Hello!");
    callback();
}
function mySecond(){
    myDisplayer("Goodbye")
}
function myDisplayer(message){
    console.log(message);
}
myFirst(mySecond);

// 3 set time out
console.log("i print first!");
setTimeout(() => {
    console.log ("i print after 5 seconds");
}, 5000);
console.log("i print second!");

// 4 set interval
function setTime(){
    const header = document.getElementById ("header");
    header.textContent = new Date(). toString();
}
setInterval(setTime, 1000);
console.log("Program Finish");