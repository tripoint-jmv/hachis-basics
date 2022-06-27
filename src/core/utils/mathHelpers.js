/**
 * @param {number} max The maximum num we want generated
 * @returns an array of random unique numbers
 */
export const getRandomInts = (max) => {
  const nums = new Set();
  while (nums.size !== 3) {
    nums.add(Math.floor(Math.random() * max));
  }
  return [...nums];
};

/**
 * @param {array} The array you want shuffled.
 * Fisher-Yates Shuffle @link {https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle}
 * @returns The array you passed in but shuffled.
 */
export const shuffledAnswers = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};
