{
    let grades = [1, 2, 2, 2, 4,2, 2];
    grades.length = 30;
    grades[34] = 40;

    let count = 0;
    let total = 0;
    
    for (let = 0; i < grades.length; i++){
        if (grades[i] !== undefined){
            largest = grades[i];
            count++;
            total += grades[i];
        }
    }
    let avg = total / count;
    console.log(avg)
}
