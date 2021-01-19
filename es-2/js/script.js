const array = [];

for (let i = 1; i <= 10; i++) {
  array.push(i)
}

console.log(array);

for (let i = 0; i < array.length; i++) {
  if (array[i]%2 == 0) {
    document.getElementById('green').innerHTML +=array[i];
  } else {
    document.getElementById('red').innerHTML +=array[i];
  }
}
