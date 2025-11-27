
export async function fetchProduct(id: number) {
  console.log("Fetching product with id:", id);
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { cache: "no-store" });

  if (!res.ok) return { data: null };

  const data = await res.json();
  console.log(data);
  return data; // { data: ... }
}
