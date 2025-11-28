
export async function fetchProduct(id: number) {
  console.log("Fetching product with id:", id);
  const res = await fetch(`http://localhost:3000/products/${id}`, { cache: "no-store" });

  if (!res.ok) return { data: null };

  const data = await res.json();
  console.log(data);
  return data; // { data: ... }
}


export async function fetchoneProduct() {
 
  const res = await fetch(`http://localhost:3000/products`, { cache: "no-store" });

  if (!res.ok) return { data: null };

  const data = await res.json();
  console.log(data);
  return data; // { data: ... }
}
