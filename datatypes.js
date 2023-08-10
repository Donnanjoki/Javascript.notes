/* Javascript has 7 primitive data types and 1 non-primitive data type
the primitive data types include:

1. number: which includes numbers of any kind either an integer or floating-point.
2. bigInt: for integer numbers of arbitrary length
3. string: for strings
4. booleans: for true/false
5. null: for unknown values
6. undefined: for unassigned values
7.symbol: for unique identifiers

the non-primitive data types 
8. object: for more complex data structures.
 */

/* Rounding Numbers in Javascript:

  A]] Math.round

>. This simply rounds off any number with a decimal part to the nearest integer.
>. It follows the rule, if a number is exactly halfway between two integers then it will be rounded up.
    Example: Math.round(2.3)
           output: 2
           Math.round(2.911)
           output: 3
   B]] Math.floor

>. This always rounds a value down to the integer below.
>. Rounding down ensures that the integer will start at zero and that each integer will have an equal chance of being returned.
>. Also it ensure that an index between 0 and 4 is returned, so every element in the array has an equal chance of being selected.
        Example: Math.floor(2.3)
           output: 2
           Math.floor(2.911)
           output: 2


    C]] Math.ceil

>. This simply rounds up.
>. We always need to round up in order to have extra containers for any remainders.
    Example: const songsPerPlaylist = 10;
             const numberofSongs = 82;
             const numberOfPlaylists = Math.ceil(numberOfSongs/songsPerPlaylist);
              Output // 9


     D]] Math.trunc

>. This basically removes the decimal part of the number, leaving just the integer part. 
      Example: Math.trunc(-2.3)
      output: -2 // removes the decimal part, leaving just -2

      Math.flour(-2.3)
      -3 // rounds down to -3

      Math.ceil(-2.3)
      -2  // rounds up to -2

    E]] Rounding Numbers to Decimal PLaces in JS
  i)Number.toFixed

>. This rounds a decimal number to a given number of decimal places, which is provided as an argument.
       Example: 2.4387587.toFixed(2)  // rounds to 2 decimal places
                 output: "2.44"
>. The result returned is a string, hence to convert it to a number we simply wrap the method call in the Number function
    Example: Number(2.4387587.toFixed(2)) 
    output: 2.44

>. Note: You can't call methods on integers using a single dot, as it will become unclear if the dot is a method call operator or a decimal point.
   Example: 2.toFixed(2)
   output: SyntaxError

>. To manoeuvre this either place the integer in parenthesis or use two dots so that it's clear you're calling a method rather than
writing out a number literal with a decimal point.
    Example: (2)toFixed(2)
    output "2.00"
         or
    2..toFixed(2)
    "2.00"

>>> Real-Case Scenario
You have an e-commerce site running a 15% promotion off anything in the shopping cart.

const item1Price = 2.99
const item2Price = 4.99
const item3Price = 6.20

const totalPrice = item1Price + item2Price + item3Price
const discountPrice = 0.85 * totalPrice

12.052999999999999

// This can be fixed using Number.toFixed
 const discountedPrice = (0.85 * totalPrice).toFixed(2)
 output: "12.05"


ii) Number.toPrecision

>. This work in a similar way to Number.toFixed but it rounds numbers to a fixed number of significant values.
>. Significant figures are the number of digits ina value, often a measurement, that contribute to the the degree of accuracy of the value.
>. We start counting significant figures at the first non-zero digit.
    Example 1:  53,895 rounded to two significant values will be 54,000
   
    Example 2: 0.0000623978 rounded to two significant figures will be 0.0000062.

>. Using the .toPrecision method
    Example: (53863).toPrecision(2)
            output: "5.4e+4"

    Example: 0.0000623978.toPrecision(2)
           Output: "0.000062"
>. To remove the string we can wrap the method call with a Number  function
   
   Example: Number((53863).toPrecision(2))
          output: 54000


>>> Real-world Scenario
>. When dealing with large numbers and you are not sure how big they're going to be.

   Example: Say you want to report how many times your latest post has been “liked”, 
   do you round it to the nearest 10, 100 or 1000? In a way, this depends how popular it is; 
   you don’t want to round it to the nearest 100 if it only gets 8 likes, but if it gets thousands 
   of likes then it seems silly to round it to the nearest 10. The solution is to round it to one significant figure:

const unpopularPost = 8;
const quitePopularPost = 387;
const popularPost = 79671;

Number(unpopularPost.toPrecision(1))
output: 8
Number(quitePopularPost.toPrecision(1))
output: 400
Number(popularPost.toPrecision(1))
output: 80000


### Summary Breakdown ###

>. You can simply round a number to the nearest integer by using Math.round.
> You can either round up the number down or up using Math.floor or Math.ceil respectively.
>. Consider using Math.trunc when planning on rounding negative numbers.

>. If you  need to round a given number to decimal places or significant figures, then use Number.toFixed or Number.toPrecision, though
these two methods are called by the number and return a string.

   ###Problems with Rounding Numbers in Javascript ###

 >.Computers store all data as a binary representation. Javascript stores numbers as 32-bit single precision binary values.
 >. Hence the problem arises in that some base 10 numbers can't be accurately represented in base 2.
 >. The Math object has a method called fround, which returns the closest number that can be represented using 32-bits.
     Example // Math.fround(0.625)
      output 0.625
*/
