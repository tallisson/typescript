const input1 = document.getElementById('num1') as HTMLInputElement;
const input2 = document.getElementById('num2') as HTMLInputElement;
// '!': garantir a obtenção do conteúdo
const button = document.getElementById('button')! as HTMLButtonElement;

function sum(a: number, b: number) 
{
  return a + b;
}

button.addEventListener('click', () => 
{
  console.log( sum(parseFloat(input1.value), parseFloat(input2.value)) );
});