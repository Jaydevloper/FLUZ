import { Troles } from "consts";

const useAccess = (roles: Troles): boolean => {
  const peristRoot = JSON.parse(localStorage.getItem("persist") as string);
  return peristRoot?.role === roles;
};

export default useAccess;
