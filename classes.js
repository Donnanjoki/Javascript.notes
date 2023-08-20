/*
Notes based off the definitive Guide: Chapter 9: Classes

Introduction

>. In Javascript, classes use prototype-based inheritance: that is if two objects inherit properties from the same prototype
then those objects are said to be instances of the same class.

>. If two objects inherit from the same prototype, then (but not necessarily) that means that they were created and initialized by
the same constructor function or factory function.

**** Classes and Prototypes ****

>.In JavaScript, a class is a set of objects that inherit properties from the same prototype object, hence placing a prototype object, as a central
 feature of a class.



 **** Summary ****

 >. Objects that are members of the same class inherit properties from the same prototype object.
 >. It is possible to define classes with nothing more than the Object.create() method.
 >. Traditional way of defining classes involved;
      --- First defining a constructor function
      --- Functions created with the function keyword have a prototype property, and
      the value of this prototype is an object that is used as the prototype of all the objects created when the function is invoked with new as a constructor.
      --- By initializing this prototype object you can define the shared methods of your class
      --- Although the prototype object is the key feature of the class, the constructor function is the public identity of the class.
>. ES6 introduces a class keyword that makes it easier to define classes, but under the hood, the constructor and prototype mechanism remains the same.
>. Subclasses are defined using the extends keyword in a class declaration.
>. Subclasses can invoke the constructor of their superclass or overridden methods of their superclass with the super keyword.



*/
