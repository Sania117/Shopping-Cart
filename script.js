var products = [];
var prices = [];


$(".add").click(function() {
    // first, get product name and price
    var name = $(".Name").val();
    products.push(name);
    var price = $(".Price").val();
    prices.push(price);
    
    // next, create new element with name and price
    var text = "<div class='item'>";
    text = text + "<div>"+name+"</div>";
    text = text + "<div>"+price+"</div>";
    text = text + "</div>" ;
    
    // next, append new element to shopping cart
    $(".Shop").append(text);
    
    // get total number of products and display it
    var items = products.length;
    $(".totalNumber").text(items);
});
$(".finalize").click(function() {
    var finalPrice = 0;
    var item = products [0];
    if(products.length >= 3) {
    item = products [ 0] + ", "  +products [1] + ", and " + products [2];
    }
    prices.forEach(function(price) {
        var priceAsNumber;
        priceAsNumber = Number(price);
        finalPrice = finalPrice + priceAsNumber;
    });
   $(".result").text(" Thank you for your purchase of " + item + " your total is $" + finalPrice + ".");
});