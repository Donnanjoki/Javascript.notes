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

*/
