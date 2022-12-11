const arr = [3, 5, 6, 4, 7, 2];
const sum = 9;

const findPositions = (array, sum) => {
  const hashMap = {};
  let res;
  for (let i = 0; i < array.length; i++) {
    const diff = sum - array[i];
    if (hashMap[array[i]] !== undefined) {
      res = [hashMap[array[i]], i];
      break;
    } else {
      hashMap[diff] = i;
    }
  }

  return res;
};

const res = findPositions(arr, sum);
console.log("🚀 ~ file: index.js:17 ~ res", res);

const findPositionsUseMap = (array, sum) => {
  const hashMap = new Map();
  for (let i = 0; i < array.length; i++) {
    const diff = sum - array[i];
    if (hashMap.has(array[i])) {
      return [hashMap.get(array[i]), i];
    } else {
      hashMap.set(diff, i);
    }
  }
};

const res2 = findPositionsUseMap(arr, sum);
console.log("🚀 ~ file: index.js:17 ~ res2", res2);
