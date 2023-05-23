{
    let grades = [1, 2, 2, 2, 4,2, 2];
    grades.length = 30;
    grades[34] = 40;
    
    let found = false;
    let search = 43;
    let largest = grades[0];
    
    for (let = 0; i < grades.length; i++){
        if (grades[i] > search){
            largest = grades[i];
        }
    }
    console.log(largest)
}
