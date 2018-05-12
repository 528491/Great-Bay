var mysql = require("mysql");
var inquirer = require("inquirer");

//Create an object to manage the UI components of the application
userInterface.prototype.welcomeMessage = "Welcome to Great Bay!";

userInterface.prototype.printWelcomeMessage = function(){
    console.log(this.welcomeMessage);
}

function userInterface(){
    
}

//Run this code only if it is greatBay.js being run.
if(require.main == module){
    var ui = new userInterface();
    ui.printWelcomeMessage();
}