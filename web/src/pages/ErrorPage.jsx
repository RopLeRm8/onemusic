import { useEffect } from "react";
import "../css/ErrorPage.css";
import PageContent from "../lib/ui/components/ErrorPage/PageContent";
export default function ErrorPage() {
  useEffect(() => {
    document.body.classList.add("backgroundErrorPage");
    return () => {
      document.body.classList.remove("backgroundErrorPage");
    };
  }, []);
  return <PageContent />;
}
