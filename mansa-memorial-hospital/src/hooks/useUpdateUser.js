import { useMutation } from "@tanstack/react-query";
import { updateUser as updateUserApi } from "../services/api_db";
import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

export const useUpdateUser = (testId) => {
  const navigate = useNavigate();

  const { isLoading, mutate: updateUser } = useMutation({
    mutationFn: (testData) => updateUserApi(testId, testData),
    onSuccess: (user) => {
      console.log(user.user);

      navigate("/employees");

      toast(" user updated succesfully 🤨");
      window.location.reload();
    },
    onError: (err) => {
      console.log(err.message);
      toast(" user cannot be updated");
    },
  });
  return { isLoading, updateUser };
};
