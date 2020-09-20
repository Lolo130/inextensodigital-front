function increment(numberArray : Array<number>) : Array<number> {
  if (!Array.isArray(numberArray) || numberArray.length === 0) {
    console.log("You have to give an array");
    return null;
  }

  if (numberArray.some((n) => n < 0 || n > 9)) {
    console.log("Each element of the array must be between 0 and 9");
    return null;
  }

  // on part du dernier chiffre
   for (let i : number = numberArray.length; i >= 1; i--) {
     console.log(i);
     // si le dernier chiffre est inférieur à 9 on incrémente simplement
    if (numberArray[i] < 9) {
      console.log("enter one");
      numberArray[i] = numberArray[i] + 1;
      break;
     // sinon ce chiffre est 9 et le chiffre d'avant est inférieur à 9 
    } else if (numberArray[i - 1] < 9) {
      console.log("enter two");
      numberArray[i - 1] = numberArray[i - 1] + 1;
      numberArray.fill(0, i);
      break;
      // si on arrive au premier chiffre car tout les chiffres sont 9 et qu'il n'est pas rentré avant
    } else if (i == 1) {
      console.log("enter three");
      numberArray.fill(0);
      numberArray.splice(0,0,1);
      break;
    }
  }
  return numberArray;
}

console.log(increment([2, 4, 9, 5, 9]))