/*
                          #### Modules ####

        *** Intro ***

>. The goal of modular programming is to allow large programs to be assembled using modules of code from disparate authors
and sources.
>. Modularity involves encapsulating or hiding private implementation details and keeping the global namespace tidy so that modules
can not accidentally modify variables, functions and classes defined by other modules.
>. ES6 defines modules using import and export keywords.
>. Note: Javascript modularity still depends on code-bundling tools.

>. Among the past ways to organize code into modules, special libraries to load modules on deman include;

    >>> AMD 
    >>> CommonJS - the module system created for Node.js server
    >>> UMD

        >>>>  What is a module?   <<<<

>. A module is a file. one script is one module.
>. Modules cam load each other and use special directives (export) and (import) to interchange functionality, call functions of one 
module from another one.

>>> export: keyword labels variables and function that should be accessible  from outside the current module.
>>> import1: allows the import of functionality from other modules.

   // Example: the below file is exporting a function
        file: sayHi.js
        export function sayHi(user){
            alert(`Hello, ${user}!`)
        }

   // Example: the below file imports the function and uses it
        file: main.js

        import {sayHi}  from '.sayHi.js';

        alert(sayHi); // function
        sayHi('John); // Hello, John!

>. The import directive loads the module by path ./sayHi.js relative to the current file and assigns exported function sayHi to the 
corresponding value.
>. Additionally we must tell the browser that a script should be treated as a module using the attribute <script type = "module"> , here the browser will
automatically fetch and evaluate the imported module and run the script.
>. Note modules only work via HTTP(s) not locally.


>>>> Core Module Feature <<<<<
  
   1]] Always 'use strict'

>.


   2]] Module-level scope
   3]] 













     #### Summary ####

1. Module is a file. To make import/export work, browsers need <script type = "module">
2. Modules have several differences; 
                                a) Deferred by default
                                b) Async works on inline scripts
                                c) To load external scripts from another origin (domain/protocol/port), CORS headers are needed
                                d) Duplicate external scripts are ignored
3. Modules have their own, local top-level scope and interchange functionality via import/export.
4. Modules always use strict
5. Modules code is only executed once. Exports are created once and shared through importers.

>. When using modules, each module implements the functionality and exports it. Then we use import to directly 
import it where its needed. The browsers loads and evaluates the scripts automatically.
> Webpack is used to bundle modules together for performance and manage dependency relationships in projects.

*/
