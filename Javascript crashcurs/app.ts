const numbers = [1, 2, 3, 4];
function sum(a: number[]) {
  let sumOfNumbers = 0;
  for (let i = 0; i < a.length; i++) {
    sumOfNumbers += a[i];
  }
  console.log(sumOfNumbers);
}
sum(numbers);
