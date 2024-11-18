/* use command: {node script.js} to run */
/* Task-{2}-start */
function  sumAverageCalc(numbers) {
    if(numbers.length === 0) {
        return {sum: 0, average: 0};
    }
    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const average = sum / numbers.length;

    return { sum, average };
}

const numbersArray = [10, 20, 30, 40, 50];
const result = sumAverageCalc(numbersArray);

console.log(`Sum: ${result.sum}, Average: ${result.average}`);
/* Task-{2}-Done!! */

/* Task-{3}-start */
function removeDuplicates(strings) {
    const unique = new Set(strings)
    return Array.from(unique);
}

const arrayWithDuplicates = ["apple", "banana", "apple", "orange", "banana"];
const uniqueArray = removeDuplicates(arrayWithDuplicates);
console.log(uniqueArray);
/* Task-{3}-Done!! */