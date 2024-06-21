import { useMutation } from "@tanstack/react-query";
import { delPatient } from "../services/api_db";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const useDelPatient = () => {
  const navigate = useNavigate();
  const { mutate: delPatientApi } = useMutation({
    mutationFn: (data) => delPatient(data),
    mutationKey: ["delete patient"],
    onSuccess: () => {
      navigate("/patient");
      toast("Patient deleted to succesfully 😜");
    },
  });
  return { delPatientApi };
};
