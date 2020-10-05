const howManyHundreds = function (num) {
  const newNum = num / 100;
  return Math.floor(newNum);
}

howManyHundreds(1000);
howManyHundreds(894);
howManyHundreds(520);
howManyHundreds(99);
howManyHundreds(0);
