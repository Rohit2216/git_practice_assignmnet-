

var num=13;
var primeNumber=false;
    for(var i=2; i<num;i++){
        if(num%i==0){
            primeNumber=true;
        }
    }
    if(primeNumber==true){
        console.log("No")
    }else{
        console.log("Yes")
    }