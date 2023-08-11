/*
>. The constructor syntax for a promise object is:

let promise = new Promise(function(resolve, reject) {
    // executor 
})

>. The function passed to a new Promise is called the executor. When a new Promise is created, the executor runs automatically.
>. This executor code contains the producing code which should eventually produce the result.
>. Its arguments resolve and reject are callbacks provided by Javascript itself.
>. Once the executor obtains the result, be it soon or late, it should call one of these callbacks.

>>> resolve(value): if the job is finished successfully, with result value.
>>> reject(error): if an error occurred, error is the error object.

Summary: The executor runs automatically and attempts to perform a job.
>. When it is finished with the attempt, it calls resolve if it was successful, or reject if there was an error.

>.The promise object returned by the new Promise constructor has these internal properties.

i] state - initially pending, then changes to either "fulfilled" when resolve is called or "rejected"
when reject is called.
ii] result - initially undefined, then changes to value when resolve(value) is called or error when reject(error) is called.


    Example: of a "fulfilled promise"
         let promise = new Promise(function(resolve, reject){
            // the function is executed automatically when the promise is constructed

            // after 1 second signal that the job is done with the result "done"
            setTimeout(() => resolve("done"), 1000)
         });

         Breakdown: In the above example the executor is automatically called by new Promise
         >. The executor receives two arguments: resolve and reject, which are predefined by JS engine.
         >. After a second of processing, the executor's calls resolve("done") to produce the result. This changes the state of the promise object.

    Example: of an executor rejecting the promise with an error

       let promise = new Promise(function(resolve, reject) {
        // after 1 second signal that the job is finished with an error
        setTimeout(() => reject(new Error ("Whoops!")), 1000);
       });

>.In summary the executor should perform a job and then call resolve or reject to change the state of the corresponding promise object.
>. Resolve/reject expect only one argument(or none) and will ignore additional arguments.

>. Note the state and result properties of the Promise object are internal. Hence we can't directly access them. But we can use methods
.then/.catch/.finally for that

     >>>> Breakdown Consumers : then , catch <<<<

>. A Promise object serves as a link between the executor and the consuming functions, which will receive the result or error.
>. Consuming functions can be registered using the methods .then and .catch.

 A. {then}

>. This is the most fundamental one.
syntax:  promise.then(
            function(result) {// handles a successful result},
            function(error) {// handle an error}
        );
 Explanation: The first argument of .then is a  function that runs when the promise is resolved and receives the result.
 >. The second argument of .then is a function that runs when the promise is rejected and receives the error.       

     Example 1: of a successfully resolved promise
         let promise = new Promise(function(resolve, reject) {
            setTimeout(() => resolve("done!"), 1000);
         });

         // resolve runs the first function in .then
         promise.then(
            result => alert(result), // shows "done!" after 1 second
            error => alert(error) // doesn't run
         );

     Explanation: In this example the first function was executed

     Example 2: in case of rejection, the second one is executed
      let promise = new Promise(function(resolve, reject) {
            setTimeout(() => reject(new Error("Whoops!")), 1000);
         });

         // resolve runs the first function in .then
         promise.then(
            result => alert(result), // shows "done!" after 1 second
            error => alert(error) // doesn't run
         );

      Example 3: if we're interested only is successful completions, then we can provide only one function arguments to .then:

      as so... let promise = new Promise(resolve => {
        setTimeout(() => resolve("done!"), 1000);
      });
      Promise.then(alert); // shows "done!" after 1 second


B. {catch}

>. If we're only interested in errors, then we can use null as the first argument .then(null, errorHandlingFunction). or we can 
use .catch(errorHandlingFunction) which works similarly.
     
      Example: let promise = new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error("Whoops!")), 1000);
      });

      // .catch(f) is the same as promise .then(null,f)
      promise.catch(alert); // shows "Error: Whoops!" after 1 second

>. The call .catch(f) is a complete analog of .then(null, f), its just a shortcut.


    >>>> CleanUp: finally <<<<
>. The idea of finally is used as a set up a handler 





*/
