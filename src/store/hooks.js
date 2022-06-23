import { useContext } from "react";
import { Context } from "./context";

export const useStore = () => {
  return useContext(Context);
}

