import { useMutation } from "@tanstack/react-query";
import { createHospitalTest } from "../services/api_db";
import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

export const useCreateTest = () => {
  const navigate = useNavigate();

  const { isLoading, mutate: createTest } = useMutation({
    mutationFn: (data) => createHospitalTest(data),
    onSuccess: (test) => {
      console.log(test);

      navigate("/lab-test", {
        replace: true,
      });
      window.location.reload();
      toast("Test created succesfully 🤨");
    },
    onError: (err) => {
      console.log(err.message);
      toast("Test cannot be created");
    },
  });
  return { isLoading, createTest };
};
