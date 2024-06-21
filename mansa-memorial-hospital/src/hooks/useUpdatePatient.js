import { useMutation } from "@tanstack/react-query";
import { updatePatient as updatePatientApi } from "../services/api_db";
import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

export const useUpdatePatient = (testId) => {
  const navigate = useNavigate();

  const { isLoading, mutate: updatePatient } = useMutation({
    mutationFn: (testData) => updatePatientApi(testId, testData),
    onSuccess: (user) => {
      console.log(user.user);

      navigate("/dashboard");

      toast(" patient updated succesfully 🤨");
      window.location.reload();
    },
    onError: (err) => {
      console.log(err.message);
      toast(" Patient cannot be updated");
    },
  });
  return { isLoading, updatePatient };
};
