
export const GetData = async () => {

  const url = "https://api.covid19api.com/summary";
  const resp = await fetch(url)
  const data = await resp.json()

  return data;
}

