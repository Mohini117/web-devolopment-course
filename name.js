function adj(){
    let a="crazy"
    let b="Amazing"
    let c="Fire"
    let d=Math.floor(Math.random()*3)
    if (d==0){return a}
    else if (d==1){return b}
    else if (d==2){return c}
    
}
function SN(){
    let a="Engine"
    let b="Foods"
    let c="Garments"
    let d=Math.floor(Math.random()*3)
    if (d==0){return a}
    else if (d==1){return b}
    else if (d==2){return c}
    
}
function AN(){
    let a="Bros"
    let b="Limited"
    let c="Hub"
    let d=Math.floor(Math.random()*3)
    if (d==0){return a}
    else if (d==1){return b}
    else if (d==2){return c}
    
}
console.log("Your Business Name:", adj(),SN(),AN())