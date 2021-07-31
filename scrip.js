var btnAddTag= document.getElementsByClassName("plus");
for (let i = 0; i <btnAddTag.length; i++){
    btnAddTag[i].addEventListener("click",increment)
}
function increment(event) {
    var btnplus=event.target;
   //console.log(btnplus);
    var divelmt= btnplus.parentElement;
    //console.log(divelemt);
    var quantityTag=divelmt.querySelector("p");
    //console.log(quantityTag);
    var quantity=quantityTag.innerHTML;
  console.log(quantity)
  
    quantity++ ;
    console.log(quantity)
  quantityTag.innerHTML=quantity;
var UnitpriceTag=divelmt.parentElement.parentElement.querySelector("unitprice")
console.log(UnitpriceTag)
varpriceTag.divelmt.parentElement.parentElement.querySelector("price")
console.log(priceTag)
var unitprice=UnitpriceTag.innerHTML
console.log(unitprice)
var price=quantity*unitprice;
console.log(price)
priceTag.innerHTML=price;
}

var btnAddTag= document.getElementsByClassName("minus");
for (let i = 0; i <btnAddTag.length; i++){
    btnAddTag[i].addEventListener("click",increment)
}
