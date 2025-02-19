import Button from "../styles/button.ts";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <>
      <div>Error</div>
      <Button
        variant={"primary"}
        size="large"
        onClick={() => navigate("/home")}
      >
        홈으로
      </Button>
    </>
  );
}
