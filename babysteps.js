var total = 0;

for (var i = 2; i < process.argv.length; i++) {
  total = total + Number(process.argv[i])
}
console.log(total)

// same thing as python, but being more verbose and explicit about it
// showing you what the computer is doing
// dealing with numbers and arrays explicitly
// you're reading elements from the array (argv) that the index i specifies
// then you're adding them all together -- being more detailed
// python does the same thing in fewer words 
// python is hiding some things from you as to how it's actually doing it
// nothing is obfuscated here -- you're literally looping and executing code
// and you can see exactly when it's going to end
// how it's iterating (addition part similar to python)

// semicolons
// technically you can do
// ; deliniates things (technically optional at the end of lines)
// this is a statement, this is another statement
// in the case of the for statement 
// 1st is only run once
// 2nd determines loop or not loop -- executed every time
// 3rd is usually an incrementer, also executed every time
// this is a convention since C in the 70s
// this is the most common one for looping on an array
// there is a slightly shorter way to do it

// in any programming language, python included, () serve 2 purposes:
// 1. is to encapsulate an expression -- any code
// you can put () around your whole program and JS is fine with that
// same as math, Order of Operations, do these grouped things first
// if they have some output, do it with whatever is next
// in the for loop, () are required, it's encapsulating an expression
// () are required for FOR loops, syntaxically 
// 2. to call a function
// () are required in functions, syntaxically
// def in python is synonymous with function in JS
// function name(arguments, you, want, to, pass, it)
// {} replace : in python
// {} replace indentation also in python
// "there is no 8th element, what are you doing, i'm going to crash"
// Have the power to make mistakes like that but also get more responsibility
// while is an infinite loop until you tell it to stop