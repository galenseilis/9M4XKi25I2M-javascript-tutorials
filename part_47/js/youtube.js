f{
    let grades = [
    [1,2,3,4,5,6,1,12,31,1],
    [1,2,3,4,5,6,1,12,31,1],
    [1,2,3,4,5,6,1,12,31,1]
    ];
    
    for (let i = 0; i < grades.length; i++){
        for (let k = 0; k < grades[i].length; k++){
            console.log(grades[i][k]);
            if (grades[i][k] === 54){
                console.log("You found the value!");
                break;
            }
        }
    }
    for (let i = 0; i < grades.length; i++){
        for (let k = 0; k < grades[i].length; k++){
            console.log(grades[i][k]);
            if (grades[i][k] === 54){
                console.log("You found the value!");
                continue;
            }
        }
    }
    // you "can" use a label
    outerLoop: for (let i = 0; i < grades.length; i++){
        for (let k = 0; k < grades[i].length; k++){
            console.log(grades[i][k]);
            if (grades[i][k] === 54){
                console.log("You found the value!");
                continue outerLoop;
            }
        }
    }
}
