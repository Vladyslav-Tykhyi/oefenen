import { useId } from "react";

const Form = ({ textChange, text, wissenBTN, alertMessage }) => {
  const randomID = useId();

  return (
    <div>
      <form>
        <label htmlFor={randomID}>{text}</label>
        <input
          id={randomID}
          type="text"
          name="input"
          placeholder="Voer uw code in!"
          onChange={textChange}
          value={text}
        />
        <button onClick={wissenBTN} type="submit" disabled={!text.trim()}>
          Wissen
        </button>
      </form>
      <p>{alertMessage()}</p>
    </div>
  );
};

export default Form;
