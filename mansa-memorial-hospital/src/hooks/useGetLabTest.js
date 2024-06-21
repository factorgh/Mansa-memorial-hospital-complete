import { useQuery } from "@tanstack/react-query";
import { getAllTest } from "../services/api_db";

export const useGetLabTest = () => {
  const { isLoading, data: labPatients } = useQuery({
    queryKey: ["tests"],
    queryFn: getAllTest,
  });
  return { isLoading, labPatients };
};
