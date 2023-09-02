/*
                          #### Modules ####

        *** Intro *** PART A

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

>. Modules always work in strict mode.

   2]] Module-level scope

>.  Each module has its own top-level scope. Top-level variables and functions from a module are not seen in other scripts.
>. Modules should export what they want to be accessible from outside and import what they need.
>. With modules we use import/export instead of relying on global variables.

   3]] A module code is evaluated only the first time when imported

>. If the same module is imported into multiple other modules, it code is executed only once, upon the first import.
Then all its exports are given further importers.

>. Rule: Top-level module code should be used for initialization, creation of module-specific internal data structures.
>. If we need to make something callable multiple times, then we should export it as a function.


       >>>> import.meta

>. The object import.meta meta-property exposes context-specific metadata to a Javascript module.
It contains information about the module such as the module's URL.


   4]] In a module "this" is undefined

>. In a module, top-level (this) is undefined, unlike non-module scripts where (this) is a global object.


        ### Browser-specific Features

    A]] Module scripts are deferred

    B]] Async works on inline scripts

    C]] External Scripts

    D]] No "bare" modules allowed

    E]] Compatibility, "nomodule"



         ### Build Tools ###

>. In real-life browser modules are rarely used in their raw form, as they are bundled together 
with tools such as webpack and later on deployed.

>. Among the many benefits of using bundlers is that they give us control over how modules are resolved, allowing bare modules and 
other such as CSS/HTML modules.


>. Build tools do the following; 
     
     A]] Take a "main" module, the one intended to be put in <script type="module"> in HTML.
    
     B]] Analyze its dependencies; imports and then imports of imports etc.

     C]] Build a single file with all the modules (or multiple files, that tunable), replacing native import calls'
     with bundler functions, so that it works.  "Special" module types like HTML/CSS modules are also supported.
      
     D]] Additionally other transformations and optimizations may be applied; such as 
             >. Unreachable code removed
             >. Unused exports removed ("tree-shaking")
             >. Development-specific statements like console and debugger removed.
             >. Modern, bleeding-edge JS syntax may be transformed to older one with similar functionality using babel.
             >. The resulting file is minified (spaces removed, variables replaced with shorter names. etc)

>. If we use bundle tools, then scripts are bundled together into a single file(or a few file), import/export statements
inside those scripts are replaced by special bundler functions, hence the resulting "bundled" script does not contain any import/export,
it doesn't require type = "module", and can be put into a regular script as so

      Example: Assuming we're using a tool such as webpack
            <script src="bundle.js"></script>




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



             *** Export and Import *** >>> PART B

>. Both exports and imports have several syntax variants. These include;
        A]] Export before declaration

>. We can label any declaration an export be it a variable, function or a class by placing export before it.

   // Example:
    1]    export let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May'] // export as an array

    2]    export class User {
            constructor(name) {
                this.name = name;
            }
        } // export as a class

    3]     export function sayHi(user) {
        alert(`Hello, ${user}!`);
    }
    
    
>. Most Javascript style guides don't recommend semicolons after functions and class declaration.
>. Hence no need for a semicolon at the end of export class and export function.



        B]] Export apart from declaration

>. Secondly we can declare first the export afterwards.
 
      // Example: 
      file: say.js

      function sayHi(user) {
        alert(`Hello, ${user}!`);
      }

      function sayBye(user) {
        alert(`Bye, ${user}!`);
      }

      export{sayHi, sayBye}; // a list of exported variables.


    ### Import ###

>. Typically a list of items to be imported are placed in curly braces like so import{...}

    // Example: file main.js
        import {sayHi, sayBye} from './say.js';

        sayHi('John') // result: Hello, John!
        sayBye('John') // result Bye, John!

>. When there's a lot to import we can import everything as an object using import * as <obj>

     // Example: file: main.js
     import * as say from './say.js'

     say.sayHi('John');
     say.sayBye('John');

>>>> Reasons to explicitly list what we need to import.
    a] It gives the import shorter names. eg. sayHi() rather than say.sayHi()
    b] It gives it a better overview of the code structure: what is used and where.
    and makes code support and refactoring easier.


   ### Import "as"

>. We can use (as) to import under different names.

     // Example: file main.js

     import {sayHi as hi, sayBye as bye} from './say.js';

     hi('John');  // Hello, John!
     bye('John'); // Bye, John!

     Explanation: here 'as' is used which enhances brevity.


     ### Export "as" ###

>. Similarly, the same can be utilized in export.

   // Example: file say.js
        ...
        export {sayHi as hi, sayBye as bye};

        file: main.js

        import * as say from './say.js';

        say.hi('John');  // Hello, John!
        say.bye('John'); // Bye, John!
      

  ### Export Default ###

>. In practice there are two kinds of modules. They include;
     A]] Modules that contain a library, pack of functions
     B]] Modules that declare a single entity

>. Note: the later is most preferred so that everything has its own module.
>. Code navigation becomes easier when files are well-names and structured into folders.
>. Modules provide a special export default("the default export") syntax which makes the " one things per module"
better.
>. There maybe only one export default per file, which is later on followed by import without curly barces.

>. Note: import needs surly braces for named exports and doesn't need them for the default one.
    
       // Example: file user,js

           export default class User {
            constructor(name) {
                this.name = name;
            }
           }

       // Example: file: main.js
           
        import User from './user.js';

        new User('John');


        ### default name ###

>. In other scenarios default keyword is used to reference the default export.

   // Example:
        function sayHi(user) {
            alert(`Hello, ${user}!`);
        }

        // same as if we added "export default" before the function
        export {sayHi as default}

>>>>> Drawbacks of this;
>. having different names to import the same thing, hence the preference of many to use named exports.

>. Rule: To keep the code consistent when using defaults, imported variables should correspond to the file names.
   
    // Example:
      import User from './user.js;
      import func from '/path/to/func,js;

    

















*/
