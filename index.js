const sumPositiveElementsOfArray = (arr) =>
  arr.reduce((res, num) => (num > 0 ? res + num : res), 0);

const task = (arr, sum) => {
  const number = ((arr.length + 1) * arr.length) / 2 - sum;
  return number > 0 ? number : arr[arr.length - 1] + number;
};

const runTask = (arr) => {
  const sum = sumPositiveElementsOfArray(arr);
  if (!Number.isSafeInteger(sum)) {
    throw new Error(`Sum overflow of integer type`);
  }
  return task(arr, sum);
};

export { runTask, sumPositiveElementsOfArray, task };
