// ryan's answer is:

var total = 0;

// iterate on array returned from process.argv

for (var i > 1 in process.argv) {
    total = total + Number(i)
}

console.log(total)



// the correct answer is:

var result = 0

for (var i = 2; i < process.argv.length; i++) {
  result += Number(process.argv[i])
}

console.log(result)

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

