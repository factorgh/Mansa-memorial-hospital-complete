import { useQuery } from "@tanstack/react-query";
import { getUser } from "../services/api_db";

export const useGetOneUser = (id) => {
  const {
    isLoading,
    data: user,
    isSuccess,
  } = useQuery({
    queryKey: ["user"],
    queryFn: () => getUser(id),
  });
  return { isLoading, user, isSuccess };
};
