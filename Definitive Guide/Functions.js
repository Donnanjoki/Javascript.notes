/*

*********************************** Functions - The Definitive Guide **************************************************

>. A function is a fundamental building block for Javascript programs. A function can be defined once but may be
   executed a number of times.

>. Javascript functions are parameterized; a function definition may include a number of list of identifiers, known as parameters
   which act local variables for the body of the function.

>.  Function invocations provide values, or arguments,
for the function’s parameters. Functions often use their argument values to compute a
return value that becomes the value of the function-invocation expression

>. If a function is assigned to a property of an object, it is known as a method of that
object. When a function is invoked on or through an object, that object is the invocation context or this value for the function.

>. Functions designed to initialize a newly
created object are called constructors

>. In JavaScript, functions are objects, and they can be manipulated by programs. 
JavaScript can assign functions to variables and pass them to other functions, for example. 
Since functions are objects, you can set properties on them and even invoke
methods on them.

>. Additionally, JS functions can be nested within other functions, and they have access to any variables that are in the scope
in which they are defined - meaning JS functions are closures.



############### Defining Functions ##########################

A]] Function Declarations 
   >. This consists of the function keywords along with 
       i] an identifier that names the function
       ii] A pair of parentheses around a comma-separated list zero or more identifiers
       iii] A pair of curly braces with zero or more JS statements inside
    Example:
     // compute the distance between cartesian points (x1,y1) and (x2,y2)
        function distance(x1,y1,x2,y2) {
            let dx= x2-x1;
            let dy=y2-y1;
            return Math.sqrt(dx*dx + dy*dy)
        }

B]] Function Expressions

 

C]] Arrow Functions

>. The function keyword is not used, and, since arrow functions are expressions instead of statements,
   there is no need for a function name.

>. The general syntax of an arrow function is a comma-separated list of parameters in parentheses followed by
 the => arrow followed by the function body in curly braces.


 // Examples: const sum = (x, y) => {return x+ y;};

>. But arrow functions support an even more compact syntax. If the body of the function is a single return statement, 
you can omit the return keyword, the semicolon that goes with it, and the curly braces, and write the body of the function as the
expression whose value is to be returned:

    // Example: const sum = (x, y) => x + y;

>. Furthermore if the arrow function has one parameter, you can omit the parentheses around the parameter list

   // Example: const polynomial = x => x*x + 2*x + 3

>. However an arrow function with no arguments at all must be written with an empty pair of parentheses;

   const constantFunc = () => 42;

>. Note: when writing an arrow function, you must not put a new line between the
function parameters and the => arrow.

>. Also, if the body of your arrow function is a single return statement but the expression to be returned is an object literal,
   then you have to put the object literal inside parentheses to avoid syntactic ambiguity between the curly braces of a function body
   and the curly braces of an object literal:
 

      // Example: 
const f = x => { return { value: x }; }; // Good: f() returns an object
const g = x => ({ value: x }); // Good: g() returns an object
const h = x => { value: x }; // Bad: h() returns nothing
const i = x => { v: x, w: x }; // Bad: Syntax Error

   
>. The concise syntax of arrow functions makes them ideal when you need to pass one
function to another function, which is a common thing to do with array methods like
map(), filter(), and reduce().

  // Example:
      make a copy of an array with null elements removed
      let filtered = [1, null,2,2].filter(x=>x !==null);     // filtered == [1,2,3]

      // square some numbers
         let squares = [1,2,3,4].map(x=> x*x)    //squares == [1,4,9,16]


>. Arrow functions differ from functions defined in other ways in one critical way;
    >> they inherit the value of the this keyword from the environment in which they are 
    defined rather than defining their own invocation context as functions defined in other ways do. (an important and useful feature)
    
     >>  Arrow functions also differ from other functions in that they do not have a prototype property, which means that they can‐
         not be used as constructor functions for new classes 






















D] Nested Functions

>. In javascript, functions may be nested within other functions; such as
     
     function hypotenuse(a,b) {
        function square(x) {return x*x;}
        return Math.sqrt(square(a) + square(b));
     }

     // in the code above -  the inner function square() can read and write the parameters a and b defined by the outer function hypotenuse().

>. The interesting thing about nested function is their variable scoping rules;
     >> They can access the parameters and variables of the function (or functions) they are nested within.
     >> 


##################### Invoking Functions #############################

>. 










####################### Function Arguments and Parameters ###############################




######################## Function as Values ##########################################



###################### Function as Namespaces ##########################################




########################## Closures ##########################################


############################## Function Properties, Methods, and Constructor ####################



################################ Functional Programming #########################












































































############# Summary #######################

>. You can define functions with the function keyword and with the ES6 => arrow
syntax
>. • You can invoke functions, which can be used as methods and constructors.
>. Some ES6 features allow you to define default values for optional function
parameters, to gather multiple arguments into an array using a rest parameter,
and to destructure object and array arguments into function parameters

>. You can use the ... spread operator to pass the elements of an array or other
iterable object as arguments in a function invocation.

>. A function defined inside of and returned by an enclosing function retains access
to its lexical scope and can therefore read and write the variables defined inside
the outer function. Functions used in this way are called closures

>. Functions are objects that can be manipulated by JavaScript, and this enables a
functional style of programming.


*/
