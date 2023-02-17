/*
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)
HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
*Your choice how to handle values over 359999 (99:59:59)*
*/

function humanReadable(seconds: number) {
  let tmp = seconds;
  const hh = Math.floor(tmp / 3600);
  tmp -= 3600 * hh;
  const mm = Math.floor(tmp / 60);
  tmp -= 60 * mm;
  console.log(`${hh}:${mm}:${tmp}`);
}

humanReadable(359999);
