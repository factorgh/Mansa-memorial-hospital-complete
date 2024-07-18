import { useQuery } from "@tanstack/react-query";
import { getPatientByFileNumber } from "../services/api_db";

export const useGetPatientByFile = (file) => {
    const {
        isLoading,
        data: patient,
        isError,
    } = useQuery({
        queryKey: ["patient"],
        queryFn: () => getPatientByFileNumber(file),
    });
    return { isLoading, patient, isError };
};
