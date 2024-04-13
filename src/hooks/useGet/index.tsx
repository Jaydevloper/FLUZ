import { useQuery, UseQueryOptions, UseQueryResult } from "react-query";
import api from "services/api";

interface IProps {
  url: string;
  name: string;
  onError?: () => void;
  onSuccess?: () => void;
  queryOptions?: UseQueryOptions<any, any, any, any>;
}

async function GetData({ url = "" }) {
  const res = await api.get(url);
  return res.data;
}

function useGet(props: IProps): UseQueryResult {
  const { name, url, onError, onSuccess, queryOptions } = props;
  const data = useQuery({
    queryKey: [`${name}`, { url }],
    queryFn: () => GetData({ url }),
    onError: onError,
    onSuccess: onSuccess,
    ...queryOptions,
  });
  return { ...data };
}

export default useGet;
