/*
### SCOPE ####

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




 */
