const getJobs = async title => {
  const baseUrl = "https://emploitic.com/api/v4/jobs";
  const params = {
    filter: "(criteria.location.id='c1dfd96eea8cc2b62785275bca38ac261256e278' OR criteria.location.metadata.parentId='c1dfd96eea8cc2b62785275bca38ac261256e278')",
    q: title,
    "pagination[page]": 1,
    "pagination[pageSize]": 100,
    "sort[0]": "publishedAt:desc",
  };

  const queryString = new URLSearchParams(params).toString();
  const url = `${baseUrl}?${queryString}`;
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error("Fetch error: ", error);
  }
};
