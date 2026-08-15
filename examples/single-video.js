const response = await fetch(
  "https://xxxtv.top/api/videos/VmALfibyZX"
);

const result = await response.json();

console.log(result.data);