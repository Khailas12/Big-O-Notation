let array = [];
let start = 0;
let target = 1000;


for (let i = 1; i <= 1024; i++) {
    array.push(i);
}

console.log(array);
let end = array.length - 1;

const binarySearch = ((array, start, end, target) => {
    let midIndex = Math.floor((start + end) / 2);
    console.log(array.slice(start, end));

    if (array[midIndex] === target) {
        return true;
    }
    else if (start > end) {
        return false;
    }
    else if (array[midIndex] > target) {
        return binarySearch(array, start, midIndex - 1, target);
    }
    else {
        return binarySearch(array, midIndex + 1, end, target);
    }
});
binarySearch(array, start, end, target);