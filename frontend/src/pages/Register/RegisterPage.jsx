import RegisterForm from "../../components/Register/RegisterForm";
import { useMutation } from "react-query";
import { register } from "../../api/service/auth";
import { useNavigate } from "react-router-dom";
function RegisterPage() {
  const navigate = useNavigate();
  const { mutate } = useMutation(register, {
    onSuccess: (res) => {
      console.log(res);
      navigate("/");
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return (
    <div>
      <RegisterForm mutate={mutate} />
    </div>
  );
}

export default RegisterPage;
