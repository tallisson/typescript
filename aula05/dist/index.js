"use strict";
var varBoolean;
varBoolean = true;
var varString;
varString = "foo"; // 'foo' | `foo`
var varNumber; // int | float | double | hex | binary
varNumber = 20.1;
var varArray; // Array<number>
varArray = [1, 2, 3];
// void
function oi() {
    console.log('Oi');
}
// null | undefined
// never
function lancaErro() {
    throw new Error('erro');
}
// tuple
var varTuple;
varTuple = [1, 'oi'];
// enum
var Cores;
(function (Cores) {
    Cores["white"] = "branco";
    Cores["red"] = "vermelho";
})(Cores || (Cores = {}));
;
console.log(Cores.red);
// object
var varObject;
varObject = {
    msg: 'Oi'
};
console.log(varObject.msg);
// any, aceita qlq valor
var varAny;
