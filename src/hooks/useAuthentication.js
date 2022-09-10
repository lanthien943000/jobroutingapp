import { useContext } from "react";
import { AuthContext } from "../auth-context/AuthContext";

function useAuth() {
  return useContext(AuthContext);
}

export default useAuth;
