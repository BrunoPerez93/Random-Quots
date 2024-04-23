export const getQuots = async () => {
  const url = `https://api.quotable.io/random`;
  const resp = await fetch(url);
  const quotsData = await resp.json();

  return quotsData;
}