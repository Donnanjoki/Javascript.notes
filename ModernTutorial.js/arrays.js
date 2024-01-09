/*
            ### ARRAYS ###

>. Arrays are special data structures which store ordered collections, and can hold more than one value.
     
      *** Declaration ***

    1>. Using an array literal 
              let arr = []
         //  const array_name = [item1, item2, ...] // note its common practice to declare arrays with the const keyword.

                 const cars = ["Vivo", "Mark X", "Subaru"];

         >. spaces and line breaks are not important , and a declaration can span multiple lines.
              const cars = [
                "Vivo",
                "Mark X",
                "Subaru"
              ];

         >. You can also create an array and then provide elements.
             // const cars = [];
             cars [0] = "Vivo",
             cars [1] = "Mark X",
             cars [2] = "Subaru";

    2>. You can also create an array using the keyword new.
         // syntax: let arr = new Array();
                    const cars = new Array("Vivo", "Mark X", "Subaru");
    
    >. Note: for simplicity, readability and execution speed, use the array literal method.

>. Arrays are numbered starting with zero;
   
      // Example
           let fruits = ["Apple", "Orange", "Plum"];

           alert( fruits[0] ); // Apple
           alert( fruits[1] ); // Orange
           alert( fruits[2] ); // Plum

>. The total count of the elements in the array is its length:

     // Example

     let fruits = [ "Apple", "Orange", "Plum"];
     alert(fruits.length); // 3

>. An array can store elements of any type.
      
      // Example
          
          // mix of values
          let arr = ['Apple', { name: 'John' }, true, function() {alert('hello'); } ];

          // get the object at index 1 and then show its name
          alert( arr[1].name ); // John

          // Get the function at index 3 and run it
            arr[3](); // hello

      >>>> Trailing comma <<<<
     
>. Also known as final commas can be useful when adding new elements, parameters or properties to the Javascript code

     // Example:
          let fruits = [
            "Apple",
            "Orange",
            "Plum",
          ];


    >>>> Get last Elements with "at" <<<<

>. When we want to access the last element of an array we can use;
     arr.at(i) , which is the same as arr[i], if i >= 0
     >. For negative values of i it steps back from the end of the array

     // Example

       let fruits = [ "Apple", "Orange", "Plum"];
       alert( fruits.at(-1) ); Plum

      ### Array - Methods ###

>. A common use of arrays is queue, which means an ordered collection of elements which supports two operations.
     >. push ; which appends an element at the end.
     >. shift ; which removes the element from the beginning, advancing the queue such that the 2nd element becomes the 1st.

>. Another use of arrays is in data structure named stack. It supports two operations namely
    >. push ; which adds an element to the end
    >. pop ;  which takes an element from the end.
    
>.Hence new elements are added or taken always from the end, e.g like a pack of new cards, where new cards are added to the top or take from the top.

>. For stacks, the latest pushed item is received first, that is also called LIFO(last-In-First-Out) principle, while
for queues we utilize the FIFO(first-in-first-out).


  ### Methods that work with the end of the Array

   1>. pop() - which extracts the last element of the array and returns the modified array
         let fruits = ["Apple", "Orange", "Pear"];
         alert( fruits.pop() ); 
         alert(fruits); // Apple, Orange
     
   2>. push() - which appends the elements to the end of the array
        let fruits = ["Apple", "Orange", "Pear"];
         alert( fruits.push("Pear") ); 
         alert(fruits); // Apple, Orange, Pear

   ### Methods that work at the beginning of the array

    3>.shift() - which extracts the first element of the array and returns it
          let fruits = ["Apple", "Orange", "Pear"];
          alert( fruits.shift() ); 
          alert(fruits); // Orange, Pear
     
     4>. unshift() - which adds elements at the beginning of the array
           let fruits = ["Orange", "Pear"];
          alert( fruits.unshift("Apple") ); 
          alert(fruits); // Apple, Orange, Pear

     >.Utilizing both push and unshift we can add multiple elements at once
          let fruits = ["Apple"];

          fruit.push("Orange", "Peach");
          fruits.unshift("Pineapple", "Lemon");
          alert( fruits); // ["Pineapple", "Lemon", "Apple", "Orange", "Peach"]
     
          ### Other methods ###

      >>> 5>. Splice
     
>. When we want to delete element(s) from an array using delete obj.key removes a value by the key but the
length is retained hence we will need to ensure that the rest of the elements are shifted to occupy the freed place.

>. The arr.splice method is a swiss army knife for arrays as it can insert, remove and replace elements.
    // Syntax arr.splice(start[, deleteCount, elem1, ...elemN])
             Explanation: So what it does is modify arr starting from the index start: removes deleteCount elements abd inserts
                          elem1..., elemN at their place - hence returns the arrays of the removed elements.


    // Example:
          let arr = ["I", "study", "JavaScript"];

          arr.splice(1,1); // from index 1 remove 1 element

          alert( arr ); // ["I", "JavaScript"]
         
     // Example
           let arr = ["I", "study", "JavaScript", "right", "now" ];

           arr.splice(0, 3, "Let's", "dance"); // remove 3 first elements and replace them with another

           alert(arr); // now ["Let's", "dance", "right", "now"]
     
     // Example:
          let arr =  ["I", "study", "JavaScript"];
          // from index 2
          // delete 0
          // then insert "complex" and "language"
          arr.splice(2, 0, "Complex", "language");

          alert(arr); // // "I", "study", "complex", "language", "JavaScript" 

>. Negative indexes are allowed as they specify the position from the end of the array.
      // Example
          let arr [1, 2, 5];
          
            // from index -1 (one step from the end)
            // delete 0 elements,
            // then insert 3 and 4
            arr.splice(-1, 0, 3, 4);

            alert(arr); // 1,2,3,4,5



    >>> 6>. slice <<<

>. syntax:   arr.slice([start], [end])
>. The method is used to create a copy of an array or return a portion of an array. It does not alter the original array
   but instead creates a shallow copy.

>. Note: if the end position is specified, then the slice() method will extract elements from start position up to'the end position,
         but the end position will not be included in the extracted elements.
             // Example:
                  let arr = ["t", "e", "s", "t"];

                  alert( arr.slice(1, 3) ); // e,s (copy from 1 to 3)
                  alert( arr.slice(-2) ); // s, t (copy from -2 till the end)

     
                 
      >>> 7>. concat <<<

>. This method arr.concat creates a new array that includes values from other arrays and additional items
     // Syntax: arr.concat(arg1, arg2, ...)
>. It accepts any number of arguments- either arrays or values.

         // Example:
             let arr = [1, 2];

             alert( arr.concat([3, 4]) ); // 1,2,3,4

         // Example: other objects if they look like arrays are added as whole.
               let arr = [1, 2];

               let arrayLike = {
                    0: "something",
                    length: 1
               };
               alert( arr.concat(arrayLike) ); // 1,2,[object Object]

          // Example: If an array-like object has special Symbol.isConcatSpreadable property then it is
                       treated as an array by concat: it elements are added instead.

                    let arr = [1, 2];

                    let arrayLike = {
                         0: "something",
                         1: "else",
                         [Symbol.isConcatSpreadable]: true,
                         length: 2
                    };
                    alert( arr.concat(arrayLike) ); // 1,2, something, else



     >>> 8>. iterate:forEach <<<

>. The arr.forEach method allows us to run a function for every element of the array..
           //  Syntax: arr.forEach(function(item, index, array) {
               // ... do something with item
           })

           Example: 
              ["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
               alert(`${item} is at index ${index} in ${array}`);
              });

              // result; Bilbo is at index 0 in Bilbo,Gandalf,Nazgul
                       Gandalf is at index 1 in Bilbo,Gandalf,Nazgul
                       Nazgul is at index 2 in Bilbo,Gandalf,Nazgul


               
              ### Searching in Array  ###
              
          1.> indexOf/lastIndexOf and includes

>. The methods arr.indexOf and arr.includes have similar syntaxes but do essentially the 
   same thing as their string counterparts, but rather than operate on characters they operate on indexes.

   >. arr.indexOf(item, from) - looks for item starting from, and returns the index
      where it was found, otherwise -1.
   >. arr.includes(item, from) - looks for item starting from index from, returns true if found.

>. Typically these methods are used with only one argument, the item to search, and by default, the search
is from the beginning.
         // Example
               let arr = [1, 0, false];

               alert( arr.indexOf(0) ); // 1
               alert( arr.indexOf(false) ); // 2
               alert( arr.indexOf(null) ); // -1

               alert( arr.includes(1) ); // true


>. Note: indexOf method uses strict equality === for comparison. 

>. If we want to check if an item exists in array and we don't need the index then arr.includes is preferred.

>. The arr.lastIndexOf is the same as indexOf, but looks for the items from right to left.
       // Example:
             let fruits = ['Apple', 'Orange', 'Apple']

             alert( fruits.indexOf('Apple') ); // 0 (first Apple)
             alert( fruits.lastIndexOf('Apple') ); // 2 (last Apple)


>. arr.includes is able to correctly handle Nan unlike indexOf, reason being because it was added to JS much
later and hence used more up-to-date comparison algorithm internally. 
        // Example:
            const arr = [NaN]
            alert( arr.indexOf(NaN) ); // -1 (wrong, should be 0)
            alert( arr.includes(NaN) ); // true (correct)




          2>. find and findIndex/ findLastIndex

>. Imagine we have an array of objects. How do we find an object with the specific condition?

>. arr.find(fn)method comes in handy.
      // Syntax is:
            let result = arr.find(function(item, index, array) {
               // if true is returned, item is returned and iteration is stopped
               // for falsy scenario returns undefined
            })
     >. The function is called for elements of the array, one after the another:
          a] item is the element.
          b] index is its index
          c] array is the array itself
>. Hence if it returns true, the search is stopped, the item is returned. If nothing undefined is returned.

       // Example:
            let users = [
               {id: 1, name:"John"},
               {id: 2, name: "Pete"},
               {id: 3, name: "Mary"}
            ];
            let user = users.find(item => item.id == 1);
            alert(user.name); // John

>. Note its typical to use one argument, mostly item, for the function as the other arguments are rarely used.


>. The arr.findIndex method has the same syntax, but returns the index where the element was found instead of the element itself.
  The value of -1 is returned if nothing was found.

>. The arr.findLastIndex method is like findIndex, but searches from right to left, similar to lastIndexOf
          // Example:
             let users = [
                {id: 1, name: "John"},
                {id: 2, name: "Pete"},
                {id: 3, name: "Mary"},
                {id: 4, name: "John"}
               ];
               // Find the index of the first John
               alert( users.findIndex(user => user.name == 'John') );  // result is 0

               // Find the index of the last John
               alert( users.findLastIndex( user => user.name == 'John') ); // result is 3

  


               3>. filter

>. As noted above the find method looks for a single(first) element that makes the function return true.
>. If there may be many, we can use arr.filter(fn).

       Syntax: let result = arr.filter(function(item, index, array) {
          // if true item is pushed to results and the iteration continues
          // returns empty array if nothing is found
       });

>. With filter it returns an array of all matching elements. Hence the method creates a new array with elements that pass a test provided by a function.
>. Note the filter() method does not change the original array, and does not execute the function for empty elements.

      // Example:
      let users = [
          {id: 1, name: "John"},
          {id: 2, name: "Pete"},
          {id: 3, name: "Mary"}
      ];
      // return array of the first two users
      let someUsers = users.filter(users => item.id < 3);
      alert(someUsers.length); // 2
      
      
      // Example: return array of objects whose age is greater than 40 and occupation is programmer
           let users = [
    { name: 'John', age: 25, occupation: 'gardener' },
    { name: 'Lenny', age: 51, occupation: 'programmer' },
    { name: 'Andrew', age: 43, occupation: 'teacher' },
    { name: 'Peter', age: 81, occupation: 'teacher' },
    { name: 'Anna', age: 47, occupation: 'programmer' },
    { name: 'Albert', age: 76, occupation: 'programmer' },
]
          solution:
          let filteredUsers = users.filter(user => user.age > 40 && user.occupation === 'programmer');
          console.log(filteredUsers);


  >> Additional: How to filter an Object in Javascript.

  >. Javascript objects are not iterable like arrays and strings (cannot be looped through).
  >. Hence you can't use filter(), the loop method, or an iteration method directly on an object
>. So how do we filter an object in Javascript???
      
      >. We can do this by converting the object to an array using any of the object static methods such as Object.keys(),
      Object.values() and Object.entries(). Then we can use the filter() method to filter through the array and return a new array of filtered elements.

      // Example: 
      const userDetails = {
    firstName: "Jane",
    lastName: "Daniels",
    userName: "jane.daniels",
    email: "jane.daniels@example.com",
    company: "Example Inc.",
    address: "1234 Example Street",
    age : 25,
    hobby: "Singing"
};

let keysArray = Object.keys(userDetails);
console.log(keysArray); // output will be
['firstName', 'lastName', 'userName', 'email', 'company', 'address', 'age', 'hobby']


// Now filter to only give you the user name details.
    
const userName = Object.keys(userDetails)
.filter(key => key.includes("Name"))
.map(key => `${key} : ${userDetails[key]}`)

console.log(userNames);
    


  >. Takehome: Filter() methods provides a better syntax for filtering arrays in Javascript.

              ### Transform an Array ###
>.These are methods that transform and reorder an array.


         1>. map

>. This method calls the function for each element of the array and returns the array of results.
>. It hence creates a new array from calling a function for every array element.
It also does not execute the function for empty elements not does it change the orignal array.

     // Syntax:
           let result = arr.map(function(item, index, array) {
               // returns the value instead of item
           });


     // Example:; This code retrieves the length of each string.
            let lengths =  ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
            alert( lengths); // result 5,6,7



         2>. sort() and sort(fn)

>. The sort() method sorts an array alphabetically:

         // Example:  
         const fruits = ["Banana", "Orange", "Apple", "Mango"];
         fruits.sort();  // result Apple,Banana,Mango,Orange

     >>> Numeric Sort(fn)

     >. The arr.sort(fn) method implements a generic sorting algorithm, which takes an optimized quicksort or Timsort most of the time.
     >. This method will walk the array, compare it elements by using the provided function and reorder them, all we need to provide is the fn which does the comparison.

>. Note the default sort() function sorts values as strings.
>. Example when we are sorting numbers we will find that "25" is indeed bigger than "100" as "2" is bigger than "1".
>. Hence the sort() method here will yield incorrect results when sorting numbers.
>. To fix this we can provide a compare function.
    
           // Example: ascending order
           const points = [40, 100, 1, 5, 25, 10];
           points.sort(function(a,b) {return a - b});
           alert(points); // 1,5,10,25,40,100 (sorts the array from smallest to largest)

           // Example: descending order
           const points = [40, 100, 1, 5, 25, 10];
           points.sort(function(a,b) {return b - a});
           alert(points); // 100,40,25,10,5,1 (sorted from largest to smallest)
 
          // Example: >. We call also use arrow function for neater sorting.
               arr.sort( (a, b) => a - b);
     

     >>> The Compare Function

>. The purpose of compare function is to define an alternative sort order.
>. The compare function should return a negative, zero or a positive value, depending on the arguments.
     // function(a, b) {return a - b}

>. When the sort()function compares the two values, it send the value to the compare function, and sorts the values according to the returned
(negative, zero, positive) value.
       >. If the result is negative, a is sorted before b.

       >. If the result is positive, b is sorted before a.

       >. If the result is 0, no changes are done with the sort order of the two values. 

       // Follow Example on numerically and alphabetical sorting: https://www.w3schools.com/js/js_array_sort.asp


     >>> Sorting an Array in a Random Order
        " The Fisher Yates Method"

>. This is an algorithm that shuffles a finite sequence of elements by generating a random permutation.
 
         // Example:
            const points = [40, 100, 1, 5, 25, 10];
             document.getElementById("demo").innerHTML = points;

             function myFunction() {
                for (const point of points) {
                  let i = Math.floor(Math.random() * points.length);
                  let j = Math.floor(Math.random() * points.length);
                   [points[i], points[j]] = [points[j], points[i]];
                }
               document.getElementById("demo").innerHTML = points;
               }

         For code: https://codepen.io/Donnanjoki/pen/XWogOZq


     >>> Sorting Object Arrays

>. Often Js array contain objects, to sort these object properties of different data types, the sort(fn) method is used
>. The solution is to write a compare function to compare the property values.

      // Example: 
          const cars = [
               {type:"Volvo", year:2016},
               {type:"Saab", year:2001},
               {type:"BMW", year:2010}
          ];
          cars.sort(a, b => a.year - b.year);

          alert(cars); Saab 2001
                       BMW 2010
                       Volvo 2016


>>>> Note: Use localeCompare to compare strings, otherwise they are compared by character codes.

         3>. reverse

>. The reverse() method reverses the order of elements in array.
       //Example:
           let arr = [1,2,3,4,5];
           arr.reverse();

           alert( arr); // result 5,4,3,2,1



         4>. split and join

         >>> split()

>. The split() method splits a string into an array of substrings.
The split() method returns the new array but does not change the original string.
      // Syntax string.split(separator, limit)
           
     // Example 1: In this example we split by comma followed by space
         let names = 'Bilbo, Gandalf, Nazgul';
         let arr = names.split(', ');
         for(let name of arr) {
          alert(`A message to ${name}.`);
         }
          // the result: A message to Bilbo  (and other names)


     // Example 2: 
        let arr = 'Bilbo, Gandalf, Nazgul, Saruman'.split(', ', 2);

        alert( arr); // Bilbo, Gandalf



     // Example 3: split to letters
          let str = "test";

          alert( str.split("") ); // t,e,s,t
     
         >>> join()

>. The call join() does the reverse to split. It creates a string of arr items joined by glue between them: arr.join(glue).

     // Example:
         let arr = ['Bilbo', 'Gandalf', 'Nazgul'];
         let str = arr.join(':'); // glue the array into a string using ;

         alert(str); // Bilbo;Gandalf;Nazgul





         5>. reduce/reduceRight

>. These methods are used to calculate a single value based on the array.

>. This method is used to reduce the array to a single value and executes a provided function for each
value of the array (from left to right) and the return value is stored in the accumulator.
      
// Syntax: array.reduce(function(accumulator, item, index, array){
     // ...
}, [initial]);

>. The function is applied to all array elements one after another and carries-on its result to the next call

>. Arguments
     >>> accumulator: is the result of the previous function call, equals initial the first time
                       (if initial is provided)
     >>> item: is the current array item
     >>> index: is its position
     >>> array: is the array

>. As the function is called the previous function call is passed to the next one as its first argument.

>. Hence the first argument = accumulator, that stores the combined result of all previous executions at the end becomes the result of reduce.

      // Example
         let arr = [1, 2, 3, 4, 5];

         let result = arr.reduce((sum, current) => sum + current, 0);

         alert(result); // 15

         Breakdown:
              1]]On the first run, sum is the initial value (the last argument of reduce), equals 0, and current is the first array element, equals 1. So the function result is 1.

              2]] On the second run, sum = 1, we add the second array element (2) to it and return.

              3]] On the 3rd run, sum = 3 and we add one more element to it, and so on…

>. Note the function passed to reduce uses only 2 arguments which is typically enough.

>.  We can also omit the initial value, the result will be the same.
>. This is because, if there is no initial value then reduce takes the first element of the array as the initial value and starts the iteration from the 2nd element.

          // Example: 
          let arr = [1, 2, 3, 4, 5];

          // removed initial value from reduce (no 0)
          let result = arr.reduce((sum, current) => sum + current);

          alert( result ); // 15


>>. NOTE: But such use requires an extreme care. If the array is empty, then reduce call without initial value gives an error.
Hence always specify the initial value.

         // Example:
              let arr = [];

             // Error: Reduce of empty array with no initial value
            // if the initial value existed, reduce would return it for the empty arr.
            arr.reduce((sum, current) => sum + current);


           >>>> arr.reduceRight

>.The method arr.reduceRight does the same, but goes from right to left.



>>. simplified noted on the reduce method:




        ### Array.isArray ###

>. Arrays do not form a separate language type, as they are based on objects.
>. Hence typeof does not help distinguish plain objects from an array.
      // Example:
           alert( typeof {}); // object
           alert( typeof []); // object (same)

>. By using Array.isArray(value). It returns true if the value is an array, and false otherwise
     // Example:
        alert( Array.isArray({})); // false
        alert(Array.isArray([])); // true




        ### Most methods support "thisArg" ###

>. Nearly all array methods that call function - like find, filter, map, with a exception of sort
accept an optional parameter thisArg.

>. Note it is rarely used.
      // syntax:
          arr.find(func, thisArg);
          arr.filter(func, thisArg);
          arr.map(func, thisArg);

>. The value of thisArg parameter becomes this for func.

      // Example:
           let army = {
               minAge: 18;
               maxAge: 27;
               canJoin(user) {
                    return user.age >= this.minAge && user.age < this.maxAge;
               }
           };

           let users = [
               {age: 16},
               {age: 20},
               {age: 23},
               {age: 30}
           ];

           // find users, who army.canJoin returns true
           let soldiers = users.filter(user => army.canJoin(user));
           alert(soldiers.length); // 2
           alert(soldiers[0].age); // 20
           alert(soldiers[1].age); // 23





        ### Internals ###

>. As earlier iterated, an array is a special kind of object. The square bracket used to access a property
as such arr[0] are essentially the same as obj[key], where arr is the object while the representative numbers are used
as keys.

>. Ways to misuse an array;
      a] Add a non-numeric property like arr.text = 5
      b] Make holes, like add arr[0] and then arr[1000] (add nothing between them)
      c] Fill the arrays in the reverse order, like arr[1000], arr[999] and so on.

>. Arrays are special structures to work with the ordered data, and they provide special methods for that.
>. Within the Javascript engine, arrays are carefully tuned to work with contiguous ordered data, hence use them as so.
>. If you need arbitrary keys, then chances are that a regular object will suffice {}.


     ### Performance ###

>. The methods push/pop run fast while shift/unshift are slow.

  ??? Why is it faster to work with the end of an array rather than its beginning ???

>. It's not enough to just remove elements with the index of 0, other elements will require renumbering as well.
>. Hence shift must do 3 things; that is
      1] Remove the element with the index 0
      2] Move all the elements to the left and renumber them from the index 1 to 0, 2 to 1 and so forth
      3] Update the length property
>. Hence, the more the elements in the arrays the more time it takes to move them and more in memory-operations.
>. Similarly, the same thing happens with unshift: as the we need to first move existing elements to the right, hence increasing their indexes

>. As for push/pop? We need not remove anything as to extract an element from the end, the pop method cleans the index
 and shortens the length, the same case applies with push to (in adding elements at the end of the array).


     ### Loop ###

>. One of the oldest ways to cycle array items is the for loop over indexes:
     // let arr = ["Apple", "Orange", "Pear"];
         for(let i = 0; i < arr.length; i++) {
          alert(arr[i]);  
         }

>. There is another for of loop that is the for..of:
      // let fruits = ["Apple", "Orange", "Pear"];
         for (let fruits of fruits) {
          alert( fruits );
         }

>. The for..of loop doesn't give access to the number of current elements, just its value, which in most cases is enough.

>. Note; we should't use for..in loops for arrays; because;
       1] for..in loop is optimized for generic objects, not arrays, hence is 10-100 times slower.
       2] The for..in loop iterates over all properties, not only numeric ones, which can prove to be a big problem.



       ### length property  ###

>. The length property automatically updates when we modify an array.
>. Additionally it is writable., hence if we increase it manually nothing happens,
but if we decrease it, the array is truncated. The process is irreversible.

     // Example:
         let arr = [1, 2, 3, 4, 5];

         arr.length = 2; // truncate to 2 elements
         alert(arr); // [1, 2]

         arr.length = 5; // return length back
         alert( arr[3] ); // undefined: the values do not return

>. The simplest way tp clear an array is arr.length = 0;

    

       ### new Array() ###

>. If new Array is called with a single argument which is a number, it typically creates an array 
without items, but with a given length.
    // Example
         let arr = new Array(2); // it creates an array of [2] ?

         alert( arr[0]); // undefined! no elements

         alert(arr.length); // length 2

>. Hence to avoid such occurrences opt for the typical square bracket syntax.

        ### Multidimensional Arrays  ###

>. Arrays can have items that are also arrays, these are multidimensional arrays.
>. These can be used to store matrices;
      // Example:
          let matrix = [
               [1, 2, 3],
               [4, 5, 6],
               [7, 8, 9];
          ];

          alert( matrix[1][1] ); // 5 the central element

          ### toString ###

>. The array's toString method returns a comma-separated list of elements.
      // Example:
           let arr = [1, 2, 3];

           alert( arr ); // 1, 2, 3
           alert(String(arr) === '1,2,3'); // true

>. Note arrays do not have a Symbol.toPrimitive, neither a viable valueOf, they implement
only toString conversion, hence [] becomes an empty string, [1] becomes "1" and [1,2] becomes "1, 2".
>. When the binary plus "+" operator adds something to a string, it converts it to a string as well.

       
       ### Don't compare arrays with ==

>. Arrays in Javascript shouldn't be compares with the == operator.
>. Reason being the operator has no special treatments for arrays as it treats them the same as any objects.
>. So, if we compare arrays with ==, they are never the same, unless we compare two variables that reference
the same array.
       // Example
            alert([] == [] ); // false
            Explanation: The arrays are different objects, hence not equal as the == operator
                          doesn't do item-by-item comparison.

            alert( 0 == [] ); true
            alert( '0' == [] ); false
            Explanation: Comparison with primitives may seemingly give strange results as above.
                         Above we compare a primitive with an array object. So the array [] gets converted to primitive
                         for the purpose of comparison and becomes an empty string ''.

>. Best way to compare arrays?
>. The strict comparison === is simpler as it doesn't covert types.
>. Also stray from using == operator, rather compare item-by item in a loop or using iteration methods


Bonus: Chaining Array Methods in Javascript
     

>. There some Javascript methods that can loop through the array. They include:
    1]] Filter method filter()
    2]] Map method map()
    3]] Reduce method reduce()
    4]] Find method find()
    5]] Sort method sort()

>. Note the chaining of array methods is not only applicable to arrays but also strings use the same principle.

      // Example: What we want to do:
           a]] Filter those elements whose price is greater than 100 using filter() method
           b]]  Map those elements to a new array with a new sale price(50% off).
      
      const products = [
  
    // Here we create an object and each
    // object has a name and a price
    { name: 'dress', price: 600 },
    { name: 'cream', price: 60 },
    { name: 'book', price: 200 },
    { name: 'bottle', price: 50 },
    { name: 'bedsheet', price: 350 }
];

 // writing the different array methods on different lines increases the code readability.

 const sale = products
 .filter(product => product.price > 100)
 .map(product => `the ${product.name} is now ${product.price/2} shillings`);

 console.log(sale);

       ### Summary ###

>. Array is a special kind of object, which are suited for storing and managing ordered data items.

>. Getting elements;
      >. We can get elements by its index, like arr[0].
      >. We can also use at(i) method that allows negative indexes. For negative values of i, 
         it steps back from the end of the array. If i >= 0, it works the same ass arr[i].

>. We can use an array as a deque with the following operations;
       >. push(...items) adds items to the end of an array
       >. pop() removes the element from the end and returns it.
       >. shift() removes the element from the beginning and returns it
       >. unshift(...items) adds items to the beginning

>. To loop over the elements of the array:
       >. for(let i=o; i<arr.length; i++) = which works fastest, old-browser compatible
       >. for(let item of arr) = the modern syntax for items only
       >. for (let i in arr) - never use this

>. To compare arrays do not use == operator, also >,< and others as they have no special treatments for arrays.
    Since they handle them as objects and its not what we usually want, 
>. Rather use for...of loop to compare arrays item by item


     
      ### Array Methods CheatSheet ###


























*/
