export default function two_crystal_balls(breaks: boolean[]): number {
  // define the jump amount using square root
  const jumpamount = Math.floor(Math.sqrt(breaks.length));

  let firstcrystal = 0;
  // iterate the array using the first crystal
  for (; firstcrystal < breaks.length; firstcrystal += jumpamount) {
    if (breaks[firstcrystal]) {
      break;
    }
  }

  // reset the index to the previous jump
  firstcrystal -= jumpamount;

  for (let secondcrystal = 0; secondcrystal < jumpamount && firstcrystal < breaks.length; firstcrystal++, secondcrystal++) {
    if (breaks[firstcrystal])
      return firstcrystal;
  }

  // iterate the coming expected array and find the optimized break using second crystal

  return -1;
}
