import "../css/ErrorPage.css";
import PageContent from "../lib/ui/components/ErrorPage/PageContent";
import {useApplyErrorPageImage} from "../lib/hooks/useApplyStyles"
export default function ErrorPage() {
  useApplyErrorPageImage();
  return <PageContent />;
}
