{
    let grades = [1,2,3,4,5,6,1,12,31,1];
    
    // using a loop
    for (let i = 0; i < grades.length; i++){
        if (grades[i] !== undefined){
         console.log(grades[i]);   
        }
    }
    
    grades.forEach(function(element, i, array){
        console.log(element);
    });
}
