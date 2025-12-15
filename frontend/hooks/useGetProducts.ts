import { fetchProduct } from "@/lib/fetchProduct";
import { useQuery } from "@tanstack/react-query";

const useGetProducts = () => {
  
const query = useQuery(
  {
    queryKey: ["products"],
    queryFn: fetchProduct("1"),
  }
);

 

  return query;
};

export default useGetProducts;


