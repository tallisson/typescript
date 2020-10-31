let varBoolean: boolean;
varBoolean = true;

let varString: string;
varString = "foo"; // 'foo' | `foo`

let varNumber: number; // int | float | double | hex | binary
varNumber = 20.1;

let varArray: number[]; // Array<number>
varArray = [1, 2, 3];

// void
function oi() {
  console.log('Oi');
}

// null | undefined

// never
function lancaErro(): never {
  throw new Error('erro');
}

// tuple
let varTuple: [number, string]
varTuple = [1, 'oi'];

// enum
enum Cores {
  white = 'branco',
  red = 'vermelho'
};
console.log(Cores.red);

// object
let varObject: {
  msg: string;
}
varObject = {
  msg: 'Oi'
}
console.log(varObject.msg);

// any, aceita qlq valor
let varAny: any