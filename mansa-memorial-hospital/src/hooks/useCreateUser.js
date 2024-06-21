import { useMutation } from "@tanstack/react-query";
import { createUser as createUserApi } from "../services/api_db";
import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

export const useCreateUser = () => {
  const navigate = useNavigate();

  const { isLoading, mutate: createUser } = useMutation({
    mutationFn: (data) => createUserApi(data),
    onSuccess: (user) => {
      console.log(user.user);

      navigate("/employees", {
        replace: true,
      });

      toast("User created succesfully 🤨");
    },
    onError: (err) => {
      console.log(err);
      toast("User cannot be created");
    },
  });
  return { isLoading, createUser };
};
