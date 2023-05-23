{
    let password;
    do {
        password = prompt("What is the passcode?")
    } while (password.toLowerCase() !== "letmein");
    
    let myString = "search this string";
    let charToSearch = "c";
    for (i = 0; i < myString.length; i++){
        if (myString === charToSearch){
            console.log(myString[i], 'is found at index', i);
        }
    }
}
