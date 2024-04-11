import axios from "axios";
import { useQuery, UseQueryOptions, UseQueryResult } from "react-query";

interface IProps {
  url: string;
  name: string;
  params?: null;
  onError?: () => void;
  onSuccess?: () => void;
  queryOptions?: UseQueryOptions<any, any, any, any>;
}

async function GetData({ url = "", params = null }) {
  const res = await axios.get(url);
  return res.data;
}

function useGet(props: IProps): UseQueryResult {
  const { name, url, params, onError, onSuccess, queryOptions } = props;
  const data = useQuery({
    queryKey: [`${name}`, { url, params }],
    queryFn: () => GetData({ url, params }),
    onError: onError,
    onSuccess: onSuccess,
    ...queryOptions,
  });
  return { ...data };
}

export default useGet;