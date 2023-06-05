import { useNavigate } from "react-router-dom";
import { useState } from "react";
function LoginForm() {
  const [user, setUser] = useState({ id: "", pw: "" });
  const navigate = useNavigate();
  const onChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    setUser({ id: "", pw: "" });
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="id"
          value={user.id}
          placeholder="아이디"
          onChange={onChange}
        />
        <input
          name="pw"
          value={user.pw}
          placeholder="패스워드"
          onChange={onChange}
        />
        <button>로그인</button>
        <button onClick={() => navigate("/register")}>회원가입</button>
      </form>
    </div>
  );
}

export default LoginForm;
