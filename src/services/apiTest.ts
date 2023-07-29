export const fetchWrapperTest = async (
  input: RequestInfo | URL,
  init?: RequestInit | undefined
) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/${input}`,
    init
  );
  return response;
};
