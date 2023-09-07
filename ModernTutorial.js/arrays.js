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
