/**
 * Created by Tink on 2015/10/28.
 */
var fibonacci = function(n){
    if(n === 0){
        return 0;
    }
    if(n === 1){
        return 1;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
};

exports.fibonacci = fibonacci;
