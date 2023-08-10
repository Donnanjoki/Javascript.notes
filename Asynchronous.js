// Book: The Definitive Guide : Chapter 13: Asynchronous Javascript

/*
>. Most real-world computer programs are asynchronous, meaning that they have to stop computing while waiting for data to arrive or for
some event to occur.
>. Javascript programs in a web browser are typically event-driven meaning they have to wait for the user to click
or tap before they actually do anything.
>. Consequently Javascript-based servers typically wait for client requests to arrive over the network before proceeding to anything.

   ### Asynchronous Programming with Callbacks ###
>. In Javascript asynchronous programming in Javascript is done with callbacks.
>. A callback is a function you write and then pass to some other function'
>. The other function then invokes ("calls back") your function when some condition is met or some (asynchronous) event occurs.
>. The invocation of the callback function you provide notifies you of the condition or the event, and sometimes, the invocation will include function arguments that 
provide additional details.

  >>> Forms of callback-based Asynchronous Programming uing client-side JavaScript and Node.

  1]] Timers

>. This kind of  asynchrony kicks in when you want to run some code after a certain amount of time has elapsed.
   
Example we can do this with setTimeout() function
     setTimeout(checkForUpdates, 6000);
     Explanation: setTimeout is a function that you invoke to register your callback function and specify under what asynchronous conditions should be invoked.

Example: //call checkForUpdates in one minute and then again every minute after that.
     let updateIntervalId = setInterval(checkForUpdates, 60000);
     
     // setInterval() returns a value that we can use to stop the repeated
    // invocations by calling clearInterval(). (Similarly, setTimeout()
   // returns a value that you can pass to clearTimeout())

     function stopCheckingForUpdates() {
      clearInterval(updateInterval);
     }

  2]] Events

>.Client-side Javascript programs are almost universally event-driven: hence rather than running some kind of predetermined computation, they typically wait for the user to 
something and then respond to the user's actions.

>. The web browser generates an event when the user presses a key on the keyboard, moves the mouse, clicks a mouse button, or touches a touchscreen device.
>. Event-driven Javascript programs register callback functions for specified types of events in a specified context, and the web browser invokes those functions whenever the specified
event occurs.

>. These callback functions are called event handlers or event listeners, and are registered with
addEventListener():

  3]] Network Events

>. Client-side Javascript code can use XMLHttpRequest class plus callback functions to make HTTP requests and asynchronously handle the server's response when it arrives.
>. In moderN client-side Javascript, XMLHttpRequest has been largely replaced by the fetch() API.

  4]] Callbacks and Events in Node

>. The Node.js server-side Javascript environment is deeply asynchronous and defines many APIs that use callbacks and events.
    
    Example 1: The default API for reading the contents of a file, for example, is asynchronous and invokes a callback function 
    when the contents of the file have been read.

        const fs = require("fs");  // the "fs" module has filesystem-related APIs
        let options = {            // An object to hold options for our program

            // default options would go here
        };

        // Read a configuration file then call the callback function
        fs.readFile("config.json", "utf-8", (err, text) => {
        if (err) {
          // if there was an error, display the warning but continue
          console.warn("Could not read config file", err);
        } else {
          // Otherwise, parse the file contents and assign to the options object
          Object.assign(options, JSON.parse(text));
        }

         // In either case, we can now start running the program
        startProgram(options);
      });

      Explanation: The Node's fs.readFile() function takes a two-parameter callback as its last argument.
      >. It reads the specified file asynchronously and then invokes the callback. If the file was read successfully, it passes the file contents as the second callback argument.
      >. If there was an error, it passes the error as the first callback argument


          ### Promises ###
>. A Promise is an object that represents the result of an asynchronous computation.


          ### async and await ###
>. 

          ### Asynchronous Iteration ###
>.



 ### Summary ###
 >.Traditionally asynchronous has been handled with events and callback functions. This can however get complicated,
 as you can end up with multiple levels of callbacks nested inside other callbacks, making it difficult to do robust error handling.

 >.  Promises provide a new w
 ay of structuring callback functions when used correctly. They can convert asynchronous code that would have been nested into linear chains of then() calls
 where one asynchronous step of a computation follows another.
 >. Additionally promises allow you to centralize your error-handling code into a single catch() call at the end of a chain of then() calls.

 >. async and await keywords allow us to write asynchronous code that is promise-based under the hood that looks like synchronous code.
 >. This makes the code easier to understand and reason about.
 >. If a function is declared async, it will implicitly return a promise.
 >. Inside an async function, you can await a promise (or a function that returns a promise), as if the promise value was asynchronously computed.
 >. Objects that are asynchronously iterable can be used with a for/await loop.
 >. You can create asynchronously iterable objects by implementing a [Symbol.asyncIterator]() method or by invoking an async function * generator function.
 >. Asynchronous iterators provide an alternative to "data" events on streams in NOde and can be used to represent a stream of user input events in client-side Javascript.
 

*/
