// Destructuring Assignment in JavaScript

/*
>. Destructuring assignment is a Javascript expression that makes it easy to assign array values and object properties to distinct variables.
>. Note destructuring is a feature that was introduced in ES6 so check to see if it supported by the browser you're using.
>. Note destructuring does not mean destructive, its called so because it "destructurizes" through the method of copying items into variables.

Example: Old way before ES6 
//assigning object attributes to variables

    const person = {
        name: 'Sara',
        age: 25,
        gender: 'female'
    }
    let name = person.name;
    let age = person.age;
    let gender = person.gender;

    console.log(name); // Sara
    console.log(age); // 25
    console.log(gender); // female

Example: After ES6
// assigning object attributes to variables
const person = {
    name: 'Sara'
    age: 25,
    gender: 'female'
}

// destructuring assignment
let { name, age, gender } = person;

console.log(name); // Sara
    console.log(age); // 25
    console.log(gender); // female

  >>> Take home notes from the example
>. The order of the name does not matter in object destructuring.
 hence you could write the program as so and still get the same results.
 
     let { age, gender, name } = person;
     console.log(name); // Sara

>. Also when destructuring objects you should use the same name for the variable as the corresponding object key.
 
Example:
     let {name1, age, gender} = person;
     console.log(name1); // undefined

     // Using different variable names for the object key
     const person = {
        name: 'Sara',
        age: 25,
        gender: 'female'
    }
    // destructuring assignment
    // using different variable names.
    let { name: name1, age: age1, gender: gender1 } = person;
    
     console.log(name1); // Sara
     console.log(age1); // 25
     console.log(gender1); // female



 ### Array Destructuring ###

 Example:
  const arrValue = [ 'one', 'two', 'three'];

  //destructuring assignment in arrays
  const [x, y, z] = arrValue;

  console.log(x); // one
  console.log(y); // two
  console.log(z); // three

  ### Assign Default Values ###

>. You can assign the default values for variables while using destructuring.
>. Default values in destructuring assignment only work if the variables either don't exist or
their value is set to undefined. Values such as null, false and 0 bypass the default values in the destructuring assignment.
>. Note with destructuring we can set defaults, or fallback values so that if an item is not in the object(or Array, Map, or set)
it will fallback to what you have set at the default.

// Example:
     const { dogName = 'snickers' } = { dogName: undefined }
    console.log(dogName) // what will it be? 'snickers'!

    const { dogName = 'snickers' } = { dogName: null }
    console.log(dogName) // what will it be? null!

    const { dogName = 'snickers' } = { dogName: false }
    console.log(dogName) // what will it be? false!
    
    const { dogName = 'snickers' } = { dogName: 0 }
    console.log(dogName) // what will it be? 0!

Example:
    let arrValue = [10];
    //
 assigning default value 5 and 7
  let [x = 5, y = 7] = arrValue;

  console.log(x); // 10
  console.log(y); // 7

Example:
const setting = {
    speed = 150
}
const { speed = 750, width = 500 } = settings;

console.log(speed); // 150 - comes from settings object
console.log(width); // 500 - fallback to default

>. If the speed or width properties don't exist on the settings object then they will fallback to 750 and 500 respectively.


## Swapping  Variables ###
>. Below the two variables have been swapped using the destructuring assignment.

   //Program to swap variables
   let x = 4;
   let y = 7;

   // swapping variables
   [x, y] = [y, x];

   console.log(x); // 7
   console.log(y); // 4
  

     ### Skip Items ###

>. You can skip unwanted items in an array without assigning them to local variables.

// Example:
   const arrValue = ['one', 'two', 'three'];
   //destructuring assignment in arrays
   const [x, , z] = arrValue;

   console.log(x); // one
   console.log(z); // three

### Assigning Remaining Elements to a single Variable
 >. You can assign the remaining elements of an array to a variable by using the spread operator (...)

 // Example:
     const arrValue = ['one', 'two', 'three', 'four'];

     // destructuring assignment in arrays
     // assigning remaining elements to y
     const [x, ...y] = arrValue;

     console.log(x); // one
     console.log(y); // ["two", "three", "four"]

>. Note: Variable with the spread syntax cannot have a trailing comma {,}.
   // Example
         const arrValue = ['one', 'two', 'three', 'four']; 

         // throws an error
         const [...x, y] = arrValue

         console.log(x); // error

    ### Nested Destructuring Assignment ###
>. In order to execute the nested destructuring assignment for array elements, you have to enclose the variables in an array structure([]).
   // Example:
   const arrValue =  ['one', ['two', 'three']];

   // nested destructuring assignment in arrays
   const [x,[y,z]] = arrValue;

   // the variables y and z are assigned nested elements two and three.
   console.log (x); // one
   console.log (y); // two
   console.log (z); // three

>. In order to execute nested destructuring assignment for objects, you have to enclose the variable in an object structure ({}).
 // Example:
      const person = {
        name: 'Jack',
        age: 26,
        hobbies: {
            read: true,
            playGame: true
        }
      }
      // Nested destructuring
      const {name, hobbies: {read, playGame}} = person;

      console.log(name); // Jack
      console.log(read); // true
      console.log(playGame); // true


*/
