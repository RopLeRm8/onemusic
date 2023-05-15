import { useEffect } from "react";
import "../../css/pageBack.css";

export default function useSetPageBlack() {
  useEffect(() => {
    document.body.classList.add("pageBack");
    return () => {
      document.body.classList.add("pageBack");
    };
  }, []);
}
