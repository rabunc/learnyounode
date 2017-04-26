// ryan's answer is:

var total = 0;

// iterate on array returned from process.argv

for (var i > 2 in process.argv) {
    total = total + Number(i)
}

console.log(total)



// the correct answer is:

var result = 0

for (var i = 2; i < process.argv.length; i++) {
  result += Number(process.argv[i])
}

console.log(result)