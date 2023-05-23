{
    var age = prompt("Age?");
    var name = prompt("Name?");
    
    if (age < 13 && !(name === "Galen")){ // === is the identity operator
        console.log("Welcome!");
    } 
}

// generalization: program applies to wide range of cases
