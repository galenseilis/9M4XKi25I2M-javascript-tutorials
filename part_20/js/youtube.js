{
    let content = "Today we'll be talking about string methods and how fun they are!";
    console.log(content.substring(6, 11));
    console.log(content.substr(6, 5));
    console.log(content.slice(6, 11));
    
    console.log(content.toUpperCase());
    console.log(content.toLowerCase());
    console.log(content.trim()); //remove trailing whitespace
    console.log(content.trimLeft());
    console.log(content.trimRight());
    console.log(content.trimStart()); //same as trimRight
    console.log(content.trimEnd()); //same as trimLeft
    
    let waiting = "tick tock";
    console.log(waiting.repeat(4000)); //print repeat of strings; kinda like with Python I could do "tick tock" * 4000 although this one might automatically space.
    console.log(content.split(" "));
    
    console.log(content.replace());
    console.log(content.search());
}
