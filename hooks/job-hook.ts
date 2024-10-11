import { setLoading } from "@/redux/slices/authSlice";
import { setApplyLoading, setSingleJob } from "@/redux/slices/jobSlice";
import {
  APPLICATIONS_API_END_POINT,
  JOB_API_END_POINT,
} from "@/utilities/constants/constants";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect, useCallback } from "react";

import { toast } from "sonner";
import { addAppliedJob } from "@/redux/slices/appliedJobSlice";

export const useAddJob = () => {
  const { loading } = useSelector((store: any) => store.auth);
  const dispatch = useDispatch();
  const router = useRouter();

  const onSubmit = async (jobPost: any) => {
    dispatch(setLoading(true));

    try {
      const response = await axios.post(`${JOB_API_END_POINT}/post`, jobPost, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

      const { success, message, job } = response.data;

      if (success) {
        router.push("/hire-talent/dashboard/my-jobs");
        toast.success(message);
      } else {
        toast.error(message);
      }
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "An unknown error occurred.";
      toast.error(errorMessage);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return {
    onSubmit,
    loading,
  };
};

export const useGetCompanyJobs = () => {
  const dispatch = useDispatch();

  const [jobs, setJobs] = useState([]);
  const { loading } = useSelector((store: any) => store.auth);
  useEffect(() => {
    const fetchJobs = async () => {
      dispatch(setLoading(true));
      try {
        const response = await axios.get(
          `${JOB_API_END_POINT}/getCompanyJobs`,
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        setJobs(response.data.jobs);
      } catch (error: any) {
        const errorMessage =
          error.response?.data?.message ||
          error.message ||
          "Failed to fetch jobs";
        toast.error(errorMessage);
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchJobs();
  }, []);

  return { jobs, loading };
};

export const useEditJob = () => {
  const { loading } = useSelector((store: any) => store.auth);
  const dispatch = useDispatch();
  const router = useRouter();

  const onSubmit = async (updatedJobPost: any, id: any) => {
    dispatch(setLoading(true));

    // if (Object.keys(updatedJobPost).length > 0) {
    try {
      const response = await axios.put(
        `${JOB_API_END_POINT}/edit/${id}`,
        updatedJobPost,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      const { success, message, job } = response.data;

      if (success) {
        toast.success(message);
        router.push("/hire-talent/dashboard/my-jobs");
      } else {
        toast.error(message);
      }
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "An unknown error occurred.";
      toast.error(errorMessage);
    } finally {
      dispatch(setLoading(false));
    }
    // } else {
    //   toast.info("No changes to update");
    // }
  };

  return {
    onSubmit,
    loading,
  };
};

export const applyJobHandler = () => {
  const { loading } = useSelector((store: any) => store.job);
  const { user } = useSelector((store: any) => store.auth);
  const dispatch = useDispatch();

  // Job application submission handler
  const onSubmit = async (jobId: string) => {
    dispatch(setApplyLoading(true));
    try {
      const res = await axios.get(
        `${APPLICATIONS_API_END_POINT}/apply/${jobId}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (res.data.success) {
        dispatch(addAppliedJob(jobId));
        toast.success(res.data.message);
      }
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "An unknown error occurred.";
      toast.error(errorMessage);
    } finally {
      dispatch(setApplyLoading(false));
    }
  };

  return {
    onSubmit,
    loading,
  };
};

export const useGetAppliedJobs = () => {
  const dispatch = useDispatch();

  const [appliedJobs, setAppliedJobs] = useState([]);
  const { loading } = useSelector((store: any) => store.auth);
  useEffect(() => {
    const fetchAppliedJobs = async () => {
      dispatch(setLoading(true));
      try {
        const response = await axios.get(
          `${APPLICATIONS_API_END_POINT}/get-all`,
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        setAppliedJobs(response.data.applications);
      } catch (error: any) {
        const errorMessage =
          error.response?.data?.message ||
          error.message ||
          "Failed to fetch Applied Jobs";
        toast.error(errorMessage);
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchAppliedJobs();
  }, []);

  return { appliedJobs, loading };
};
