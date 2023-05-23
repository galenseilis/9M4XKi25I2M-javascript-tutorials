{
    let grades = [];
    
    while (true){
        let input = prompt("Add a grade");
        if (input == 'q' || input === null){
            break;
        }
        grades.puch(Number(input));
        console.log(grades)
    }
}
