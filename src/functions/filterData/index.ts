export const filterData = (data: object[], text: string) => {
  const filteredData = data.filter((item: object) =>
    Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(text.toLowerCase())
    )
  );
  return filteredData;
};
