// function gender(){
//     console.log("Gender: Male")
// }
// gender()
// Sometime we need to to run function separately and immediately then we use the iife so to aovoid global taffic
(function Gender(){
    console.log("Gender: Female")
})();                                 // Use semicolon so that remaining code should get run after iife
((num1, num2) => {
    console.log(num1 * num2);
})(5, 3);