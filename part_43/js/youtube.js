{
    grades = [20, 22, 39];
    gradesB = [43, 12, 323, 3223];
    let tacos = grades.concat(gradesB); //returns a new array, doesn't change the original arrays
    grades.includes(22); // like python's "in" syntax
    grades.indexOf(220); // -1 means it doesn't exist, else gives the first index 
    grades.join(',') //converts to a string with a chosen delimiter as an argument
    grades.slice(3, 5)
}
