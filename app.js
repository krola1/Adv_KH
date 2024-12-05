const res = await fetch("input.txt");
let data = await res.text();

data = data.split("\n");
let arr1 = [];
let arr2 = [];

// let arr3 =[]

const splitter = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    array[i] = array[i].split("   ");
    arr1.push(array[i][0]);
    arr2.push(array[i][1]);
  }
  //   arr1.pop();
  //   arr2.pop();
};

splitter(data);

//sorter lister  lavest til høyest

arr1.sort();
arr2.sort();
let totalDistance = 0;
for (let i = 0; i < arr1.length; i++) {
  totalDistance += Math.abs(arr1[i] - arr2[i]);
}

console.log(totalDistance);

// finne diff mellom listene
// summere diff
