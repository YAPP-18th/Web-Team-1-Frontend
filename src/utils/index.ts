export const getQuery = (object: { [key: string]: boolean }) =>
  Object.keys(object)
    .filter((key) => !!object[key])
    .toString();
