import { useMutation } from "@tanstack/react-query";
import { updateLabStatus } from "../services/api_db";

import toast from "react-hot-toast";

export const useUpdateLabStatus = (testId) => {
  const { isLoading, mutate: updateLabStats } = useMutation({
    mutationFn: (testData) => updateLabStatus(testId, testData),
    onSuccess: (user) => {
      console.log(user.user);

      toast(" lab patient status updated 🤨");
    },
    onError: (err) => {
      console.log(err.message);
      toast(" Patient cannot be updated");
    },
  });
  return { isLoading, updateLabStats };
};
