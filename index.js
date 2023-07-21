function stringLength(str){
    if(str.length >=1 && str.length <= 10 ){
        
        return str.length;

    }
   

}
function  reverseStr(str){
    return str.split('').reverse().join('');
}

module.exports = { stringLength, reverseStr }



