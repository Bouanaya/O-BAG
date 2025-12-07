

export async function fetchProduct(id: string) {
  
  const res = await fetch(`http://localhost:3000/products/${id}`, { cache: "no-store" });

  if (!res.ok) return { data: null };

  const data = await res.json();
  return data; // { data: ... }
}




export async function fetchoneProduct() {
 
  const res = await fetch(`http://localhost:3000/products`, { cache: "no-store" });

  if (!res.ok) return { data: null };

  const data = await res.json();
  
  return data; // { data: ... }
}
