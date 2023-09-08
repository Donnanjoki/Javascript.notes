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

>. 

















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

>. To compare arrays do not use == operator, also >,< and others as they have no special treatments fro arrays.
    Since they handle them as objects and its not what we usually want, 
>. Rather use for...of loop to compare arrays item by item











*/
