export function add(numbers: string): number {
  if (numbers === "") {
    return 0;
  }

  const delimiterRegex = /^\/\/(.+)\n/;
  const customDelimiterMatch = numbers.match(delimiterRegex);

  let delimiter = ",|\n";
  let numberString = numbers;

  if (customDelimiterMatch) {
    delimiter = customDelimiterMatch[1];
    numberString = numbers.replace(delimiterRegex, "");
  }

  const numArray = numberString.split(new RegExp(delimiter));

  const negatives: number[] = [];
  const sum = numArray.reduce((acc, num) => {
    const parsedNum = parseInt(num, 10);
    if (isNaN(parsedNum)) {
      return acc;
    }
    if (parsedNum < 0) {
      negatives.push(parsedNum);
    }
    return acc + parsedNum;
  }, 0);

  if (negatives.length > 0) {
    throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
  }

  return sum;
}
