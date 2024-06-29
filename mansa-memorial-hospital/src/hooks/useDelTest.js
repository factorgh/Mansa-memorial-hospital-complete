import { useMutation } from "@tanstack/react-query";
import { delHospitalTest } from "../services/api_db";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const useDelHospitalTest = () => {
  const navigate = useNavigate();
  const { mutate: delHospitalTestApi } = useMutation({
    mutationFn: (data) => delHospitalTest(data),
    mutationKey: ["delete test"],
    onSuccess: () => {
      navigate("/lab-tests");
      toast("Test deleted to succesfully 😜");
    },
  });
  return { delHospitalTestApi };
};
