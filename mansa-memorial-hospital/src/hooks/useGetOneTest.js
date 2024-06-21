import { useQuery } from "@tanstack/react-query";
import { getOneTest } from "../services/api_db";

export const useGetOneTest = (id) => {
  const { isLoading, data: labPatient } = useQuery({
    queryKey: ["tests"],
    queryFn: () => getOneTest(id),
  });
  return { isLoading, labPatient };
};
