import { useNavigate } from "react-router-dom";
import { useState } from "react";

function LoginForm({ mutate }) {
  const [user, setUser] = useState({ email: "", pw: "" });
  const navigate = useNavigate();
  const onChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: user.email,
      password: user.pw,
    };
    mutate(data);
    console.log(user);
    setUser({ email: "", pw: "" });
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="email"
          value={user.email}
          placeholder="이메일"
          onChange={onChange}
        />
        <input
          name="pw"
          value={user.pw}
          placeholder="패스워드"
          onChange={onChange}
        />
        <button>로그인</button>
      </form>
      <button
        onClick={() => {
          navigate("/register");
        }}
      >
        회원가입
      </button>
    </div>
  );
}

export default LoginForm;
