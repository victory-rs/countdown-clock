import { letters, widths } from "./letters";

export const createPattern = (width: number, height: number): boolean[][] => {
  const pattern: boolean[][] = [];
  for (let x = 0; x < width; x++) {
    pattern[x] = [];
    for (let y = 0; y < height; y++) {
      // pattern[x].push(Math.random() < 0.5);
      pattern[x].push(false);
    }
  }
  return pattern;
};

export const fillPattern = (
  pattern: boolean[][],
  startX: number,
  startY: number,
  content: string
): void => {
  const rows = content.split("\n");
  for (let y = startY; y < startY + rows.length; y++) {
    for (let x = startX; x < startX + rows[y - startY].length; x++) {
      if (x >= 0 && x < pattern.length && y >= 0 && y < pattern[x].length) {
        pattern[x][y] = rows[y - startY][x - startX] === "*";
      }
    }
  }
};

export const fillText = (
  pattern: boolean[][],
  startX: number,
  startY: number,
  text: string
): void => {
  let x = startX;
  let y = startY;
  for (const char of text) {
    const letter = letters.hasOwnProperty(char.toLowerCase())
      ? (letters as any)[char.toLowerCase()]
      : [];
    fillPattern(pattern, x, y, letter);
    x += (widths as any)[char.toLowerCase()];
  }
};

export const getTextLength = (text: string): number => {
  let length = 0;
  for (const char of text) {
    length += (widths as any)[char.toLowerCase()];
  }
  return length;
};
