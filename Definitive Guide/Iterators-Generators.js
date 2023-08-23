// The Definitive Guide: Chapter 12: Iterators and Generators

/*
>.Iterable objects and their associated iterators are a feature of ES6, meaning that the contents of these data structures
can be iterated - that is looped over -  with the for/of loop.

Example:
     let sum = 0;
     for(let i of [1,2,3]) {
        //loop once for each of these values
        sum += i;
    }
sum // => 6

>. Iterators can be used with the spread operator to expand an iterable object into an array initializer or function invocation.

Example 
    let chars = [..."abcd"]; // chars == ["a", "b","c","d"]
    let data = [1,2,3,4,5];
    Math.max(...data)     // => 5
    >>>>Math.max method returns the number with the highest value

>. Iterators can be used with destructuring assignment:

 Example:
     let purpleHaze = Uint8Array.of(255,0,255,128);
     let [r,g,b,a] = purpleHaze; // a == 128

>. You can iterate a  Map object, the returned values are [key, value] pairs, which work well with destructuring assignment in a for/of loop.
    Example:
    // let m = new Map([["one", 1], ["two", 2]]);
    for(let [k,v] of m) console.log(k,v); // Logs 'one 1' and 'two'

>.The Set() constructor is among various built-in functions that are commonly used with Array object to accept arbitrary iterators instead.

Example: // Strings are iterable so the two sets are the same.
new Set("abc") // => new set(["a", "b", "c"])

                            #### How Iterators Work ####
>. 






           ### Summary ###

>. The for/of loop and the ...spread operator work with iterable objects.
>. An object is iterable if it has a method with the symbolic name [Symbol.iterator] that returns an iterator object.
>. An iterator object has a next() method that returns an iteration result object.
>. An iteration result object has a value property that holds the next iterated value, if there is one.
if the iteration has completed, then the result object must have a done property set to true.
>. You can implement your own iterable objects by defining a [Symbol.iterator] () method that returns an object with
a next () method that returns iteration result objects. Additionally you can also implement functions that accept iterator arguments
and return iterator values.

>. Generator functions (functions defined function* instead of functions) are another way to define iterators.
>. When you invoke a generator function, the body of the function does not run right away; instead, the return value is an iterable iterator object.
>. Each time the next () method of the iterator is called, another chunk of the generator function runs.
>. Generator functions can use the yield operator to specify the values that are returned by the iterator. Each call to the next() causes the generator function
 to run up to the next yield expression.
 >. The value of the yield expression then becomes the value returned by the iterator. When there is no more yield expressions, then the generator function returns, and
 the iteration completes.

>>> Why use iterators <<<
>. Iterators serve as a more elegant way to standardize your custom objects.
They provide a way for custom data structures to work nicely in the larger JS environment.

>. Also libraries that provide custom data structures use them often. E.g. Immutable.JS library which uses
iterators to provide native Javascript functionality for their custom objects such as Map.

>. A rule of thumb: iterators are worth considering when you need to provide native iteration capability to a well-encapsulated custom data structure.


>>> Why use Generators <<<
>. A well-known use case for generators is making it easier to write iterators.
>. Do not compare generators to regular for loops, rather think of them as a powerful stream primitive built-in the Javascript language., hence their main advantage being lazy evaluation.

>. Lazy evaluation is a robust data-flow technique, which is useful for dealing with data that is ambiguous or that has a high memory cost.
>. With lazy evaluation, you compute the dataset on demand rather than upfront like traditional for loops.
>. It provides a much more efficient memory usage and can help perform operations that would otherwise freeze up the application.

>>>> Final remarks
>. Its always worth double-checking whether you're adding a real value by including iterators or generators in your codebase or
you risk unnecessarily confusing people working with you.

>. Generators and iterators are safer to use when writing a well-encapsulated code, like a utility library. Because then the client doesn't need
to bother with the implementation details.

*/
