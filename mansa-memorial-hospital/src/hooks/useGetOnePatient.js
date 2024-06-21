import { useQuery } from "@tanstack/react-query";
import { getOnePatient } from "../services/api_db";

export const useGetOnePatient = (id) => {
  const {
    isLoading,
    data: patient,
    isSuccess,
  } = useQuery({
    queryKey: ["user"],
    queryFn: () => getOnePatient(id),
  });
  return { isLoading, patient, isSuccess };
};
