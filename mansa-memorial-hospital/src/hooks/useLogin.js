import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../services/api_db";
import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

export const useLogin = () => {
  const navigate = useNavigate();

  const { isLoading, mutate: login } = useMutation({
    mutationFn: (data) => loginApi(data),
    onSuccess: (user) => {
      console.log(user.user);
      localStorage.setItem("user", JSON.stringify(user.user));

      navigate("/dashboard", {
        replace: true,
      });

      toast("LoggedIn successfully 🤨");
    },
    onError: (err) => {
      console.log(err.message);
      toast("Inavlid email or password");
    },
  });
  return { isLoading, login };
};
