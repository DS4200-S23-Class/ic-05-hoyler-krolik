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
function buttonClicked(){
    console.log("Button was clicked!");

    let newText = "Button was clicked";

    // select what we want to modify
    let buttonDiv = document.getElementById("button-div");

    buttonDiv.innerHTML = newText;
}