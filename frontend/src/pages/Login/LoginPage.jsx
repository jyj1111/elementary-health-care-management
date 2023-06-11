import LoginForm from "../../components/Login/LoginForm";
import { useMutation } from "react-query";
import { login } from "../../api/service/auth";
import { useNavigate } from "react-router-dom";
function LoginPage() {
  const navigate = useNavigate();
  const { mutate } = useMutation(login, {
    onSuccess: (res) => {
      console.log(res);
      navigate("/main");
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return (
    <div>
      <LoginForm mutate={mutate} />
    </div>
  );
}

export default LoginPage;
