/* Derived from the Modern Javascript Info webpage: https://javascript.info/function-basics

>. Functions are the main building blocks of the program as they allow code to be called several times without repetition.

>. Example of built-in functions include: alert(message), prompt(message, default) and confirm(question)

    *** Function Declaration ***

>. We can create a function using a function declaration;
    // Syntax: function name(parameter1, parameter2, ... parameterN) {
        // body
    }

>. Functions helps us to avoid duplication.

    *** Local Variables ***

>. A variable declared inside a function is only visible to that function.
     // Example;
           function shoMessage() {
            let message = "Hello, I'm Javascript!";

             alert(message);
           }

           showMessage(); // Hello, I'm Javascript!
           alert(message); // Error, as the variable is local to the function
    
    *** Outer Variable ***

>. A function can also access an outer variable. 
      // Example: 
           let userName = 'John';

           function showMessage() {
            let message = 'Hello, ' + userName;
            alert(message);
           }

           showMessage(); // Hello, John

>. A function can also access the outer variable and modify it.
       // Example: 
             let userName = 'John';

             function showMessage() {
                userName = "Bob"; // changed the outer variable

                let message = 'Hello, ' + userName;
                alert(message);
             }

             alert(userName);  // it will be John before function call
             showMessage(); // it will be Hello, Bob
             alert(userName); // it will be Bob as the value was modifies by the function

>. Note, if the same-named variable is declared inside a function, then it shadows the outer one
       // Example: 
             let userName = 'John';

             function showMessage() {
                let userName = "Bob"; // declare a local variable

                let message = 'Hello, ' + userName // here the userName will be Bob
                alert(message);
             }

             showMessage(); // Result = Hello, Bob
             alert(userName); // John, as the function did not access the outer variable


        *** Global Variables ***

>. Variables declared outside any function, are called global variables.
>. Global variables are visible from any function - unless shadowed by local.
>. Note: its good practice to minimize the use of global variables, in modern code, most variables reside within their function.
Though at times it can be useful to store project-level data.



        *** Parameter ***

>. We can pass arbitrary data to functions using parameters.
     // Example:
           function showMessage(from, text) { // parameters: from, text
            alert(from + ':' + text);
           }

           showMessage('Ann', 'Hello!'); // Ann: Hello!
           showMessage('Ann', "What's up?"); // Ann: What's up?

>. When a value is passed as a function parameter, it is called an argument.

>. Hence a parameter is a variable listed inside the parentheses in the function declaration. (this is a declaration time term)
>. While an argument is the value that is passed to the function when it is called.  (this is the call time term)

>. We declare functions listings their parameters, then call them passing arguments.


         *** Default Values ***
    
>. If a function is called, but an argument is not provided then the corresponding value becomes undefined.
        // Example
             function showMessage(from, text = "no text given") {
                alert(from + ":" text);
             }

             showMessage("Ann"); // result -  Ann: no text given

        Explanation: above, when the text parameter is not given, it will pass the value "no text given"
                    >. Note we can specify the so-called default(to use if omitted) value for a parameter in the function declaration, using =
                    >. Also the default value kicks in, if the parameter exists, but strictly equals undefined
                        // Example
                              showMessage("Ann", undefined); // result - Ann: no text given

>. Additionally, we can make the default more complex, as shown.
     function showMessage(from text = anotherFunction()) {
        // anotherFunction() only executed if no text is given
        // its result becomes the value of the text.
     }

    >.Note, if the text parameter is provided then the anotherFunction() isn't called, otherwise it is independently called every time the text
    parameter is missing.
         // default parameters in old javascript code
              function showMessage(from, text) {
                if(text === undefined) {
                    text = 'no text given';
                }
                alert(from + ":" + text);
              }

              or using the || operator

              function showMessage(from, text) {
                // if the value of the text is falsy, assign the default value
                // this assumes that text == "" is the same as no text at all
                text = text || 'no text given';
                ...
              }


          *** Alternative Default Parameters ***
        
>. At times it makes sense to assign default values for parameters at a later stage after the function declaration.
>. We can check if the parameter has been passed during the function execution, by comparing it with undefined.
     // Example:
          function showMessage(text) {
            // ...

            if (text === undefined) { // that is if the parameter is missing
                text = 'empty message';
            }
            alert(text); // 
          }

          showMessage(); // empty message

                  or  we could use the || operator

>. function showMessage(text) {
    // if text is undefined or otherwise falsy, set it to empty

    text = text || 'empty';
}

>. Note modern JS engines support the nullish coalescing operator ?? (remember; ?? returns the first argument if it is not null/undefined, otherwise the second one)
      // Example:
          function showCount(count) {
            // If count is undefined or null, show "unknown"
            alert(count ?? "unknown");
          }

          showCount(0); // 0
          showCount(null); // unknown
          showCount(); unknown



         *** Returning a value ***

>. A function can return a value back into the calling code as the result
      // Example: 
           function sum(a, b) {
            return a + b;
           }

           let result = sum(1, 2);
           alert(result); // 3

>. There maybe many occurrences of return in a single function. E.g
       // Example:
            function checkAge(age) {
                if (age >= 18) {
                    return true;
                } else {
                    return confirm('Do you have permission from your parents?')
                }
            }

            let age = prompt('How old are you?', 18);

            if (checkAge(age)) {
                alert( 'Access granted' );
            } else {
                alert( 'Access denied' );
            }

>. Note, it is possible to use return without a value, this will cause function to exit immediately
      // Example: 
           function showMovie(age) {
            if ( !checkAge(age) ) {
                return;
            }
            alert( "Showing you the movie" );
           }

           Breakdown: Above, if checkAge(age) return false, then the showMovie won't proceed to the alert

>. Note: A function with an empty return or without it returns undefined:
         // Example:
             function doNothing() { }
             alert( doNothing() === undefined ); // result true

        // Example: 
             function doNothing() {
                return;
             }
             alert( doNothing() === undefined); // result true

   >> Warning:

>. NEVER add a newline between return and the value.
     // Example
        return
        (some + long + expression + or + whatever * f(a) + f(b))

        Explanation: This will not work, because Javascript assumes a semi-colon after return, hence
        it will effectively become an empty return.

>. If we want to return an expression to wrap across multiple lines, then we should start at the same line as the return or put
the opening parenthesis, and it will work as expected.
        // Example: 
            return (
                some + long + expression
                + or +
                whatever * f(a) +f(b)
            )

         *** Naming a function ***

>. Functions are actions, hence their name is usually a verb.
>. The name should be brief, as accurate as possible and describe what the function does, so that someone reading
the code gets an indication of what the function does.

>. A widespread practice is to start a function with a verbal prefix which vaguely describes the action.
>. Hence there must be an agreement within the team on the meaning of the prefix.

     // Examples;
         "show" - usually shows something
         "get" - returns a value
         "calc" - calculates something 
         "create" - creates something
         "check" - check something and return a boolean etc

>. With a prefix in place, a glance at a function gives an understanding of what kind of work it does and what kind of value it returns
         // Example:
             showMessage(..) // // shows a message
            getAge(..)          // returns the age (gets it somehow)
            calcSum(..)         // calculates a sum and returns the result
            createForm(..)      // creates a form (and usually returns it)
            checkPermission(..) // checks a permission, returns true/false

>. One function - one action; a function should do what its nam suggests no more
>. Two independent actions usually deserve two function, even when they are called together (in this scenario then we will 
    make a third function that calls those two).

    />> Ultrashort function names
>. Functions that are used very often sometimes have ultrashort names.
>. Example jQuery framework defines a function with $. The Lodash library has its core function named _

>. These are exceptions, but function names should be descriptive and concise.


         *** Functions == Comments ***

>. Functions should be short and do exactly one thing. If it is big, then it is worth considering
breaking it down into smaller functions.

>. AA separate function makes it easy to test and debug and also its very existence is a great comment.

         *** Summary ***

>. To make code clean and easy to understand, it is recommended to use mainly local variables and parameters
in the function, not outer variables.

>. A function is an action, so the names are usually verbal.
>. A name should clearly describe what the function does, hence when we see the function call in the code,
 a good name instantly gives us an understanding of what it does and returns.




        ###   PART B: FUNCTION EXPRESSIONS  ###

>.













        ### PART C: ARROW FUNCTIONS ###

>. 

*/
