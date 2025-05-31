import { useState } from "react";
import Form from "../Form/Form";

const App = () => {
  const [text, setText] = useState("");
  const textChange = (e) => {
    setText(e.target.value);
  };
  const alertMessage = () => {
    return !text.trim() ? "voer iets in" : "";
  };

  const wissenBTN = (e) => {
    e.reset();
  };
  return (
    <div>
      <Form
        textChange={textChange}
        text={text}
        wissenBTN={wissenBTN}
        alertMessage={alertMessage}
      />
    </div>
  );
};

export default App;
