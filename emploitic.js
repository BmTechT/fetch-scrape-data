const getJobs = async title => {
  const baseUrl = "https://emploitic.com/api/v4/jobs";
  const params = {
    filter: "(criteria.location.id=%27c1dfd96eea8cc2b62785275bca38ac261256e278%27 OR criteria.location.metadata.parentId=%27c1dfd96eea8cc2b62785275bca38ac261256e278%27)",
    q: title,
    "pagination[page]": 2,
    "pagination[pageSize]": 20,
    "sort[0]": "publishedAt:desc",
  };

  const queryString = new URLSearchParams(params).toString();
  const url = `${baseUrl}?${queryString}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error: ", error);
  }
};
