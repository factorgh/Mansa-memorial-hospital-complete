import { useMutation } from "@tanstack/react-query";
import { conductTest } from "../services/api_db";
import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

export const useCreateLab = () => {
  const navigate = useNavigate();

  const { isLoading, mutate: conductLabTest } = useMutation({
    mutationFn: (data) => conductTest(data),
    onSuccess: (user) => {
      console.log(user.user);

      navigate("/dashboard", {
        replace: true,
      });
      window.location.reload();
      toast("User created succesfully 🤨");
    },
    onError: (err) => {
      console.log(err.message);
      toast("User cannot be created");
    },
  });
  return { isLoading, conductLabTest };
};
