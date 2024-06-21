import { useQuery } from "@tanstack/react-query";
import { logout as logoutApi } from "../services/api_db";

export const useLogout = () => {
  const { isSuccess } = useQuery({
    queryKey: ["logout"],
    queryFn: logoutApi,
    onSuccess: () => {},
  });
  return { isSuccess };
};
