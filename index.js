$("button").click(function() {
    var a = Math.random(6)*6;
    var b = Math.floor(a);
    $("p").text(b)
    king(a,b)
});






