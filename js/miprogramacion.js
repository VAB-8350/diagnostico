$(document).ready(function() {
    $("#local").click(function(){
        $("#variante").load("local.html");
    });
    $("#productos").click(function(){
        $("#variante").load("productos.html");
    });
    $("#promos").click(function(){
        $("#variante").load("promos.html");
    });
});