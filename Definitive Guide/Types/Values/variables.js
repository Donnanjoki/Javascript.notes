/*  


TYPES, VALUES AND VARIABLES
*****************************

## intro ##

>. Computer programs work by manipulating values be it a number or string values.

>. The kind of values that can be represented and manipulated in a programming language are known as types and this serves as
a fundamental characteristics of a programming language, in that the set of types it supports

>. When a program needs to retain a value for future use, it assigns the value to / or stores tha value in a variables.
>. Additionally, the way variables work is another fundamental characteristic of any programming language.



## Overview and Definitions ##
>. Javascript has two type sets:
   1. Primitive Types
      
      >. These include; numbers, strings, booleans
      >. Special javascript values; null and undefined
      >. Special-purpose type: symbol


      # These types are immutable

   2. Object Types

   >. An object is a collection of properties where each property has a name and a value(either a primitive value or another object).
   >. A special object includes the global object.

   >. An ordinary javascript object is an unordered collection of named values.
   >. Another special kind of object is an Arrays which is an ordered collection of numbered values.
   >. Other useful object types include;

      a] A Set object - reps a set of values
      b] A Map object which reps a mapping  from keys to values
      c] typed array; facilitates operations on arrays of bytes and other binary data
      d] RegExp type: represents textual patterns and enables sophisticated matching, searching and replacing operations on strings.
      e] The Date type - represents dates and times and supports rudimentary date arithmetic.
      f] Error & its subsets: represents errors that can arise when executing Javascript code.


    # These type are mutable; hence a javascript program can change the values of object properties and array elements.

>. JavaScript differs from more static languages in that functions and classes are not just
part of the language syntax: they are themselves values that can be manipulated by
JavaScript programs. 

>. Like any JavaScript value that is not a primitive value, functions
and classes are a specialized kind of object.

>. The Javascript interpreter performs automatic garbage collection for memory management, hence no need to worry 
about destruction or deallocation of objects or other values.
>. When a value is no longer reachable, or a program has no other way to refer to it, the interpreter knows it can never be used again and automatically
reclaims the memory it was occupying.

>. Javascript  supports an object-oriented programming style, meaning that rather than have globally defined functions to operate on values of various types, the types themselves
define methods for working with the values.


>. Technically, its only Javascript objects that have methods, though numbers, strings, booleans and symbol values behave as if they have methods.
>. Null and undefined are the only values that methods cannot be invoked on.


>. Javascript liberally converts values from one type to another.


>. Constants and variables allow us to use names to refer to values in your program.
>. Constants are declared with const and variables are declared with let -or with var for older javascript code.
>. Javascript constants and variables are untyped; declarations do not specify what kind of values will be assigned.





******************************** NUMBERS *****************************************************

>. Used to represent integers and to approximate real numbers.
>. Javascript represents numbers using the 64-bit floating point format defined by the IEEE 754 standard, meaning you can represent numbers as large as
±1.7976931348623157 × 10308 and as small as ±5 × 10−324.

>. When a number appears directly in a Javascript program, its called a numeric literal.
>. Js supports numeric literals in several formats.
Note any numeric literal can be proceeded by a minus sign to make the number negative

     A]] Integer Literals **

>. Base-10 integer literals, hexadecimal (base-16) values are recognized as integer literals.

    B]] Floating-Point Literals

>. Floating-point literals can have a decimal point; they use the traditional syntax for
real numbers. A real value is represented as the integral part of the number, followed
by a decimal point and the fractional part of the number.

>. Floating-point literals may also be represented using exponential notation: a real
number followed by the letter e (or E), followed by an optional plus or minus sign,
followed by an integer exponent.
    // Example: 3.13 or 1.4738223E-32

     C]] Arithmetic in Javascript

>. Javascript programs work with numbers using arithmetic operators that the language provides.
   // Example: + for addition || - for subtraction || * for multiplication || / for division and % for modulo
>. In addition to these basic arithmetic operators, JavaScript supports more complex
mathematical operations through a set of functions and constants defined as proper‐
ties of the Math object:

>. Arithmetic in JavaScript does not raise errors in cases of overflow, underflow, or division by zero. 
When the result of a numeric operation is larger than the largest representable number (overflow), 
the result is a special infinity value, Infinity.

>. Similarly,
when the absolute value of a negative value becomes larger than the absolute value of
the largest representable negative number, the result is negative infinity, -Infinity


>. Division by zero is not an error in javascript, it simply returns infinity or negative infinity.
>. The exception is however, zero divide by zero which the result of this operation is the special not-a-number value NaN.
>. NaN arise when you attempt to divide infinity by infinity, take the square root of a
negative number, or use arithmetic operators with non-numeric operands that cannot
be converted to numbers.

// Number properties include;
     Number.parseInt() //same as the global parseInr() function
     Number.parseFloat() // same as the global parseFloat() function
     Number.isNaN(x) // is x the NaN value?
     Number.isFinite(x) // Is x a number and finite?
     Number.isInteger(x) // Is x an integer?
     Number.isSafeInteger(x) // Is x an integer -(2**53) < x < 2**53?
     Number.MIN_SAFE_INTEGER // => -(2**53 - 1)
     Number.MAX_SAFE_INTEGER // => 2**53 - 1
     Number.EPSILON // => 2**-52: smallest difference between numbers



>. Note: not-a-number does not compare to any other value including itself.
>. Meaning x === NaN will be indicated as false, regardless the fact that x variable value is NaN.
>. Instead, you must write X != x or Number.isNaN(x); this expression will be true, only if, x has the same value
as the global constant NaN.

>. The global function isNaN() is similar to Number.isNaN(). It returns true if its argument is NaN, or if that argument is a non-numeric value that cannot be converted 
to a number.

>. The related function Number.isFinite() returns true if its argument is a
number other than NaN, Infinity, or -Infinity. The global isFinite() function
returns true if its argument is, or can be converted to, a finite number.

>. The negative zero value is also somewhat unusual. It compares equal (even using Jav‐
aScript’s strict equality test) to positive zero, which means that the two values are
almost indistinguishable, except when used as a divisor:
     let zero = 0; // Regular zero
     let negz = -0; // Negative zero
     zero === negz // => true: zero and negative zero are equal
     1/zero === 1/negz // => false: Infinity and -Infinity are not equ



     D]] Dates and Time

>.Javascript Dates are objects, but they also have a numeric representation as a timestamp that specifies the number of elapsed seconds since January 1, 1970.


// Example: 
     let timestamp = Date.now(); // the current tile as a timestamp (a number)
     let now = new Date(); // current time as a Date object
     let ms = now.getTime(); // convert to a millisecond timestamp
     let lso = now.toISOString(); // convert to a string in standard format




****************************************TEXT************************************

>. Javascript type for representing text is a string.
>.  A string is an immutable
ordered sequence of 16-bit values, each of which typically represents a Unicode character. 
>. The length of a string is the number of 16-bit values it contains. 
>. JavaScript’s strings (and its arrays) use zero-based indexing: the first 16-bit value is at position 0,
the second at position 1, and so on. 
>. The empty string is the string of length 0. JavaScript does not have a special type that represents a single element of a string. 
>. To represent a single 16-bit value, simply use a string that has a length of 1.

    


      A]] String Literals

>. To include a string in a JavaScript program, simply enclose the characters of the
string within a matched pair of single or double quotes or backticks (' or " or `).

>. As of ES5, however, you can break a string literal across multiple lines by ending each line but the last with a backslash (\). 
Neither the backslash nor the line terminator that follow it are part of the string literal

>. Note when combining JavaScript and HTML, it is a good idea to use one style of quotes for JavaScript and the
other style for HTML. 


     B]] Escape Sequences in String Literals

>. The backslash character (\) in Javascript represents a character that is not otherwise representable within the string.
   // Example \n is an escapee sequence which reps a newline character.

>. Check out javascript escape sequences and the character they represent.



     C]] Working With Strings

>. Ability to concatenate string by using the + operator with numbers.
    // Example:
       let msg = "Hello, " + "world"; // Produces the string "Hello, world"
       let greeting = "Welcome to my blog," + " " + name;


>. Strings can be compared with standard === string equality and !== inequality operator.
>. Note:: two strings are equal if and only if they consist of exactly the same sequence of 16-bit
values.

>. Strings can be compared using <, <=, >, and >= operators.

>. To determine the length of a string use the number of 16-bit values it contains - use the length property of the string.
    s.length


>. Javascript has a rich API for working with strings; These include;


>>>>>.. Example:
let s = "Hello, world"; 


// Obtaining portions of a string
s.substring(1,4) // => "ell": the 2nd, 3rd, and 4th characters.
s.slice(1,4) // => "ell": same thing
s.slice(-3) // => "rld": last 3 characters
s.split(", ") // => ["Hello", "world"]: split at delimiter string

// Searching a string
s.indexOf("l") // => 2: position of first letter l
s.indexOf("l", 3) // => 3: position of first "l" at or after 3
s.indexOf("zz") // => -1: s does not include the substring "zz"
s.lastIndexOf("l") // => 10: position of last letter l


// Boolean searching functions in ES6 and later
s.startsWith("Hell") // => true: the string starts with these
s.endsWith("!") // => false: s does not end with that
s.includes("or") // => true: s includes substring "or"


// Creating modified versions of a string
s.replace("llo", "ya") // => "Heya, world"
s.toLowerCase() // => "hello, world"
s.toUpperCase() // => "HELLO, WORLD"
s.normalize() // Unicode NFC normalization: ES6
s.normalize("NFD") // NFD normalization. Also "NFKC", "NFKD"


// Inspecting individual (16-bit) characters of a string
s.charAt(0) // => "H": the first character
s.charAt(s.length-1) // => "d": the last character
s.charCodeAt(0) // => 72: 16-bit number at the specified position
s.codePointAt(0) // => 72: ES6, works for codepoints > 16 bits


// String padding functions in ES2017
"x".padStart(3) // => " x": add spaces on the left to a length of 3
"x".padEnd(3) // => "x ": add spaces on the right to a length of 3
"x".padStart(3, "*") // => "**x": add stars on the left to a length of 3
"x".padEnd(3, "-") // => "x--": add dashes on the right to a length of 3


// Space trimming functions. trim() is ES5; others ES2019
" test ".trim() // => "test": remove spaces at start and end
" test ".trimStart() // => "test ": remove spaces on left. Also trimLeft
" test ".trimEnd() // => " test": remove spaces at right. Also trimRight


// Miscellaneous string methods
s.concat("!") // => "Hello, world!": just use + operator instead
"<>".repeat(5) // => "<><><><><>": concatenate n copies. ES6


# Note; You can also access individual  characters from a string using square brackets instead of the charAt()method;

let s = "Hello, world";
s[0] // "h"
s[s.length-1] // "d"




     D]] Template Literal

>. In ES6 and later, string literals can be delimited with backticks.
  
// Example: 
    let name = "Bill";
    let greeting = `Hello ${ name }`;  // greeting == "Hello Bill" 
    
>. A template literal may also include any number of expressions and can use escape characters that
normal strings can, and it can span any number of lines with no special escaping required.








     E]] Pattern Matching

>. JavaScript defines a datatype known as a regular expression (or RegExp) for describing
and matching patterns in strings of text. 
>. Texts between a pair of slashes constitutes as a regular expression literal.
     // Example: 
        /^HTML/; // Match the letters H T M L at the start of a string

>. RegExp objects define a number of useful methods, and strings also have methods
that accept RegExp arguments. 

                  // For example:
let text = "testing: 1, 2, 3"; // Sample text
let pattern = /\d+/g; // Matches all instances of one or more digits
pattern.test(text) // => true: a match exists
text.search(pattern) // => 9: position of first match
text.match(pattern) // => ["1", "2", "3"]: array of all matches
text.replace(pattern, "#") // => "testing: #, #, #"
text.split(/\D+/) // => ["","1","2","3"]: split on nondigits












*****************************************BOOLEAN VALUES *************************************

>.A boolean value represents truth r falsehood, on or off; yes or no.
>. The reserved words are; true and false.

>. Boolean values are a result of comparison you make in your Javascript program.
>. Boolean values are commonly used in Javascript control structures.
     // Example: The code confirms whether a equals b, if so, it adds 1 otherwise, it add 1 to a
        if (a === 4) {
            b = b + 1;
        } else {
            a = a + 1;
        }

>. Note any javascript value can be converted to a boolean
>. Values such as undefined, null, 0, -0, NaN are referred to as falsy values.
>. All other values, including all objects and arrays are truthy values.
>. Anytime javascript expects a boolean value, a falsy value works like false, and a truthy value works like true.


>> Important boolean operators;
   && AND operation - evaluates to a truthy value, if and only if both its operands are truthy; and a falsy value if otherwise
   || OPR operation - it evaluates to a truthy value if either one or both its operand is truthy and evaluates to a falsy value if both operands are falsy.
   ! unary Operator - performs the Boolean NOT operation, it evaluates to true if it operand is falsy and evaluates to false if its operand is truthy.






******************************************NULL & UNDEFINED **********************************

>. "null" is a language keyword that evaluates to a special value that is used to indicate the absence of value = "no object".

>. Also the "undefined", indicates a deeper kind of absence.
     >> It is the value of variables that have not been initialized and the value you get when you query the value of an object property or array element that does not exist.
     >> Its also the return value of functions that do not explicitly return a value and the value of function parameters for which no argument is passed.
     >> undefined is a predefined global constant unlike null which is a language keyword.


>. Both are falsy values; null and undefined
>. Neither Null or undefined have properties or methods.
>. Note using . or [] to access a property or method from these values leads to a TypeError

>. According to the author; undefined reps a system-level, unexpected or error-like absence of value, whereas a null
represents a program-level, normal, or expected absence of value.


   




******************************************SYMBOLS ******************************************

>. To understand strings you need to know that Javascript's fundamental Object type is an unordered collection of properties, where each property has a name and a value.

>. Property names are typically strings, but in ES6 symbols can also serve this purpose.
         // Example:
         let strname = "string name"; // A string to use as a property name
         let symname = Symbol("propname"); // A Symbol to use as a property name
         typeof strname // => "string": strname is a string
         typeof symname // => "symbol": symname is a symbol
         let o = {}; // Create a new object
         o[strname] = 1; // Define a property with a string name
         o[symname] = 2; // Define a property with a Symbol name
         o[strname] // => 1: access the string-named property
         o[symname] // => 2: access the symbol-named property

>. The symbol type does not have a literal syntax.
>. To obtain a symbol value, you call the Symbol() function - the function never returns the same value twice, even when called with the same argument.

>. Hence you can call Symbol() to obtain a symbol value, and can use that value as a property name, to add a new property to an object,
 and do not need to worry that you might be overwriting an existing property with the same name. 

 >. In practice symbols serve as a language extension mechanism.
 >. Symbol.iterator is a Symbol value that can be used as a method to make an object iterable.

 >. The Symbol()function takes an optimal string argument and returns a unique symbol value.

 >. Symbol.for()function is completely different from Symbol()function, as Symbol() never returns the same value twice, but Symbol.for() always returns the same value when called within the same string.

 .. // EXample: The string passed to Symbol.for() appears in the output of toString() for the returned Symbol, and it can also be retrieved by calling Symbol.keyFor() on the returned Symbol.
     
      let s = Symbol.for("shared");
      let t = Symbol.for("shared");
       s === t // true
       s.toString // "Symbol(shared)"
       Symbol.keyFor(t) // "shared"




******************************************THE GLOBAL OBJECT*********************************

>. The global object is a regular Javascript object, whose properties are globally defined identifiers that are available to a Javascript program.

>. When the Javascript interpreter starts, or whenever a web browser loads a new page - it creates a new global object and gives it an initial set of
properties that define;

    >>1] Global constants like undefined, Infinity and NaN
    >> 2] Global functions like isNaN(), ParseInt() and eval()
    >>3] Constructor Functions like Date(), RegExp(), String(), Object(), and Array()
    >> 4] Global objects like Math and JSON.


>>>> In Node, the global object has a property named global whose value is global object itself, hence you
can always refer to the global object by the name global in Node programs.


>. In web browsers, the Window object serves as the global object for all JS Code contained in the browser window it represents.
>. This global Window object has a self-referential window property that can be used to refer to the global object. 
>. The Window object defines the core global properties, but it also defines quite a few other
globals that are specific to web browsers and client-side JavaScript.








********************************************IMMUTABLE VALUES & MUTABLE OBJECT REFERENCES **********************


                 // PRIMITIVE TYPEs

>. Primitives are immutable: there is no way to change (or “mutate”) a primitive value.

>. It doesn't make sense to change the value of a number, however its not so obvious for a string;
>. Since strings are like arrays of characters, you might expect to be able to alter the character at any specified index. 
>. In fact, JavaScript does not allow this, and all string methods that appear to return a modified string are, in fact, returning a new string value. 
    // Example

       let s = "hello"  
       s.toUpperCase(); // Returns "HELLO", but doesn't alter s
       s        // "hello" ; the original string has not changed.



>. Primitives are compared by value; hence two values are the same only if they have the same value
    >>. For strings its not so obvious; If two distinct string values are compared, JavaScript treats them as equal if, and only if, 
        they have the same length and if the character at each index is the same.

                // OBJECTS

>. Objects are different than primitives, first they are mutable - hence their values can change.
   
    // Example
    let 0 = { x: 1};

    o.x = 2 ;  // mutate it by changing the value of the property
    o.y = 1;  // mutate it again by adding a new property

    let a = [1,2,3]; // Arrays are also mutable
    a[0] = 0; // Change the value of an array element
    a[3] = 4; // Add a new array element 


>. Objects are not compared by value; two distinct objects are not equal even if they
have the same properties and values. And two distinct arrays are not equal even if
they have the same elements in the same order.

// let o = {x: 1}, p = {x: 1}; // Two objects with the same properties
   o === p                     // => false: distinct objects are never equal
   let a = [], b = [];         // Two distinct, empty arrays
   a === b                     // => false: distinct arrays are never equal


>. Objects are sometimes called reference types to distinguish them from Javascript's primitive values.
>. Objects are compared by reference; hence two objects are the same if and only if they refer to the same underlying object.

       // Example:
       let a = []; // the variable a refers to ana empty array
       let b = a;  // Now b refers to the same array

       b[0] = 1;   // Mutate the array referred to by variable b
       a[0]        // 1: the change is also visible through variable a
       a === b     // true: as a and b refer to the same object, hence are equal.


>. Note assigning an object (or array) to a variable simply assigns the reference: 
it does not create a new copy of the object. 
>. If you want to make a new copy of an object or array, you must explicitly copy the properties of the object
or the elements of the array.

>. Similarly to compare arrays we must compare their properties or elements.








***************************************TYPE CONVERSIONS**************************************





***************************************VARIABLE DECLARATION & ASSIGNMENT


>. Binding a name to a value gives us a way to refer to that value and use it in the programs we write. 
>. When we do this, we typically say that we are assigning a value to a variable. The term “variable” implies that
new values can be assigned: that the value associated with the variable may vary as our program runs.
>. If we permanently assign a value to a name, then we call that name
a constant instead of a variable.


>. Before you can use a variable or constant in a Javascript program you must first declare it -  this can be done with let or const keywords.



     ## Declaration with let and const

>. In modern Javascript variables are declared with the let keyword, you can also declare multiple variables with a single let statement.
   // Example:
      let i;
      let sum;
      let 1, sum;

>. Its good practice to assign an initial value to your variables when you declare them;
   // Example:
      let message = "hello";
       let i = 0, j = 0, k = 0;
       let x = 2, y = x*x; // Initializers can use previously declared variables

>. When you do not specify an initial value for a value declared with let statement, the variable is declared but the value remains undefined until your code
assigns a value to it.

>. To declare a constant instead of a variable, use const instead of let. const works just
like let except that you must initialize the constant when you declare it:

>. As the name implies, constants cannot have their values changed, and any attempt to
do so causes a TypeError to be thrown.

>. It is a common (but not universal) convention to declare constants using names with
all capital letters such as H0 or HTTP_NOT_FOUND as a way to distinguish them from
variables.

>>> Note use const for values that must not change.



-------------------------Variable and constant scope

>. The scope of a variable refers to the region of program source, where it is defined.

  // Variables and constants are block scoped, meaning they only defined within the block of code in which
     let and const statements appear.

  // JavaScript class and function definitions are blocks, and so are the
     bodies of if/else statements, while loops, for loops, and so on.    

  // NOTE:: if a variable or constant is declared within a set of curly braces, then those curly braces
            delimit the region of code in which the variable or constant is defined.

   // Variables and constants declared as part of a for, for/in, or for/of loop have the loop body as their scope,
      even though they technically appear outside of the curly braces.

   // When a declaration appears at the top level, outside of any code blocks, we say it is a
      global variable or constant and has global scope.







--------------------------Repeated declarations

>. t is a syntax error to use the same name with more than one let or const declaration
in the same scope. It is legal (though a practice best avoided) to declare a new variable
with the same name in a nested scope:

      // Example:
      const x = 1; // Declare x as a global constant
      if (x === 1) {
        let x = 2; // Inside a block x can refer to a different value
        console.log(x); // Prints 2
    }
    
    console.log(x); // Prints 1: we're back in the global scope now
    let x = 3; // ERROR! Syntax error trying to re-declare x



---------------------------Declarations and types

>. Note in javascript unlike other statically typed languages like C and Java, there is no type associated with
JavaScript’s variable declarations.2 A JavaScript variable can hold a value of any type.







     ## Variable Declaration with Var

>. The var keywords is just like let syntax. Though there are key differences;

   A]] Variables declared with var have a function scope while those of let have a block scope

   B]] If you use var outside of a function body, it declares a global variable. But global variables declared with var differ from globals declared with let in an important way. 
    Globals declared with var are implemented as properties of the global object
    The global object can be referenced as globalThis. So if you write var x = 2; outside of a function, it is like you wrote globalThis.x = 2;. 
    Note however, that the analogy is not perfect: the properties created with global var declarations cannot be deleted with the delete operator. 
    Global variables and constants declared with let and const are not properties of the global object.

    C]] Unlike variables declared with let, it is legal to declare the same variable multiple
       times with var. And because var variables have function scope instead of block scope, it is actually common to do this kind of redeclaration.
    
     D]] One of the most unusual features of var declarations is known as hoisting. When a variable is declared with var, the declaration is lifted up (or “hoisted”) to the
        top of the enclosing function. The initialization of the variable remains where
        you wrote it, but the definition of the variable moves to the top of the function.
        So variables declared with var can be used, without error, anywhere in the
        enclosing function. If the initialization code has not run yet, then the value of the
        variable may be undefined, but you won’t get an error if you use the variable
        before it is initialized. (This can be a source of bugs and is one of the important
        misfeatures that let corrects: if you declare a variable with let but attempt to use
        it before the let statement runs, you will get an actual error instead of just seeing an undefined value.)
    
    


### Note - in strict mode, if you attempt to use an undeclared variable - you will get a reference error when you run the code.
           outside the strict mode, if you assign a value to a name that has not been declared with let, const or var - you will end up creating a new global variable. 
           Hence opt to use strict mode.
    
    
 ---------------    ## Destructuring Assignment --------------
>. Destructuring assignment is a special syntax that allows us to “unpack” arrays or objects into a bunch of variables, as sometimes that’s more convenient.
>. Destructuring also works great with complex functions that have a lot of parameters, default values, and so on. Soon we’ll see that.

>. In a destructuring assignment, the value on the righthand side of the equals sign is an array or object (a “structured” value), and the lefthand
side specifies one or more variable names using a syntax that mimics array and object literal syntax.


>.  When a destructuring assignment occurs, one or more values are extracted (“destructured”) from the value on the right and stored into the variables named on the left. 
>. Destructuring assignment is perhaps most commonly used to initialize variables as part of a const, let, or var declaration statement, but it can also be
done in regular assignment expressions (with variables that have already been declared).

// Example:

let [x, y] = [1, 2]; // same as let x=1, y=2
[x, y] = [x+1, y+1];  // same as x = x + 1, y = y + 1
[x,y] = [y, x]       // swap the values of the two variables
[x,y]               // [3, 2]; the incremented and swapped values


>. The two most used data structures in JavaScript are Object and Array.

    >> Objects allow us to create a single entity that stores data items by key.
   >>  Arrays allow us to gather data items into an ordered list.


------------- ARRAY DESTRUCTURING


    //  Example of an array destructured into variables  
      let arr = ["John", "Smith"];

      // destructuring the assignment into set firstName = arr[0] and surName = arr[1]

      let [firstName, surName] = arr;

      alert(firstName); // John
      alert(surName); // Smith


  // It’s called “destructuring assignment,” because it “destructurizes” by copying items into variables. But the array itself is not modified.
     It’s just a shorter way to write:

        // let [firstName, surName] = arr;
           let firstName = arr[0];
           let surName = arr[1];


    // Unwanted elements of the array can also be thrown away via an extra comma:
        Example::
        let [firstName, , tile] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
        // now titles = ["Consul", "of the Roman Republic"]



   ### Default Values
>. If the array is shorter than the list of variables at the left, there’ll be no errors. Absent values are considered undefined:
      let [firstName, surname] = [];
      alert(firstName); // undefined
      alert(surname); // undefined

>. If we want a “default” value to replace the missing one, we can provide it using =:

    // default values
        let [name = "Guest", surname = "Anonymous"] = ["Julius"];

        alert(name);    // Julius (from array)
        alert(surname); // Anonymous (default used)




---------------------------- Object Destructuring







-------------------------------- Nested Destructuring






---------------------------------
































































































































































*/
