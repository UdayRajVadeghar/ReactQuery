const FetchFact = async () => {
  const response = await fetch("https://catfact.ninja/fact");

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

export default FetchFact;
