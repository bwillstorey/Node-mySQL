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

function buyProduct(selection) {

    inquirer
        .prompt({
            
            name: "selectProduct",
            type: "list",
            message: "Which item would you like to buy?",
            choices: ["Gummy Bears", "Tennis Shoes", "Windshield Wipers", "Decorative Pillows", "Hiking Boots", "Vitamins", "Airpods", "Almond Butter", "This is Spinal Tap", "iPhone Cable"]
        })
        .then(function() {
            switch (selection.selectProduct) {
                case "Gummy Bears":

            }
        });
}