function isValidSubsequence(array, sequence) {
  let arrIndx = 0;
  let seqIndx = 0;
  while (arrIndx < array.length && seqIndx < sequence.length) {
    if (sequence[seqIndx] === array[arrIndx]) {
      seqIndx++;
    }
    arrIndx++;
  }
  return seqIndx === sequence.length;
}
