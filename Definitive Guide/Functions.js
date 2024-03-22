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


>.  !important note - the name of the function in a function declaration becomes a variable whose value is the function itself.
                      Function declaration statements are "hoisted" to the top of the enclosing script, function or block so that function defined in this
                      way may be invoked from code that appears before the definition.


>. In the strict mode of ES6, function declarations are allowed within blocks. A function defined within a block only exists within that block, how‐
ever, and is not visible outside the block.



B]] Function Expressions

 >.. Function expressions look like function declaration, but appear within the context os a larger expression or statement.
>. The function name is optional for functions defined as expressions. 

>. A function declaration actually declares a variable and assigns a function object to it, while a function expression does not
declare a variable; it is up to you to assign the newly defined function object to a constant or variable if you are going to refer to it multiple times.

>. GOOD PRACTICE: Its considered good practice to use const with function expressions so you don't accidentally overwrite your functions by assigning new values.

   // Example:
      // This function expression defines a function that squares its argument.
        // Note that we assign it to a variable
        const square = function(x) {return x*x;}

        // function expressions can include names, which is useful for recursion
          const f = function fact(x) { if (x<= 1) return 1; else return x*fact(x-1);}


      // function expressions can also be used arguments to other funtions;

      [3,2,1].sort(function(a,b) {return a- b;});

   // function expressions can also be sometimes defined and invoked immediately

   let tensquared = (function(x) {return x*x;} (10))


>. Note  in order to invoke a function, you must be able to refer to it, and you can’t refer to a function
defined as an expression until it is assigned to a variable, so functions defined with expressions cannot be invoked before they are defined.


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


##################### Invoking Functions #############################

>. Javascript functions can be invoked in 5 ways;
     a] As functions
     b] As methods
     c] As constructors
     d] Indirectly through their call() and apply() methods
     e] Implicitly via JS language features that do not appear like normal invocations



     ############ Function Invocation

>. Functions are invoked as functions or as methods with an invocation expression..
>. An invocation expression consists of a function expression that evaluates to a function object followed by an open parenthesis, a comma-separated list
of zero or more argument expressions and a close parenthesis. 

>. If a function expression is a property-access expression - that is if the function is the property of an object or an element of an array
  then it is indeed a method invocation expression.



  // Example : a regular function invocation expression

  printprops({x:1});
  let total = distance(0,0,2,1) + distance(2,1,3,5);
  let probability = factorial(5)/factorial(13);

>. In an invocation, each argument expression (the ones between the parentheses) is
evaluated, and the resulting values become the arguments to the function. 

>. These values are assigned to the parameters named in the function definition. 
In the body of the function, a reference to a parameter evaluates to the corresponding argument
value.


// Read on Recursive functions and stack.



     ############## Method Invocation 

>. A method is nothing more than a JavaScript function that is stored in a property of an
object.

>. The arguments and return value of a method invocation are handled exactly as
described for regular function invocation.

>. Method invocations differ from function invocations in one important way, however: the invocation context.


// Example: 
     let calculator = { // an object literal
      operand1: 1,
      operand2: 2,
      add() {
         this.result = this.operand1 + this.operand2
      }
     };

     calculator.add(); // a methods invocation to compute 1+1.
     calculator.result // 2


>.Most method invocation utilize the dot notation for property access, but property expressions that ise square brackets also cause method invocatio.

  // Example
      o["m"](x,y) // another way to write o.m(x,y)

>. Method invocations may also involve more complex property access expressions

customer.surname.toUpperCase(); // invoke method on customer.surname


>. Methods and the this keyword are central to the object-oriented programming paradigm.


// Read on Method chaining




>. This ia a keyword, not a variable or property name. Javascript syntax does not allow you to assign a value to "this".
>.









     ######################## Constructor Invocation

>. If a function or method invocation is preceded by the keyword new, then it is a constructor invocation.
>. Constructor invocations differ from regular function and method invocations in their handling of arguments,
invocation context, and return value.

>. Constructor functions do not normally use the return keyword. They typically initialize the new object and then return implicitly when they reach the end of their body.

>. In this case, the new object is the value of the constructor invocation expression. If, however, a constructor explicitly uses the return statement to return an object, then
that object becomes the value of the invocation expression. 

>. If the constructor uses return with no value, or if it returns a primitive value, that return value is ignored
and the new object is used as the value of the invocation.






     ############################# Indirect Invocation

>. Javascript functions are objects and hence have methods - Two of these methods
call() and apply(), invoke functions indirectly. Both methods allow one to explicitly specify the "this" value for the invocation,
meaning you can invoke any function as a method of any object, even when it not actually a method to that object.


>. Both methods also allow you to specify the arguments for the invocation. 
  The call() method uses its own argument list as arguments to the function, and the apply() method expects an array of values to be used as arguments.



     ########################## Implicit Function Invocation

>. There are various JavaScript language features that do not look like function invocations but that cause functions to be invoked. 
>. These functions implicitly invoked may bring about  bugs, side effects, and performance issues which become harder to diagnose and fix than in regular functions 
since it may not n=be obvious from a simple inspection of your code when they are being called.

// The language features that cause implicit function invocation include

A]] f an object has getters or setters defined, then querying or setting the value of its
properties may invoke those methods. 

B]] When an object is used in a string context (such as when it is concatenated with a
string), its toString() method is called. Similarly, when an object is used in a
numeric context, its valueOf() method is invoked.

C]] When you loop over the elements of an iterable object, there are a number of
method calls that occur.

D]] A tagged template literal is a function invocation in disguise.

E]] proxy objects - have their behavior completely controlled by
functions. Just about any operation on one of these objects will cause a function
to be invoked








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
