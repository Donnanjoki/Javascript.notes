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

  >>> Forms of callback-based Asynchronous Programming suing client-side JavaScript and Node.

  1]] Timers
>.

  2]] Events
>.

  3]] Network Events
>. 

  4]] Callbacks and Events in Node
>. 









 ### Summary ###
 >.Traditionally asynchronous has been handled with events and callback functions. This can however get complicated,
 as you can end up with multiple levels of callbacks nested inside other callbacks, making it difficult to do robust error handling.

 >.  Promises provide a new way of structuring callback functions when used correctly. They can convert asynchronous code that would have been nested into linear chains of then() calls
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
