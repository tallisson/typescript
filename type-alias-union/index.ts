type Uid = string | number;

function logDetails(uid: Uid, item: string) {
  console.log(`O produto com ${uid} tem nome de ${item}`);
}
logDetails(10, 'Soja');

type Plataform = 'Windows' | 'Linux' | 'MacOS' | 'Android' | 'iOS';
function renderPlataform(plataform: Plataform) {
  console.log(plataform);
}
renderPlataform('Windows');