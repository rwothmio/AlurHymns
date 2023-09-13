/*
This function returns the first n characters or a string, and removes new lines
*/

import getFirstLine from "./getFirstLine";

export default getFirstNChars = (lines, n) => {
  const firstLine = getFirstLine(lines);

  if (firstLine.length > n) return firstLine.slice(n + 1) + "...";
  else return firstLine;
};
