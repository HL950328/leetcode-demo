function convertToNestedObject(str) {
  const keys = str.split(".");
  let result = {};

  keys.reduce((acc, key, index) => {
    acc[key] = index === keys.length - 1 ? null : {};
    return acc[key];
  }, result);

  return result;
}

const nestedObject = convertToNestedObject("a.b.c");
console.log(nestedObject);
