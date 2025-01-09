import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import useAuth from "./useAuth";

const useCart = () => {
  const axiosSecure = useAxios();
  const { user } = useAuth();
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/cart?email=${user.email}`);
      return data;
    },
  });
  return { cart, refetch };
};

export default useCart;
