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
            this.addItemToDatabase();
        }
        if (inquirerResponse.bidOrAdd == "Bid"){
            this.bidOnItemFromDatabase();
        }
    });
}

//Function that handles UI of adding items to the database
//Also calls a separate function that actually adds the data to database
userInterface.prototype.addItemToDatabase = function(){
    //Attributes to Collect from the user
    //Name
    //Description
    //Price
    
}

userInterface.prototype.bidOnItemFromDatabase = function(){

    //Display items as an inquirer list
}

//Factory function that creates the UI object - prototypes defined above
function userInterface(){
    
}

//Run this code only if it is greatBay.js being run.
if(require.main == module){
    var ui = new userInterface();
    ui.startMenu();
}