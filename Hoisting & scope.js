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
2. Module Scope: Tje scope for running code in module mode.
3. Function scope: The scope creates with a function.
4. Block scope: The scope created with a a pair of curly braces.

 */
