import { AxiosInstance } from "axios";
import { FormikHandlers, FormikHelpers, FormikState } from "formik";
import { ReactNode } from "react";
import { UseMutationResult } from "react-query";

interface IApi {
  post: AxiosInstance["post"];
  put: AxiosInstance["put"];
}

export interface FormContentProps {
  url: string;
  method: keyof IApi;
  children: (
    data: FormikState<any> &
      FormikHelpers<any> &
      FormikHandlers &
      UseMutationResult<any, any, any>
  ) => ReactNode;
  className?: string;
}
