/*

JAVASCRIPT REFRESH TIPS
**************************

A]] VARIABLES

>. Const does not define a variable but a constant for which the value can no longer be changed, while let
defines a normal variable.

> Note the scope of a variable defined by var is a function scope or declared outside any function, global.
while scope of a variable defined with let is block scope.

>. Refer to the definitive Guide:
>>>>> Two schools of thought: 1st: Use const only for values that are fundamentally unchanging.
                              2nd: Use const for any value that does not happen to change

>. Javascript also allows us to declare the loop variable as part of the loop syntax itself.
     // Example: for(let i = 0, len = data.length; i < len; i++)
                console.log(data[i]);


>. Its is a syntax error to use the same name with more that one let or const declaration in the same scope


>. The scope of a variable is the region of your program source code in which it is defined.
Variables declared with let and const have a block scope - meaning they are only defined within the block of code they are defined.

>. Js class and function definitions are blocks, also if/else statements, while loops, for loops, etc.
>. Roughly speaking, if a variable or constant is declared within a set of curly braces then those curly braces delimit the region of code in which the variable or constant is defined.
>. Variable declared with loops have the loop body as their scope, even though they technically appear outside the curly braces.

>. When a declaration appears at the top level, outside the code block - that is a global variable or constant and has global scope


>>>>>>>>>>>>declaration with var <<<<<<<<<<<<
>. The syntax of var is similar to that of let

// key differences include;
   1. var have a function scope, while let has a block scope; meaning the variables declared with var are scope within the body of the function containing
   them no matter how deeply nested they are.

   2. Using var outside of a function body, declares it as a global variable.
       Note; global variables declared by var are implemented as properties of the global object while those declared by let
       or const are not properties of the global object
    
   3. Unlike variables declared with let, its legal to declare the same variable multiple times with var. Also because var variables have a function scope rather than a block scope.

   4. One of the most unusual features of var declarations is known as hoisting. When a variable is declared with var, the declaration is lifted up (or “hoisted”) to the
   top of the enclosing function. The initialization of the variable remains where
   you wrote it, but the definition of the variable moves to the top of the function.
   So variables declared with var can be used, without error, anywhere in the
   enclosing function. If the initialization code has not run yet, then the value of the
   variable may be undefined, but you won’t get an error if you use the variable
   before it is initialized. (This can be a source of bugs and is one of the important
   misfeatures that let corrects: if you declare a variable with let but attempt to use
  it before the let statement runs, you will get an actual error instead of just seeing
  an undefined value.)




>> Note in strict mode do not attempt to use an undeclared variable, or else you'll get a reference error on running the code.

>. Outside strict mode, however, assigning a value to an undeclared variable with let, const or var creates a global variable - THIS IS BUG-PRONE






B]] ARRAYS

>. One of the characteristics of functional programming is the use of immutable data structures.

// Primitive values in js = undefined, null, booleans, numbers and strings
   Primitives are immutable, hence no way to change a primitive value
   Primitives are also compared by value - hence two values are the same only if they have the same value.


// Objects(inclusive of arrays and functions) - are mutable, hence their values can change.
   Objects are not compared by value, as two distinct objects are not equal even if they have the same properties and values;
   and two distinct arrays are not equal even if they have the same elements in the same order.

   >. Object vales are also sometimes called reference types and are compared by reference.
   Tow objects values are the same only if they refer to the same underlying object.
   >. Similarly, if you want to compare two distinct arrays or objects, we must compare their properties or elements.

let a = ["a", "b", "c"];
let b = [];
for(let i = 0; i < a.length; i++) {
    b[i] == a[i];
}
let c = Array.from(b);

   function equalArrays(a,b) {
    if (a === b) return true;
    if (a.length !== b.length) return false;
    for(let i = 0; i < a.length; i++) {
        if (a[i] !== b[i])
        return false;
    } return true;
   }


   C]] FUNCTIONS

   ## using arrow functions

   const sum = (p1, p2) => {
    console.log(p1)
    console.log(p2)
    return p1 + p2
   }

>. If there is just a single parameter, we can exclude the parentheses from the definition:

const square = p => {
    console.log(p)
    return p * p
}

>. We xan further shorten the function by eliminating the braces, if function contains a single expression

const square = p => p*p



*/
