import s from "./ContactForm.module.css";

const ContactForm = ({ sendData, getData, user }) => {
  return (
    <div>
      <form className={s.form} onSubmit={sendData}>
        <label>
          <span>Name</span>
          <input
            type="text"
            className={s.input}
            placeholder="Name"
            name="name"
            value={user.value}
            onChange={getData}
            required
          />
        </label>
        <label>
          <span>Number</span>
          <input
            type="tel"
            className={s.input}
            placeholder="Telefoonnummer"
            name="number"
            value={user.value}
            onChange={getData}
            required
          />
        </label>
        <button className={s.btn} type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
