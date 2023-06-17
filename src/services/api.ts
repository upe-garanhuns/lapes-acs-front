export const fetchWrapper = async <T = unknown>(
  input: RequestInfo | URL,
  init?: RequestInit | undefined
) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/${input}`,
    init
  );
  const data = await response.json();
  if (response.ok) {
    return data as T;
  } else {
    return Promise.reject(data);
  }
};
