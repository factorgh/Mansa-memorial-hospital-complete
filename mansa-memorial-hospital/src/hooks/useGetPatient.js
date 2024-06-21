import { useQuery } from "@tanstack/react-query";
import { getAllPatient } from "../services/api_db";

export const useGetPatients = () => {
  const { isLoading, data: patientsAll } = useQuery({
    queryKey: ["patients"],
    queryFn: getAllPatient,
  });
  return { isLoading, patientsAll };
};
