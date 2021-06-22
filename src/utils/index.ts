export const getQuery = (object: { [key: string]: boolean }) =>
  Object.keys(object)
    .filter((key) => !!object[key])
    .toString();

export const isEmpty = (val: any) => val == null || !(Object.keys(val) || val).length;

export const isAllDisable = (object: { [key: string]: boolean }) =>
  Object.entries(object).some(([_, value]) => value);
