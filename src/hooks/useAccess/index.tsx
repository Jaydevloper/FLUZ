import { IRoles } from "consts";

const useAccess = (roles: IRoles) => {
  const peristRoot = JSON.parse(localStorage.getItem("persist") as string);
  return peristRoot?.role === roles;
};

export default useAccess;
