const arr = "apple, banana, cherry, date, elderberry".split(", ");

function printItems(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]); // runs n times
  }
}

printItems(arr);
