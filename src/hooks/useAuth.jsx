import { useContext } from "react";
import { AuthContext } from "../provider/AuthDataProvider";

export const useAuth = () => {
   return useContext(AuthContext);
};
