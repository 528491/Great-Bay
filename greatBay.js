var mysql = require("mysql");
var inquirer = require("inquirer");

//Create an object to manage the UI components of the application
userInterface.prototype.welcomeMessage = "Welcome to Great Bay!";

userInterface.prototype.printWelcomeMessage = function(){
    console.log(this.welcomeMessage);
}

//This function will display the welcome message, then use inquirer to determine whether they will be bidding or 
//adding an item to the database.
userInterface.prototype.startMenu = function(){
    this.printWelcomeMessage();
    inquirer.prompt([
        {
            type: "list",
            message: "Would you like to bid on existing items, or add an item to the database?",
            choices: ["Add", "Bid"],
            name: "bidOrAdd"
        }
    ]).then(function(inquirerResponse){
        if (inquirerResponse.bidOrAdd == "Add"){

        }
        if (inquirerResponse.bidOrAdd == "Bid"){

        }
    });
}

function userInterface(){
    
}

//Run this code only if it is greatBay.js being run.
if(require.main == module){
    var ui = new userInterface();
    ui.startMenu();
}