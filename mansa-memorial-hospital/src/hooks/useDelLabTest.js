import { useMutation } from "@tanstack/react-query";
import { delLabTest } from "../services/api_db";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const useDelLabTest = () => {
  const navigate = useNavigate();
  const { mutate: delLabTestApi } = useMutation({
    mutationFn: (data) => delLabTest(data),
    mutationKey: ["delete patient"],
    onSuccess: () => {
      navigate("/employee");
      toast("Patient attended to succesfully 😜");
    },
  });
  return { delLabTestApi };
};
