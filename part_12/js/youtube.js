{
    let x = 5;
    x = 5.5;
    console.log(Number.MAX_SAFE_INTEGER);
    console.log(Number.isSafeInteger(x));
    
}

{
    let babies = 9007199254740991;
    console.log(Math.pow(babies, 200)); //gives infinity
    console.log(console.log() + 2);
    console.log(1/0);
}
