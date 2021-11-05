export const capitalizeWords = text =>
  text
    ?.toLowerCase()
    .split(" ")
    .map(word => `${word[0].toUpperCase()}${word.substring(1)}`)
    .join(" ");