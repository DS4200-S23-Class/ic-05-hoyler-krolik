// // JS File for Class Demo
//
// // print
// console.log("hello_world");
//
// // variables
//
// // constants
// const myCourse = "DS4200";
// console.log(myCourse);
//
// let season = "Winter";
// consol.log(season);
//
// season = "Spring";
// consol.log(season);
//
// // don't use var
//
// let hwDue = true;
//
// // functions
// function tenTimes(num){
//     let result = num * 10;
//     return result;
// }
//
// let ans = tenTimes(6);
// console.log(ans);

// button function
let numClicks = 0;
function buttonClicked(){

    numClicks = numClicks + 1;

    // select what we want to modify
    let buttonDiv = document.getElementById("button-div");

    buttonDiv.innerHTML = "Number of times button clicked: " + numClicks;

}