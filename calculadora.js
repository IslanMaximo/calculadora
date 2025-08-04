let res = document.querySelector('div#res')
let dn1 = document.querySelector('input#teste')
let dn2 = document.querySelector('div#dn2')
let logica = 0
let n1 = []
let n2 = []
function subtracao(){
    logica = 1
    res.innerHTML += `<p>-</p>`
}
function adicao(){
    logica = 2
    res.innerHTML += `<p>+</p>`
}
function multiplicacao(){
    logica = 3
    res.innerHTML += `<p>*</p>`
}
function divisao(){
    logica = 4
    res.innerHTML += `<p>/</p>`
}
function n7(){
    if(logica == 0){
        n1.push(7)
        dn1.text = '7'
    }else{
        n2.push(7)
        dn2.innerHTML += `7`
    }
        
}
function n8(){
    if(logica == 0){
        n1.push(8)
        dn1.innerHTML += `8`
    }else{
        n2.push(8)
        dn2.innerHTML += `8`
    }
        
}
function n9(){
    if(logica == 0){
        n1.push(9)
        res.innerHTML += `<p>9</p>`
    }else{
        n2.push(9)
        res.innerHTML += `<p>9</p>`
    }        
}
function n4(){
    if(logica == 0){
        n1.push(4)
        res.innerHTML += `<p>4</p>`
    }else{
        n2.push(4)
        res.innerHTML += `<p>4</p>`
    }        
}
function n5(){
    if(logica == 0){
        n1.push(5)
        res.innerHTML += `<p>5</p>`
    }else{
        n2.push(5)
        res.innerHTML += `<p>5</p>`
    }        
}
function n6(){
    if(logica == 0){
        n1.push(6)
        res.innerHTML += `<p>6</p>`
    }else{
        n2.push(6)
        res.innerHTML += `<p>6</p>`
    }        
}
function nn1(){
    if(logica == 0){
        n1.push(1)
        res.innerHTML += `<p>1</p>`
    }else{
        n2.push(1)
        res.innerHTML += `<p>1</p>`
    }        
}
function nn2(){
    if(logica == 0){
        n1.push(2)
        res.innerHTML += `<p>2</p>`
    }else{
        n2.push(2)
        res.innerHTML += `<p>2</p>`
    }        
}
function n3(){
    if(logica == 0){
        n1.push(3)
        res.innerHTML += `<p>3</p>`
    }else{
        n2.push(3)
        res.innerHTML += `<p>3</p>`
    }        
}

function resultado(){
    //res.innerHTML = `<p>valores dititados n1 ${n1} n2 ${n2} e a soma do n1 </p>`
    /*if(logica == 1){
        total = Number(dn1.value) - Number(dn2.value)
    }else if(logica == 2){
        total = Number(n1) + Number(n2)
    }else if(logica == 3){
        total = n1 * n2
    }else{
        total = n1 / n2
    }
    total = total.toFixed(2)
    res.innerHTML += ` <p>= ${total}</p>`
    logica = 6
    */
   res.innerHTML = `${dn2}`
    
    
}
