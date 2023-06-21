export const sortData = (
  data: object[],
  key: keyof object,
  order: 'asc' | 'desc'
) => {
  return data.sort((a: object, b: object) => {
    if (order === 'asc') {
      return a[key] > b[key] ? 1 : -1;
    }
    return a[key] < b[key] ? 1 : -1;
  });
};
