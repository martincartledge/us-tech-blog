const slugifyFileExtension = (str) => str.replace(/\.md$/, "");

const slugifySpaces = (str) => str.replace(/ /g, "-");

export const slugify = (str) =>
  encodeURIComponent(slugifySpaces(slugifyFileExtension(str.toLowerCase())));

export const capitalize = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
