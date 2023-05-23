{
    let grades = [
    [1,2,3,4,5,6,1,12,31,1],
    [1,2,3,4,5,6,1,12,31,1],
    [1,2,3,4,5,6,1,12,31,1]
    ];
    
    for (let i = 0; i < grades.length; i++){
        for (let k = 0; k < grades[i].length; k++){
            console.log(grades[i][k]);
        }
    }
    
    grades.forEach(function(row){
        row.forEach(function(col){
            console.log(col);
        });
    });
}
