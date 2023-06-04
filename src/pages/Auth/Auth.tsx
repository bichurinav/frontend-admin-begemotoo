import { useState } from "react";
import "./auth.scss";

// TODO: Сделать валидацию пароля (добавить анимацию тряски)
// TODO: Логинить юзера и отправлять на страницу <Main />

const Auth = () => {
  const [fieldPasssword, setFieldPassword] = useState("");

  const authHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(fieldPasssword);
  };

  return (
    <form onSubmit={(e) => authHandler(e)} className="auth">
      <input
        className="auth__field-password"
        onChange={(e) => setFieldPassword(e.target.value)}
        type="password"
        placeholder="Введите пароль"
        value={fieldPasssword}
        autoFocus
      />
    </form>
  );
};

export default Auth;
