'use strict'

class product{
    constructor(description, price, stock){
        this.description = description;
        this.price = price;
        this.stock = stock;
    }
    showInfo(){
        alert(`Descripción del producto: ${this.description}, con el precio de: ${this.price} y el stock es: ${this.stock} .`);
    }
    minusStock(qty){
        this.stock = this.stock - qty; 
    }
    incrementStock(qty){
        this.stock = this.stock + qty;
    }
    updatePrice(newPrice){
        this.price = newPrice;
    }


}

let product = new product("Licuadora", "$80,00", 5);
product.showInfo();
product.minusStock(2);
product.showInfo();
product.incrementStock(5);
product.showInfo();
product.updatePrice("$75,00");
product.showInfo();