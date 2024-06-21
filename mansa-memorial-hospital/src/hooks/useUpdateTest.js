import { useMutation } from "@tanstack/react-query";
import { updateLabTest as updateLabTestApi } from "../services/api_db";
import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

export const useUpdateLab = (testId) => {
  const navigate = useNavigate();

  const { isLoading, mutate: updateLabTest } = useMutation({
    mutationFn: (testData) => updateLabTestApi(testId, testData),
    onSuccess: (user) => {
      console.log(user.user);

      navigate("/dashboard");

      toast("lab patient updated succesfully 🤨");
      window.location.reload();
    },
    onError: (err) => {
      console.log(err.message);
      toast("Lab Patient cannot be updated");
    },
  });
  return { isLoading, updateLabTest };
};
