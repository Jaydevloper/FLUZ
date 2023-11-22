import {
  QueryFunctionContext,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";

import { api } from "../../services";

interface IQuerykeys {
  url: string;
}

interface IGetprops {
  url: string;
  key: string;
  queryOptions?: UseQueryOptions<any, any, any, any>;
}

async function GetData({
  queryKey,
}: QueryFunctionContext<[string, IQuerykeys]>) {
  const { url } = queryKey[1];
  const res = await api.get(url);
  return res.data;
}

const useGet = (props: IGetprops): UseQueryResult => {
  const { url = "", key, queryOptions } = props;

  const result = useQuery({
    queryKey: [`${key}`, { url }],
    queryFn: GetData,
    ...queryOptions,
  });

  return { ...result };
};

export default useGet;
