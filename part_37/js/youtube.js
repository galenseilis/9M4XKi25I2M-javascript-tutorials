{
    let grades = [12, 's', function(){}];
    console.log(grades[1]);
}

{
    let grades = [];
    grades[0] = 12;
    grades[1] = 43;
    grades[43] = 'meow';
    grades.length = 200;
    
    for (let i = 0; i < grades.length; i++){
        console.log(grades[i]);
    }
}
