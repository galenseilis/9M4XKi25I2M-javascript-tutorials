{
    let d = document.getElementById("destination");
    let n = 50;
    for (let i = 0; i < n; i++){
        for (let k = i; k >= 0; k--){
            d.append(k + ' ');
        }
        var br = document.createElement('br');
        d.appendChild(br);
    }
}
