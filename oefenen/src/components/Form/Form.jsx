import { useId } from "react";
import s from "./Form.module.css";

const Form = ({ value, textWeergave, onSubmit }) => {
  const loginID = useId();
  const mailID = useId();
  return (
    <div>
      <form className={s.form}>
        <label htmlFor={loginID}>
          Gebruikersnaam
          <input
            type="text"
            id={loginID}
            name="login"
            value={value.login}
            onChange={textWeergave}
          />
        </label>
        <label htmlFor={mailID}>
          GebruikersMail
          <input
            type="text"
            id={mailID}
            name="mail"
            value={value.mail}
            onChange={textWeergave}
          />
        </label>
        <button
          className={s.btn}
          type="submit"
          onClick={onSubmit}
          disabled={!value.login || !value.mail}
        >
          Opsturen
        </button>
      </form>
      <p>{value.login}</p>
      <p>{value.mail}</p>
    </div>
  );
};

export default Form;
