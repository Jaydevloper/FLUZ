import { AxiosRequestConfig, AxiosInstance } from "axios";
import { useMutation } from "react-query";
import api from "services/api";

interface IApi {
  post: AxiosInstance["post"];
  put: AxiosInstance["put"];
}

const typedApi: IApi = api;

interface IProps {
  url: string;
  data: any;
  method?: keyof IApi;
  config?: AxiosRequestConfig;
}

async function postData(props: IProps) {
  const { method = "post", url, data, config } = props;
  return await typedApi[method](url, data, config);
}

const usePost = ({ ...params }) => {
  return useMutation(postData, params);
};

export default usePost;
