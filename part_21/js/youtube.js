{
    
    let position = {
        x: 10;
        y: 20
        print: function() {
            console.log(`X: $(this.x), Y: $(this.y)`);
    }
        myObject: {catSays:"meow"}
    }
    let myPosition = position;
    console.log(position);
    console.log(myPosition);
    
    myPosition.x = 15;

    console.log(position);
    console.log(myPosition);
    
    position.print();
} //this depends on the function context.
