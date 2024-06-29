import { useMutation } from "@tanstack/react-query";
import { updateHospitalTest } from "../services/api_db";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const useUpdateTest = (testId) => {
  const navigate = useNavigate();

  const { isLoading, mutate: updateTest } = useMutation({
    mutationFn: (testData) => updateHospitalTest(testId, testData),
    onSuccess: (user) => {
      console.log(user.user);

      navigate("/lab-tests");

      toast("test updated succesfully 🤨");
      window.location.reload();
    },
    onError: (err) => {
      console.log(err.message);
      toast("Test cannot be updated");
    },
  });
  return { isLoading, updateTest };
};
