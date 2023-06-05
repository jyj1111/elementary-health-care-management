import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function RegisterForm() {
  const [user, setUser] = useState({ id: "", name: "", pw: "", email: "" });
  const navigate = useNavigate();
  const onChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:3000/auth/register", {
      email: user.email,
      password: user.pw,
      username: user.name,
    });
    console.log(res);
    console.log(user);
    setUser({ id: "", name: "", pw: "", email: "" });
    navigate("/");
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
          name="name"
          value={user.name}
          placeholder="이름"
          onChange={onChange}
        />
        <input
          name="pw"
          value={user.pw}
          placeholder="비밀번호"
          onChange={onChange}
        />

        <input
          name="email"
          value={user.email}
          placeholder="이메일"
          onChange={onChange}
        />
        <button>회원가입</button>
      </form>
    </div>
  );
}

export default RegisterForm;
