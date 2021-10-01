function receber(){
    var str = "Biscoito";
    var contando = str.match(/(.)(?=.*\1)/gi);
    return (contando);
}
console.log(receber());