import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "../services/api_db";

export const useGetUsers = () => {
  const {
    isLoading,
    data: users,
    isSuccess,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getAllUsers,
  });
  return { isLoading, users, isSuccess };
};
