function fact(k){
    if (k==0) {
        return 1
    }
    else {
        return fact(k-1)*k;
    }

};
console.log(fact(5));
