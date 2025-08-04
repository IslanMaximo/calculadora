let res = document.querySelector('#res');

function dado(n){
    res.value += n
}
function limpar(){
    res.value = ''
}
function back(){
    res.value = res.value.slice(0, -1)
}
function resultado(){
    let resultado = eval(res.value)
    try{
        res.value = resultado
    }catch{
        res.value = '[ERRO] dados incorretos'
    }    
}