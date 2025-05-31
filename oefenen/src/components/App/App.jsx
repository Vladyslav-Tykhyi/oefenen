import { useState } from "react";
import Form from "../Form/Form";

const App = () => {
  const [value, setValue] = useState({ login: "", mail: "" });

  const textWeergave = (e) => {
    setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    alert(`Bedankt voor je inzending, ${value.login}`);

    setValue({ login: "", mail: "" });
  };
  console.log(value.login);

  return (
    <div>
      <Form value={value} textWeergave={textWeergave} onSubmit={onSubmit} />
    </div>
  );
};

export default App;
