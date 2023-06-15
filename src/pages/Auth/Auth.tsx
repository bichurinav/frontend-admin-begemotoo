import * as React from "react";
import { useState } from "react";
import "./Auth.scss";

// TODO: Логинить юзера и отправлять на страницу <Main />

const Auth = () => {
  const [fieldPasssword, setFieldPassword] = useState("");
  const [invalidField, setInvalidField] = useState(false);
  const [isInputAnimate, setInputAnimate] = useState(false);

  const showErrorPassword = React.useCallback(async () => {
    setInputAnimate(true);
    return new Promise((res, _) => {
      setInvalidField(true);
      setTimeout(() => {
        setFieldPassword("");
      }, 400);
      res("");
    }).then(() => {
      setTimeout(() => {
        setInvalidField(false);
        setInputAnimate(false);
      }, 1000);
    });
  }, []);

  const authHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isInputAnimate) {
      return;
    }
    if (fieldPasssword.length < 4) {
      await showErrorPassword();
      return;
    }
  };

  const changeFieldPass = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFieldPassword(e.target.value);
    },
    []
  );

  return (
    <form onSubmit={authHandler} className="auth">
      <input
        className={
          invalidField ? "auth__field-password error" : "auth__field-password"
        }
        onChange={changeFieldPass}
        type="password"
        placeholder={invalidField ? "Неправильный пароль" : "Введите пароль"}
        value={fieldPasssword}
        autoFocus
      />
    </form>
  );
};

export default Auth;
