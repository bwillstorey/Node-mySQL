var mysql = require("mysql");
var inquirer = require("inquirer");
var login = require("./login");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: login.password,
    database: "bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
    buyProduct();
});

function buyProduct() {

    var query = "SELECT item_id, product_name, price FROM products";

    connection.query(query, function(err, res) {
        
        // console.log(res);

        res.forEach(function(product) {
            console.log("ID: " + product.item_id + " | " + product.product_name + " | $" + product.price);
        });
    

    inquirer
        .prompt([
        {
            name: "selectProduct",
            type: "input",
            message: "Which item would you like to buy? (enter product ID)",
            // choices: ["Gummy Bears", "Tennis Shoes", "Windshield Wipers", "Decorative Pillows", "Hiking Boots", "Vitamins", "Airpods", "Almond Butter", "This is Spinal Tap", "iPhone Cable"]
        },
        {
            name: "quantity",
            type: "input",
            message: "How many would you like to purchase?"
        }
        ])
        .then(function(input) {
            
            var productSelected = input.selectProduct;
            var quantity = input.quantity;
            var query = "SELECT * FROM products WHERE item_id=?";

            connection.query(query, input.selectProduct, function(err, res) {
                var item = res[0];

                if (item.stock_quantity >= quantity) {
                    var newQuantity = item.stock_quantity - quantity;
                    var updateQuantity = "UPDATE products SET stock_quantity=? WHERE item_id=?";
                    var total = quantity * item.price;

                    connection.query(updateQuantity, [newQuantity, productSelected], function(err, res) {
                        console.log("Order completed for $" + total);
                        keepShopping();
                    });
                }
                else {
                    console.log("Sorry - this item is out of stock.");
                    keepShopping();
                }
            });
        });
    });
}

function keepShopping() {
    inquirer
        .prompt ([
            {
                name: "continue",
                type: "confirm",
                message: "Would you like to keep shopping?"
            }
        ])
        .then(function(confirmed) {
            if(confirmed.continue) {
                buyProduct();
            }
            else {
                console.log("Thank you. Come again.");
            }
        });
}