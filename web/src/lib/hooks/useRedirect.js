import { useNavigate } from "react-router-dom";

export default function useRedirect() {
  const navigate = useNavigate();
  const redirect = (page) => navigate(page);
  return redirect;
}
