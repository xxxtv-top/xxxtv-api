const response = await fetch(
  "https://xxxtv.top/api/videos/latest?limit=20&page=1"
);

const result = await response.json();

console.log(result.data);