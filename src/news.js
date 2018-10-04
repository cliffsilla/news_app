const url =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=47e6bf458ab745a7b9881997f75d54cf";

export async function getNews() {
  let result = await fetch(url).then(response => response.json());
  return result.articles;
}