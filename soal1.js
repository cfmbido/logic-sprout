function capitalizeLetter(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

function isInitial(word) {
  const listCapitalizeChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  if (
    word?.length === 2 &&
    listCapitalizeChar.includes(word[0]) &&
    word[1] === "."
  )
    return true;
  return false;
}

function validName(name) {
  if (!name?.length || typeof name !== "string") {
    return false;
  }

  name = name.trim();

  let arrayName = name?.split(" ");

  if (arrayName.length < 2 || arrayName.length > 3) {
    return false;
  }

  if (arrayName[arrayName.length - 1].includes(".")) {
    return false;
  }

  for (const item of arrayName) {
    if (item.length === 1) {
      return false;
    }

    if (item.length > 2 && item.includes(".")) {
      return false;
    }

    let capitalizeWord = capitalizeLetter(item);
    if (item !== capitalizeWord) {
      return false;
    }
  }

  if (
    arrayName.length === 3 &&
    isInitial(arrayName[0]) &&
    !isInitial(arrayName[1])
  ) {
    return false;
  }

  return true;
}
