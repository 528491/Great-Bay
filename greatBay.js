var mysql = require("mysql");
var inquirer = require("inquirer");

//Create an object to manage the UI components of the application
userInterface.prototype.welcomeMessage = "Welcome to Great Bay!";
userInterface.prototype.self = this; //Needed for accessing "this" inside of inquirer callback

userInterface.prototype.printWelcomeMessage = function(){
    console.log(this.welcomeMessage);
}

//Function that handles UI of adding items to the database
//Also calls a separate function that actually adds the data to database
userInterface.prototype.addItemToDatabase = function(){
    //Attributes to Collect from the user
    //Name
    //Description
    //Price
    console.log("We're here");
    inquirer.prompt([
        {
            type: "input",
            message: "Please type a name for your item: ",
            name: "itemName"
        },
        {
            type: "input",
            message: "Please type a description for your item: ",
            name: "itemDescription"
        },
        {
            type: "input",
            message: "Please input a price for your item: ",
            name: "itemPrice"
        }
    ]).then(function(inquirerResponse){
        console.log(inquirerResponse);
    });
}

//This function will display the welcome message, then use inquirer to determine whether they will be bidding or 
//adding an item to the database.
userInterface.prototype.startMenu = function(){
    this.printWelcomeMessage();
    var response; //Needed as calling this from within the callback refers to inquirer, not userInterface
    
    inquirer.prompt([
        {
            type: "list",
            message: "Would you like to bid on existing items, or add an item to the database?",
            choices: ["Add", "Bid"],
            name: "bidOrAdd"
        }
    ]).then(function(inquirerResponse){
        
        if (inquirerResponse.bidOrAdd == "Add"){
            self.addItemToDatabase();
        }
        if (inquirerResponse.bidOrAdd == "Bid"){
            self.bidOnItemFromDatabase();
        }
    }).catch((error)=>{console.log(error)}); 
}

userInterface.prototype.bidOnItemFromDatabase = function(){

    //Display items as an inquirer list
}

//Factory function that creates the UI object - prototypes defined above
function userInterface(){
    var self = this;
}

//Run this code only if it is greatBay.js being run.
if(require.main == module){
    var ui = new userInterface();
    ui.startMenu();
}