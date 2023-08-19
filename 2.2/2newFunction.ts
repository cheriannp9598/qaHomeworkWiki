export function myFunction(myNum: number): string {
    if (myNum == 5) {
      /* I think myNum means there a number to follow and == means equals why did we uses export function and why did we say it 
      2 times then myNum with out a number we say string but no "" I am  so confused.*/
        //Here We have first test;If the munber Is 5, return "true"
        return 'true'; /* what dose else if mean when do we use it */
      } else if (myNum < 5 && myNum >= 0) {
        //if the number is less than 5, we return "false".
        //we also have to make sure it's not negative, due to the last test.
        // The '&&' means both statments need to be true for this block to trigger.
        return 'false';
      } else if (myNum > 5) { 
        // /We return "big" if we have a number larger than 5.
        return "big";
      } else {
        // Finally, we need to return "negative" if any negative number is passed
        // in, but we don't need an if here, because only negative numbers are
        // left by now.
        return "negative";
    }
}
