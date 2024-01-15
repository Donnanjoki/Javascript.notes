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

>. 


     B]] Escape Sequences in String Literals

>. 



     C]] Working With Strings

>. 


     D]] Template Literal

>. 


     E]] Pattern Matching

>. 












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
they have the same elements in the same order






***************************************TYPE CONVERSIONS**************************************





***************************************VARIABLE DECLARATION & ASSIGNMENT






























































































































































































*/
