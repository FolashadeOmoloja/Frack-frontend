import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import axios, { AxiosError } from "axios";
import { setUser, setLoading } from "../redux/slices/authSlice";
import { COMPANY_API_END_POINT } from "@/utilities/constants/constants";

const useLoginCompany = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { loading } = useSelector((store: any) => store.auth);

  const onSubmit = async (companyData: any) => {
    try {
      dispatch(setLoading(true));

      const res = await axios.post(
        `${COMPANY_API_END_POINT}/login`,
        companyData,
        {
          headers: {
            "Content-Type": "application/json",
            withCredentials: true,
          },
        }
      );

      if (res.data.success) {
        // Store token and user data in sessionStorage (or localStorage)
        sessionStorage.setItem("token", res.data.token);
        sessionStorage.setItem("company", JSON.stringify(res.data.company));

        // Set the user data in Redux state
        dispatch(setUser(res.data.company));

        // Navigate to dashboard
        router.push("/hire-talent/dashboard");
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response && error.response.data) {
          toast.error(error.response.data.message);
        }
      } else if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("An unknown error occurred.");
      }
    } finally {
      dispatch(setLoading(false));
    }
  };

  return {
    onSubmit,
    loading,
  };
};

export default useLoginCompany;
