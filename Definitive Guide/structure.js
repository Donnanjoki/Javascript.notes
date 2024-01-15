/*

LEXICAL STRUCTURE
-------------------------------------------

A] Case Sensitivity, spaces and line breaks

].Javascript is case sensitive hence keywords, identifiers, and function names plus other identifiers must always be typed with consistent capitalization of letters.

"while" not "While" or "WHILE"

]. You can format and indent your programs in a neat and consistent way that makes the code easy to read and understand.

B] COMMENTS

]. JS supports two comments style

// for single-line comment

/* This is a multi-line comment /

C] LITERALS

>. A literal is a data value that appears directly in a program.
Examples; 
        12 // The number twelve
        1.2 // The number one point two
        "hello world" // A string of text
        'Hi' // Another string
        true // A Boolean value
        false // The other Boolean value
        null // Absence of an object

D] IDENTIFIERS AND RESERVED WORDS

>. An identifier is simply a name. 
>. In Javascript, identifiers are used to name constants, variables, properties, functions and classes and to provide
labels to certain loops in javascript code.

>. A javascript identifier must begin with a letter, an underscore(_) or a dollor sign.
>. Subsequent characters can be letters, digits,underscores or dollar signs.
>. Note: Digits are not allowed as first characters.
>. Also reserved words cannot be used as regular identifiers.



E] UNICODE

>. JavaScript programs are written using the Unicode character set, and you can use any
Unicode characters in strings and comments. For portability and ease of editing, it is
common to use only ASCII letters and digits in identifiers.


F] OPTIONAL SEMICOLONS

>. Javascript uses the semicolon(;) to separate statements from one another.
>. This explicitly marks the end of a statement.

>. There are three exceptions to the general rule that Js interprets line breaks as semicolons, when it cannot
parse the second line as a continuation of the statement of the first line.
   
   Exception 1: return, throw, yield, break and continue statements
   >. This statements stand alone, but they are sometimes followed by an identifier or expression
   >. If a line break appears after these words, Javascript will always interpret that line break as a semicolon
      // Example: return
                  true;
        Javascript assumes you meant
          return; true;
        However you probably meant
           return true;
    >. Hence you must not insert a line break between return, break or continue and the expression that follows the keywords,
    otherwise your code will fail - which would be difficult to debug.

    Exception 2: ++ and -- operators
    >. These operators can be prefix operators or postfix operators, hence if you want to use these operators as postfix operators,
    they must appear on the same line as the expression they apply to.

    Exception 3: Functions defined using arrow syntax
    >. The => arrow itself must appear on the same line as the parameter list.





*/
