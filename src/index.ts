export const commafy = (num: string, comma?: string) => {
  if (comma === undefined) comma = ",";

  const numArr: string[] = num.split(".");
  const arr: string[] = [];
  for (let i = 0; i < numArr[0].length / 3; i++) {
    let start = numArr[0].length - (i + 1) * 3;
    start = start >= 0 ? start : 0;
    const end = numArr[0].length - i * 3;
    arr.push(numArr[0].slice(start, end));
  }
  if (numArr[1]) {
    let i;
    for (i = numArr[1].length - 1; i >= 0; i--) {
      if (numArr[1][i] !== "0") {
        break;
      }
    }
    numArr[1] = numArr[1].substring(0, i + 1);
  }

  return arr.reverse().join(comma) + (numArr[1] ? "." + numArr[1] : "");
};
