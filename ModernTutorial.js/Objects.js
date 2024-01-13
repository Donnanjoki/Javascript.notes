/* 
OBJECTS
#######


                  ****************** PART A *********************

>. Objects are used to store keyed collections of various data and more complex entities.
>. An objects can be created with figure brackets {...} with an optional list of properties. 
   >> A property is a "key: value" pair, where key is a string - alias property name and value can be anything

   // Example
      let user = new.objects(); // "object constructor syntax"
      let user = {}; // "object literal" syntax


>> A property has a key also known as a name or identifier, before the colon ":" and a value to the right of it
> Property vales are accessible using the dot notation:

example
   // let user = {
    name: "John",
    age: 30
   };
   alert(user.age); // John

Note: The value can be of anytype. e.g boolean

user.isAdmin = true

>. You can use the delete operator;
delete user.age;

>. You can use multiword property names, but they must be quoted;

let user = {
    name: "John"
    age: 30,
    "likes birds": true
}

// another example using square brackets:
   let user = {};

   // set
   user["likes birds"] = true;

   //get
   alert(user["likes brids"]); // true

>. Square brackets also provide a way to obtain the property names as the result of any expression -
as opposed to  a literal string.
    // Example
     let key = "likes birds";

     user[key]=true;


## Computed Properties

>. WE can use square brackets in an object literal, when creating an object - that called computed properties.
>. Square brackets are much more powerful than dot notation. They allow any property names and variables. But they are also more cumbersome to write.

>. So most of the time, when property names are known and simple, the dot is used. And if we need something more complex, then we switch to square brackets.


## Property Existence test, "in" operator

>>.In javascript, its possible to access any property, hence there will be no error even though the property doesn't exist.

>. Reading a non-existing property just returns undefined.

let user = {};

alert( user.noSuchProperty === undefined ); // true means "no such property"


>> There is a special operator for that: syntax "in"

let user = { name: "John", age: 30 };

alert( "age" in user ); // true user.age exists
alert ( "sex" in user); // false user.sex does not exist


## Note on the left side of there must be a property name, which is usually a quoted string.


## The "for..in" loop

// Syntax

for (key in object) {
    // executes the body for each key among object properties
}

// Example
    let user = {
        name: "John",
        age: 25,
        isAdmin: true
    };

    for (let key in user {
        // keys
        alert( key ); // name, age, isAdmin
        // values in key

        alert(user[key]); // John, 30, true
    })

## Ordered like an object

>. Are objects ordered?? Answer is they are ordered but in a special fashion.
>. integer properties are sorted, while others appear in creation order.

>. If keys are non-integer, they are listed in their creation order.
    

######## SUMMARY ###########

>. Objects are associative arrays with several special features.
>. They store properties(key: value pairs) where
   >> Property keys must be strings or symbols (usually strings).
   >> Values can be of any type.

>. To access a property, we an use:
   1] The dot notation: obj.property
   2] Square brackets notation: obj["property"] - square brackets allow us to take the key from a variable, like obj[varwithKey]

>. To delete an operator: delete obj.prop
>. To check existence of  given key: "key" in obj
>. To iterate over an object: for (let key in obj) loop





**************************** PART B ********************************

OBJECT REFERENCES AND COPYING

>. A Fundamental difference between objects and primitives, is that objects are stored and copied "by refernces"
whereas primitive values e.g strings and numbers, booleans, e.t.c are always copied as  a whole value.

>. Note when an object variable is copied, the reference is copied, but the object itself is not duplicated.
   // let user = { name: "John" };
   let admin = user; 
   admin.name = 'Pete'; // changes by the "admin" reference

   alert(user.name);


### Comparison By Reference ###

>. Two objects are equal only if they are the same object, and two independent objects are not equal, even though they look alike.



### Cloning and merging, object.assign

>. Copying an object variable creates one more reference to the same object.

    A >. To duplicate an object ---
    >.. We can create a new object and replicate the structure of the existing one, by iterating over its properties and copying them on a primitive level.

    // Example 1: 

    let user = {
        name: "John",
        age: 30
    };

    let clone = {} // the new empty object

    // lets copy all user properties into it
    for (let key in user) {
        clone[key] = user[key];
    }

    // now clone is a fully independent object with the same content
    clone.name = "Pete"; // changed the data in it

    alert( user.name ); // still John in the original object


B>. Using the method Object.assign
    // syntax: Object.assign(dest, ...sources)
       >. The first argument dest -  is a target object
       > further arguments is a list of source objects.

>.This method copies the properties of all source objects into the target "dest", and then returns it as a result.

// Example - adding a couple permissions to it.

let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions 1 & 2 into user
Objects.assign(user, permission1, permission2);

// now user = { name: "John", canView: true, canEdit: true }
alert(user.name); // John
alert(user.canView); // true
alert(user.canEdit); // true

>. The copied property name already exists, it can also get overwritten.

  // let user = { name: "John" };
  Object.assign(user, { name: "Pete" });

   alert(user.name); // now user = { name: "Pete" }


>>>>>>>>>>>>. We can also use Object.assign to perform a simple object cloning:

// let user = {
    name: "John",
    age: 30
};

let clone = Object.assign( {}, user);

alert(clone.name); // John
alert(clone.age); // 30


##### Nested Cloning














########## Summary ################
>. Objects are assigned and copied via reference.
>. Hence a variable stores not the "object value" but a "reference" (address in memory)
>. All operations via copied references (like adding/removing properties) are performed on the same single object.
>. To make a “real copy” (a clone) we can use Object.assign for the so-called “shallow copy” (nested objects are copied by reference) 
or a “deep cloning” function structuredClone or use a custom cloning implementation, such as _.cloneDeep(obj).





















*/
