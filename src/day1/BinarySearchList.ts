export default function bs_list(haystack: number[], needle: number): boolean {
  // set the lowest and highest value
  let low = 0;
  let high = haystack.length;

  // do the iteration
  do {
    // search the middle point
    let middleindex = Math.floor(low + (high - low) / 2);
    let middlevalue = haystack[middleindex];

    // do the validation
    if (middlevalue === needle) {
      return true;
    } else if (middlevalue > needle) {
      high = middleindex;
    } else {
      low = middleindex + 1;
    }
  } while (low < high);

  return false;
}
