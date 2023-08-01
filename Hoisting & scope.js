/*
                                    ### SCOPE ####
Scope in Javascript refers to the current context of the code, which determines the accessibility of variables to Javascript.
There are 2types of scope; local and global.

#Global Variables: are those that are declared outside of a block.
#Local Variables: These are those that are declared inside of a block.



There are 4 different scope levels:
1. Global scope: This scope allows a defined variable to be accessed from anywhere in your
entire application. As an application grows this may prove to be a problem as it becomes difficult to keep track of 
the global scope.

2. Module Scope. This scope is like the global scope, with one major difference. They are only available in the file you have defined them in.
Hence you cannot use them in other files. To use module scope you should set it up as so.
type="module" >> <script src="script-1.js" type="module"></script>

3. Block Scope: Anytime you have code inside curly braces {} that is considered its own block scope.
This means that things like functions, if statement, for loops, etc. all create own block scope.

4. Function Scope: The function scope relates to the var keyword. Variables defined by the var keyword are scoped at the function level instead of the block level, 
meaning they only care about the curly braces of a function 

// Summary
1. Global Scope: The default Scope for all code running in script mode
2. Module Scope: The scope for running code in module mode.
3. Function scope: The scope created with a function.
4. Block scope: The scope created with a a pair of curly braces.

// It is recommended to declare variables that are block-scoped as they produce code that is less likely to unintentionally override variable values.

//Variables
A variable is a container used for storing values. In JavaScript there are three keywords used to declare variables that is;
var, let and const.
>. Variables can be represented by any javascript data type, be it string, number, object, Boolean and null values.
>. Variables store data in memory which can be accessed and modified. Similarly these variables can also be reassigned and given new values.

//Naming Variables.
Variable names are known as identifiers.
 >>>> 
 >. Variable names can only consist of letters (a-z), numbers (0-9), dollar sign symbols ($), and underscores (_)
>. Variable names cannot contain any whitespace characters (tabs or spaces)
>. Numbers cannot begin the name of any variable
>. There are several reserved keywords which cannot be used as the name of a variable
>. Variable names are case sensitive

A commonly accepted practice is to use const as much as possible and let in the case of loops and reassignment. 
var can be avoided outside of working on legacy code.

// The lifetime of a JavaScript variable begins when it is declared.
Function(local) variables are deleted when the function is completed, while global variables are deleted when you close the browser window or tab.

Keyword:
var: Function scope 
let: Block Scope
const: Block scope

//Constants

These are values which cannot be modified or changed. A common convention is to write all const identifiers in uppercase, as this marks
them as readily distinguishable from other values.

>. Since const values cannot be reassigned, they need to be declared and initialized at the same time, or they will also throw an error.
>. Regardless const values are mutable hance can be modified.

 >>>Example:
 //create a car object with two properties.
 const CAR = {
    color: "blue",
    price: 15,000
 }

 //modify a property of car
 CAR.price = 20,000;

 console.log(CAR);

output: 
{color: 'blue', price: 20000}






                                        ### HOISTING ###
>. Hoisting is JavaScript behavior of moving declarations to the top of the current scope (or to
 the top of the current script or the function). 
>. In strict mode, JavaScript does not allow variables to be sued if they are not declared.
>. A solution to avoid bugs, is to always declare variables at the beginning of every scope.
>. Variables defined with let and const are hoisted at the top of the block but not initialized. 
This means that the block of code is aware of the variable but it cannot be used until it is declared.
>. Javascript hoists declarations not initializations.

 ****By using the let variable before it is declared, this will result in a REFERENCE ERROR,
 as the variable falls in a temporal dead zone from the start of the block until it is declared;
  // Example
   carName = "Volvo";
   let carName;

   console.log(carName); //output = REFERENCE ERROR

**** By using the const variable before it is declared results in a syntax error, as the code simply doesn't run.
   // Example: 
   carName = "Volvo";
   const carName;

   console.log(carName); // output = syntax error



 */
