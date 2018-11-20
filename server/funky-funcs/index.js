const intersection = (arr1, arr2) => {
  const intersectionArray = [];

  arr1.forEach(element => {
    const isDuplicate = intersectionArray.includes(element);
    if (arr2.includes(element) && !isDuplicate) {
      intersectionArray.push(element);
    }
  });

  return intersectionArray;
};

const flattenDeep = (arr, flattenedArr = []) => {
  const nextArr = arr.slice(1);

  if (!arr.length) {
    return flattenedArr;
  } else if (Array.isArray(arr[0])) {
    return flattenDeep(arr[0], flattenedArr).concat(flattenDeep(nextArr));
  } else {
    flattenedArr.push(arr[0]);
    return flattenDeep(nextArr, flattenedArr);
  }
};

const flipArguments = func => {};

const invert = obj => {};

const camelCase = str => {};

module.exports = {
  intersection,
  flattenDeep,
  flipArguments,
  invert,
  camelCase,
};
