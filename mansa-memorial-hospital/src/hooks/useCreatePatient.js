import { useMutation } from "@tanstack/react-query";
import { createPatient } from "../services/api_db";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const useCreatePatient = () => {
  const navigate = useNavigate();
  const { mutate: createPatientApi } = useMutation({
    mutationFn: (data) => createPatient(data),
    mutationKey: ["create patient"],
    onSuccess: () => {
      navigate("/patients");
      toast("Patient added succesfully 😜");
    },
  });
  return { createPatientApi };
};
