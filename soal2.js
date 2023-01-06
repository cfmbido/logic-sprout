function findDisapperared(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    let isMissing = true;

    for (let j = 0; j < arr.length; j++) {
      if (i + 1 === arr[j]) {
        isMissing = false;
        break;
      }
    }

    if (isMissing) result.push(i + 1);
  }

  return result;
}
