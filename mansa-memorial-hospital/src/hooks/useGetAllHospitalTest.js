import { useQuery } from "@tanstack/react-query";
import { getAllHospitalTest } from "../services/api_db";

export const useGetAllHospitalTest = () => {
  const { isLoading, data: hospitalTest } = useQuery({
    queryKey: ["hospital-test"],
    queryFn: getAllHospitalTest,
  });
  return { isLoading, hospitalTest };
};
