import Axios from "@/lib/axios";
import { ApiResponse } from "@/types/api.type";
import { LoginPayload } from "@/types/auth.type";
import axios from "axios";

export const loginUserCall = async (data: LoginPayload): Promise<ApiResponse> => {
  try {
    const response = await Axios.post<ApiResponse>("/auth/signin", data);

    return response.data;
  } catch (error: unknown) {
    // Axios-specific error handling
    if (axios.isAxiosError(error)) {
      return {
        success: false,
        message: error.response?.data?.message || error.message || "Something went wrong",
      };
    }

    return {
      success: false,
      message: "Unexpected error occurred",
    };
  }
};
