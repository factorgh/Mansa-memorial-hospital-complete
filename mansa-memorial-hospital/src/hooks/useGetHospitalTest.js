import { useQuery } from "@tanstack/react-query";
import { getHospitalTest } from "../services/api_db";

export const useGetOneTest = (id) => {
  const { isLoading, data: hospitalTest } = useQuery({
    queryKey: ["hospital-tests"],
    queryFn: () => getHospitalTest(id),
  });
  return { isLoading, hospitalTest };
};
