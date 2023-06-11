import { useState } from "react";
function RegisterForm({ mutate }) {
  const [user, setUser] = useState({ id: "", name: "", pw: "", email: "" });

  const onChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: user.email,
      password: user.pw,
      username: user.name,
    };
    mutate(data);
    console.log(data);
    console.log(user);
    setUser({ id: "", name: "", pw: "", email: "" });
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
