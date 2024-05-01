for (let isDivisible = 1; isDivisible <= 100; isDivisible++ ) {

    if (isDivisible % 3 !== 0 && isDivisible % 5 !== 0)
    {
        console.log(isDivisible)
    }
    else if (isDivisible % 15 == 0)
    {
        console.log("FizzBuzz")
    }
    else if (isDivisible % 3 === 0)
    {
        console.log("Fizz")
    }
    else if (isDivisible % 5 === 0)
    {
        console.log("Buzz")
    }

}