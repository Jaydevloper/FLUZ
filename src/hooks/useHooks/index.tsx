import { useLocation, useNavigate, useParams } from "react-router-dom";
import qs from "qs";
import lodash from "lodash";
import { useQueryClient } from "react-query";
const useHooks = () => {
  const queryClieant = useQueryClient();
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const query = qs.parse(location.search, { ignoreQueryPrefix: true });

  return { params, navigate, queryClieant, query, location, qs, ...lodash };
};

export default useHooks;
