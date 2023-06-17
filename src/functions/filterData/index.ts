export const filterData = (data: unknown[], text: string) => {
  const filteredData = data.filter((item: unknown) =>
    Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(text.toLowerCase())
    )
  );
  return filteredData;
};
