export const sortData = (
  data: unknown[],
  key: keyof object,
  order: 'asc' | 'desc'
) => {
  return data.sort((a: unknown, b: unknown) => {
    if (order === 'asc') {
      return a[key] > b[key] ? 1 : -1;
    }
    return a[key] < b[key] ? 1 : -1;
  });
};
