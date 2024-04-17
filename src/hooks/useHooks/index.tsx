import { useLocation, useNavigate, useParams } from "react-router-dom";
import qs from "qs";
const useHooks = () => {
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const query = qs.parse(location.search);

  return { params, navigate };
};

export default useHooks;
