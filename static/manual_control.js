document.getElementById("F").addEventListener("mousedown",function(){
    var result = httpPost("/manual_control","F");
    console.log(result);
})
document.getElementById("F").addEventListener("mouseup",function(){
    var result = httpPost("/manual_control","S");
    console.log(result);
})
document.getElementById("L").addEventListener("mousedown",function(){
    var result = httpPost("/manual_control","L");
    console.log(result);
})
document.getElementById("L").addEventListener("mouseup",function(){
    var result = httpPost("/manual_control","S");
    console.log(result);
})
document.getElementById("S").addEventListener("click",function(){
    var result = httpPost("/manual_control","S");
    console.log(result);
})
document.getElementById("R").addEventListener("mousedown",function(){
    var result = httpPost("/manual_control","R");
    console.log(result);
})
document.getElementById("R").addEventListener("mouseup",function(){
    var result = httpPost("/manual_control","S");
    console.log(result);
})
document.getElementById("B").addEventListener("mousedown",function(){
    var result = httpPost("/manual_control","B");
    console.log(result);
})
document.getElementById("B").addEventListener("mouseup",function(){
    var result = httpPost("/manual_control","S");
    console.log(result);
})
// document.getElementById("L").addEventListener("click",function(){
//     var result = httpPost("/manual_control","L");
//     console.log(result);
// })
// document.getElementById("R").addEventListener("click",function(){
//     var result = httpPost("/manual_control","R");
//     console.log(result);
// })
document.getElementById("F").addEventListener("touchstart",function(){
    var result = httpPost("/manual_control","F");
    console.log(result);
})
document.getElementById("F").addEventListener("touchend",function(){
    var result = httpPost("/manual_control","S");
    console.log(result);
})
document.getElementById("B").addEventListener("touchstart",function(){
    var result = httpPost("/manual_control","B");
    console.log(result);
})
document.getElementById("B").addEventListener("touchend",function(){
    var result = httpPost("/manual_control","S");
    console.log(result);
})