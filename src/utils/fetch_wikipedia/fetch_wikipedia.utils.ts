export const fetchWikipediaSummary = async (
  country: string,
): Promise<string> => {
  try {
    const response = await fetch(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(country)}`,
    );
    if (!response.ok) {
      throw new Error("Failed to fetch Wikipedia summary.");
    }
    const data = await response.json();
    return data.extract;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch Wikipedia summary.");
  }
};
